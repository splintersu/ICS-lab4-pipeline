complete_data = [
{
	"CONDITIONVALUE" : {"ZF" : "0" , SF : "0" , OF : "0"},
	"MEMORY_TABLE" : [
		{"addr" : "0" , "val" : "048|0x30"},
		{"addr" : "1" , "val" : "242|0xf2"},
		{"addr" : "2" , "val" : "128|0x80"},
		{"addr" : "3" , "val" : "150|0x96"},
		{"addr" : "4" , "val" : "152|0x98"},
		{"addr" : "5" , "val" : "000|0x00"},
		{"addr" : "6" , "val" : "048|0x30"},
		{"addr" : "7" , "val" : "240|0xf0"},
		{"addr" : "8" , "val" : "001|0x01"},
		{"addr" : "9" , "val" : "000|0x00"},
		{"addr" : "10" , "val" : "000|0x00"},
		{"addr" : "11" , "val" : "000|0x00"},
		{"addr" : "12" , "val" : "097|0x61"},
		{"addr" : "13" , "val" : "002|0x02"},
		{"addr" : "14" , "val" : "114|0x72"},
		{"addr" : "15" , "val" : "025|0x19"},
		{"addr" : "16" , "val" : "000|0x00"},
		{"addr" : "17" , "val" : "000|0x00"},
		{"addr" : "18" , "val" : "000|0x00"},
		{"addr" : "19" , "val" : "048|0x30"},
		{"addr" : "20" , "val" : "241|0xf1"},
		{"addr" : "21" , "val" : "002|0x02"},
		{"addr" : "22" , "val" : "000|0x00"},
		{"addr" : "23" , "val" : "000|0x00"},
		{"addr" : "24" , "val" : "000|0x00"},
		{"addr" : "25" , "val" : "000|0x00"}],
"CODE" : ["irmovl 10000000,edx" , "EMPTY" , "EMPTY" , "EMPTY" , "EMPTY"],
	"instructions" : "4" ,
	"CPI" : "3",
	"REGVALUE" : 
	{
		"eax" : "        0",
		"ebx" : "        0",
		"ecx" : "        0",
		"edx" : "        0",
		"ebp" : "        0",
		"esp" : "        0",
		"esi" : "        0",
		"edi" : "        0"
	},
	"FETCH" :
	[
		{"key" : "stat" , "value" : "0"},
		{"key":"predPC" , "value":"0"},
	],
	"DECODE" : [
		{"key":"stat" , "value":"1"},
		{"key":"rA" , "value":"15"},
		{"key":"rB" , "value":"15"},
		{"key":"valC" , "value":"0"},
		{"key":"valP" , "value":"0"}
	],
	"EXECUTE" : [
		{"key":"stat" , "value":"1"},
		{"key":"valC" , "value":0},
		{"key":"valA" , "value":0},
		{"key":"valB" , "value":0},
		{"key":"dstE" , "value":0},
		{"key":"dstM" , "value":0},
		{"key":"srcA" , "value":0},
		{"key":"srcB" , "value":0}
	],
	"MEMORY" : [
		{"key":"stat" , "value":"1"},
		{"key":"valE" , "value":0},
		{"key":"valA" , "value":0},
		{"key":"dstE" , "value":0},
		{"key":"dstM" , "value":0}
	],
	"WRITE BACK" : [
		{"key":"stat" , "value":"1"},
		{"key":"valE" , "value":0},
		{"key":"valM" , "value":0},
		{"key":"dstE" , "value":0},
		{"key":"dstM" , "value":0},
	]
}
,
{
	"CONDITIONVALUE" : {"ZF" : "0" , SF : "0" , OF : "0"},
	"MEMORY_TABLE" : [
		{"addr" : "0" , "val" : "048|0x30"},
		{"addr" : "1" , "val" : "242|0xf2"},
		{"addr" : "2" , "val" : "128|0x80"},
		{"addr" : "3" , "val" : "150|0x96"},
		{"addr" : "4" , "val" : "152|0x98"},
		{"addr" : "5" , "val" : "000|0x00"},
		{"addr" : "6" , "val" : "048|0x30"},
		{"addr" : "7" , "val" : "240|0xf0"},
		{"addr" : "8" , "val" : "001|0x01"},
		{"addr" : "9" , "val" : "000|0x00"},
		{"addr" : "10" , "val" : "000|0x00"},
		{"addr" : "11" , "val" : "000|0x00"},
		{"addr" : "12" , "val" : "097|0x61"},
		{"addr" : "13" , "val" : "002|0x02"},
		{"addr" : "14" , "val" : "114|0x72"},
		{"addr" : "15" , "val" : "025|0x19"},
		{"addr" : "16" , "val" : "000|0x00"},
		{"addr" : "17" , "val" : "000|0x00"},
		{"addr" : "18" , "val" : "000|0x00"},
		{"addr" : "19" , "val" : "048|0x30"},
		{"addr" : "20" , "val" : "241|0xf1"},
		{"addr" : "21" , "val" : "002|0x02"},
		{"addr" : "22" , "val" : "000|0x00"},
		{"addr" : "23" , "val" : "000|0x00"},
		{"addr" : "24" , "val" : "000|0x00"},
		{"addr" : "25" , "val" : "000|0x00"}],
"CODE" : ["irmovl 1,eax" , "irmovl 10000000,edx" , "EMPTY" , "EMPTY" , "EMPTY"],
	"REGVALUE" : 
	{
		"eax" : "        0",
		"ebx" : "        0",
		"ecx" : "        0",
		"edx" : "        0",
		"ebp" : "        0",
		"esp" : "        0",
		"esi" : "        0",
		"edi" : "        0"
	},
	"FETCH" :
	[
		{"key":"predPC" , "value":"6"},
		{"key":"instructions" , "value":0},
		{"key":"CPI" , "value":0}
	],
	"DECODE" : [
		{"key":"stat" , "value":"1"},
		{"key":"rA" , "value":"15"},
		{"key":"rB" , "value":"2"},
		{"key":"valC" , "value":"10000000"},
		{"key":"valP" , "value":"6"}
	],
	"EXECUTE" : [
		{"key":"stat" , "value":"1"},
		{"key":"valC" , "value":0},
		{"key":"valA" , "value":0},
		{"key":"valB" , "value":0},
		{"key":"dstE" , "value":15},
		{"key":"dstM" , "value":15},
		{"key":"srcA" , "value":15},
		{"key":"srcB" , "value":15}
	],
	"MEMORY" : [
		{"key":"stat" , "value":"1"},
		{"key":"valE" , "value":0},
		{"key":"valA" , "value":0},
		{"key":"dstE" , "value":0},
		{"key":"dstM" , "value":0}
	],
	"WRITE BACK" : [
		{"key":"stat" , "value":"1"},
		{"key":"valE" , "value":0},
		{"key":"valM" , "value":0},
		{"key":"dstE" , "value":0},
		{"key":"dstM" , "value":0},
	]
}
,
{
	"CONDITIONVALUE" : {"ZF" : "0" , SF : "0" , OF : "0"},
	"MEMORY_TABLE" : [
		{"addr" : "0" , "val" : "048|0x30"},
		{"addr" : "1" , "val" : "242|0xf2"},
		{"addr" : "2" , "val" : "128|0x80"},
		{"addr" : "3" , "val" : "150|0x96"},
		{"addr" : "4" , "val" : "152|0x98"},
		{"addr" : "5" , "val" : "000|0x00"},
		{"addr" : "6" , "val" : "048|0x30"},
		{"addr" : "7" , "val" : "240|0xf0"},
		{"addr" : "8" , "val" : "001|0x01"},
		{"addr" : "9" , "val" : "000|0x00"},
		{"addr" : "10" , "val" : "000|0x00"},
		{"addr" : "11" , "val" : "000|0x00"},
		{"addr" : "12" , "val" : "097|0x61"},
		{"addr" : "13" , "val" : "002|0x02"},
		{"addr" : "14" , "val" : "114|0x72"},
		{"addr" : "15" , "val" : "025|0x19"},
		{"addr" : "16" , "val" : "000|0x00"},
		{"addr" : "17" , "val" : "000|0x00"},
		{"addr" : "18" , "val" : "000|0x00"},
		{"addr" : "19" , "val" : "048|0x30"},
		{"addr" : "20" , "val" : "241|0xf1"},
		{"addr" : "21" , "val" : "002|0x02"},
		{"addr" : "22" , "val" : "000|0x00"},
		{"addr" : "23" , "val" : "000|0x00"},
		{"addr" : "24" , "val" : "000|0x00"},
		{"addr" : "25" , "val" : "000|0x00"}],
"CODE" : ["subl eax,edx" , "irmovl 1,eax" , "irmovl 10000000,edx" , "EMPTY" , "EMPTY"],
	"REGVALUE" : 
	{
		"eax" : "        0",
		"ebx" : "        0",
		"ecx" : "        0",
		"edx" : "        0",
		"ebp" : "        0",
		"esp" : "        0",
		"esi" : "        0",
		"edi" : "        0"
	},
	"FETCH" :
	[
		{"key":"predPC" , "value":"12"},
		{"key":"instructions" , "value":0},
		{"key":"CPI" , "value":0}
	],
	"DECODE" : [
		{"key":"stat" , "value":"1"},
		{"key":"rA" , "value":"15"},
		{"key":"rB" , "value":"0"},
		{"key":"valC" , "value":"1"},
		{"key":"valP" , "value":"12"}
	],
	"EXECUTE" : [
		{"key":"stat" , "value":"1"},
		{"key":"valC" , "value":10000000},
		{"key":"valA" , "value":0},
		{"key":"valB" , "value":0},
		{"key":"dstE" , "value":2},
		{"key":"dstM" , "value":15},
		{"key":"srcA" , "value":15},
		{"key":"srcB" , "value":15}
	],
	"MEMORY" : [
		{"key":"stat" , "value":"1"},
		{"key":"valE" , "value":0},
		{"key":"valA" , "value":0},
		{"key":"dstE" , "value":15},
		{"key":"dstM" , "value":15}
	],
	"WRITE BACK" : [
		{"key":"stat" , "value":"1"},
		{"key":"valE" , "value":0},
		{"key":"valM" , "value":0},
		{"key":"dstE" , "value":0},
		{"key":"dstM" , "value":0},
	]
}
,
{
	"CONDITIONVALUE" : {"ZF" : "0" , SF : "0" , OF : "0"},
	"MEMORY_TABLE" : [
		{"addr" : "0" , "val" : "048|0x30"},
		{"addr" : "1" , "val" : "242|0xf2"},
		{"addr" : "2" , "val" : "128|0x80"},
		{"addr" : "3" , "val" : "150|0x96"},
		{"addr" : "4" , "val" : "152|0x98"},
		{"addr" : "5" , "val" : "000|0x00"},
		{"addr" : "6" , "val" : "048|0x30"},
		{"addr" : "7" , "val" : "240|0xf0"},
		{"addr" : "8" , "val" : "001|0x01"},
		{"addr" : "9" , "val" : "000|0x00"},
		{"addr" : "10" , "val" : "000|0x00"},
		{"addr" : "11" , "val" : "000|0x00"},
		{"addr" : "12" , "val" : "097|0x61"},
		{"addr" : "13" , "val" : "002|0x02"},
		{"addr" : "14" , "val" : "114|0x72"},
		{"addr" : "15" , "val" : "025|0x19"},
		{"addr" : "16" , "val" : "000|0x00"},
		{"addr" : "17" , "val" : "000|0x00"},
		{"addr" : "18" , "val" : "000|0x00"},
		{"addr" : "19" , "val" : "048|0x30"},
		{"addr" : "20" , "val" : "241|0xf1"},
		{"addr" : "21" , "val" : "002|0x02"},
		{"addr" : "22" , "val" : "000|0x00"},
		{"addr" : "23" , "val" : "000|0x00"},
		{"addr" : "24" , "val" : "000|0x00"},
		{"addr" : "25" , "val" : "000|0x00"}],
"CODE" : ["jl 25" , "subl eax,edx" , "irmovl 1,eax" , "irmovl 10000000,edx" , "EMPTY"],
	"REGVALUE" : 
	{
		"eax" : "        0",
		"ebx" : "        0",
		"ecx" : "        0",
		"edx" : "        0",
		"ebp" : "        0",
		"esp" : "        0",
		"esi" : "        0",
		"edi" : "        0"
	},
	"FETCH" :
	[
		{"key":"predPC" , "value":"14"},
		{"key":"instructions" , "value":0},
		{"key":"CPI" , "value":0}
	],
	"DECODE" : [
		{"key":"stat" , "value":"1"},
		{"key":"rA" , "value":"0"},
		{"key":"rB" , "value":"2"},
		{"key":"valC" , "value":"0"},
		{"key":"valP" , "value":"14"}
	],
	"EXECUTE" : [
		{"key":"stat" , "value":"1"},
		{"key":"valC" , "value":1},
		{"key":"valA" , "value":0},
		{"key":"valB" , "value":0},
		{"key":"dstE" , "value":0},
		{"key":"dstM" , "value":15},
		{"key":"srcA" , "value":15},
		{"key":"srcB" , "value":15}
	],
	"MEMORY" : [
		{"key":"stat" , "value":"1"},
		{"key":"valE" , "value":10000000},
		{"key":"valA" , "value":0},
		{"key":"dstE" , "value":2},
		{"key":"dstM" , "value":15}
	],
	"WRITE BACK" : [
		{"key":"stat" , "value":"1"},
		{"key":"valE" , "value":0},
		{"key":"valM" , "value":0},
		{"key":"dstE" , "value":15},
		{"key":"dstM" , "value":15},
	]
}
,
{
	"CONDITIONVALUE" : {"ZF" : "0" , SF : "0" , OF : "0"},
	"MEMORY_TABLE" : [
		{"addr" : "0" , "val" : "048|0x30"},
		{"addr" : "1" , "val" : "242|0xf2"},
		{"addr" : "2" , "val" : "128|0x80"},
		{"addr" : "3" , "val" : "150|0x96"},
		{"addr" : "4" , "val" : "152|0x98"},
		{"addr" : "5" , "val" : "000|0x00"},
		{"addr" : "6" , "val" : "048|0x30"},
		{"addr" : "7" , "val" : "240|0xf0"},
		{"addr" : "8" , "val" : "001|0x01"},
		{"addr" : "9" , "val" : "000|0x00"},
		{"addr" : "10" , "val" : "000|0x00"},
		{"addr" : "11" , "val" : "000|0x00"},
		{"addr" : "12" , "val" : "097|0x61"},
		{"addr" : "13" , "val" : "002|0x02"},
		{"addr" : "14" , "val" : "114|0x72"},
		{"addr" : "15" , "val" : "025|0x19"},
		{"addr" : "16" , "val" : "000|0x00"},
		{"addr" : "17" , "val" : "000|0x00"},
		{"addr" : "18" , "val" : "000|0x00"},
		{"addr" : "19" , "val" : "048|0x30"},
		{"addr" : "20" , "val" : "241|0xf1"},
		{"addr" : "21" , "val" : "002|0x02"},
		{"addr" : "22" , "val" : "000|0x00"},
		{"addr" : "23" , "val" : "000|0x00"},
		{"addr" : "24" , "val" : "000|0x00"},
		{"addr" : "25" , "val" : "000|0x00"}],
"CODE" : ["halt" , "jl 25" , "subl eax,edx" , "irmovl 1,eax" , "irmovl 10000000,edx"],
	"REGVALUE" : 
	{
		"eax" : "        0",
		"ebx" : "        0",
		"ecx" : "        0",
		"edx" : " 10000000",
		"ebp" : "        0",
		"esp" : "        0",
		"esi" : "        0",
		"edi" : "        0"
	},
	"FETCH" :
	[
		{"key":"predPC" , "value":"25"},
		{"key":"instructions" , "value":0},
		{"key":"CPI" , "value":0}
	],
	"DECODE" : [
		{"key":"stat" , "value":"1"},
		{"key":"rA" , "value":"15"},
		{"key":"rB" , "value":"15"},
		{"key":"valC" , "value":"25"},
		{"key":"valP" , "value":"19"}
	],
	"EXECUTE" : [
		{"key":"stat" , "value":"1"},
		{"key":"valC" , "value":0},
		{"key":"valA" , "value":1},
		{"key":"valB" , "value":10000000},
		{"key":"dstE" , "value":2},
		{"key":"dstM" , "value":15},
		{"key":"srcA" , "value":0},
		{"key":"srcB" , "value":2}
	],
	"MEMORY" : [
		{"key":"stat" , "value":"1"},
		{"key":"valE" , "value":1},
		{"key":"valA" , "value":0},
		{"key":"dstE" , "value":0},
		{"key":"dstM" , "value":15}
	],
	"WRITE BACK" : [
		{"key":"stat" , "value":"1"},
		{"key":"valE" , "value":10000000},
		{"key":"valM" , "value":0},
		{"key":"dstE" , "value":2},
		{"key":"dstM" , "value":15},
	]
}
,
{
	"CONDITIONVALUE" : {"ZF" : "0" , SF : "0" , OF : "0"},
	"MEMORY_TABLE" : [
		{"addr" : "0" , "val" : "048|0x30"},
		{"addr" : "1" , "val" : "242|0xf2"},
		{"addr" : "2" , "val" : "128|0x80"},
		{"addr" : "3" , "val" : "150|0x96"},
		{"addr" : "4" , "val" : "152|0x98"},
		{"addr" : "5" , "val" : "000|0x00"},
		{"addr" : "6" , "val" : "048|0x30"},
		{"addr" : "7" , "val" : "240|0xf0"},
		{"addr" : "8" , "val" : "001|0x01"},
		{"addr" : "9" , "val" : "000|0x00"},
		{"addr" : "10" , "val" : "000|0x00"},
		{"addr" : "11" , "val" : "000|0x00"},
		{"addr" : "12" , "val" : "097|0x61"},
		{"addr" : "13" , "val" : "002|0x02"},
		{"addr" : "14" , "val" : "114|0x72"},
		{"addr" : "15" , "val" : "025|0x19"},
		{"addr" : "16" , "val" : "000|0x00"},
		{"addr" : "17" , "val" : "000|0x00"},
		{"addr" : "18" , "val" : "000|0x00"},
		{"addr" : "19" , "val" : "048|0x30"},
		{"addr" : "20" , "val" : "241|0xf1"},
		{"addr" : "21" , "val" : "002|0x02"},
		{"addr" : "22" , "val" : "000|0x00"},
		{"addr" : "23" , "val" : "000|0x00"},
		{"addr" : "24" , "val" : "000|0x00"},
		{"addr" : "25" , "val" : "000|0x00"}],
"CODE" : ["halt" , "halt" , "jl 25" , "subl eax,edx" , "irmovl 1,eax"],
	"REGVALUE" : 
	{
		"eax" : "        1",
		"ebx" : "        0",
		"ecx" : "        0",
		"edx" : " 10000000",
		"ebp" : "        0",
		"esp" : "        0",
		"esi" : "        0",
		"edi" : "        0"
	},
	"FETCH" :
	[
		{"key":"predPC" , "value":"26"},
		{"key":"instructions" , "value":0},
		{"key":"CPI" , "value":0}
	],
	"DECODE" : [
		{"key":"stat" , "value":"4"},
		{"key":"rA" , "value":"15"},
		{"key":"rB" , "value":"15"},
		{"key":"valC" , "value":"0"},
		{"key":"valP" , "value":"26"}
	],
	"EXECUTE" : [
		{"key":"stat" , "value":"1"},
		{"key":"valC" , "value":25},
		{"key":"valA" , "value":19},
		{"key":"valB" , "value":0},
		{"key":"dstE" , "value":15},
		{"key":"dstM" , "value":15},
		{"key":"srcA" , "value":15},
		{"key":"srcB" , "value":15}
	],
	"MEMORY" : [
		{"key":"stat" , "value":"1"},
		{"key":"valE" , "value":9999999},
		{"key":"valA" , "value":1},
		{"key":"dstE" , "value":2},
		{"key":"dstM" , "value":15}
	],
	"WRITE BACK" : [
		{"key":"stat" , "value":"1"},
		{"key":"valE" , "value":1},
		{"key":"valM" , "value":0},
		{"key":"dstE" , "value":0},
		{"key":"dstM" , "value":15},
	]
}
,
{
	"CONDITIONVALUE" : {"ZF" : "0" , SF : "0" , OF : "0"},
	"MEMORY_TABLE" : [
		{"addr" : "0" , "val" : "048|0x30"},
		{"addr" : "1" , "val" : "242|0xf2"},
		{"addr" : "2" , "val" : "128|0x80"},
		{"addr" : "3" , "val" : "150|0x96"},
		{"addr" : "4" , "val" : "152|0x98"},
		{"addr" : "5" , "val" : "000|0x00"},
		{"addr" : "6" , "val" : "048|0x30"},
		{"addr" : "7" , "val" : "240|0xf0"},
		{"addr" : "8" , "val" : "001|0x01"},
		{"addr" : "9" , "val" : "000|0x00"},
		{"addr" : "10" , "val" : "000|0x00"},
		{"addr" : "11" , "val" : "000|0x00"},
		{"addr" : "12" , "val" : "097|0x61"},
		{"addr" : "13" , "val" : "002|0x02"},
		{"addr" : "14" , "val" : "114|0x72"},
		{"addr" : "15" , "val" : "025|0x19"},
		{"addr" : "16" , "val" : "000|0x00"},
		{"addr" : "17" , "val" : "000|0x00"},
		{"addr" : "18" , "val" : "000|0x00"},
		{"addr" : "19" , "val" : "048|0x30"},
		{"addr" : "20" , "val" : "241|0xf1"},
		{"addr" : "21" , "val" : "002|0x02"},
		{"addr" : "22" , "val" : "000|0x00"},
		{"addr" : "23" , "val" : "000|0x00"},
		{"addr" : "24" , "val" : "000|0x00"},
		{"addr" : "25" , "val" : "000|0x00"}],
"CODE" : ["halt" , "nop" , "nop" , "jl 25" , "subl eax,edx"],
	"REGVALUE" : 
	{
		"eax" : "        1",
		"ebx" : "        0",
		"ecx" : "        0",
		"edx" : "  9999999",
		"ebp" : "        0",
		"esp" : "        0",
		"esi" : "        0",
		"edi" : "        0"
	},
	"FETCH" :
	[
		{"key":"predPC" , "value":"27"},
		{"key":"instructions" , "value":0},
		{"key":"CPI" , "value":0}
	],
	"DECODE" : [
		{"key":"stat" , "value":"1"},
		{"key":"rA" , "value":"15"},
		{"key":"rB" , "value":"15"},
		{"key":"valC" , "value":"0"},
		{"key":"valP" , "value":"26"}
	],
	"EXECUTE" : [
		{"key":"stat" , "value":"1"},
		{"key":"valC" , "value":25},
		{"key":"valA" , "value":19},
		{"key":"valB" , "value":0},
		{"key":"dstE" , "value":15},
		{"key":"dstM" , "value":15},
		{"key":"srcA" , "value":15},
		{"key":"srcB" , "value":15}
	],
	"MEMORY" : [
		{"key":"stat" , "value":"1"},
		{"key":"valE" , "value":10000001},
		{"key":"valA" , "value":19},
		{"key":"dstE" , "value":15},
		{"key":"dstM" , "value":15}
	],
	"WRITE BACK" : [
		{"key":"stat" , "value":"1"},
		{"key":"valE" , "value":9999999},
		{"key":"valM" , "value":0},
		{"key":"dstE" , "value":2},
		{"key":"dstM" , "value":15},
	]
}
,
{
	"CONDITIONVALUE" : {"ZF" : "0" , SF : "0" , OF : "0"},
	"MEMORY_TABLE" : [
		{"addr" : "0" , "val" : "048|0x30"},
		{"addr" : "1" , "val" : "242|0xf2"},
		{"addr" : "2" , "val" : "128|0x80"},
		{"addr" : "3" , "val" : "150|0x96"},
		{"addr" : "4" , "val" : "152|0x98"},
		{"addr" : "5" , "val" : "000|0x00"},
		{"addr" : "6" , "val" : "048|0x30"},
		{"addr" : "7" , "val" : "240|0xf0"},
		{"addr" : "8" , "val" : "001|0x01"},
		{"addr" : "9" , "val" : "000|0x00"},
		{"addr" : "10" , "val" : "000|0x00"},
		{"addr" : "11" , "val" : "000|0x00"},
		{"addr" : "12" , "val" : "097|0x61"},
		{"addr" : "13" , "val" : "002|0x02"},
		{"addr" : "14" , "val" : "114|0x72"},
		{"addr" : "15" , "val" : "025|0x19"},
		{"addr" : "16" , "val" : "000|0x00"},
		{"addr" : "17" , "val" : "000|0x00"},
		{"addr" : "18" , "val" : "000|0x00"},
		{"addr" : "19" , "val" : "048|0x30"},
		{"addr" : "20" , "val" : "241|0xf1"},
		{"addr" : "21" , "val" : "002|0x02"},
		{"addr" : "22" , "val" : "000|0x00"},
		{"addr" : "23" , "val" : "000|0x00"},
		{"addr" : "24" , "val" : "000|0x00"},
		{"addr" : "25" , "val" : "000|0x00"}],
"CODE" : ["halt" , "irmovl 2,ecx" , "nop" , "nop" , "jl 25"],
	"REGVALUE" : 
	{
		"eax" : "        1",
		"ebx" : "        0",
		"ecx" : "        0",
		"edx" : "  9999999",
		"ebp" : "        0",
		"esp" : "        0",
		"esi" : "        0",
		"edi" : "        0"
	},
	"FETCH" :
	[
		{"key":"predPC" , "value":"25"},
		{"key":"instructions" , "value":0},
		{"key":"CPI" , "value":0}
	],
	"DECODE" : [
		{"key":"stat" , "value":"1"},
		{"key":"rA" , "value":"15"},
		{"key":"rB" , "value":"1"},
		{"key":"valC" , "value":"2"},
		{"key":"valP" , "value":"25"}
	],
	"EXECUTE" : [
		{"key":"stat" , "value":"1"},
		{"key":"valC" , "value":0},
		{"key":"valA" , "value":10000001},
		{"key":"valB" , "value":10000001},
		{"key":"dstE" , "value":15},
		{"key":"dstM" , "value":15},
		{"key":"srcA" , "value":15},
		{"key":"srcB" , "value":15}
	],
	"MEMORY" : [
		{"key":"stat" , "value":"1"},
		{"key":"valE" , "value":10000001},
		{"key":"valA" , "value":19},
		{"key":"dstE" , "value":15},
		{"key":"dstM" , "value":15}
	],
	"WRITE BACK" : [
		{"key":"stat" , "value":"1"},
		{"key":"valE" , "value":10000001},
		{"key":"valM" , "value":0},
		{"key":"dstE" , "value":15},
		{"key":"dstM" , "value":15},
	]
}
,
{
	"CONDITIONVALUE" : {"ZF" : "0" , SF : "0" , OF : "0"},
	"MEMORY_TABLE" : [
		{"addr" : "0" , "val" : "048|0x30"},
		{"addr" : "1" , "val" : "242|0xf2"},
		{"addr" : "2" , "val" : "128|0x80"},
		{"addr" : "3" , "val" : "150|0x96"},
		{"addr" : "4" , "val" : "152|0x98"},
		{"addr" : "5" , "val" : "000|0x00"},
		{"addr" : "6" , "val" : "048|0x30"},
		{"addr" : "7" , "val" : "240|0xf0"},
		{"addr" : "8" , "val" : "001|0x01"},
		{"addr" : "9" , "val" : "000|0x00"},
		{"addr" : "10" , "val" : "000|0x00"},
		{"addr" : "11" , "val" : "000|0x00"},
		{"addr" : "12" , "val" : "097|0x61"},
		{"addr" : "13" , "val" : "002|0x02"},
		{"addr" : "14" , "val" : "114|0x72"},
		{"addr" : "15" , "val" : "025|0x19"},
		{"addr" : "16" , "val" : "000|0x00"},
		{"addr" : "17" , "val" : "000|0x00"},
		{"addr" : "18" , "val" : "000|0x00"},
		{"addr" : "19" , "val" : "048|0x30"},
		{"addr" : "20" , "val" : "241|0xf1"},
		{"addr" : "21" , "val" : "002|0x02"},
		{"addr" : "22" , "val" : "000|0x00"},
		{"addr" : "23" , "val" : "000|0x00"},
		{"addr" : "24" , "val" : "000|0x00"},
		{"addr" : "25" , "val" : "000|0x00"}],
"CODE" : ["halt" , "halt" , "irmovl 2,ecx" , "nop" , "nop"],
	"REGVALUE" : 
	{
		"eax" : "        1",
		"ebx" : "        0",
		"ecx" : "        0",
		"edx" : "  9999999",
		"ebp" : "        0",
		"esp" : "        0",
		"esi" : "        0",
		"edi" : "        0"
	},
	"FETCH" :
	[
		{"key":"predPC" , "value":"26"},
		{"key":"instructions" , "value":0},
		{"key":"CPI" , "value":0}
	],
	"DECODE" : [
		{"key":"stat" , "value":"4"},
		{"key":"rA" , "value":"15"},
		{"key":"rB" , "value":"15"},
		{"key":"valC" , "value":"0"},
		{"key":"valP" , "value":"26"}
	],
	"EXECUTE" : [
		{"key":"stat" , "value":"1"},
		{"key":"valC" , "value":2},
		{"key":"valA" , "value":10000001},
		{"key":"valB" , "value":10000001},
		{"key":"dstE" , "value":1},
		{"key":"dstM" , "value":15},
		{"key":"srcA" , "value":15},
		{"key":"srcB" , "value":15}
	],
	"MEMORY" : [
		{"key":"stat" , "value":"1"},
		{"key":"valE" , "value":10000001},
		{"key":"valA" , "value":10000001},
		{"key":"dstE" , "value":15},
		{"key":"dstM" , "value":15}
	],
	"WRITE BACK" : [
		{"key":"stat" , "value":"1"},
		{"key":"valE" , "value":10000001},
		{"key":"valM" , "value":0},
		{"key":"dstE" , "value":15},
		{"key":"dstM" , "value":15},
	]
}
,
{
	"CONDITIONVALUE" : {"ZF" : "0" , SF : "0" , OF : "0"},
	"MEMORY_TABLE" : [
		{"addr" : "0" , "val" : "048|0x30"},
		{"addr" : "1" , "val" : "242|0xf2"},
		{"addr" : "2" , "val" : "128|0x80"},
		{"addr" : "3" , "val" : "150|0x96"},
		{"addr" : "4" , "val" : "152|0x98"},
		{"addr" : "5" , "val" : "000|0x00"},
		{"addr" : "6" , "val" : "048|0x30"},
		{"addr" : "7" , "val" : "240|0xf0"},
		{"addr" : "8" , "val" : "001|0x01"},
		{"addr" : "9" , "val" : "000|0x00"},
		{"addr" : "10" , "val" : "000|0x00"},
		{"addr" : "11" , "val" : "000|0x00"},
		{"addr" : "12" , "val" : "097|0x61"},
		{"addr" : "13" , "val" : "002|0x02"},
		{"addr" : "14" , "val" : "114|0x72"},
		{"addr" : "15" , "val" : "025|0x19"},
		{"addr" : "16" , "val" : "000|0x00"},
		{"addr" : "17" , "val" : "000|0x00"},
		{"addr" : "18" , "val" : "000|0x00"},
		{"addr" : "19" , "val" : "048|0x30"},
		{"addr" : "20" , "val" : "241|0xf1"},
		{"addr" : "21" , "val" : "002|0x02"},
		{"addr" : "22" , "val" : "000|0x00"},
		{"addr" : "23" , "val" : "000|0x00"},
		{"addr" : "24" , "val" : "000|0x00"},
		{"addr" : "25" , "val" : "000|0x00"}],
"CODE" : ["halt" , "halt" , "halt" , "irmovl 2,ecx" , "nop"],
	"REGVALUE" : 
	{
		"eax" : "        1",
		"ebx" : "        0",
		"ecx" : "        0",
		"edx" : "  9999999",
		"ebp" : "        0",
		"esp" : "        0",
		"esi" : "        0",
		"edi" : "        0"
	},
	"FETCH" :
	[
		{"key":"predPC" , "value":"27"},
		{"key":"instructions" , "value":0},
		{"key":"CPI" , "value":0}
	],
	"DECODE" : [
		{"key":"stat" , "value":"2"},
		{"key":"rA" , "value":"15"},
		{"key":"rB" , "value":"15"},
		{"key":"valC" , "value":"0"},
		{"key":"valP" , "value":"27"}
	],
	"EXECUTE" : [
		{"key":"stat" , "value":"4"},
		{"key":"valC" , "value":0},
		{"key":"valA" , "value":0},
		{"key":"valB" , "value":0},
		{"key":"dstE" , "value":15},
		{"key":"dstM" , "value":15},
		{"key":"srcA" , "value":15},
		{"key":"srcB" , "value":15}
	],
	"MEMORY" : [
		{"key":"stat" , "value":"1"},
		{"key":"valE" , "value":2},
		{"key":"valA" , "value":10000001},
		{"key":"dstE" , "value":1},
		{"key":"dstM" , "value":15}
	],
	"WRITE BACK" : [
		{"key":"stat" , "value":"1"},
		{"key":"valE" , "value":10000001},
		{"key":"valM" , "value":0},
		{"key":"dstE" , "value":15},
		{"key":"dstM" , "value":15},
	]
}
,
{
	"CONDITIONVALUE" : {"ZF" : "0" , SF : "0" , OF : "0"},
	"MEMORY_TABLE" : [
		{"addr" : "0" , "val" : "048|0x30"},
		{"addr" : "1" , "val" : "242|0xf2"},
		{"addr" : "2" , "val" : "128|0x80"},
		{"addr" : "3" , "val" : "150|0x96"},
		{"addr" : "4" , "val" : "152|0x98"},
		{"addr" : "5" , "val" : "000|0x00"},
		{"addr" : "6" , "val" : "048|0x30"},
		{"addr" : "7" , "val" : "240|0xf0"},
		{"addr" : "8" , "val" : "001|0x01"},
		{"addr" : "9" , "val" : "000|0x00"},
		{"addr" : "10" , "val" : "000|0x00"},
		{"addr" : "11" , "val" : "000|0x00"},
		{"addr" : "12" , "val" : "097|0x61"},
		{"addr" : "13" , "val" : "002|0x02"},
		{"addr" : "14" , "val" : "114|0x72"},
		{"addr" : "15" , "val" : "025|0x19"},
		{"addr" : "16" , "val" : "000|0x00"},
		{"addr" : "17" , "val" : "000|0x00"},
		{"addr" : "18" , "val" : "000|0x00"},
		{"addr" : "19" , "val" : "048|0x30"},
		{"addr" : "20" , "val" : "241|0xf1"},
		{"addr" : "21" , "val" : "002|0x02"},
		{"addr" : "22" , "val" : "000|0x00"},
		{"addr" : "23" , "val" : "000|0x00"},
		{"addr" : "24" , "val" : "000|0x00"},
		{"addr" : "25" , "val" : "000|0x00"}],
"CODE" : ["halt" , "halt" , "halt" , "halt" , "irmovl 2,ecx"],
	"REGVALUE" : 
	{
		"eax" : "        1",
		"ebx" : "        0",
		"ecx" : "        2",
		"edx" : "  9999999",
		"ebp" : "        0",
		"esp" : "        0",
		"esi" : "        0",
		"edi" : "        0"
	},
	"FETCH" :
	[
		{"key":"predPC" , "value":"28"},
		{"key":"instructions" , "value":0},
		{"key":"CPI" , "value":0}
	],
	"DECODE" : [
		{"key":"stat" , "value":"2"},
		{"key":"rA" , "value":"15"},
		{"key":"rB" , "value":"15"},
		{"key":"valC" , "value":"0"},
		{"key":"valP" , "value":"28"}
	],
	"EXECUTE" : [
		{"key":"stat" , "value":"2"},
		{"key":"valC" , "value":0},
		{"key":"valA" , "value":2},
		{"key":"valB" , "value":2},
		{"key":"dstE" , "value":15},
		{"key":"dstM" , "value":15},
		{"key":"srcA" , "value":15},
		{"key":"srcB" , "value":15}
	],
	"MEMORY" : [
		{"key":"stat" , "value":"4"},
		{"key":"valE" , "value":2},
		{"key":"valA" , "value":0},
		{"key":"dstE" , "value":15},
		{"key":"dstM" , "value":15}
	],
	"WRITE BACK" : [
		{"key":"stat" , "value":"1"},
		{"key":"valE" , "value":2},
		{"key":"valM" , "value":0},
		{"key":"dstE" , "value":1},
		{"key":"dstM" , "value":15},
	]
}
]
