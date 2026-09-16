--- to disable warnings for undefined global variables, which are common in Wireshark dissectors due to the use of the Wireshark Lua API
---	@diagnostic disable: undefined-global
--[[  
		++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 
		
		LICENSE AGREEMENT
		
		MIT License

		Copyright (c) 2026 Evgenii Zorin and Lukas Schwender
		Copyright (c) 2026 SICK AG
		
		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
		
        ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++        

        This file is property of the SICK AG - Autonomous Perception - Dynamic Ranging
		Author : Evgenii Zorin and Lukas Schwender
        
        This program is a Wireshark dissector which adds an interpretation of the SICK data protocol "Compact" into the
        Wireshark environment and allows interpretation of specific data fields.

        
        NOTE:           This program should be used as a troubleshooting tool for SICK AG employees, SSU members and customers.
                        This program does not follow the SICK AG coding styles or the company quality standards.
						Partially generated with AI assistance, which may lead to code that is not fully optimized or may contain errors.
						Reviewed and validated by the authors, but use with caution and at your own risk.
        
        
        SOURCE:			Wireshark Developer’s Guide 			https://www.wireshark.org/docs/wsdg_html_chunked/index.html
						Wireshark’s Lua API Reference Manual 	https://www.wireshark.org/docs/wsdg_html_chunked/wsluarm_modules.html
        ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  
]]--

local plugin_info = {
        version = "V4.2.0",
        author = "Evgenii Zorin, Lukas Schwender",
        description = "Compact Data protocol SICK AG"
    }
set_plugin_info(plugin_info)

--[[
                                HOW TO INTEGRATE SCRIPT TO WIRESHARK
                                ------------------------------------

1) Open Wireshark
2) Help -> About Wireshark
3) Folders -> Global Lua Plugins / Personal Lua Plugins
4) Double click
5) Place the file in the folder 
6) Press Ctrl + Shift + L to load the script  

								ENABLE / DISABLE IN WIRESHARK
                                -----------------------------
								
1) Analyze -> Enabled Protocols...
2) Search "compact"
3) Activate / deactivate -> OK

]]--

--[[    
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  
                                                        SETTINGS
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
]]--  

-- Destination UDP/TCP Port of the protocol
-- Add as many ports as needed
--[[
	CompactPorts 					= {2115, 2116, aaaa, bbbb, cccc}
	IMUPorts 						= {7503, 7504, aaaa, bbbb, cccc}
	EncoderPorts					= {1234, 5678, aaaa, bbbb, cccc}
]]--
-- Primary Data - Spherical Coordinates ports [UDP, TCP/IP]
-- Primary Data - Point Cloud ports [UDP, TCP/IP]
-- Primary Data - OptimizedMultiScan2xx ports [UDP, TCP/IP]
local CompactPorts 					= {2115, }
-- Ambient Light ports [UDP, TCP/IP]
local AmbientLightPorts 			= {2116, }
-- IMU Data ports [UDP]
local IMUPorts 						= {7503, 2117}
-- Encoder Data ports [UDP, TCP/IP]
local EncoderPorts					= {7504, 2118}

--	Message ID types
local TelegramTypes = {		[1] 	= "Primary Data - Spherical Coordinates",		-- Primary Data - Spherical Coordinates
							[2] 	= "IMU V1",										-- IMU (legacy)
							[3] 	= "Ambient Light",								-- Ambient Light
							[4] 	= "Encoder",									-- Encoder
							[5] 	= "Primary Data - Point Cloud",					-- Primary Data - Point Cloud
							[6]		= "Primary Data - OptimizedMultiScan2xx",		-- Primary Data - OptimizedMultiScan2xx
							[7]		= "IMU V2",										-- IMU
				}
--[[
	Set to true to parse all fields in the dissector, even if the subtree is not expanded in Wireshark.
	Give possibility to use filters in Wireshark for all fields.
	Extremely reduces performance if the amount of data is high.
	Use with care.
	Extremely slow with LRS4000, multiScan270
]]--
local parse_full = false

--- formatting for ProtoField names
--- To align the ProtoField names in Wireshark, you can use string.format with a specified width. For example, string.format("%-30s", "Segment Counter") will left-align the text "Segment Counter" within a field of 30 characters. Adjust the width as needed to achieve the desired alignment in Wireshark's packet details pane.
local padding = 40

local function string_format(text)
	return string.format("%-" .. padding .. "s", text)
end

--	If format structure is changed, adjust sizes and offsets for Header, Meta Data, Measurement Data, IMU Data, and CRC.
--	Script should automatically redesign all fields. I hope :)

--[[									** Offsets for Header **
	-- telegramType = 1
	Header						| 32 Bytes	| 			| 0,	32
	-- New header_offset
	-- telegramType > 2
	Header						| 32 Bytes	| 			| 0,	36
	--------------------------------------------------------------
	startOfFrame				| 4 Bytes	| UINT32	| 0,	4
	telegramType				| 4 Bytes	| UINT32	| 4,	4
	telegramCounter				| 8 Bytes	| UINT64	| 8,	8
	timeStampTransmit			| 8 Bytes	| UINT64	| 16,	8
	telegramVersion				| 4 Bytes	| UINT32	| 24,	4
	-- telegramType = 1
	sizeModule0					| 4 Bytes	| UINT32	| 28,	4
	-- New header_offset
	-- telegramType > 2
	payloadLength				| 4 Bytes	| UINT32	| 28,	4
	senderId					| 4 Bytes	| UINT32	| 32,	4
--]]
local header_offset				= {
									["Header"] 				= {0, 32},
									-- New header_offset
									-- telegramType > 2
									["Header_V2"] 			= {0, 36},
									----------------------------------
									["startOfFrame"] 		= {0, 4},
									["telegramType"] 		= {4, 4},
									["telegramCounter"] 	= {8, 8},
									["timeStampTransmit"] 	= {16, 8},
									["telegramVersion"] 	= {24, 4},
									-- telegramType = 1
									["sizeModule0"] 		= {28, 4},
									-- New header_offset
									-- telegramType > 2
									["payloadLength"]		= {28, 4},
									["senderId"]			= {32, 4},
								}

--[[ 									** Offsets for CRC **
	CRC							|  Bytes	| 			| 0,	4
--]]
local crc_offset				= {
									["CRC"] 				= {0, 4},
									----------------------------------
								}

--[[									** Offsets for Meta Data **
	
	Version 4

	Meta Data                   | 72 Bytes	| 			| 0,	72
	--------------------------------------------------------------
	SegmentCounter				| 8 Bytes	| UINT64	| 0,	8
	FrameNumber					| 8 Bytes	| UINT64	| 8,	8
	SenderId					| 4 Bytes	| UINT32	| 16,	4
	NumberOfLinesInModule		| 4 Bytes	| UINT32	| 20,	4
	NumberOfBeamsPerScan		| 4 Bytes	| UINT32	| 24,	4
	NumberOfEchosPerBeam		| 4 Bytes	| UINT32	| 28,	4
	TimeStampStart				| 8*n Bytes	| [UINT64]	| 32,	8		Array; n = Number of elements
	TimeStampStop				| 8*n Bytes	| [UINT64]	| 40,	8		Array; n = Number of elements
	Phi							| 4*n Bytes	| [FLOAT]	| 48,	4		Array; n = Number of elements
	ThetaStart					| 4*n Bytes	| [FLOAT]	| 52,	4		Array; n = Number of elements
	ThetaStop					| 4*n Bytes	| [FLOAT]	| 56,	4		Array; n = Number of elements
	DistanceScalingFactor		| 4 Bytes	| FLOAT		| 60,	4
	NextModuleSize				| 4 Bytes	| FLOAT		| 64,	4
	Reserved1					| 1 Byte	| FLOAT		| 68,	1
	DataContentEchos			| 1 Byte	| UINT32	| 69,	1
	DataContentBeams			| 1 Byte	| UINT8		| 70,	1
	Reserved2					| 1 Byte	| UINT8		| 71,	1
--]]
local meta_data_offset			= {
								["Meta Data"]				= {0, 72},
								--------------------------------------
								["SegmentCounter"]			= {0, 8},
								["FrameNumber"]				= {8, 8},
								["SenderId"]				= {16, 4},
								["NumberOfLinesInModule"]	= {20, 4},
								["NumberOfBeamsPerScan"]	= {24, 4},
								["NumberOfEchosPerBeam"]	= {28, 4},
								["TimeStampStart"]			= {32, 8},
								["TimeStampStop"]			= {40, 8},
								["Phi"]						= {48, 4},
								["ThetaStart"]				= {52, 4},
								["ThetaStop"]				= {56, 4},
								-- Telegram version > 3
								["DistanceScalingFactor"]	= {60, 4},
								["NextModuleSize"]			= {64, 4},
								["Reserved1"]				= {68, 1},
								["DataContentEchos"]		= {69, 1},
								["DataContentBeams"]		= {70, 1},
								["Reserved2"]				= {71, 1},
								}

--[[									** Offsets for Measurement Data
	Measurement Data			| 7 Byte	| 			| 0,	7
	-------------------------------------------------------------
	Distance					| 2 Byte	| UINT16	| 0,	2
	RSSI						| 2 Byte	| UINT16	| 2,	2
	Beam characteristics		| 1 Byte	| UINT8		| 4,	1
	Azimuth angle (theta)		| 2 Byte	| UINT16	| 5,	2
	
	|			echo 0			|			echo 1			|			echo 2			|
	-----------------------------------------------------------------------------------------------------------------
	|	distance_0	|	rssi_0	|	distance_1	|	rssi_0	|	distance_2	|	rssi_2	|	properties	|	theta	|
	-----------------------------------------------------------------------------------------------------------------
	|							Described by DataContentEchos							|		Described by Data	|
																								ContentBeams
--]]
local measurement_data_offset	= {
								["MeasurementData"]			= {0, 7},
								-------------------------------------
								["Distance"]				= {0, 2},
								["RSSI"]					= {2, 2},
								["Beam characteristics"]	= {4, 1},
								["Azimuth angle (theta)"]	= {5, 2},
								}

--[[									** Offsets for IMU data

	Version 2

	IMU Data					|  Byte	| 				| 0,	64
	-------------------------------------------------------------
	Start of Frame              | 4 Bytes	| UINT32	| 0,	4
	Telegram Type				| 4 Bytes	| UINT32	| 4,	4
	Telegram version			| 4 Bytes	| UINT32	| 8,	4
	Acceleration x				| 4 Bytes	| FLOAT		| 12,	4
	Acceleration y				| 4 Bytes	| FLOAT		| 16,	4
	Acceleration z				| 4 Bytes	| FLOAT		| 20,	4
	Angular velocity x			| 4 Bytes	| FLOAT		| 24,	4
	Angular velocity y			| 4 Bytes	| FLOAT		| 28,	4
	Angular velocity z			| 4 Bytes	| FLOAT		| 32,	4
	Orientation quaternion w	| 4 Bytes	| FLOAT		| 36,	4
	Orientation quaternion x	| 4 Bytes	| FLOAT		| 40,	4
	Orientation quaternion y	| 4 Bytes	| FLOAT		| 44,	4
	Orientation quaternion z	| 4 Bytes	| FLOAT		| 48,	4
	IMU sensor time stamp		| 8 Bytes	| UINT64	| 52,	8
	Check sum					| 4 Bytes	| UINT32	| 60,	4
	
--]]
local imu_data_offset	= {
								["IMUData"]						= {0, 64},
								------------------------------------------
								["Start of Frame"]				= {0, 4},
								["Telegram Type"]				= {4, 4},
								["Telegram version"]			= {8, 4},
								["Acceleration x"]				= {12, 4},
								["Acceleration y"]				= {16, 4},
								["Acceleration z"]				= {20, 4},
								["Angular velocity x"]			= {24, 4},
								["Angular velocity y"]			= {28, 4},
								["Angular velocity z"]			= {32, 4},
								["Orientation quaternion w"]	= {36, 4},
								["Orientation quaternion x"]	= {40, 4},
								["Orientation quaternion y"]	= {44, 4},
								["Orientation quaternion z"]	= {48, 4},
								["IMU sensor time stamp"]		= {52, 8},
								["Check sum"]					= {60, 4},
								}

--[[									** Offsets for IMU Type 7 data

	Version 1

	IMU Data					|  Byte	| 				| 0,	48
	-------------------------------------------------------------
	Sensor Time Stamp           | 8 Bytes	| UINT64	| 0,	8
	Acceleration x				| 4 Bytes	| FLOAT		| 8,	4
	Acceleration y				| 4 Bytes	| FLOAT		| 12,	4
	Acceleration z				| 4 Bytes	| FLOAT		| 16,	4
	Angular velocity x			| 4 Bytes	| FLOAT		| 20,	4
	Angular velocity y			| 4 Bytes	| FLOAT		| 24,	4
	Angular velocity z			| 4 Bytes	| FLOAT		| 28,	4
	Orientation quaternion w	| 4 Bytes	| FLOAT		| 32,	4
	Orientation quaternion x	| 4 Bytes	| FLOAT		| 36,	4
	Orientation quaternion y	| 4 Bytes	| FLOAT		| 40,	4
	Orientation quaternion z	| 4 Bytes	| FLOAT		| 44,	4
	
--]]
local imu_type_7_data_offset	= {
								["IMUData"]						= {0, 48},
								------------------------------------------
								["Sensor Time Stamp"]			= {0, 8},
								["Acceleration x"]				= {8, 4},
								["Acceleration y"]				= {12, 4},
								["Acceleration z"]				= {16, 4},
								["Angular velocity x"]			= {20, 4},
								["Angular velocity y"]			= {24, 4},
								["Angular velocity z"]			= {28, 4},
								["Orientation quaternion w"]	= {32, 4},
								["Orientation quaternion x"]	= {36, 4},
								["Orientation quaternion y"]	= {40, 4},
								["Orientation quaternion z"]	= {44, 4},
								}

--[[									** Offsets for Encoder data

	Version 1

	Encoder Data						|  Byte		| 			| 0,	52
	----------------------------------------------------------------------
	Sender ID							| 4 Bytes	| UINT32	| 0,	4
	Frame Number						| 8 Bytes	| UINT64	| 4,	8
	Tick counter value					| 4 Bytes	| UINT32	| 12,	4
	Tick counter value at AUX 1 Signal	| 4 Bytes	| UINT32	| 16,	4
	Tick counter value at AUX 2 Signal	| 4 Bytes	| UINT32	| 20,	4
	Speed value							| 4 Bytes	| FLOAT		| 24,	4
	Tick counter value timestamp		| 8 Bytes	| UINT64	| 28,	8
	AUX 1 timestamp						| 8 Bytes	| UINT64	| 36,	8
	AUX 2 timestamp						| 8 Bytes	| UINT64	| 44,	8
	
--]]
local encoder_data_offset	= {
								["EncoderData"]							= {0, 52},
								------------------------------------------
								["Sender ID"]							= {0, 4},
								["Frame Number"]						= {4, 8},
								["Tick counter value"]					= {12, 4},
								["Tick counter value at AUX 1 Signal"]	= {16, 4},
								["Tick counter value at AUX 2 Signal"]	= {20, 4},
								["Speed value"]							= {24, 4},
								["Tick counter value timestamp"]		= {28, 8},
								["AUX 1 timestamp"]						= {36, 8},
								["AUX 2 timestamp"]						= {44, 8},
								}

--[[									** Offsets for Ambient light

	Version 1

	Ambient light						|  Byte		| 			| 0,	48
	----------------------------------------------------------------------
	Frame number						| 8 Bytes	| UINT64	| 0,	8
	Start time stamp					| 8 Bytes	| UINT64	| 8,	8
	Stop time stamp						| 8 Bytes	| UINT64	| 16,	8
	Number of layers					| 2 Bytes	| UINT16	| 24,	2
	Number of columns (slots)			| 2 Bytes	| UINT16	| 26,	2
	Horizontal angle start				| 4 Bytes	| FLOAT32	| 28,	4
	Horizontal angle stop				| 4 Bytes	| FLOAT32	| 32,	4
	Vertical angle start				| 4 Bytes	| FLOAT32	| 36,	4
	Vertical angle stop					| 4 Bytes	| FLOAT32	| 40,	4
	Encoding							| 2 Bytes	| UINT16	| 44,	2
	Ambient light data					| 2*n Bytes	| [UINT16]	| 46,	2		Array; n = Number of layers * Number of columns
--]]
local ambient_light_data_offset	= {
								["AmbientLightData"]					= {0, 48},
								------------------------------------------
								["Frame Number"]						= {0, 8},
								["Start time stamp"]					= {8, 8},
								["Stop time stamp"]						= {16, 8},
								["Number of layers"]					= {24, 2},
								["Number of columns"]					= {26, 2},
								["Horizontal angle start"]				= {28, 4},
								["Horizontal angle stop"]				= {32, 4},
								["Vertical angle start"]				= {36, 4},
								["Vertical angle stop"]					= {40, 4},
								["Encoding"]							= {44, 2},
								["Ambient light data"]					= {46, 2},
								}

--[[									** Offsets for OptimizedMultiScan2xx

	Version 1

	OptimizedMultiScan2xx				|  Byte		| 			| 0,	128
	----------------------------------------------------------------------
	Frame number						| 8 Bytes	| UINT64	| 0,	8
	Frame TimeStamp						| 8 Bytes	| UINT64	| 8,	8
	Segment Index						| 2 Bytes	| UINT16	| 16,	2
	Number Of Segments Per Frame		| 2 Bytes	| UINT16	| 18,	2
	Number Of Columns In Segment		| 2 Bytes	| UINT16	| 20,	2
	Number Of Columns Per Frame			| 2 Bytes	| UINT16	| 22,	2
	Number Of Layers					| 2 Bytes	| UINT16	| 24,	2
	Number Of Echos						| 1 Bytes	| UINT8		| 26,	1
	Number Of Ambient Light Layers		| 2 Bytes	| UINT16	| 27,	2
	Number Of Interlace Steps			| 1 Bytes	| UINT8		| 29,	1
	Current Interlace Index				| 1 Bytes	| UINT8		| 30,	1
	Scan Configuration Identifier		| 1 Bytes	| UINT8		| 31,	1
	Distance Scaling Factor				| 4 Bytes	| FLOAT32	| 32,	4
	Data Content Echo					| 1 Bytes	| UINT8		| 36,	1
	RESERVED + PADDING					| 91 Bytes	| UINT8		| 37,	91

	Ambient Light						| 2*n Bytes	| [UINT16]	| 128,	2					Array; n = Number of ambient light layers * Number of columns per frame

	Column Meta Dta

	Measurement Data
--]]
local OptimizedMultiScan2xx_meta_data_offset	= {
								["Meta Data"]								= {0, 128},
								------------------------------------------
								["FrameNumber"]								= {0, 8},
								["FrameTimeStamp"]							= {8, 8},
								["SegmentIndex"]							= {16, 2},
								["NumberOfSegmentsPerFrame"]				= {18, 2},
								["NumberOfColumnsInSegment"]				= {20, 2},
								["NumberOfColumnsPerFrame"]					= {22, 2},
								["NumberOfLayers"]							= {24, 2},
								["NumberOfEchos"]							= {26, 1},
								["NumberOfAmbientLightLayers"]				= {27, 2},
								["NumberOfInterlaceSteps"]					= {29, 1},
								["CurrentInterlaceIndex"]					= {30, 1},
								["ScanConfigurationIdentifier"]				= {31, 1},
								["DistanceScalingFactor"]					= {32, 4},
								["DataContentEcho"]							= {36, 1},
								["RESERVED + PADDING"]						= {37, 91},
								-- Ambient Light
								["AmbientLight"]							= {128, 2},
								-- Column Meta Data
								["ElevationAngles"]							= {0, 4},
								["AzimuthAngles"]							= {4, 4},
								["RelativeTimeStamps"]						= {8, 4},
								["ColumnProperties"]						= {12, 2},
								-- Measurement Data
								["Distance"]								= {0, 2},
								["RSSI"]									= {0, 1.5},
								["PulseWidth"]								= {0, 1},
								["EchoProperties"]							= {0, 1},
								}

-- Create a single Wireshark "Proto" (Protocol) object with name (1) and description (2) called SICK__CompactProtocol.
-- Proto element contains message fields and dissector function
SICK__CompactProtocol = Proto("Compact",  "Compact Data Protocol SICK AG")
--[[    
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  
											PROTO FIELDS
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
]]--

-- Define Wireshark "ProtoFields".
-- ProtoField.new(name, abbr, type, [value string], [base], [mask], [description]
--[[
	type:
	Field Type: one of: ftypes.BOOLEAN, ftypes.CHAR, ftypes.UINT8, ftypes.UINT16, ftypes.UINT24, ftypes.UINT32, ftypes.UINT64, 
						ftypes.INT8, ftypes.INT16, ftypes.INT24, ftypes.INT32, ftypes.INT64, ftypes.FLOAT, ftypes.DOUBLE , 
						ftypes.ABSOLUTE_TIME, ftypes.RELATIVE_TIME, ftypes.STRING, ftypes.STRINGZ, ftypes.UINT_STRING, ftypes.ETHER, 
						ftypes.BYTES, ftypes.UINT_BYTES, ftypes.IPv4, ftypes.IPv6, ftypes.IPXNET, ftypes.FRAMENUM, ftypes.PCRE, 
						ftypes.GUID, ftypes.OID, ftypes.PROTOCOL, ftypes.REL_OID, ftypes.SYSTEM_ID, ftypes.EUI64 or ftypes.NONE.
	
	Value String (optional):
	A table mapping field values to their string representations, e.g., {[0] = "False", [1] = "True"}.

	base (optional):
	The representation, one of: base.NONE, base.DEC, base.HEX, base.OCT, base.DEC_HEX, 
								base.HEX_DEC, base.UNIT_STRING or base.RANGE_STRING.
	
	mask:
	To show only 0 bit in the ProtoField, use mask 0x01			|	0000 0001
	To show only 1 bit in the ProtoField, use mask 0x02			|	0000 0010
	To show only 0 and 1 bit in the ProtoField, use mask 0x03	|	0000 0011
]]--

--											** value string **
local status_bool							= {
	[0] = "False",[1] = "True"
}
-- Message Type 6 - Primary Data - OptimizedMultiScan2xx - Frame Meta Data - Scan Configuration Identifier
local sc_identifier			= {
	-- TODO: Add Scan Configuration Identifier table
}

local compact_fields = {
	--                                      ** HEADER - GENERAL **
	header =
		{
			StartOfFrame            		= ProtoField.new(string_format("Start Of Frame"),				"compact.framing.header.startOfFrame",				ftypes.UINT32,			nil,			base.HEX),
			TelegramType               		= ProtoField.new(string_format("Telegram Type"), 				"compact.framing.header.telegramType",				ftypes.UINT32,			TelegramTypes,	base.DEC),

			--                                      ** HEADER - DATA**
			TelegramCounter         		= ProtoField.new(string_format("Telegram Counter"), 			"compact.framing.header.telegramCounter",			ftypes.UINT64,			nil,			base.DEC),
			TimeStampTransmit       		= ProtoField.new(string_format("Time Stamp Transmit"), 			"compact.framing.header.timeStampTransmit",			ftypes.ABSOLUTE_TIME,	nil,			base.UTC),
			TelegramVersion         		= ProtoField.new(string_format("Telegram Version"), 			"compact.framing.header.telegramVersion",			ftypes.UINT32,			nil,			base.DEC),
			SizeModule0             		= ProtoField.new(string_format("Size of Module 0"), 			"compact.framing.header.sizeModule0",				ftypes.UINT32,			nil,			base.DEC),
			-- New header_offset
			-- telegramType > 2
			PayloadLength             		= ProtoField.new(string_format("Payload Length"), 				"compact.framing.header.payloadLength",				ftypes.UINT32,			nil,			base.DEC),
			SenderId             			= ProtoField.new(string_format("Sender Id"), 					"compact.framing.header.senderId",					ftypes.UINT32,			nil,			base.DEC),
		},

	--                                    	** CRC - GENERAL **	
	crc =
		{
			crc								= ProtoField.new(string_format("CRC"), 							"compact.framing.crc",								ftypes.UINT32,			nil,			base.HEX),
		},

	--										** Primary Data - Spherical Coordinates **
	compact =
		{
			--								** Meta Data **
			SegmentCounter          		= ProtoField.new(string_format("Segment Counter"), 				"compact.spherical.segmentCounter",					ftypes.UINT64,			nil,			base.DEC),
			FrameNumber             		= ProtoField.new(string_format("Frame Number"),					"compact.spherical.frameNumber",					ftypes.UINT64,			nil,			base.DEC),
			SenderId                		= ProtoField.new(string_format("Sender Id"),					"compact.spherical.senderId",						ftypes.UINT32,			nil,			base.DEC),
			NumberOfLinesInModule   		= ProtoField.new(string_format("Number Of Lines In Module"),	"compact.spherical.numberOfLinesInModule",			ftypes.UINT32,			nil,			base.DEC),
			NumberOfBeamsPerScan    		= ProtoField.new(string_format("Number Of Beams Per Scan"), 	"compact.spherical.numberOfBeamsPerScan",			ftypes.UINT32,			nil,			base.DEC),
			NumberOfEchosPerBeam    		= ProtoField.new(string_format("Number Of Echos Per Scan"),		"compact.spherical.numberOfEchosPerBeam",			ftypes.UINT32,			nil,			base.DEC),
			aTimeStampStart         		= ProtoField.new(string_format("Time Stamp Start"), 			"compact.spherical.timeStampStart",					ftypes.ABSOLUTE_TIME,	nil,			base.UTC),
			aTimeStampStop          		= ProtoField.new(string_format("Time Stamp Stop"), 				"compact.spherical.timeStampStop",					ftypes.ABSOLUTE_TIME,	nil,			base.UTC),
			aPhi                    		= ProtoField.new(string_format("Phi"), 							"compact.spherical.phi",							ftypes.FLOAT,			nil,			base.NONE),
			aThetaStart             		= ProtoField.new(string_format("Theta Start"), 					"compact.spherical.thetaStart",						ftypes.FLOAT,			nil,			base.NONE),
			aThetaStop              		= ProtoField.new(string_format("Theta Stop"), 					"compact.spherical.thetaStop",						ftypes.FLOAT,			nil,			base.NONE),
			DistanceScalingFactor   		= ProtoField.new(string_format("Distance Scaling Factor"),		"compact.spherical.distanceScalingFactor",			ftypes.FLOAT,			nil,			base.NONE),
			NextModuleSize          		= ProtoField.new(string_format("Next Module Size"), 			"compact.spherical.nextModuleSize",					ftypes.UINT32,			nil,			base.DEC),
			Reserved1               		= ProtoField.new(string_format("Reserved"), 					"compact.spherical.reserved",						ftypes.UINT8,			nil,			base.HEX),					-- RESERVED
			--- Change mask to show only the bits which are described in the protocol specification
			--- Mask = sum of bits which should be shown in the ProtoField; Bit0 = 0x01, Bit1 = 0x02, Bit2 = 0x04, Bit3 = 0x08, Bit4 = 0x10, Bit5 = 0x20, Bit6 = 0x40, Bit7 = 0x80
			DataContentEchos        		= ProtoField.new(string_format("Data Content Echos"), 			"compact.spherical.dataContentEchos",				ftypes.UINT8,			nil,			base.HEX,		0x3),
				DataContentEchos_Bit0		= ProtoField.new(string_format("Distance data are available"), 	"compact.spherical.dataContentEchos.Bit0",			ftypes.UINT8,			status_bool,	base.NONE,		0x1),
				DataContentEchos_Bit1		= ProtoField.new(string_format("RSSI data are available"), 		"compact.spherical.dataContentEchos.Bit1",			ftypes.UINT8,			status_bool,	base.NONE,		0x2),
				DataContentEchos_Bit2		= ProtoField.new(string_format("Reserved"), 					"compact.spherical.dataContentEchos.Bit2",			ftypes.UINT8,			status_bool,	base.NONE,		0x4),		-- RESERVED
				DataContentEchos_Bit3		= ProtoField.new(string_format("Reserved"), 					"compact.spherical.dataContentEchos.Bit3", 			ftypes.UINT8,			status_bool,	base.NONE,		0x8),		-- RESERVED
				DataContentEchos_Bit4		= ProtoField.new(string_format("Reserved"), 					"compact.spherical.dataContentEchos.Bit4", 			ftypes.UINT8,			status_bool,	base.NONE,		0x10),		-- RESERVED
				DataContentEchos_Bit5		= ProtoField.new(string_format("Reserved"), 					"compact.spherical.dataContentEchos.Bit5", 			ftypes.UINT8,			status_bool,	base.NONE,		0x20),		-- RESERVED
				DataContentEchos_Bit6		= ProtoField.new(string_format("Reserved"), 					"compact.spherical.dataContentEchos.Bit6", 			ftypes.UINT8,			status_bool,	base.NONE,		0x40),		-- RESERVED
				DataContentEchos_Bit7		= ProtoField.new(string_format("Reserved"), 					"compact.spherical.dataContentEchos.Bit7", 			ftypes.UINT8,			status_bool,	base.NONE,		0x80),		-- RESERVED
			--- Change mask to show only the bits which are described in the protocol specification
			--- Mask = sum of bits which should be shown in the ProtoField; Bit0 = 0x01, Bit1 = 0x02, Bit2 = 0x04, Bit3 = 0x08, Bit4 = 0x10, Bit5 = 0x20, Bit6 = 0x40, Bit7 = 0x80
			DataContentBeams        		= ProtoField.new(string_format("Data Content Beams"), 			"compact.spherical.dataContentBeams", 				ftypes.UINT8,			nil,			base.HEX,		0x3),
				DataContentBeams_Bit0		= ProtoField.new(string_format("Further beam properties are available"), 
																											"compact.spherical.dataContentBeams.Bit0",			ftypes.UINT8,			status_bool,	base.NONE,		0x1),
				DataContentBeams_Bit1		= ProtoField.new(string_format("Azimuth angles per beam are available"), 
																											"compact.spherical.dataContentBeams.Bit1",			ftypes.UINT8,			status_bool,	base.NONE,		0x2),
				DataContentBeams_Bit2		= ProtoField.new(string_format("Reserved"), 					"compact.spherical.dataContentBeams.Bit2",			ftypes.UINT8,			status_bool,	base.NONE,		0x4),		-- RESERVED
				DataContentBeams_Bit3		= ProtoField.new(string_format("Reserved"), 					"compact.spherical.dataContentBeams.Bit3",			ftypes.UINT8,			status_bool,	base.NONE,		0x8),		-- RESERVED
				DataContentBeams_Bit4		= ProtoField.new(string_format("Reserved"), 					"compact.spherical.dataContentBeams.Bit4",			ftypes.UINT8,			status_bool,	base.NONE,		0x10),		-- RESERVED
				DataContentBeams_Bit5		= ProtoField.new(string_format("Reserved"), 					"compact.spherical.dataContentBeams.Bit5",			ftypes.UINT8,			status_bool,	base.NONE,		0x20),		-- RESERVED
				DataContentBeams_Bit6		= ProtoField.new(string_format("Reserved"), 					"compact.spherical.dataContentBeams.Bit6",			ftypes.UINT8,			status_bool,	base.NONE,		0x40),		-- RESERVED
				DataContentBeams_Bit7		= ProtoField.new(string_format("Reserved"), 					"compact.spherical.dataContentBeams.Bit7",			ftypes.UINT8,			status_bool,	base.NONE,		0x80),		-- RESERVED
			Reserved2               		= ProtoField.new(string_format("Reserved"), 					"compact.spherical.reserved2",						ftypes.UINT8,			nil,			base.HEX),					-- RESERVED

			--										** Measurement Data **
			Distance               			= ProtoField.new(string_format("Distance"), 					"compact.spherical.distance",						ftypes.UINT16,			nil,			base.DEC),
			RSSI               				= ProtoField.new(string_format("RSSI"), 						"compact.spherical.RSSI",							ftypes.UINT16,			nil,			base.DEC),
			--- Change mask to show only the bits which are described in the protocol specification
			--- Mask = sum of bits which should be shown in the ProtoField; Bit0 = 0x01, Bit1 = 0x02, Bit2 = 0x04, Bit3 = 0x08, Bit4 = 0x10, Bit5 = 0x20, Bit6 = 0x40, Bit7 = 0x80
			BeamCharacteristics     		= ProtoField.new(string_format("Beam Characteristics"), 		"compact.spherical.beamCharacteristics",			ftypes.UINT8,			nil,			base.HEX,		0xE1),
				BeamCharacteristics_Bit0	= ProtoField.new(string_format("If an reflector has been found for any echo on that beam"), 
																											"compact.spherical.beamCharacteristics.Bit0", 		ftypes.UINT8, 			status_bool, 	base.NONE,		0x1),
				BeamCharacteristics_Bit1	= ProtoField.new(string_format("Reserved"), 					"compact.spherical.beamCharacteristics.Bit1",		ftypes.UINT8,			status_bool,	base.NONE,		0x2),		-- RESERVED
				BeamCharacteristics_Bit2	= ProtoField.new(string_format("Reserved"), 					"compact.spherical.beamCharacteristics.Bit2",		ftypes.UINT8,			status_bool,	base.NONE,		0x4),		-- RESERVED
				BeamCharacteristics_Bit3	= ProtoField.new(string_format("Reserved"), 					"compact.spherical.beamCharacteristics.Bit3",		ftypes.UINT8,			status_bool,	base.NONE,		0x8),		-- RESERVED
				BeamCharacteristics_Bit4	= ProtoField.new(string_format("Reserved"), 					"compact.spherical.beamCharacteristics.Bit4",		ftypes.UINT8,			status_bool,	base.NONE,		0x10),		-- RESERVED
				BeamCharacteristics_Bit5	= ProtoField.new(string_format("Blooming Echo 0"), 				"compact.spherical.beamCharacteristics.Bit5",		ftypes.UINT8,			status_bool,	base.NONE,		0x20),
				BeamCharacteristics_Bit6	= ProtoField.new(string_format("Blooming Echo 1"), 				"compact.spherical.beamCharacteristics.Bit6",		ftypes.UINT8,			status_bool,	base.NONE,		0x40),
				BeamCharacteristics_Bit7	= ProtoField.new(string_format("Blooming Echo 2"), 				"compact.spherical.beamCharacteristics.Bit7",		ftypes.UINT8,			status_bool,	base.NONE,		0x80),
			AzimuthAngleTheta       		= ProtoField.new(string_format("Azimuth angle (theta)"), 		"compact.spherical.azimuthAngleTheta",				ftypes.UINT16,			nil,			base.NONE),
			CurrentLine             		= ProtoField.new(string_format("Layer"), 						"compact.spherical.currentLine",					ftypes.NONE,			nil,			base.NONE),
		},

	--                                    ** IMU - DATA **
	imu =
		{
			StartOfFrame            		= ProtoField.new(string_format("Start Of Frame"), 				"compact.imu.startOfFrame",							ftypes.UINT32,			nil,			base.HEX),
			TelegramType					= ProtoField.new(string_format("Telegram Type"), 				"compact.imu.telegramType",							ftypes.UINT32,			TelegramTypes,	base.DEC),
			TelegramVersion      			= ProtoField.new(string_format("Telegram Version"), 			"compact.imu.telegramVersion",						ftypes.UINT32,			nil,			base.DEC),
			-- Telegram Type 7
			SensorTimeStamp					= ProtoField.new(string_format("Sensor Time Stamp"), 			"compact.imu.sensorTimeStamp",						ftypes.ABSOLUTE_TIME,	nil,			base.UTC),
			--
			AccelerationX           		= ProtoField.new(string_format("Acceleration X"), 				"compact.imu.accelerationX",						ftypes.FLOAT,			nil,			base.NONE),
			AccelerationY           		= ProtoField.new(string_format("Acceleration Y"), 				"compact.imu.accelerationY",						ftypes.FLOAT,			nil,			base.NONE),
			AccelerationZ           		= ProtoField.new(string_format("Acceleration Z"), 				"compact.imu.accelerationZ",						ftypes.FLOAT,			nil,			base.NONE),
			VelocityX               		= ProtoField.new(string_format("Angular Velocity X"), 			"compact.imu.velocityX",							ftypes.FLOAT,			nil,			base.NONE),
			VelocityY               		= ProtoField.new(string_format("Angular Velocity Y"), 			"compact.imu.velocityY",							ftypes.FLOAT,			nil,			base.NONE),
			VelocityZ               		= ProtoField.new(string_format("Angular Velocity Z"), 			"compact.imu.velocityZ",							ftypes.FLOAT,			nil,			base.NONE),
			OrientationW            		= ProtoField.new(string_format("Orientation Quaternion W"), 	"compact.imu.orientationW",							ftypes.FLOAT,			nil,			base.NONE),
			OrientationX            		= ProtoField.new(string_format("Orientation Quaternion X"), 	"compact.imu.orientationX",							ftypes.FLOAT,			nil,			base.NONE),
			OrientationY            		= ProtoField.new(string_format("Orientation Quaternion Y"), 	"compact.imu.orientationY",							ftypes.FLOAT,			nil,			base.NONE),
			OrientationZ            		= ProtoField.new(string_format("Orientation Quaternion Z"), 	"compact.imu.orientationZ",							ftypes.FLOAT,			nil,			base.NONE),
			-- Telegram Type 2
			ImuTimestamp					= ProtoField.new(string_format("IMU Sensor Time Stamp"), 		"compact.imu.timestamp",							ftypes.ABSOLUTE_TIME,	nil,			base.UTC),
			CheckSum             			= ProtoField.new(string_format("Checksum"), 					"compact.imu.checkSum",								ftypes.UINT32,			nil,			base.HEX),
			--
		},

	-- 									 	** Measurement Data - OptimizedMultiScan2xx **
	compact_optimized =
		{
			--								** Meta Data **
			FrameNumber						= ProtoField.new(string_format("Frame Number"), 				"compact.optimized.frameNumber",					ftypes.UINT64,			nil,			base.DEC),
			FrameTimeStamp					= ProtoField.new(string_format("Frame Time Stamp"), 			"compact.optimized.frameTimeStamp",					ftypes.ABSOLUTE_TIME,	nil,			base.UTC),
			SegmentIndex					= ProtoField.new(string_format("Segment Index"), 				"compact.optimized.segmentIndex",					ftypes.UINT16,			nil,			base.DEC),
			NumberOfSegmentsPerFrame		= ProtoField.new(string_format("Number Of Segments Per Frame"), "compact.optimized.numberOfSegmentsPerFrame",		ftypes.UINT16,			nil,			base.DEC),
			NumberOfColumnsInSegment		= ProtoField.new(string_format("Number Of Columns In Segment"), "compact.optimized.numberOfColumnsInSegment",		ftypes.UINT16,			nil,			base.DEC),
			NumberOfColumnsPerFrame			= ProtoField.new(string_format("Number Of Columns Per Frame"), 	"compact.optimized.numberOfColumnsPerFrame",		ftypes.UINT16,			nil,			base.DEC),
			NumberOfLayers					= ProtoField.new(string_format("Number Of Layers"), 			"compact.optimized.numberOfLayers",					ftypes.UINT16,			nil,			base.DEC),
			NumberOfEchos					= ProtoField.new(string_format("Number Of Echos"), 				"compact.optimized.numberOfEchos",					ftypes.UINT8,			nil,			base.DEC),
			NumberOfAmbientLightLayers 		= ProtoField.new(string_format("Number Of Ambient Light Layers"),"compact.optimized.numberOfAmbientLightLayers",	ftypes.UINT16,			nil,			base.DEC),
			NumberOfInterlaceSteps			= ProtoField.new(string_format("Number Of Interlace Steps"), 	"compact.optimized.numberOfInterlaceSteps",			ftypes.UINT8,			nil,			base.DEC),
			CurrentInterlaceIndex			= ProtoField.new(string_format("Current Interlace Index"), 		"compact.optimized.currentInterlaceIndex",			ftypes.UINT8,			nil,			base.DEC),
			ScanConfigurationIdentifier		= ProtoField.new(string_format("Scan Configuration Identifier"),"compact.optimized.scanConfigurationIdentifier",	ftypes.UINT8,			sc_identifier,	base.NONE),
			DistanceScalingFactor			= ProtoField.new(string_format("Distance Scaling Factor"), 		"compact.optimized.distanceScalingFactor",			ftypes.FLOAT,			nil,			base.NONE),
			--- Change mask to show only the bits which are described in the protocol specification
			--- Mask = sum of bits which should be shown in the ProtoField; Bit0 = 0x01, Bit1 = 0x02, Bit2 = 0x04, Bit3 = 0x08, Bit4 = 0x10, Bit5 = 0x20, Bit6 = 0x40, Bit7 = 0x80
			-- TODO: Change mask for Pulse Width
			DataContentEcho					= ProtoField.new(string_format("Data Content Echo"), 			"compact.optimized.dataContentEcho",				ftypes.UINT8,			nil,			base.HEX,		0x5),
				DataContentEcho_Bit0		= ProtoField.new(string_format("Intensity"), 					"compact.optimized.dataContentEcho.Intensity",		ftypes.UINT8,			status_bool,	base.NONE,		0x1),
				-- TODO: Rename "Reserved" to "Pulse Width")
				DataContentEcho_Bit1		= ProtoField.new(string_format("Reserved"), 					"compact.optimized.dataContentEcho.PulseWidth",		ftypes.UINT8,			status_bool,	base.NONE,		0x2),
				DataContentEcho_Bit2		= ProtoField.new(string_format("Properties"), 					"compact.optimized.dataContentEcho.Properties",		ftypes.UINT8,			status_bool,	base.NONE,		0x4),
				DataContentEcho_Bit3		= ProtoField.new(string_format("Reserved"), 					"compact.optimized.dataContentEcho.Bit3",			ftypes.UINT8,			status_bool,	base.NONE,		0x8),
				DataContentEcho_Bit4		= ProtoField.new(string_format("Reserved"), 					"compact.optimized.dataContentEcho.Bit4",			ftypes.UINT8,			status_bool,	base.NONE,		0x10),
				DataContentEcho_Bit5		= ProtoField.new(string_format("Reserved"), 					"compact.optimized.dataContentEcho.Bit5",			ftypes.UINT8,			status_bool,	base.NONE,		0x20),
				DataContentEcho_Bit6		= ProtoField.new(string_format("Reserved"), 					"compact.optimized.dataContentEcho.Bit6",			ftypes.UINT8,			status_bool,	base.NONE,		0x40),
				DataContentEcho_Bit7		= ProtoField.new(string_format("Reserved"), 					"compact.optimized.dataContentEcho.Bit7",			ftypes.UINT8,			status_bool,	base.NONE,		0x80),
			Reserved 						= ProtoField.new(string_format("Reserved"), 					"compact.optimized.reserved",						ftypes.NONE,			nil,			base.NONE),
			-- Ambient Light
			AmbientLightData				= ProtoField.new(string_format("Ambient light data"), 			"compact.optimized.ambient_light.AmbientLightData",	ftypes.UINT16,			nil,			base.DEC),				-- Array; n = Number of layers * Number of columns
			-- Frame data
			ElevationAngles					= ProtoField.new(string_format("Elevation Angles"), 			"compact.optimized.frame_data.elevationAngles",		ftypes.FLOAT,			nil,			base.NONE),
			AzimuthAngles					= ProtoField.new(string_format("Azimuth Angles"), 				"compact.optimized.frame_data.azimuthAngles",		ftypes.FLOAT,			nil,			base.NONE),
			RelativeTimeStamps				= ProtoField.new(string_format("Relative Time Stamps"), 		"compact.optimized.frame_data.relativeTimeStamps",	ftypes.UINT32,			nil,			base.DEC),
			ColumnProperties				= ProtoField.new(string_format("Column Properties"), 			"compact.optimized.frame_data.columnProperties",	ftypes.UINT16,			nil,			base.DEC),
			-- Measurement Data
			Distance               			= ProtoField.new(string_format("Distance"), 					"compact.optimized.distance",						ftypes.UINT16,			nil,			base.DEC),				-- Array; n = Number of layers * Number of columns
			RSSI               				= ProtoField.new(string_format("RSSI"), 						"compact.optimized.RSSI",							ftypes.UINT16,			nil,			base.DEC),				-- Array; n = Number of layers * Number of columns
			PulseWidth               		= ProtoField.new(string_format("Pulse Width"), 					"compact.optimized.pulseWidth",						ftypes.UINT8,			nil,			base.DEC),
			EchoProperties               	= ProtoField.new(string_format("Echo Properties"), 				"compact.optimized.echoProperties",					ftypes.UINT8,			nil,			base.HEX,		0x46),	-- Array; n = Number of layers * Number of columns
				EchoProperties_Bit0			= ProtoField.new(string_format("Reserved"), 					"compact.optimized.echoProperties.Bit_0",			ftypes.UINT8,			status_bool,	base.NONE,		0x1),
				EchoProperties_Bit1			= ProtoField.new(string_format("Reflector was detected"), 		"compact.optimized.echoProperties.reflector",		ftypes.UINT8,			status_bool,	base.NONE,		0x2),
				EchoProperties_Bit2			= ProtoField.new(string_format("Blooming was detected"), 		"compact.optimized.echoProperties.blooming",		ftypes.UINT8,			status_bool,	base.NONE,		0x4),
				EchoProperties_Bit3			= ProtoField.new(string_format("Reserved"), 					"compact.optimized.echoProperties.Bit_3",			ftypes.UINT8,			status_bool,	base.NONE,		0x8),
				EchoProperties_Bit4			= ProtoField.new(string_format("Reserved"), 					"compact.optimized.echoProperties.Bit_4",			ftypes.UINT8,			status_bool,	base.NONE,		0x10),
				EchoProperties_Bit5			= ProtoField.new(string_format("Reserved"), 					"compact.optimized.echoProperties.Bit_5",			ftypes.UINT8,			status_bool,	base.NONE,		0x20),
				EchoProperties_Bit6			= ProtoField.new(string_format("Particle was detected"), 		"compact.optimized.echoProperties.particle",		ftypes.UINT8,			status_bool,	base.NONE,		0x40),
				EchoProperties_Bit7			= ProtoField.new(string_format("Reserved"), 					"compact.optimized.echoProperties.Bit_7",			ftypes.UINT8,			status_bool,	base.NONE,		0x80),
				
		},
	--                                    ** ENCODER - DATA **
	encoder =
		{
			SenderID            			= ProtoField.new(string_format("Sender ID"), 					"compact.encoder.SenderID",							ftypes.UINT32,			nil,			base.DEC),
			FrameNumber						= ProtoField.new(string_format("Frame Number"), 				"compact.encoder.FrameNumber",						ftypes.UINT64,			nil,			base.DEC),
			TickCounterValue				= ProtoField.new(string_format("Tick counter value"), 			"compact.encoder.TickCounterValue",					ftypes.UINT32,			nil,			base.DEC),
			TickCounterValueAUX1     		= ProtoField.new(string_format("Tick counter value at AUX 1"), 	"compact.encoder.TickCounterValueAUX1",				ftypes.UINT32,			nil,			base.DEC),
			TickCounterValueAUX2    		= ProtoField.new(string_format("Tick counter value at AUX 2"), 	"compact.encoder.TickCounterValueAUX2",				ftypes.UINT32,			nil,			base.DEC),
			SpeedValue      				= ProtoField.new(string_format("Speed value"), 					"compact.encoder.SpeedValue",						ftypes.FLOAT,			nil,			base.NONE),
			TickTimestamp      				= ProtoField.new(string_format("Tick counter value timestamp"), "compact.encoder.TickTimestamp",					ftypes.ABSOLUTE_TIME,	nil,			base.UTC),
			AUX1timestamp					= ProtoField.new(string_format("AUX 1 timestamp"), 				"compact.encoder.AUX1timestamp",					ftypes.ABSOLUTE_TIME,	nil,			base.UTC),
			AUX2timestamp		    		= ProtoField.new(string_format("AUX 2 timestamp"), 				"compact.encoder.AUX2timestamp",					ftypes.ABSOLUTE_TIME,	nil,			base.UTC),
		},
	--									** AMBIENT LIGHT - DATA **
	ambientLight ={
			FrameNumber						= ProtoField.new(string_format("Frame Number"), 				"compact.ambient_light.FrameNumber",				ftypes.UINT64,			nil,			base.DEC),
			StartTimestamp					= ProtoField.new(string_format("Start time stamp"), 			"compact.ambient_light.StartTimestamp",				ftypes.ABSOLUTE_TIME,	nil,			base.UTC),
			StopTimestamp					= ProtoField.new(string_format("Stop time stamp"), 				"compact.ambient_light.StopTimestamp",				ftypes.ABSOLUTE_TIME,	nil,			base.UTC),
			NumberOfLayers					= ProtoField.new(string_format("Number of layers"), 			"compact.ambient_light.NumberOfLayers",				ftypes.UINT16,			nil,			base.DEC),
			NumberOfColumns					= ProtoField.new(string_format("Number of columns (slots)"), 	"compact.ambient_light.NumberOfColumns",			ftypes.UINT16,			nil,			base.DEC),
			HorizontalAngleStart    		= ProtoField.new(string_format("Horizontal angle start"), 		"compact.ambient_light.HorizontalAngleStart",		ftypes.FLOAT,			nil,			base.NONE),
			HorizontalAngleStop     		= ProtoField.new(string_format("Horizontal angle stop"), 		"compact.ambient_light.HorizontalAngleStop", 		ftypes.FLOAT,			nil,			base.NONE),
			VerticalAngleStart      		= ProtoField.new(string_format("Vertical angle start"), 		"compact.ambient_light.VerticalAngleStart", 		ftypes.FLOAT,			nil,			base.NONE),
			VerticalAngleStop       		= ProtoField.new(string_format("Vertical angle stop"), 			"compact.ambient_light.VerticalAngleStop", 			ftypes.FLOAT,			nil,			base.NONE),
			Encoding						= ProtoField.new(string_format("Encoding"), 					"compact.ambient_light.Encoding",					ftypes.UINT16,			nil,			base.DEC),
			AmbientLightData				= ProtoField.new(string_format("Ambient light data"), 			"compact.ambient_light.AmbientLightData",			ftypes.UINT16,			nil,			base.DEC),		-- Array; n = Number of layers * Number of columns

	},
	-- 									** HELPERS **
	helpers ={
			PayloadSize            			= ProtoField.new(string_format("Payload size"), 				"compact.helpers.PayloadSize",						ftypes.UINT32,			nil,			base.DEC),
	},
	
}
--[[
group
Expert group type: one of: expert.group.CHECKSUM, expert.group.SEQUENCE, expert.group.RESPONSE_CODE, expert.group.REQUEST_CODE, 
expert.group.UNDECODED, expert.group.REASSEMBLE, expert.group.MALFORMED, expert.group.DEBUG, expert.group.PROTOCOL, 
expert.group.SECURITY, expert.group.COMMENTS_GROUP, expert.group.DECRYPTION, expert.group.ASSUMPTION, expert.group.DEPRECATED, 
expert.group.RECEIVE, or expert.group.INTERFACE.
severity
Expert severity type: one of: expert.severity.COMMENT, expert.severity.CHAT, expert.severity.NOTE, expert.severity.WARN, or expert.severity.ERROR.
]]--
local ProtoExpert = {
	warnings = {
		UnknownTelegramType					= ProtoExpert.new("compact.helpers.UnknownTelegramType", 	"Unknown Telegram Type", 	expert.group.PROTOCOL,	expert.severity.WARN),
		UnknownTelegramVersion				= ProtoExpert.new("compact.helpers.UnknownTelegramVersion", "Unknown Telegram Version", expert.group.PROTOCOL,	expert.severity.WARN),
	},
	errors = {
		IncorrectCRC						= ProtoExpert.new("compact.crc.IncorrectCRC", 				"Incorrect CRC", 			expert.group.CHECKSUM,	expert.severity.ERROR),
	},
}
local fields = {}
for _,t in pairs(compact_fields) do
    for k,v in pairs(t) do
        fields[#fields+1] = v
    end
end
SICK__CompactProtocol.fields = fields
local experts_fields = {}
for _,t in pairs(ProtoExpert) do
	for k,v in pairs(t) do
		experts_fields[#experts_fields+1] = v
	end
end
SICK__CompactProtocol.experts = experts_fields
--[[++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  
												MAIN PROGRAM
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++]]--

-- Is integer function
local function is_integer(n)
  return n == math.floor(n)
end

------------------------------------------------------------------------------
--- CRC32 (IEEE 802.3 / zlib, polynomial 0xEDB88320)
--- Pre-computed lookup table + calculation function
------------------------------------------------------------------------------
local crc32_lut = {}
do
	for i = 0, 255 do
		local crc = i
		for _ = 1, 8 do
			if (crc & 1) ~= 0 then
				crc = (crc >> 1) ~ 0xEDB88320
			else
				crc = crc >> 1
			end
		end
		crc32_lut[i] = crc & 0xFFFFFFFF
	end
end

--- Calculate CRC32 over a TvbRange
--- @param tvbrange TvbRange  buffer slice to checksum
--- @return number  32-bit CRC value
local function calc_crc32(tvbrange)
	local crc = 0xFFFFFFFF
	for i = 0, tvbrange:len() - 1 do
		local byte = tvbrange(i, 1):uint()
		crc = ((crc >> 8) ~ crc32_lut[(crc ~ byte) & 0xFF]) & 0xFFFFFFFF
	end
	return (crc ~ 0xFFFFFFFF) & 0xFFFFFFFF
end

---	Function to convert usec to NSTime object
---	To show Data and Time in Tree
--- @param buffer TvbRange  buffer slice to convert
--- @return NSTime converted timestamp
local function getTime(buffer)
	local usec  = buffer():le_uint64()
	local sec  = (usec / 1000000):tonumber()
	local nsec = (usec % 1000000):tonumber() * 1000
	local nstime = NSTime.new(sec, nsec)
	return nstime
end


--- Generate Header subtree
local function Create_subtree_header(Buffer, Subtree)
	-- Telegram Type
	local telegramType = Buffer(header_offset["telegramType"][1], header_offset["telegramType"][2]):le_uint()
	-- Telegram Version
	local telegramVersion = Buffer(header_offset["telegramVersion"][1], header_offset["telegramVersion"][2]):le_uint()
	-- define Header
	local Header
	local HeaderSubtree
	if telegramType == 1 or (telegramType == 4 and telegramVersion == 1) then
		Header = Buffer(header_offset["Header"][1], header_offset["Header"][2])
		HeaderSubtree = Subtree:add(SICK__CompactProtocol, Header(header_offset["Header"][1], header_offset["Header"][2]), "Header_V1")
	elseif telegramType == 2 then
		return nil, nil, nil, nil, nil	-- No header for Telegram Type 2; return nil to indicate this
	elseif telegramType > 2 then
		Header = Buffer(header_offset["Header_V2"][1], header_offset["Header_V2"][2])
		HeaderSubtree = Subtree:add(SICK__CompactProtocol, Header(header_offset["Header_V2"][1], header_offset["Header_V2"][2]), "Header_V2")
	end
	-- Start Of Frame
	HeaderSubtree:add_le(compact_fields.header.StartOfFrame, Header(header_offset["startOfFrame"][1],header_offset["startOfFrame"][2]))
	-- Telegram Type
	local TelegramTypeField = HeaderSubtree:add_le(compact_fields.header.TelegramType, Header(header_offset["telegramType"][1], header_offset["telegramType"][2]))
	-- Telegram Counter
	HeaderSubtree:add_le(compact_fields.header.TelegramCounter, Header(header_offset["telegramCounter"][1], header_offset["telegramCounter"][2]))
	-- Time Stamp Transmit
	HeaderSubtree:add(compact_fields.header.TimeStampTransmit, Header(header_offset["timeStampTransmit"][1], header_offset["timeStampTransmit"][2]), getTime(Header(header_offset["timeStampTransmit"][1], header_offset["timeStampTransmit"][2])))
	-- Telegram Version
	local TelegramVersionField = HeaderSubtree:add_le(compact_fields.header.TelegramVersion, Header(header_offset["telegramVersion"][1], header_offset["telegramVersion"][2]))

	if telegramType == 1 or (telegramType == 4 and telegramVersion == 1) then
		-- Size Module 0
		HeaderSubtree:add_le(compact_fields.header.SizeModule0, Header(header_offset["sizeModule0"][1], header_offset["sizeModule0"][2])):append_text(" Bytes")
		-- Define Modules
		local Module = {}
		-- Define Module 0
		Module[0] = Buffer(Header:len(), Header(header_offset["sizeModule0"][1], header_offset["sizeModule0"][2]):le_uint())
		return telegramVersion, Module, Header, TelegramTypeField, TelegramVersionField
	elseif telegramType > 2 then
		-- Payload Length
		HeaderSubtree:add_le(compact_fields.header.PayloadLength, Header(header_offset["payloadLength"][1], header_offset["payloadLength"][2]))
		-- SenderId
		HeaderSubtree:add_le(compact_fields.header.SenderId, Header(header_offset["senderId"][1], header_offset["senderId"][2]))
		-- Define payload
		local Payload = {}
		-- Define Module 0
		Payload[0] = Buffer(Header:len(), Header(header_offset["payloadLength"][1], header_offset["payloadLength"][2]):le_uint())
		return telegramVersion, Payload, Header, TelegramTypeField, TelegramVersionField	
	end

	

end
------------------------------------------------------------------------------
--- CRC32 subtree
------------------------------------------------------------------------------ 
--- Generate and show CRC in the Tree
--- @param Buffer TvbRange
--- @param Subtree Subtree
local function Create_subtree_crc(Buffer, Subtree, draw_for_IMU_V1)
	-- CRC Buffer (last 4 bytes)
	local crc_len    = crc_offset["CRC"][2]
	local CrcBuffer  = Buffer(Buffer:len() - crc_len, crc_len)
	-- Calculate CRC32 over all bytes except the CRC field itself
	local computed   = calc_crc32(Buffer(0, Buffer:len() - crc_len))
	local stored     = CrcBuffer:le_uint()
	-- CRC subtree
	-- or CRC ProtoField
	draw_for_IMU_V1 = draw_for_IMU_V1 or false

	if not draw_for_IMU_V1 then
		local CrcSubtree = Subtree:add(SICK__CompactProtocol, CrcBuffer, "CRC")
		local node = CrcSubtree:add_le(compact_fields.crc.crc, CrcBuffer)
		if stored == computed then
			node:append_text(string.format(" [correct, 0x%08x]", computed))
		else
			node:append_text(string.format(" [INCORRECT! expected: 0x%08x]", computed))
			node:add_proto_expert_info(ProtoExpert.errors.IncorrectCRC)
		end
	else
		local node = Subtree:add_le(compact_fields.crc.crc, CrcBuffer)
		if stored == computed then
			node:append_text(string.format(" [correct, 0x%08x]", computed))
		else
			node:append_text(string.format(" [INCORRECT! expected: 0x%08x]", computed))
			node:add_proto_expert_info(ProtoExpert.errors.IncorrectCRC)
		end
	end
end


------------------------------------------------------------------------------
--- Telegram Type 1
--- Primary Data - Spherical Coordinates
------------------------------------------------------------------------------
--	Function to generate and show Modules, Meta Data and Measurement Data in the Tree
local function Create_subtree_Module_N(Buffer, Subtree, Module, Module_number, MetaDataModule, telegramVersion)

	--											** Meta Data **

	local module_text_map = {
		[0] = " (Standard)",
		[1] = " (Standard)",
		[2] = " (HighRes)",
		[3] = " (HighRes)",
	}
	local layer_text_module_0_map = {
		[1] = "1",
		[2] = "2",
		[3] = "3",
		[4] = "4",
		[5] = "5",
		[6] = "7",
		[7] = "8",
	}
	local layer_text_module_1_map = {
		[1] = "9",
		[2] = "10",
		[3] = "11",
		[4] = "12",
		[5] = "14",
		[6] = "15",
		[7] = "16",
	}

	-- Add Module subtree + module number
	local ModuleSubtree = Subtree:add(SICK__CompactProtocol, Module(), "Module " .. Module_number .. module_text_map[Module_number])
	
	-- Add Meta data to Module subtree
	local MetaDataModuleSubtree = ModuleSubtree:add(SICK__CompactProtocol, MetaDataModule(0, MetaDataModule:len()), "Meta Data Module " .. Module_number .. module_text_map[Module_number])
	-- Segment counter / Frame number / Sender ID
	-- SegmentCounter
	MetaDataModuleSubtree:add_le(compact_fields.compact.SegmentCounter, MetaDataModule(meta_data_offset["SegmentCounter"][1], meta_data_offset["SegmentCounter"][2]))
	-- FrameNumber
	MetaDataModuleSubtree:add_le(compact_fields.compact.FrameNumber, MetaDataModule(meta_data_offset["FrameNumber"][1], meta_data_offset["FrameNumber"][2]))
	-- SenderId
	MetaDataModuleSubtree:add_le(compact_fields.compact.SenderId, MetaDataModule(meta_data_offset["SenderId"][1], meta_data_offset["SenderId"][2]))
	-- Lines / Beams / Echos in module
	-- numberOfLinesInModule
	local LinesInModule = MetaDataModule(meta_data_offset["NumberOfLinesInModule"][1], meta_data_offset["NumberOfLinesInModule"][2]):le_uint()
	MetaDataModuleSubtree:add_le(compact_fields.compact.NumberOfLinesInModule, MetaDataModule(meta_data_offset["NumberOfLinesInModule"][1], meta_data_offset["NumberOfLinesInModule"][2]))
	-- NumberOfBeamsPerScan
	local beamsPerScan = MetaDataModule(meta_data_offset["NumberOfBeamsPerScan"][1], meta_data_offset["NumberOfBeamsPerScan"][2]):le_uint()
	MetaDataModuleSubtree:add_le(compact_fields.compact.NumberOfBeamsPerScan, MetaDataModule(meta_data_offset["NumberOfBeamsPerScan"][1], meta_data_offset["NumberOfBeamsPerScan"][2]))
	-- NumberOfEchosPerBeam
	local echosPerScan = MetaDataModule(meta_data_offset["NumberOfEchosPerBeam"][1], meta_data_offset["NumberOfEchosPerBeam"][2]):le_uint()
	MetaDataModuleSubtree:add_le(compact_fields.compact.NumberOfEchosPerBeam, MetaDataModule(meta_data_offset["NumberOfEchosPerBeam"][1], meta_data_offset["NumberOfEchosPerBeam"][2]))
	--											** Time Stamps	**
	--											** START	**
	-- Time START Stamp subtree
	-- TimeStampStart	32, n*8
	local offset = meta_data_offset["TimeStampStart"][1]
	local timeStart_len = meta_data_offset["TimeStampStart"][2]
	local aTimeStampStartSubtree = MetaDataModuleSubtree:add(SICK__CompactProtocol, MetaDataModule(offset, LinesInModule * timeStart_len), "Time Stamp Start Status")
	-- Time START Array
	local timeStart = {}
	for i=1, LinesInModule do
		local offset_i = offset + (i - 1 ) * timeStart_len
		aTimeStampStartSubtree:add_le(compact_fields.compact.aTimeStampStart, MetaDataModule(offset_i, timeStart_len), getTime(MetaDataModule(offset_i, timeStart_len))):append_text(" (Line" .. i .. ")")
		timeStart[i - 1] = MetaDataModule(offset_i, timeStart_len):le_uint64()
	end
	--											** STOP	**
	-- Time STOP Stamp subtree
	-- TimeStampStop	32+n*8, n*8
	local timeStop_len = meta_data_offset["TimeStampStop"][2]
	offset = meta_data_offset["TimeStampStart"][1] + LinesInModule * timeStart_len
	local aTimeStampStopSubtree = MetaDataModuleSubtree:add(SICK__CompactProtocol, MetaDataModule(offset, LinesInModule * timeStop_len), "Time Stamp Stop Status")
	-- Time STOP Array
	local timeStop = {}
	for i=1, LinesInModule do
		local offset_i = offset + (i - 1 ) * timeStop_len
		aTimeStampStopSubtree:add_le(compact_fields.compact.aTimeStampStop, MetaDataModule(offset_i, timeStop_len), getTime(MetaDataModule(offset_i, timeStop_len))):append_text(" (Line" .. i .. ")")
		timeStop[i - 1] = MetaDataModule(offset_i, timeStop_len):le_uint64()
	end
	--											** PHI **
	-- Phi subtree
	-- Phi	32+n*16, n*4
	offset = meta_data_offset["TimeStampStart"][1] + LinesInModule * (timeStart_len + timeStop_len)
	local phi_len = meta_data_offset["Phi"][2]
	local aPhiSubtree = MetaDataModuleSubtree:add(SICK__CompactProtocol, MetaDataModule(offset, LinesInModule * phi_len), "Phi")
	-- Phi 
	local phi = {}
	for i=1, LinesInModule do
		local offset_i = offset + (i - 1 ) * phi_len
		local phi_deg = MetaDataModule(offset_i, phi_len):le_float() * 180 / math.pi
		phi[i] = phi_deg
		aPhiSubtree:add_le(compact_fields.compact.aPhi, MetaDataModule(offset_i, phi_len)):append_text(" rad, ".. phi_deg .. "° " .. "(Line" .. i .. ")")
	end
	--											** THETA **
	--											** START **
	-- Theta START subtree
	-- Theta start	32+n*20, n*4
	offset = meta_data_offset["TimeStampStart"][1] + LinesInModule * (timeStart_len + timeStop_len + phi_len)
	local thetaStart_len = meta_data_offset["ThetaStart"][2]
	local aThetaStartSubtree = MetaDataModuleSubtree:add(SICK__CompactProtocol, MetaDataModule(offset, LinesInModule * thetaStart_len), "Theta Start")
	-- Theta Start Array
	
	local thetaStart = {}
	for i=1, LinesInModule do
		local offset_i = offset + (i - 1 ) * thetaStart_len
		local thetaStart_deg = MetaDataModule(offset_i, thetaStart_len):le_float() * 180 / math.pi
		aThetaStartSubtree:add_le(compact_fields.compact.aThetaStart, MetaDataModule(offset_i, thetaStart_len)):append_text( " rad, " .. thetaStart_deg .. "° " .. "(Line" .. i.. ")")
		thetaStart[i] = MetaDataModule(offset_i, thetaStart_len):le_float()
	end

	--											** STOP **
	-- Theta STOP subtree
	-- Theta stop	32+n*24, n*4
	offset = meta_data_offset["TimeStampStart"][1] + LinesInModule * (timeStart_len + timeStop_len + phi_len + thetaStart_len)
	local thetaStop_len = meta_data_offset["ThetaStop"][2]
	local aThetaStopSubtree = MetaDataModuleSubtree:add(SICK__CompactProtocol, MetaDataModule(offset, LinesInModule * thetaStop_len), "Theta Stop")
	-- Theta STOP Array
	
	local thetaStop = {}
	for i=1, LinesInModule do
		local offset_i = offset + (i - 1 ) * thetaStop_len
		local thetaStop_deg = MetaDataModule(offset_i, thetaStop_len):le_float() * 180 / math.pi
		aThetaStopSubtree:add_le(compact_fields.compact.aThetaStop, MetaDataModule(offset_i, thetaStop_len)):append_text( " rad, " .. thetaStop_deg .. "° " .. "(Line" .. i.. ")")
		thetaStop[i] = MetaDataModule(offset_i, thetaStop_len):le_float()
	end
	
	offset = (LinesInModule - 1) * (timeStart_len + timeStop_len + phi_len + thetaStart_len + thetaStop_len)
	
	local scalingFactor = 1
	if telegramVersion > 3 then
		-- Scaling Factor
		-- Scaling factor	60+n*28, 4
		local scalingFactorOffset = meta_data_offset["DistanceScalingFactor"][1] + offset
		--local offset = (LinesInModule - 1) * (timeStart_len + timeStop_len + phi_len + thetaStart_len + thetaStop_len)
		local scalingFactor_len = meta_data_offset["DistanceScalingFactor"][2]
		scalingFactor = MetaDataModule(scalingFactorOffset, scalingFactor_len):le_float()
		MetaDataModuleSubtree:add_le(compact_fields.compact.DistanceScalingFactor, MetaDataModule(scalingFactorOffset, scalingFactor_len))
	else
		offset = offset - meta_data_offset["DistanceScalingFactor"][2]	-- If scaling factor is not present, adjust offset for next fields accordingly
	end
	
	-- Next Module size
	-- Next Module size		64+n*28, 4
	local nextModuleOffset = meta_data_offset["NextModuleSize"][1] + offset
	local nextModule_len = meta_data_offset["NextModuleSize"][2]
	local nextModuleSize = MetaDataModule(nextModuleOffset , nextModule_len):le_uint()
	MetaDataModuleSubtree:add_le(compact_fields.compact.NextModuleSize, MetaDataModule(nextModuleOffset, nextModule_len)):append_text(" Bytes")
	-- RESERVED
	-- RESERVED		68+n*28, 1
	MetaDataModuleSubtree:add_le(compact_fields.compact.Reserved1, MetaDataModule(meta_data_offset["Reserved1"][1] + offset, meta_data_offset["Reserved1"][2]))
	-- Data Content Echo subtree
	-- Data Content Echo		69+n*28, 1
	local dataContentEchoOffset = meta_data_offset["DataContentEchos"][1] + offset
	local dataContentEcho_len = meta_data_offset["DataContentEchos"][2]
	local DataContentEchosSubtree = MetaDataModuleSubtree:add_le(compact_fields.compact.DataContentEchos, MetaDataModule(dataContentEchoOffset, dataContentEcho_len))
	DataContentEchosSubtree:add(compact_fields.compact.DataContentEchos_Bit0, MetaDataModule(dataContentEchoOffset, dataContentEcho_len))
	DataContentEchosSubtree:add(compact_fields.compact.DataContentEchos_Bit1, MetaDataModule(dataContentEchoOffset, dataContentEcho_len))
	DataContentEchosSubtree:add(compact_fields.compact.DataContentEchos_Bit2, MetaDataModule(dataContentEchoOffset, dataContentEcho_len))
	DataContentEchosSubtree:add(compact_fields.compact.DataContentEchos_Bit3, MetaDataModule(dataContentEchoOffset, dataContentEcho_len))
	DataContentEchosSubtree:add(compact_fields.compact.DataContentEchos_Bit4, MetaDataModule(dataContentEchoOffset, dataContentEcho_len))
	DataContentEchosSubtree:add(compact_fields.compact.DataContentEchos_Bit5, MetaDataModule(dataContentEchoOffset, dataContentEcho_len))
	DataContentEchosSubtree:add(compact_fields.compact.DataContentEchos_Bit6, MetaDataModule(dataContentEchoOffset, dataContentEcho_len))
	DataContentEchosSubtree:add(compact_fields.compact.DataContentEchos_Bit7, MetaDataModule(dataContentEchoOffset, dataContentEcho_len))
	-- Check if data content has distance values at bit 0
	local data_content_echos_dist_values = (MetaDataModule(dataContentEchoOffset, dataContentEcho_len):uint() & (1 << 0)) ~= 0
	-- Check if data content has RSSI values at bit 1
	local data_content_echos_rssi_values = (MetaDataModule(dataContentEchoOffset, dataContentEcho_len):uint() & (1 << 1)) ~= 0
	-- Data content Beams subtree
	-- Data content Beams	70+n*28, 1
	local dataContentBeamsOffset = meta_data_offset["DataContentBeams"][1] + offset
	local dataContentBeams_len = meta_data_offset["DataContentBeams"][2]
	local DataContentBeamsSubtree = MetaDataModuleSubtree:add(compact_fields.compact.DataContentBeams, MetaDataModule(dataContentBeamsOffset, dataContentBeams_len))
	DataContentBeamsSubtree:add(compact_fields.compact.DataContentBeams_Bit0, MetaDataModule(dataContentBeamsOffset, dataContentBeams_len))
	DataContentBeamsSubtree:add(compact_fields.compact.DataContentBeams_Bit1, MetaDataModule(dataContentBeamsOffset, dataContentBeams_len))
	DataContentBeamsSubtree:add(compact_fields.compact.DataContentBeams_Bit2, MetaDataModule(dataContentBeamsOffset, dataContentBeams_len))
	DataContentBeamsSubtree:add(compact_fields.compact.DataContentBeams_Bit3, MetaDataModule(dataContentBeamsOffset, dataContentBeams_len))
	DataContentBeamsSubtree:add(compact_fields.compact.DataContentBeams_Bit4, MetaDataModule(dataContentBeamsOffset, dataContentBeams_len))
	DataContentBeamsSubtree:add(compact_fields.compact.DataContentBeams_Bit5, MetaDataModule(dataContentBeamsOffset, dataContentBeams_len))
	DataContentBeamsSubtree:add(compact_fields.compact.DataContentBeams_Bit6, MetaDataModule(dataContentBeamsOffset, dataContentBeams_len))
	DataContentBeamsSubtree:add(compact_fields.compact.DataContentBeams_Bit7, MetaDataModule(dataContentBeamsOffset, dataContentBeams_len))
	-- Check if data content has distance values at bit 0
	local data_content_beam_further_properties = (MetaDataModule(dataContentBeamsOffset, dataContentBeams_len):uint() & (1 << 0)) ~= 0
	-- Check if data content has azimuth angle values at bit 1
	local data_content_beam_azimuth_angle = (MetaDataModule(dataContentBeamsOffset, dataContentBeams_len):uint() & (1 << 1)) ~= 0
	
	-- RESERVED
	-- RESERVED		71+n*28, 1
	MetaDataModuleSubtree:add_le(compact_fields.compact.Reserved2, MetaDataModule(meta_data_offset["Reserved2"][1] + offset, meta_data_offset["Reserved2"][2]))
	
	
	--										** MODULE 0 **
	-- define MeasurementData Module 0
	local MeasurementDataModule = {}
	local MeasurementDataModuleSubtree = {}
	local dist_len = 0
	if data_content_echos_dist_values then
		dist_len = measurement_data_offset["Distance"][2]
	end
	local rssi_len = 0
	if data_content_echos_rssi_values then
		rssi_len = measurement_data_offset["RSSI"][2]
	end
	local beamCharacteristic_len = 0
	if data_content_beam_further_properties then
		beamCharacteristic_len = measurement_data_offset["Beam characteristics"][2]
	end
	local theta_len = 0
	if data_content_beam_azimuth_angle then
		theta_len = measurement_data_offset["Azimuth angle (theta)"][2]
	end
	
	local data_content_echos_len = dist_len + rssi_len
	local data_content_beams_len = beamCharacteristic_len + theta_len
	
	--										** MODULE > 0 **
	
	for i = 1, beamsPerScan do
		local sizeOfMeasurementData = LinesInModule * echosPerScan * data_content_echos_len + LinesInModule * data_content_beams_len
		-- check if there is measurement data, if not, skip the module completely
		if sizeOfMeasurementData == 0 then return end

		MeasurementDataModule[i] = Buffer(MetaDataModule:offset() + MetaDataModule:len() + sizeOfMeasurementData * (i -1), sizeOfMeasurementData)
		
		MeasurementDataModuleSubtree[i] = ModuleSubtree:add(SICK__CompactProtocol, MeasurementDataModule[i], "Measurement Data Module " .. Module_number .. module_text_map[Module_number] .. " (Beams set " .. i .. ")")
		

		local CurrentLineBuffer = {}
		for j = 1, LinesInModule do
			
			CurrentLineBuffer[j] = Buffer(MetaDataModule:offset() + MetaDataModule:len() + sizeOfMeasurementData * (i - 1), sizeOfMeasurementData)
			local individual_len = data_content_echos_len * echosPerScan + data_content_beams_len

			local CurrentLineSubtree
			if LinesInModule == 1 then
				if Module_number == 0 then
					CurrentLineSubtree = MeasurementDataModuleSubtree[i]:append_text(" (Layer " .. j .. ")")
				elseif Module_number == 1 then
					CurrentLineSubtree = MeasurementDataModuleSubtree[i]:append_text(" (Layer " .. j .. ")")
				elseif Module_number == 2 then
					CurrentLineSubtree = MeasurementDataModuleSubtree[i]:append_text(" (Layer 6)")
				elseif Module_number == 3 then
					CurrentLineSubtree = MeasurementDataModuleSubtree[i]:append_text(" (Layer 13)")
				end
			elseif 1 < LinesInModule and LinesInModule < 8 then
				if Module_number == 0 then
					CurrentLineSubtree = MeasurementDataModuleSubtree[i]:add_le(compact_fields.compact.CurrentLine, CurrentLineBuffer[j]((j - 1) * individual_len, individual_len)):append_text(" " .. layer_text_module_0_map[j])
				elseif Module_number == 1 then
					CurrentLineSubtree = MeasurementDataModuleSubtree[i]:add_le(compact_fields.compact.CurrentLine, CurrentLineBuffer[j]((j - 1) * individual_len, individual_len)):append_text(" " .. layer_text_module_1_map[j])
				end
			else
				CurrentLineSubtree = MeasurementDataModuleSubtree[i]:add_le(compact_fields.compact.CurrentLine, CurrentLineBuffer[j]((j - 1) * individual_len, individual_len)):append_text(" " .. j)
			end

			for k = 1, echosPerScan do
				local offsetDist = (j - 1) * individual_len + (k - 1) * data_content_echos_len
				local offsetRSSI = offsetDist + dist_len
				local dist = MeasurementDataModule[i](offsetDist, dist_len):le_uint() * scalingFactor
				-- data contents ECHO
				if data_content_echos_dist_values then
					if telegramVersion > 3 then
						CurrentLineSubtree:add_le(compact_fields.compact.Distance, MeasurementDataModule[i](offsetDist, dist_len)):append_text(" mm * Scaling Factor("..scalingFactor..") = "..dist.." mm (ECHO" .. k .. ")")
					else
						CurrentLineSubtree:add_le(compact_fields.compact.Distance, MeasurementDataModule[i](offsetDist, dist_len)):append_text(" mm (ECHO" .. k .. ")")
					end
				end
				-- data contents RSSI
				if data_content_echos_rssi_values then
					CurrentLineSubtree:add_le(compact_fields.compact.RSSI, MeasurementDataModule[i](offsetRSSI, rssi_len)):append_text(" (RSSI" .. k .. ")")
				end
			end
			local offsetBeamCharacteristic = (j - 1) * individual_len + echosPerScan * data_content_echos_len
			-- data contents further properties
			if data_content_beam_further_properties then
				local BeamCharacteristicsSubtree = CurrentLineSubtree:add_le(compact_fields.compact.BeamCharacteristics, CurrentLineBuffer[j](offsetBeamCharacteristic, beamCharacteristic_len))
				BeamCharacteristicsSubtree:add(compact_fields.compact.BeamCharacteristics_Bit0, CurrentLineBuffer[j](offsetBeamCharacteristic, beamCharacteristic_len))
				BeamCharacteristicsSubtree:add(compact_fields.compact.BeamCharacteristics_Bit1, CurrentLineBuffer[j](offsetBeamCharacteristic, beamCharacteristic_len))
				BeamCharacteristicsSubtree:add(compact_fields.compact.BeamCharacteristics_Bit2, CurrentLineBuffer[j](offsetBeamCharacteristic, beamCharacteristic_len))
				BeamCharacteristicsSubtree:add(compact_fields.compact.BeamCharacteristics_Bit3, CurrentLineBuffer[j](offsetBeamCharacteristic, beamCharacteristic_len))
				BeamCharacteristicsSubtree:add(compact_fields.compact.BeamCharacteristics_Bit4, CurrentLineBuffer[j](offsetBeamCharacteristic, beamCharacteristic_len))
				BeamCharacteristicsSubtree:add(compact_fields.compact.BeamCharacteristics_Bit5, CurrentLineBuffer[j](offsetBeamCharacteristic, beamCharacteristic_len))
				BeamCharacteristicsSubtree:add(compact_fields.compact.BeamCharacteristics_Bit6, CurrentLineBuffer[j](offsetBeamCharacteristic, beamCharacteristic_len))
				BeamCharacteristicsSubtree:add(compact_fields.compact.BeamCharacteristics_Bit7, CurrentLineBuffer[j](offsetBeamCharacteristic, beamCharacteristic_len))
			end
			-- data contents azimuth angle
			if data_content_beam_azimuth_angle then
				local offsetAzimuthAngleTheta = offsetBeamCharacteristic + beamCharacteristic_len
				--	Azimuth Angle theta
				--[[
								uint16 Integers, where the following conversion applies:
								•a_uint: Angle value as integer
								•a_rad: Angle value in radians.
								•a_rad = (a_uint - 16384)/ 5215
								This conversion ensures that the maximum allowed
								value range of [-pi, 3*pi] is fully utilised.
				]]--
				local AzimuthAngleTheta_rad = (CurrentLineBuffer[j](offsetAzimuthAngleTheta, theta_len):le_uint() - 16384) / 5215
				local AzimuthAngleTheta_deg = AzimuthAngleTheta_rad * 180 / math.pi
				CurrentLineSubtree:add_le(compact_fields.compact.AzimuthAngleTheta, MeasurementDataModule[i](offsetAzimuthAngleTheta, theta_len)):append_text(", ".. AzimuthAngleTheta_rad.." rad, " .. AzimuthAngleTheta_deg.. "°")
				-- Theta angle in Beam characteristics doesn't match with Theta in Meta data because of:
				-- Theta Start in Meta Data is 4 Bytes
				-- Theta angle in Beam characteristics is 2 Bytes
				-- Theta in Beam characteristics is for multiScan100, it has another value for each module and should be taken for actual position
				CurrentLineSubtree:append_text(" " .. AzimuthAngleTheta_rad.." rad, " .. AzimuthAngleTheta_deg.. "°")	-- Show RAD and DEG
				-- CurrentLineSubtree:append_text(" (Theta " .. AzimuthAngleTheta_deg.. "°)")	-- Show only DEG
			else
				-- Theta calculation
				local fov_theta = math.abs(thetaStart[j] * 180 / math.pi) + math.abs(thetaStop[j] * 180 / math.pi)
				local resolution = fov_theta / (beamsPerScan - 1)
				local current_theta = thetaStart[j] * 180 / math.pi + resolution * (i - 1)
				--  Phi data, take angle from meta data
				CurrentLineSubtree:append_text(" (Phi " .. phi[j].. "°, Theta ".. current_theta .."°)")
			end
		end
	end
	
	-- Return Next Module size for loop
	return nextModuleSize

end
--	Function to generate and show Module 0, Meta Data and Measurement Data in the Tree
local function Create_subtree_module_0_V4(Buffer, Header, Module, Subtree, telegramVersion)
	-- Define MetaData Module 0
	local linesInModule = Buffer(Header:offset() + Header:len() + meta_data_offset["NumberOfLinesInModule"][1], meta_data_offset["NumberOfLinesInModule"][2]):le_uint()
	local measurementData_len = meta_data_offset["TimeStampStart"][2] + meta_data_offset["TimeStampStop"][2] + meta_data_offset["Phi"][2] + meta_data_offset["ThetaStart"][2] + meta_data_offset["ThetaStop"][2]
	local MetaDataModule_len
	if telegramVersion > 3 then
		MetaDataModule_len = meta_data_offset["Meta Data"][2] + (linesInModule - 1) * measurementData_len
	else
		MetaDataModule_len = meta_data_offset["Meta Data"][2] - meta_data_offset["DistanceScalingFactor"][2] + (linesInModule - 1) * measurementData_len
	end
	
	-- Define Meta Data
	local MetaDataModule = {}
	-- Define Meta Data 0
	MetaDataModule[0] = Buffer(Header:offset() + Header:len(), MetaDataModule_len)
	local Module_number = 0
	local nextModuleSize = Create_subtree_Module_N(Buffer, Subtree, Module[0] , Module_number, MetaDataModule[0], telegramVersion)
	--for i = 1, 4 do
	local i = 1
	while nextModuleSize ~= 0 do
		if  nextModuleSize ~= 0 then
			local Module_number = i
			linesInModule = Buffer(Module[i-1]:offset() + Module[i-1]:len() + meta_data_offset["NumberOfLinesInModule"][1], meta_data_offset["NumberOfLinesInModule"][2]):le_uint()
			local MetaDataModule_len
			if telegramVersion > 3 then
				MetaDataModule_len = meta_data_offset["Meta Data"][2] + (linesInModule - 1) * measurementData_len
			else
				MetaDataModule_len = meta_data_offset["Meta Data"][2] - meta_data_offset["DistanceScalingFactor"][2] + (linesInModule - 1) * measurementData_len
			end
			-- Define Module N
			Module[i] = Buffer(Module[i-1]:offset() + Module[i-1]:len(), nextModuleSize)
			-- define Meta Data N
			MetaDataModule[i] = Buffer(Module[i-1]:offset() + Module[i-1]:len(), MetaDataModule_len)
			nextModuleSize = 0
			nextModuleSize = Create_subtree_Module_N(Buffer, Subtree, Module[i], Module_number, MetaDataModule[i], telegramVersion)
			i = i + 1

		end
	end
end

------------------------------------------------------------------------------
--- Telegram Type 2
--- IMU (legacy)
------------------------------------------------------------------------------
-- Function to generate and show IMU Data Payload Telegram version 1 in the Tree
local function Create_subtree_imu_V1(Buffer, Subtree)
	-- IMU Subtree 
	local IMUSubtree = Subtree:add(SICK__CompactProtocol, Buffer(imu_data_offset["IMUData"][1], imu_data_offset["IMUData"][2]), "IMU Data")
	-- start of frame
	IMUSubtree:add_le(compact_fields.imu.StartOfFrame, Buffer(imu_data_offset["Start of Frame"][1], imu_data_offset["Start of Frame"][2]))
	-- Telegram Type
	IMUSubtree:add_le(compact_fields.imu.TelegramType, Buffer(imu_data_offset["Telegram Type"][1], imu_data_offset["Telegram Type"][2]))
	-- Telegram Version
	IMUSubtree:add_le(compact_fields.imu.TelegramVersion, Buffer(imu_data_offset["Telegram version"][1], imu_data_offset["Telegram version"][2]))
	-- Acceleration X
	IMUSubtree:add_le(compact_fields.imu.AccelerationX, Buffer(imu_data_offset["Acceleration x"][1], imu_data_offset["Acceleration x"][2])):append_text(" m/s²")
	-- Acceleration Y
	IMUSubtree:add_le(compact_fields.imu.AccelerationY, Buffer(imu_data_offset["Acceleration y"][1], imu_data_offset["Acceleration y"][2])):append_text(" m/s²")
	-- Acceleration Z
	IMUSubtree:add_le(compact_fields.imu.AccelerationZ, Buffer(imu_data_offset["Acceleration z"][1], imu_data_offset["Acceleration z"][2])):append_text(" m/s²")
	-- Velocity X
	IMUSubtree:add_le(compact_fields.imu.VelocityX, Buffer(imu_data_offset["Angular velocity x"][1], imu_data_offset["Angular velocity x"][2])):append_text(" rad/s")
	-- Velocity Y
	IMUSubtree:add_le(compact_fields.imu.VelocityY, Buffer(imu_data_offset["Angular velocity y"][1], imu_data_offset["Angular velocity y"][2])):append_text(" rad/s")
	-- Velocity Z
	IMUSubtree:add_le(compact_fields.imu.VelocityZ, Buffer(imu_data_offset["Angular velocity z"][1], imu_data_offset["Angular velocity z"][2])):append_text(" rad/s")
	-- Orientation W
	IMUSubtree:add_le(compact_fields.imu.OrientationW, Buffer(imu_data_offset["Orientation quaternion w"][1], imu_data_offset["Orientation quaternion w"][2]))
	-- Orientation X
	IMUSubtree:add_le(compact_fields.imu.OrientationX, Buffer(imu_data_offset["Orientation quaternion x"][1], imu_data_offset["Orientation quaternion x"][2]))
	-- Orientation Y
	IMUSubtree:add_le(compact_fields.imu.OrientationY, Buffer(imu_data_offset["Orientation quaternion y"][1], imu_data_offset["Orientation quaternion y"][2]))
	-- Orientation Z
	IMUSubtree:add_le(compact_fields.imu.OrientationZ, Buffer(imu_data_offset["Orientation quaternion z"][1], imu_data_offset["Orientation quaternion z"][2]))
	-- IMU Sensor Time stamp
	IMUSubtree:add(compact_fields.imu.ImuTimestamp, Buffer(imu_data_offset["IMU sensor time stamp"][1], imu_data_offset["IMU sensor time stamp"][2]), getTime(Buffer(imu_data_offset["IMU sensor time stamp"][1], imu_data_offset["IMU sensor time stamp"][2])))
	-- Check Sum
	-- IMUSubtree:add_le(compact_fields.imu.CheckSum, Buffer(imu_data_offset["Check sum"][1], imu_data_offset["Check sum"][2]))
	-- CRC subtree
	Create_subtree_crc(Buffer, IMUSubtree, true)
end

------------------------------------------------------------------------------
--- Telegram Type 3
--- Ambient Light
------------------------------------------------------------------------------
local function Create_subtree_ambient_light_V1(Buffer, Subtree)
	-- Ambient Light Subtree 
	local AmbientLightSubtree = Subtree:add(SICK__CompactProtocol, Buffer(0, Buffer:len()), "Ambient Light Data")
	-- Frame Number
	AmbientLightSubtree:add_le(compact_fields.ambientLight.FrameNumber, Buffer(ambient_light_data_offset["Frame Number"][1], ambient_light_data_offset["Frame Number"][2]))
	-- StartTimestamp
	AmbientLightSubtree:add_le(compact_fields.ambientLight.StartTimestamp, Buffer(ambient_light_data_offset["Start time stamp"][1], ambient_light_data_offset["Start time stamp"][2]))
	-- StopTimestamp
	AmbientLightSubtree:add_le(compact_fields.ambientLight.StopTimestamp, Buffer(ambient_light_data_offset["Stop time stamp"][1], ambient_light_data_offset["Stop time stamp"][2]))
	-- NumberOfLayers
	local NumberOfLayers = Buffer(ambient_light_data_offset["Number of layers"][1], ambient_light_data_offset["Number of layers"][2]):le_uint()
	AmbientLightSubtree:add_le(compact_fields.ambientLight.NumberOfLayers, Buffer(ambient_light_data_offset["Number of layers"][1], ambient_light_data_offset["Number of layers"][2]))
	-- NumberOfColumns
	local NumberOfColumns = Buffer(ambient_light_data_offset["Number of columns"][1], ambient_light_data_offset["Number of columns"][2]):le_uint()
	AmbientLightSubtree:add_le(compact_fields.ambientLight.NumberOfColumns, Buffer(ambient_light_data_offset["Number of columns"][1], ambient_light_data_offset["Number of columns"][2]))
	-- HorizontalAngleStart
	local HorizontalAngleStart = Buffer(ambient_light_data_offset["Horizontal angle start"][1], ambient_light_data_offset["Horizontal angle start"][2]):le_float()
	AmbientLightSubtree:add_le(compact_fields.ambientLight.HorizontalAngleStart, Buffer(ambient_light_data_offset["Horizontal angle start"][1], ambient_light_data_offset["Horizontal angle start"][2])):append_text( " rad, (" .. math.deg(HorizontalAngleStart) .. "°)")
	-- HorizontalAngleStop
	local HorizontalAngleStop = Buffer(ambient_light_data_offset["Horizontal angle stop"][1], ambient_light_data_offset["Horizontal angle stop"][2]):le_float()
	AmbientLightSubtree:add_le(compact_fields.ambientLight.HorizontalAngleStop, Buffer(ambient_light_data_offset["Horizontal angle stop"][1], ambient_light_data_offset["Horizontal angle stop"][2])):append_text( " rad, (" .. math.deg(HorizontalAngleStop) .. "°)")
	-- VerticalAngleStart
	local VerticalAngleStart = Buffer(ambient_light_data_offset["Vertical angle start"][1], ambient_light_data_offset["Vertical angle start"][2]):le_float()
	AmbientLightSubtree:add_le(compact_fields.ambientLight.VerticalAngleStart, Buffer(ambient_light_data_offset["Vertical angle start"][1], ambient_light_data_offset["Vertical angle start"][2])):append_text( " rad, (" .. math.deg(VerticalAngleStart) .. "°)")
	-- VerticalAngleStop
	local VerticalAngleStop = Buffer(ambient_light_data_offset["Vertical angle stop"][1], ambient_light_data_offset["Vertical angle stop"][2]):le_float()
	AmbientLightSubtree:add_le(compact_fields.ambientLight.VerticalAngleStop, Buffer(ambient_light_data_offset["Vertical angle stop"][1], ambient_light_data_offset["Vertical angle stop"][2])):append_text( " rad, (" .. math.deg(VerticalAngleStop) .. "°)")
	-- Encoding
	AmbientLightSubtree:add_le(compact_fields.ambientLight.Encoding, Buffer(ambient_light_data_offset["Encoding"][1], ambient_light_data_offset["Encoding"][2]))
	-- Ambient Light Data
	for i = 1, NumberOfColumns do
		local AmbientLightSubtreeColumn = AmbientLightSubtree:add(SICK__CompactProtocol, Buffer(ambient_light_data_offset["Ambient light data"][1] + (i - 1) * ambient_light_data_offset["Ambient light data"][2] * NumberOfLayers, ambient_light_data_offset["Ambient light data"][2] * NumberOfLayers), "Column " .. i)
		local horizontal_angle = HorizontalAngleStart + (i - 1) * (HorizontalAngleStop - HorizontalAngleStart) / math.max(NumberOfColumns - 1, 1)
		local horizontal_angle_deg = math.deg(horizontal_angle)
		AmbientLightSubtreeColumn:append_text(" (Horizontal angle " .. horizontal_angle_deg .. "°)")
		for j = 1, NumberOfLayers do
			local AmbientLightSubtreeLayer = AmbientLightSubtreeColumn:add_le(compact_fields.ambientLight.AmbientLightData, Buffer(ambient_light_data_offset["Ambient light data"][1] + ((i - 1) * NumberOfLayers + (j - 1)) * ambient_light_data_offset["Ambient light data"][2], ambient_light_data_offset["Ambient light data"][2]))
			local vertical_angle = VerticalAngleStart + (j - 1) * (VerticalAngleStop - VerticalAngleStart) / math.max(NumberOfLayers - 1, 1)
			local vertical_angle_deg = math.deg(vertical_angle)
			AmbientLightSubtreeLayer:append_text(" (Column " .. i .. ", Layer " .. j .. ")" .. " (Vertical angle " .. vertical_angle_deg .. "°)" .. " (Horizontal angle " .. horizontal_angle_deg .. "°)")
		end
	end
end

------------------------------------------------------------------------------
--- Telegram Type 4
--- Encoder
------------------------------------------------------------------------------
-- Function to generate and show Encoder Data Payload Telegram version 4 in the Tree
local function Create_subtree_encoder_V1(Module, Subtree)
	-- Encoder Subtree 
	local EncoderSubtree = Subtree:add(SICK__CompactProtocol, Module[0](encoder_data_offset["EncoderData"][1], encoder_data_offset["EncoderData"][2]), "Encoder Data")
	-- Sender ID
	EncoderSubtree:add_le(compact_fields.encoder.SenderID, Module[0](encoder_data_offset["Sender ID"][1], encoder_data_offset["Sender ID"][2]))
	-- Frame Number
	EncoderSubtree:add_le(compact_fields.encoder.FrameNumber, Module[0](encoder_data_offset["Frame Number"][1], encoder_data_offset["Frame Number"][2]))
	-- Tick counter value
	EncoderSubtree:add_le(compact_fields.encoder.TickCounterValue, Module[0](encoder_data_offset["Tick counter value"][1], encoder_data_offset["Tick counter value"][2]))
	-- Tick counter value at AUX 1 Signal
	EncoderSubtree:add_le(compact_fields.encoder.TickCounterValueAUX1, Module[0](encoder_data_offset["Tick counter value at AUX 1 Signal"][1], encoder_data_offset["Tick counter value at AUX 1 Signal"][2]))
	-- Tick counter value at AUX 2 Signal
	EncoderSubtree:add_le(compact_fields.encoder.TickCounterValueAUX2, Module[0](encoder_data_offset["Tick counter value at AUX 2 Signal"][1], encoder_data_offset["Tick counter value at AUX 2 Signal"][2]))
	-- Speed value
	EncoderSubtree:add_le(compact_fields.encoder.SpeedValue, Module[0](encoder_data_offset["Speed value"][1], encoder_data_offset["Speed value"][2]))
	-- Tick counter value timestamp
	EncoderSubtree:add(compact_fields.encoder.TickTimestamp, Module[0](encoder_data_offset["Tick counter value timestamp"][1], encoder_data_offset["Tick counter value timestamp"][2]), getTime(Module[0](encoder_data_offset["Tick counter value timestamp"][1], encoder_data_offset["Tick counter value timestamp"][2])))
	-- AUX 1 timestamp
	EncoderSubtree:add(compact_fields.encoder.AUX1timestamp, Module[0](encoder_data_offset["AUX 1 timestamp"][1], encoder_data_offset["AUX 1 timestamp"][2]), getTime(Module[0](encoder_data_offset["AUX 1 timestamp"][1], encoder_data_offset["AUX 1 timestamp"][2])))
	-- AUX 2 timestamp
	EncoderSubtree:add(compact_fields.encoder.AUX2timestamp, Module[0](encoder_data_offset["AUX 2 timestamp"][1], encoder_data_offset["AUX 2 timestamp"][2]), getTime(Module[0](encoder_data_offset["AUX 2 timestamp"][1], encoder_data_offset["AUX 2 timestamp"][2])))
end

------------------------------------------------------------------------------
--- Telegram Type 6
--- Primary Data - OptimizedMultiScan2xx
------------------------------------------------------------------------------
local function Create_subtree_OptimizedMultiScan2xx_V1(Buffer, Subtree)
	local ModuleSubtree = Subtree:add(SICK__CompactProtocol, Buffer(), "Payload")
	local MetaDataModuleSubtree = ModuleSubtree:add(SICK__CompactProtocol, Buffer(0, OptimizedMultiScan2xx_meta_data_offset["Meta Data"][2]), "Meta Data")
	MetaDataModuleSubtree:add_le(compact_fields.compact_optimized.FrameNumber, Buffer(OptimizedMultiScan2xx_meta_data_offset["FrameNumber"][1], OptimizedMultiScan2xx_meta_data_offset["FrameNumber"][2]))
	MetaDataModuleSubtree:add_le(compact_fields.compact_optimized.FrameTimeStamp, Buffer(OptimizedMultiScan2xx_meta_data_offset["FrameTimeStamp"][1], OptimizedMultiScan2xx_meta_data_offset["FrameTimeStamp"][2]), getTime(Buffer(OptimizedMultiScan2xx_meta_data_offset["FrameTimeStamp"][1], OptimizedMultiScan2xx_meta_data_offset["FrameTimeStamp"][2])))
	MetaDataModuleSubtree:add_le(compact_fields.compact_optimized.SegmentIndex, Buffer(OptimizedMultiScan2xx_meta_data_offset["SegmentIndex"][1], OptimizedMultiScan2xx_meta_data_offset["SegmentIndex"][2]))
	MetaDataModuleSubtree:add_le(compact_fields.compact_optimized.NumberOfSegmentsPerFrame, Buffer(OptimizedMultiScan2xx_meta_data_offset["NumberOfSegmentsPerFrame"][1], OptimizedMultiScan2xx_meta_data_offset["NumberOfSegmentsPerFrame"][2]))
	local NumberOfColumnsInSegment = Buffer(OptimizedMultiScan2xx_meta_data_offset["NumberOfColumnsInSegment"][1], OptimizedMultiScan2xx_meta_data_offset["NumberOfColumnsInSegment"][2]):le_uint()
	MetaDataModuleSubtree:add_le(compact_fields.compact_optimized.NumberOfColumnsInSegment, Buffer(OptimizedMultiScan2xx_meta_data_offset["NumberOfColumnsInSegment"][1], OptimizedMultiScan2xx_meta_data_offset["NumberOfColumnsInSegment"][2]))
	MetaDataModuleSubtree:add_le(compact_fields.compact_optimized.NumberOfColumnsPerFrame, Buffer(OptimizedMultiScan2xx_meta_data_offset["NumberOfColumnsPerFrame"][1], OptimizedMultiScan2xx_meta_data_offset["NumberOfColumnsPerFrame"][2]))
	local NumberOfLayers = Buffer(OptimizedMultiScan2xx_meta_data_offset["NumberOfLayers"][1], OptimizedMultiScan2xx_meta_data_offset["NumberOfLayers"][2]):le_uint()
	MetaDataModuleSubtree:add_le(compact_fields.compact_optimized.NumberOfLayers, Buffer(OptimizedMultiScan2xx_meta_data_offset["NumberOfLayers"][1], OptimizedMultiScan2xx_meta_data_offset["NumberOfLayers"][2]))
	local NumberOfEchos = Buffer(OptimizedMultiScan2xx_meta_data_offset["NumberOfEchos"][1], OptimizedMultiScan2xx_meta_data_offset["NumberOfEchos"][2]):le_uint()
	MetaDataModuleSubtree:add_le(compact_fields.compact_optimized.NumberOfEchos, Buffer(OptimizedMultiScan2xx_meta_data_offset["NumberOfEchos"][1], OptimizedMultiScan2xx_meta_data_offset["NumberOfEchos"][2]))
	local NumberOfAmbientLightLayers = Buffer(OptimizedMultiScan2xx_meta_data_offset["NumberOfAmbientLightLayers"][1], OptimizedMultiScan2xx_meta_data_offset["NumberOfAmbientLightLayers"][2]):le_uint()
	MetaDataModuleSubtree:add_le(compact_fields.compact_optimized.NumberOfAmbientLightLayers, Buffer(OptimizedMultiScan2xx_meta_data_offset["NumberOfAmbientLightLayers"][1], OptimizedMultiScan2xx_meta_data_offset["NumberOfAmbientLightLayers"][2]))
	MetaDataModuleSubtree:add_le(compact_fields.compact_optimized.NumberOfInterlaceSteps, Buffer(OptimizedMultiScan2xx_meta_data_offset["NumberOfInterlaceSteps"][1], OptimizedMultiScan2xx_meta_data_offset["NumberOfInterlaceSteps"][2]))
	MetaDataModuleSubtree:add_le(compact_fields.compact_optimized.CurrentInterlaceIndex, Buffer(OptimizedMultiScan2xx_meta_data_offset["CurrentInterlaceIndex"][1], OptimizedMultiScan2xx_meta_data_offset["CurrentInterlaceIndex"][2]))
	MetaDataModuleSubtree:add_le(compact_fields.compact_optimized.ScanConfigurationIdentifier, Buffer(OptimizedMultiScan2xx_meta_data_offset["ScanConfigurationIdentifier"][1], OptimizedMultiScan2xx_meta_data_offset["ScanConfigurationIdentifier"][2]))
	local scalingFactor = Buffer(OptimizedMultiScan2xx_meta_data_offset["DistanceScalingFactor"][1], OptimizedMultiScan2xx_meta_data_offset["DistanceScalingFactor"][2]):le_float()
	MetaDataModuleSubtree:add_le(compact_fields.compact_optimized.DistanceScalingFactor, Buffer(OptimizedMultiScan2xx_meta_data_offset["DistanceScalingFactor"][1], OptimizedMultiScan2xx_meta_data_offset["DistanceScalingFactor"][2]))
	local DataContentEchoSubtree = MetaDataModuleSubtree:add_le(compact_fields.compact_optimized.DataContentEcho, Buffer(OptimizedMultiScan2xx_meta_data_offset["DataContentEcho"][1], OptimizedMultiScan2xx_meta_data_offset["DataContentEcho"][2]))
	local dataContentEchoOffset = OptimizedMultiScan2xx_meta_data_offset["DataContentEcho"][1]
	local dataContentEcho_len = OptimizedMultiScan2xx_meta_data_offset["DataContentEcho"][2]
	DataContentEchoSubtree:add_le(compact_fields.compact_optimized.DataContentEcho_Bit0, Buffer(dataContentEchoOffset, dataContentEcho_len))
	-- DataContentEchoSubtree:add_le(compact_fields.compact_optimized.DataContentEcho_Bit1, Buffer(dataContentEchoOffset, dataContentEcho_len))
	DataContentEchoSubtree:add_le(compact_fields.compact_optimized.DataContentEcho_Bit2, Buffer(dataContentEchoOffset, dataContentEcho_len))

	-- Data Content Intensity at bit 0
	local data_content_intensity = (Buffer(dataContentEchoOffset, dataContentEcho_len):uint() & (1 << 0)) ~= 0
	-- Data Content PulseWidth at bit 1
	local data_content_pulse_width = (Buffer(dataContentEchoOffset, dataContentEcho_len):uint() & (1 << 1)) ~= 0
	-- Data Content Properties at bit 2
	local data_content_properties = (Buffer(dataContentEchoOffset, dataContentEcho_len):uint() & (1 << 2)) ~= 0

	MetaDataModuleSubtree:add_le(compact_fields.compact_optimized.Reserved, Buffer(OptimizedMultiScan2xx_meta_data_offset["RESERVED + PADDING"][1], OptimizedMultiScan2xx_meta_data_offset["RESERVED + PADDING"][2]))

	local offset = OptimizedMultiScan2xx_meta_data_offset["Meta Data"][2]

	-- Ambient Light
	if NumberOfAmbientLightLayers > 0 then
		local sizeOfAmbientLight = (OptimizedMultiScan2xx_meta_data_offset["AmbientLight"][2]) * NumberOfAmbientLightLayers * NumberOfColumnsInSegment
		local AmbientLightSubtree = ModuleSubtree:add(SICK__CompactProtocol, Buffer(OptimizedMultiScan2xx_meta_data_offset["AmbientLight"][1], sizeOfAmbientLight), "Ambient Light")
		for i = 1, NumberOfColumnsInSegment do
			local AmbientLightSubtreeLayer = AmbientLightSubtree:add(SICK__CompactProtocol, Buffer(OptimizedMultiScan2xx_meta_data_offset["AmbientLight"][1] + (i - 1) * OptimizedMultiScan2xx_meta_data_offset["AmbientLight"][2] * NumberOfAmbientLightLayers, OptimizedMultiScan2xx_meta_data_offset["AmbientLight"][2] * NumberOfAmbientLightLayers), "Column " .. i)
			for j = 1, NumberOfAmbientLightLayers do
				AmbientLightSubtreeLayer:add_le(compact_fields.compact_optimized.AmbientLightData, Buffer(OptimizedMultiScan2xx_meta_data_offset["AmbientLight"][1] + ((i - 1) * NumberOfAmbientLightLayers + (j - 1)) * OptimizedMultiScan2xx_meta_data_offset["AmbientLight"][2], OptimizedMultiScan2xx_meta_data_offset["AmbientLight"][2])):append_text(" (Column " .. i .. ", Layer " .. j .. ")")
			end
		end
		offset = offset + sizeOfAmbientLight
	end

	-- Column Meta Data
	local sizeOfColumnMetaData =  OptimizedMultiScan2xx_meta_data_offset["ElevationAngles"][2] * NumberOfLayers
								+ OptimizedMultiScan2xx_meta_data_offset["AzimuthAngles"][2] * NumberOfColumnsInSegment
								+ OptimizedMultiScan2xx_meta_data_offset["RelativeTimeStamps"][2] * NumberOfColumnsInSegment
								+ OptimizedMultiScan2xx_meta_data_offset["ColumnProperties"][2] * NumberOfColumnsInSegment
	local ColumnMetaDataSubtree = ModuleSubtree:add(SICK__CompactProtocol, Buffer(offset, sizeOfColumnMetaData), "Column Meta Data")

	local ElevationAnglesSubtree = ColumnMetaDataSubtree:add(Buffer(offset, OptimizedMultiScan2xx_meta_data_offset["ElevationAngles"][2] * NumberOfLayers), "Elevation Angles")
	local elevation_angle = {}
	local elevation_angle_deg = {}
	for i = 1, NumberOfLayers do
		elevation_angle[i] = Buffer(offset + (i - 1) * OptimizedMultiScan2xx_meta_data_offset["ElevationAngles"][2], OptimizedMultiScan2xx_meta_data_offset["ElevationAngles"][2]):le_float()
		elevation_angle_deg[i] = math.deg(elevation_angle[i])
		ElevationAnglesSubtree:add_le(compact_fields.compact_optimized.ElevationAngles, Buffer(offset + (i - 1) * OptimizedMultiScan2xx_meta_data_offset["ElevationAngles"][2], OptimizedMultiScan2xx_meta_data_offset["ElevationAngles"][2])):append_text(" rad (" .. elevation_angle_deg[i] .. "°) (Layer " .. i .. ")")
	end
	offset = offset + OptimizedMultiScan2xx_meta_data_offset["ElevationAngles"][2] * NumberOfLayers

	local AzimuthAnglesSubtree = ColumnMetaDataSubtree:add(Buffer(offset, OptimizedMultiScan2xx_meta_data_offset["AzimuthAngles"][2] * NumberOfColumnsInSegment), "Azimuth Angles")
	local azimuth_angle = {}
	local azimuth_angle_deg = {}
	for i = 1, NumberOfColumnsInSegment do
		azimuth_angle[i] = Buffer(offset + (i - 1) * OptimizedMultiScan2xx_meta_data_offset["AzimuthAngles"][2], OptimizedMultiScan2xx_meta_data_offset["AzimuthAngles"][2]):le_float()
		azimuth_angle_deg[i] = math.deg(azimuth_angle[i])
		AzimuthAnglesSubtree:add_le(compact_fields.compact_optimized.AzimuthAngles, Buffer(offset + (i - 1) * OptimizedMultiScan2xx_meta_data_offset["AzimuthAngles"][2], OptimizedMultiScan2xx_meta_data_offset["AzimuthAngles"][2])):append_text(" rad (" .. azimuth_angle_deg[i] .. "° (Column " .. i .. ")")
	end
	offset = offset + OptimizedMultiScan2xx_meta_data_offset["AzimuthAngles"][2] * NumberOfColumnsInSegment

	local RelativeTimeStampsSubtree = ColumnMetaDataSubtree:add(Buffer(offset, OptimizedMultiScan2xx_meta_data_offset["RelativeTimeStamps"][2] * NumberOfColumnsInSegment), "Relative Time Stamps")
	for i = 1, NumberOfColumnsInSegment do
		RelativeTimeStampsSubtree:add_le(compact_fields.compact_optimized.RelativeTimeStamps, Buffer(offset + (i - 1) * OptimizedMultiScan2xx_meta_data_offset["RelativeTimeStamps"][2], OptimizedMultiScan2xx_meta_data_offset["RelativeTimeStamps"][2])):append_text(" mcs (Column " .. i .. ")")
	end
	offset = offset + OptimizedMultiScan2xx_meta_data_offset["RelativeTimeStamps"][2] * NumberOfColumnsInSegment

	local ColumnPropertiesSubtree = ColumnMetaDataSubtree:add(Buffer(offset, OptimizedMultiScan2xx_meta_data_offset["ColumnProperties"][2] * NumberOfColumnsInSegment), "Column Properties")
	for i = 1, NumberOfColumnsInSegment do
		ColumnPropertiesSubtree:add_le(compact_fields.compact_optimized.ColumnProperties, Buffer(offset + (i - 1) * OptimizedMultiScan2xx_meta_data_offset["ColumnProperties"][2], OptimizedMultiScan2xx_meta_data_offset["ColumnProperties"][2])):append_text(" (Column " .. i .. ")")
	end
	offset = offset + OptimizedMultiScan2xx_meta_data_offset["ColumnProperties"][2] * NumberOfColumnsInSegment


	-- Measurement data
	local sizeOfDistance = OptimizedMultiScan2xx_meta_data_offset["Distance"][2] * NumberOfEchos * NumberOfLayers * NumberOfColumnsInSegment
	local sizeOfMeasurementData = sizeOfDistance

	local sizeOfIntensity = 0
	if data_content_intensity then
		sizeOfIntensity = OptimizedMultiScan2xx_meta_data_offset["RSSI"][2] * NumberOfEchos * NumberOfLayers * NumberOfColumnsInSegment
		sizeOfMeasurementData = sizeOfMeasurementData + sizeOfIntensity
	end
	local sizeOfPulseWidth = 0
	if data_content_pulse_width then
		sizeOfPulseWidth = OptimizedMultiScan2xx_meta_data_offset["PulseWidth"][2] * NumberOfEchos * NumberOfLayers * NumberOfColumnsInSegment
		sizeOfMeasurementData = sizeOfMeasurementData + sizeOfPulseWidth
	end
	local sizeOfContentProperties = 0
	if data_content_properties then
		sizeOfContentProperties = OptimizedMultiScan2xx_meta_data_offset["EchoProperties"][2] * NumberOfEchos * NumberOfLayers * NumberOfColumnsInSegment
		sizeOfMeasurementData = sizeOfMeasurementData + sizeOfContentProperties
	end

	local MeasurementDataSubtree = ModuleSubtree:add(SICK__CompactProtocol, Buffer(offset, sizeOfMeasurementData), "Measurement Data")

	local DistanceSubtree = MeasurementDataSubtree:add(SICK__CompactProtocol, Buffer(offset, sizeOfDistance), "Distance")
	for i = 1, NumberOfColumnsInSegment do
		local distanceSize = OptimizedMultiScan2xx_meta_data_offset["Distance"][2]
		local distanceColumnSubtreeOffset = offset + (i - 1) * distanceSize * NumberOfLayers * NumberOfEchos
		local distanceColumnSubtreeSize = distanceSize * NumberOfLayers * NumberOfEchos
		local DistanceColumnSubtree = DistanceSubtree:add(SICK__CompactProtocol, Buffer(distanceColumnSubtreeOffset, distanceColumnSubtreeSize), "Column " .. i .. " (Azimuth angle: " .. azimuth_angle_deg[i] .. "°)")
		for j = 1, NumberOfLayers do
			local layerSubtreeOffset = distanceColumnSubtreeOffset + (j - 1) * distanceSize * NumberOfEchos
			local layerSubtreeSize = distanceSize * NumberOfEchos
			local LayerSubtree = DistanceColumnSubtree:add(SICK__CompactProtocol, Buffer(layerSubtreeOffset, layerSubtreeSize), "Layer " .. j .. " (Elevation angle: " .. elevation_angle_deg[j] .. "°)" .." (Azimuth angle: " .. azimuth_angle_deg[i] .. "°)")
			for k = 1, NumberOfEchos do
				local offsetDistEcho = layerSubtreeOffset + (k - 1) * distanceSize
				local dist = Buffer(offsetDistEcho, distanceSize):le_uint() * scalingFactor
				local distanceTreeElement = LayerSubtree:add_le(compact_fields.compact_optimized.Distance, Buffer(offsetDistEcho, distanceSize))
				distanceTreeElement:set_text(string_format("ECHO " .. k))
				distanceTreeElement:append_text(":" .. Buffer(offsetDistEcho, distanceSize):le_uint() .. " mm * Scaling Factor(" .. scalingFactor .. ") = ".. dist .." mm (Column " .. i .. ", Layer " .. j .. ")")
			end
		end
	end
	offset = offset + sizeOfDistance

	if data_content_intensity then
		local IntensitySubtree = MeasurementDataSubtree:add(SICK__CompactProtocol, Buffer(offset, sizeOfIntensity), "Intensity")
		local b_index = 0
		for i = 1, NumberOfColumnsInSegment do
			local intensitySize = OptimizedMultiScan2xx_meta_data_offset["RSSI"][2]
			local intensityColumnSubtreeOffset = offset + (i - 1) * intensitySize * NumberOfLayers * NumberOfEchos
			local intensityColumnSubtreeSize = intensitySize * NumberOfLayers * NumberOfEchos
			local IntensityColumnSubtree = IntensitySubtree:add(SICK__CompactProtocol, Buffer(intensityColumnSubtreeOffset, intensityColumnSubtreeSize), "Column " .. i .. " (Azimuth angle: " .. azimuth_angle_deg[i] .. "°)")
			for j = 1, NumberOfLayers do
				local intensityLayerSubtreeOffset = intensityColumnSubtreeOffset + (j - 1) * intensitySize * NumberOfEchos
				if is_integer(intensityLayerSubtreeOffset) == false then
					intensityLayerSubtreeOffset = intensityLayerSubtreeOffset - 0.5
				end
				local intensityLayerSubtreeSize = intensitySize * NumberOfEchos
				if is_integer(intensityLayerSubtreeSize) == false then
					intensityLayerSubtreeSize = intensityLayerSubtreeSize + 0.5
				end
				local IntensityLayerSubtree = IntensityColumnSubtree:add(SICK__CompactProtocol, Buffer(intensityLayerSubtreeOffset, intensityLayerSubtreeSize), "Layer " .. j .. " (Elevation angle: " .. elevation_angle_deg[j] .. "°)" .. " (Azimuth angle: " .. azimuth_angle_deg[i] .. "°)")
				for k = 1, NumberOfEchos, 2 do
					local packedOffset = intensityLayerSubtreeOffset + math.floor((k - 1) / 2) * 3

					local b0 = Buffer(packedOffset, 1):uint()
					local b1 = Buffer(packedOffset + 1, 1):uint()
					local b2 = 0x00
					if Buffer:len() >= packedOffset + 3 then
						b2 = Buffer(packedOffset + 2, 1):uint()
					end

					local rssi_a = b0 | ((b1 & 0x0F) << 8)
					local e1 = IntensityLayerSubtree:add(compact_fields.compact_optimized.RSSI, Buffer(packedOffset, 2), rssi_a)
					e1:set_text(string_format("ECHO " .. k))
					e1:append_text(string.format(": %d (0x%03X) (Column %d, Layer %d)", rssi_a, rssi_a, i, j))

					if k + 1 <= NumberOfEchos then
						local rssi_b = ((b1 >> 4) & 0x0F) | (b2 << 4)
						local e2 = IntensityLayerSubtree:add(compact_fields.compact_optimized.RSSI, Buffer(packedOffset + 1, 2), rssi_b)
						e2:set_text(string_format("ECHO " .. (k + 1)))
						e2:append_text(string.format(": %d (0x%03X) (Column %d, Layer %d)", rssi_b, rssi_b, i, j))
					end
				end
			end
		end
	end
	offset = offset + sizeOfIntensity

	if data_content_pulse_width then
		local PulseWidthSubtree = MeasurementDataSubtree:add(SICK__CompactProtocol, Buffer(offset, sizeOfPulseWidth), "Pulse Width")
		-- TODO: Add pulse width data to tree when it is available in the protocol version
	end
	offset = offset + sizeOfPulseWidth

	if data_content_properties then
		local PropertiesSubtree = MeasurementDataSubtree:add(SICK__CompactProtocol, Buffer(offset, sizeOfContentProperties), "Properties")
		for i = 1, NumberOfColumnsInSegment do
			local propertiesSize = OptimizedMultiScan2xx_meta_data_offset["EchoProperties"][2]
			local propertiesColumnSubtreeOffset = offset + (i - 1) * propertiesSize * NumberOfLayers * NumberOfEchos
			local propertiesColumnSubtreeSize = propertiesSize * NumberOfLayers * NumberOfEchos
			local PropertiesColumnSubtree = PropertiesSubtree:add(SICK__CompactProtocol, Buffer(propertiesColumnSubtreeOffset, propertiesColumnSubtreeSize), "Column " .. i .. " (Azimuth angle: " .. azimuth_angle_deg[i] .. "°)")
			for j = 1, NumberOfLayers do
				local columnSubtreeOffset = propertiesColumnSubtreeOffset + (j - 1) * propertiesSize * NumberOfEchos
				local columnSubtreeSize = propertiesSize * NumberOfEchos
				local LayerSubtree = PropertiesColumnSubtree:add(SICK__CompactProtocol, Buffer(columnSubtreeOffset, columnSubtreeSize), "Layer " .. j .. " (Elevation angle: " .. elevation_angle_deg[j] .. "°)" .. " (Azimuth angle: " .. azimuth_angle_deg[i] .. "°)")
				for k = 1, NumberOfEchos do
					local offsetProperties = columnSubtreeOffset + (k - 1) * propertiesSize
					local propertiesSubTree = LayerSubtree:add_le(compact_fields.compact_optimized.EchoProperties, Buffer(offsetProperties, propertiesSize))
					propertiesSubTree:add_le(compact_fields.compact_optimized.EchoProperties_Bit1, Buffer(offsetProperties, propertiesSize))
					propertiesSubTree:add_le(compact_fields.compact_optimized.EchoProperties_Bit2, Buffer(offsetProperties, propertiesSize))
					propertiesSubTree:add_le(compact_fields.compact_optimized.EchoProperties_Bit6, Buffer(offsetProperties, propertiesSize))
					propertiesSubTree:prepend_text("ECHO " .. k .. ": ")
					propertiesSubTree:append_text(":" .. Buffer(offsetProperties, propertiesSize):le_uint() .. " (Column " .. i .. ", Layer " .. j .. ")")
				end
			end
		end
	end
	offset = offset + sizeOfContentProperties
end

------------------------------------------------------------------------------
--- Telegram Type 7
--- IMU V2
------------------------------------------------------------------------------
local function Create_subtree_imu_V7(Buffer, Subtree, telegramVersion)
	local ModuleSubtree = Subtree:add(SICK__CompactProtocol, Buffer(), TelegramTypes[telegramVersion])
	-- IMU Subtree 
	local IMUSubtree = Subtree:add(SICK__CompactProtocol, Buffer(imu_type_7_data_offset["IMUData"][1], imu_type_7_data_offset["IMUData"][2]), "IMU Data")
	-- Acceleration X
	IMUSubtree:add_le(compact_fields.imu.AccelerationX, Buffer(imu_type_7_data_offset["Acceleration x"][1], imu_type_7_data_offset["Acceleration x"][2])):append_text(" m/s²")
	-- Acceleration Y
	IMUSubtree:add_le(compact_fields.imu.AccelerationY, Buffer(imu_type_7_data_offset["Acceleration y"][1], imu_type_7_data_offset["Acceleration y"][2])):append_text(" m/s²")
	-- Acceleration Z
	IMUSubtree:add_le(compact_fields.imu.AccelerationZ, Buffer(imu_type_7_data_offset["Acceleration z"][1], imu_type_7_data_offset["Acceleration z"][2])):append_text(" m/s²")
	-- Velocity X
	IMUSubtree:add_le(compact_fields.imu.VelocityX, Buffer(imu_type_7_data_offset["Angular velocity x"][1], imu_type_7_data_offset["Angular velocity x"][2])):append_text(" rad/s")
	-- Velocity Y
	IMUSubtree:add_le(compact_fields.imu.VelocityY, Buffer(imu_type_7_data_offset["Angular velocity y"][1], imu_type_7_data_offset["Angular velocity y"][2])):append_text(" rad/s")
	-- Velocity Z
	IMUSubtree:add_le(compact_fields.imu.VelocityZ, Buffer(imu_type_7_data_offset["Angular velocity z"][1], imu_type_7_data_offset["Angular velocity z"][2])):append_text(" rad/s")
	-- Orientation W
	IMUSubtree:add_le(compact_fields.imu.OrientationW, Buffer(imu_type_7_data_offset["Orientation quaternion w"][1], imu_type_7_data_offset["Orientation quaternion w"][2]))
	-- Orientation X
	IMUSubtree:add_le(compact_fields.imu.OrientationX, Buffer(imu_type_7_data_offset["Orientation quaternion x"][1], imu_type_7_data_offset["Orientation quaternion x"][2]))
	-- Orientation Y
	IMUSubtree:add_le(compact_fields.imu.OrientationY, Buffer(imu_type_7_data_offset["Orientation quaternion y"][1], imu_type_7_data_offset["Orientation quaternion y"][2]))
	-- Orientation Z
	IMUSubtree:add_le(compact_fields.imu.OrientationZ, Buffer(imu_type_7_data_offset["Orientation quaternion z"][1], imu_type_7_data_offset["Orientation quaternion z"][2]))
end

--- Draw the payload tree element with payload size in bytes, KB and MB
local function Create_payload_tree_element(Buffer, Subtree)
	local raw_len = Buffer:len()
	local kb = raw_len / 1024
	local mb = raw_len / (1024 * 1024)
	local node = Subtree:add(compact_fields.helpers.PayloadSize, Buffer(0,0), raw_len)
	node:set_text(string.format("Payload Size: %d B (%.2f KB / %.2f MB)", raw_len, kb, mb))
end

local function Create_version_is_not_supported_tree_element(Buffer, Subtree, TelegramType, TelegramVersion, TelegramVersionField)
	if TelegramVersionField then
		TelegramVersionField:add_proto_expert_info(ProtoExpert.warnings.UnknownTelegramVersion)
	end
	local VersionNotSupportedSubtree = Subtree:add(SICK__CompactProtocol, Buffer(0, Buffer:len()), "Module 0")
	VersionNotSupportedSubtree:add_proto_expert_info(ProtoExpert.warnings.UnknownTelegramVersion):append_text(" : Unknown Telegram Version " .. TelegramVersion)
end

local function Create_proto (Buffer, PInfo, Tree)
	-- Add subtree for main protocol fields and all sub fields and set subtree name to UI
    local Subtree = Tree:add(SICK__CompactProtocol, Buffer(0, Buffer:len()), "Compact Protocol")
	Create_payload_tree_element(Buffer, Subtree)
	-- Type of message (telegramType)
	local TelegramType = Buffer(header_offset["telegramType"][1], header_offset["telegramType"][2]):le_uint()
	if TelegramTypes[TelegramType] then
		Subtree:append_text(": "..TelegramTypes[TelegramType])
	else
		Subtree:append_text(": Unknown Telegram Type: ".. TelegramType)
	end
	
	-- Check type of message
	-- 1 - Primary Data - Spherical Coordinates 
	if 1 == TelegramType and (Subtree.visible or parse_full) then
		-- Create Header subtree
		local telegramVersion, Module, Header, messageTypeField, TelegramVersionField = Create_subtree_header(Buffer, Subtree)
		Subtree:append_text(" (Telegram version " .. telegramVersion .. ")")
		-- Check Telegram version
		if (1 == telegramVersion or
			2 == telegramVersion or
			3 == telegramVersion or
			4 == telegramVersion) then
			Create_subtree_module_0_V4(Buffer, Header, Module, Subtree, telegramVersion)
		else
			if Module and Module[0] then
				Create_version_is_not_supported_tree_element(Module[0], Subtree, TelegramType, telegramVersion, TelegramVersionField)
			end
		end
		-- CRC subtree
		Create_subtree_crc(Buffer, Subtree)

	-- Check type of message
	-- 2 - IMU
	elseif 2 == TelegramType and (Subtree.visible or parse_full) then
		local telegramVersion = Buffer(imu_data_offset["Telegram version"][1], imu_data_offset["Telegram version"][2]):le_uint()
		Subtree:append_text(" (Telegram version " .. telegramVersion .. ")")
		-- Check Telegram version
		if 1 == telegramVersion then
			Create_subtree_imu_V1(Buffer, Subtree)
		else
			Create_version_is_not_supported_tree_element(Buffer(imu_data_offset["IMUData"][1], imu_data_offset["IMUData"][2]), Subtree, TelegramType, telegramVersion)
		end

	-- Check type of message
	-- 3 - Ambient Light
	elseif 3 == TelegramType and (Subtree.visible or parse_full) then
		-- Create Header subtree
		local telegramVersion, Module, Header, messageTypeField, TelegramVersionField = Create_subtree_header(Buffer, Subtree)
		Subtree:append_text(" (Telegram version " .. telegramVersion .. ")")
		-- Check Telegram version
		if telegramVersion == 1 then
			if Module and Module[0] then
				Create_subtree_ambient_light_V1(Module[0], Subtree)
			end
		else
			if Module and Module[0] then
				Create_version_is_not_supported_tree_element(Module[0], Subtree, TelegramType, telegramVersion)
			end
		end
		-- CRC subtree
		Create_subtree_crc(Buffer, Subtree)

	-- Check type of message
	-- 4 - Encoder
	elseif 4 == TelegramType and (Subtree.visible or parse_full) then
		-- Create Header subtree
		local telegramVersion, Module, Header, messageTypeField, TelegramVersionField = Create_subtree_header(Buffer, Subtree)
		Subtree:append_text(" (Telegram version " .. telegramVersion .. ")")
		-- Check Telegram version
		if telegramVersion == 1 then
			Create_subtree_encoder_V1(Module, Subtree)
		else
			Create_version_is_not_supported_tree_element(Buffer(encoder_data_offset["EncoderData"][1], encoder_data_offset["EncoderData"][2]), Subtree, TelegramType, telegramVersion)
		end
		-- CRC subtree
		Create_subtree_crc(Buffer, Subtree)

	-- Check type of message
	-- 6 - Primary Data - OptimizedMultiScan2xx
	elseif 6 == TelegramType and (Subtree.visible or parse_full) then
		-- Create Header subtree
		local telegramVersion, Module, Header, messageTypeField, TelegramVersionField = Create_subtree_header(Buffer, Subtree)
		Subtree:append_text(" (Telegram version " .. telegramVersion .. ")")
		-- Check Telegram version
		if telegramVersion == 1 then
			if Module and Module[0] then
				Create_subtree_OptimizedMultiScan2xx_V1(Module[0], Subtree)
			end
		else
			if Module and Module[0] then
				Create_version_is_not_supported_tree_element(Module[0], Subtree, TelegramType, telegramVersion)
			end
		end
		-- CRC subtree
		Create_subtree_crc(Buffer, Subtree)

	-- Check type of message
	-- 7 - IMU V2
	elseif 7 == TelegramType and (Subtree.visible or parse_full) then
		-- Create Header subtree
		local telegramVersion, Module, Header, messageTypeField, TelegramVersionField = Create_subtree_header(Buffer, Subtree)
		Subtree:append_text(" (Telegram version " .. telegramVersion .. ")")
		-- Check Telegram version
		if telegramVersion == 1 then
			if Module and Module[0] then
				Create_subtree_imu_V7(Module[0], Subtree, telegramVersion)
			end
		else
			if Module and Module[0] then
				Create_version_is_not_supported_tree_element(Module[0], Subtree, TelegramType, telegramVersion)
			end
		end
		-- CRC subtree
		Create_subtree_crc(Buffer, Subtree)
	else
		-- For unknown type of message
		local telegramVersion, Module, Header, TelegramTypeField, TelegramVersionField = Create_subtree_header(Buffer, Subtree)
		if TelegramTypeField then
			TelegramTypeField:add_proto_expert_info(ProtoExpert.warnings.UnknownTelegramType)
		end
	end
end

function SICK__CompactProtocol.dissector(Buffer, PInfo, Tree)
	-- Basic checks to avoid dissecting wrong packets
	if Buffer:len() < 36 then return end

	-- Check startOfFrame
    local sof = Buffer(header_offset['startOfFrame'][1], header_offset['startOfFrame'][2]):le_uint()
    if sof ~= 0x02020202 then return end

	-- desegmenting logic for TCP stream, check if the whole packet is captured, if not, request more data
	local TelegramType = Buffer(header_offset["telegramType"][1], header_offset["telegramType"][2]):le_uint()
	-- for LRS4000 TCp/IP
	-- 1 - Primary Data - Spherical Coordinates
	-- for multiScan 270 TCP/IP
	-- 3 - Ambient Light
	-- 6 - Primary Data - OptimizedMultiScan2xx
	if TelegramType == 1 or TelegramType == 3 or TelegramType == 6 then
		local expected_full_len = 0
		if TelegramType == 1 then
			local sizeOfm0 = Buffer(header_offset["sizeModule0"][1], header_offset["sizeModule0"][2]):le_uint()
			expected_full_len = sizeOfm0 + header_offset["Header"][2] + crc_offset["CRC"][2] -- size of module 0 + header size + CRC size
		elseif TelegramType > 2 then
			local payload = Buffer(header_offset["payloadLength"][1], header_offset["payloadLength"][2]):le_uint()
			expected_full_len = payload + header_offset["Header_V2"][2] + crc_offset["CRC"][2] -- size of module 0 + header size + CRC size
		else
			return
		end

		local current_len = Buffer:len()

		if current_len < expected_full_len then
            PInfo.desegment_len = expected_full_len - current_len
            PInfo.desegment_offset = 0
            return
        end
	end
	-- Set protocol name to UI
	PInfo.cols.protocol = SICK__CompactProtocol.name
	-- Set type of message to info column in UI
	if TelegramTypes[TelegramType] then
		PInfo.cols.info = TelegramTypes[TelegramType]
	else
		PInfo.cols.info = "Unknown Telegram Type: " .. TelegramType
	end
	if not Tree then return end
	if not PInfo.visited then return end
	Create_proto(Buffer, PInfo, Tree)
end


--Add new protocol object for the desired UDP/TCP ports to the Wireshark DissectorTable  
local UdpPort = DissectorTable.get("udp.port")
local TcpPort = DissectorTable.get("tcp.port")
-- Measurement Data ports
for _, port in ipairs(CompactPorts) do
	-- picoScan, multiScan
    UdpPort:add(port, SICK__CompactProtocol)
	-- LRS4000
	TcpPort:add(port, SICK__CompactProtocol)
end
-- IMU Data ports
for _, port in ipairs(IMUPorts) do
    UdpPort:add(port, SICK__CompactProtocol)
	-- MultiScan 270
	TcpPort:add(port, SICK__CompactProtocol)
end
-- Encoder Data ports
for _, port in ipairs(EncoderPorts) do
    UdpPort:add(port, SICK__CompactProtocol)
	TcpPort:add(port, SICK__CompactProtocol)
end
-- 
for _, port in ipairs(AmbientLightPorts) do
	TcpPort:add(port, SICK__CompactProtocol)
end