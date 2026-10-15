# HTTPS & Certificates

By default the REST API is served over plain HTTP on port 80. Activating HTTPS moves API traffic to port 443 and encrypts it with TLS, protecting configuration commands and API data from eavesdropping and man-in-the-middle attacks. Use it when your network-security requirements call for encrypted REST communication and server verification.

There is no separate enable/disable toggle: the device turns HTTPS on as soon as a valid certificate bundle is installed. Removing the bundle turns HTTPS off only after the next reboot.

## The Four Endpoints

<p class="table-caption" markdown>**The Four Endpoints:** endpoint, method, auth, and purpose.</p>

| Endpoint                       | Method | Auth    | Purpose                                              |
| ------------------------------ | ------ | ------- | ---------------------------------------------------- |
| `/api/httpsStatus`             | GET    | none    | Read HTTPS enabled state and error code              |
| `/api/certificateBundleInfo`   | GET    | none    | Inspect subject, issuer, validity dates, fingerprint |
| `/api/setCertificateBundle`    | POST   | Service | Upload the PEM certificate bundle + private key      |
| `/api/removeCertificateBundle` | POST   | Service | Remove the bundle (HTTPS off after the next reboot)  |

On LRS4000 firmware 1.10.0, the REST API provides only `httpsStatus` and
`certificateBundleInfo`. `setCertificateBundle` and `removeCertificateBundle`
are not available.

## Certificate Requirements

Uploads that don't meet these are rejected with `success: false`.

<p class="table-caption" markdown>**Certificate Requirements:** property and requirement.</p>

| Property                   | Requirement                                                         |
| -------------------------- | ------------------------------------------------------------------- |
| Port                       | 443 (fixed)                                                         |
| Format                     | X.509 PEM (`.pem`, `.crt`, `.cer`)                                  |
| Minimum key size           | RSA ≥ 3072 bits, ECDSA ≥ 250 bits, or Curve25519 / Curve448         |
| Maximum chain length       | root CA → intermediate → leaf (3 levels); 2-level chain recommended |
| `contentCertificateBundle` | 10 000 characters max                                               |
| `contentPrivateKey`        | 4 000 characters max                                                |
| Mutual TLS                 | Not supported (server-side certificate only)                        |

Three pieces of material are involved:

- Certificate bundle (`contentCertificateBundle`): uploaded to the device. It contains the leaf (server) certificate first, then any intermediates; the root CA may optionally be appended.
- Private key (`contentPrivateKey`): uploaded with the bundle. It must match the public key of the leaf certificate.
- CA certificate: stays on the client to verify the device during the TLS handshake. For a self-signed root CA, this is the root `ca.pem`.

## Create a Self-Signed Chain (OpenSSL)

A two-level hierarchy (self-signed root CA → leaf) is the recommended minimum. Replace `192.168.0.1` with your device IP.

```bash
# Root CA key + certificate
openssl genrsa -out ca.key 4096
openssl req -new -x509 -key ca.key -out ca.pem -days 365 \
  -subj "/CN=My Sensor Root CA/O=My Organisation/C=DE" \
  -addext "basicConstraints=critical,CA:TRUE" \
  -addext "keyUsage=critical,keyCertSign,cRLSign"
```

```bash
# Server key + CSR
openssl genrsa -out server.key 4096
openssl req -new -key server.key -out server.csr \
  -subj "/CN=My Sensor/O=My Organisation/C=DE"
```

```bash
# Sign the leaf as a TLS server certificate for the device IP
cat > server.ext <<'EOF'
subjectAltName=IP:192.168.0.1
basicConstraints=critical,CA:FALSE
keyUsage=critical,digitalSignature,keyEncipherment
extendedKeyUsage=serverAuth
authorityKeyIdentifier=keyid,issuer
subjectKeyIdentifier=hash
EOF
openssl x509 -req -in server.csr -CA ca.pem -CAkey ca.key \
  -CAcreateserial -out leaf.pem -days 365 -extfile server.ext
```

The extensions are required by strict TLS clients. For example, Python 3.13 and later reject a leaf without `authorityKeyIdentifier` and a CA without `keyUsage`. In Windows PowerShell, write `server.ext` as ASCII, for example with `Set-Content server.ext -Encoding ascii`; OpenSSL cannot read the UTF-16 files that `>` creates in Windows PowerShell 5.1.

```bash
# Build the bundle (leaf + root CA)
cat leaf.pem ca.pem > server.pem                       # Linux / macOS
# Get-Content leaf.pem, ca.pem | Set-Content server.pem # Windows PowerShell
```

You end up with three files:

<p class="table-caption" markdown>**Create a Self-Signed Chain (OpenSSL):** file, contents, and used by.</p>

| File         | Contents                    | Used by                                    |
| ------------ | --------------------------- | ------------------------------------------ |
| `ca.pem`     | Root CA certificate         | Clients (verify the server)                |
| `server.pem` | Leaf + root CA (PEM bundle) | Device upload: `contentCertificateBundle`  |
| `server.key` | Leaf private key            | Device upload: `contentPrivateKey`         |

TLS clients match the certificate against the address they connect to. Without `subjectAltName=IP:<device-ip>`, verification fails. Add every address you'll use to reach the device.

## Upload the Bundle

`POST /api/setCertificateBundle` requires Service-level [challenge-response](rest-interface.md#challenge-response-authentication). Both PEM blocks go in the `data` object as plain-text strings:

```http
POST /api/setCertificateBundle
Content-Type: application/json
```

```json
{
  "header": { "user": "Service", "realm": "<from challenge>",
              "nonce": "<from challenge>", "opaque": "<from challenge>",
              "response": "<computed SHA-256 response>" },
  "data": {
    "contentCertificateBundle": "<PEM bundle - leaf + optional chain>",
    "contentPrivateKey": "<PEM private key>"
  }
}
```

A success looks like:

```json
{ "header": { "status": 0, "message": "Ok" },
  "data": { "success": true, "errorCode": { "error": "None" } } }
```

As soon as a valid bundle is accepted, HTTPS is live on port 443. The API stays reachable on both port 80 (HTTP) and 443 (HTTPS).

## Read Status and Connect

```http
GET /api/httpsStatus              # enabled state + error code
GET /api/certificateBundleInfo    # subject, issuer, validity, fingerprint
```

Then use the API over TLS, trusting your `ca.pem`:

```bash
curl --cacert ca.pem https://192.168.0.1/api/DeviceIdent
```

On Windows, if the root CA is already trusted in the OS certificate store, clients use it automatically.

## Remove the Bundle

```http
POST /api/removeCertificateBundle   # Service auth
POST /api/RebootDevice              # Service auth; HTTPS is off after the reboot
```

Until the device restarts, port 443 keeps serving the removed certificate and `httpsStatus` still reports `enabled: true`. `RebootDevice` also saves pending parameter changes permanently, so make sure no unwanted changes are pending before you reboot.

Keep port 80 available while you validate the certificate. If an upload leaves HTTPS refusing connections, read `httpsStatus` over HTTP to see the error code, fix the certificate, and re-upload. See the [Cybersecurity Hardening Guide](../integration-notes/cybersecurity.md) for wider hardening guidance.

## Related Articles

<!-- SICK video: 0_yvmsg84m; source: https://support.sick.com/sick-knowledgebase/article?id=63bda8c5-8bad-f011-bbd2-6045bd9b3ff2 -->
*How to create SSL certificates to enable HTTPS communication.*
