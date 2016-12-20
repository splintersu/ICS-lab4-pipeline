complete_data = [
{
	"CONDITIONVALUE" : {"ZF" : "0" , SF : "0" , OF : "0"},
	"MEMORY_TABLE" : [{"addr" : "0x00000000" , "val" : "0x00000000"}],
"CODE" : ["EMPTY" , "EMPTY" , "EMPTY" , "EMPTY" , "EMPTY"],
	"REGVALUE" : 
	{
		"eax" : "0x00000000",
		"ebx" : "0x00000000",
		"ecx" : "0x00000000",
		"edx" : "0x00000000",
		"ebp" : "0x00000000",
		"esp" : "0x00000000",
		"esi" : "0x00000000",
		"edi" : "0x00000000"
	},
	"FETCH" :
	[
		{"key":"predPC" , "value":"0x00000000"},
		{"key":"instructions" , "value":0},
		{"key":"CPI" , "value":0}
	],
	"DECODE" : [
		{"key":"stat" , "value":"STAT_BUB"},
		{"key":"icode" , "value":"I_HALT"},
		{"key":"ifun" , "value":0},
		{"key":"rA" , "value":"15"},
		{"key":"rB" , "value":"15"},
		{"key":"valC" , "value":"0x00000000"},
		{"key":"valP" , "value":"0x00000000"}
	],
	"EXECUTE" : [
		{"key":"stat" , "value":"STAT_BUB"},
		{"key":"icode" , "value":"I_HALT"},
		{"key":"ifun" , "value":0},
		{"key":"valC" , "value":0},
		{"key":"valA" , "value":0},
		{"key":"valB" , "value":0},
		{"key":"dstE" , "value":0},
		{"key":"dstM" , "value":0},
		{"key":"srcA" , "value":0},
		{"key":"srcB" , "value":0}
	],
	"MEMORY" : [
		{"key":"stat" , "value":"STAT_BUB"},
		{"key":"icode" , "value":"I_HALT"},
		{"key":"valE" , "value":0},
		{"key":"valA" , "value":0},
		{"key":"dstE" , "value":0},
		{"key":"dstM" , "value":0}
	],
	"WRITE BACK" : [
		{"key":"stat" , "value":"STAT_BUB"},
		{"key":"icode" , "value":"I_HALT"},
		{"key":"valE" , "value":0},
		{"key":"valM" , "value":0},
		{"key":"dstE" , "value":0},
		{"key":"dstM" , "value":0},
	]
}
,
{
	"CONDITIONVALUE" : {"ZF" : "0" , SF : "0" , OF : "0"},
	"MEMORY_TABLE" : [{"addr" : "0x00000000" , "val" : "0x00000000"}],
"CODE" : ["xorl eax,eax" , "EMPTY" , "EMPTY" , "EMPTY" , "EMPTY"],
	"REGVALUE" : 
	{
		"eax" : "0x00000000",
		"ebx" : "0x00000000",
		"ecx" : "0x00000000",
		"edx" : "0x00000000",
		"ebp" : "0x00000000",
		"esp" : "0x00000000",
		"esi" : "0x00000000",
		"edi" : "0x00000000"
	},
	"FETCH" :
	[
		{"key":"predPC" , "value":"0x00000002"},
		{"key":"instructions" , "value":0},
		{"key":"CPI" , "value":0}
	],
	"DECODE" : [
		{"key":"stat" , "value":"STAT_BUB"},
		{"key":"icode" , "value":"I_HALT"},
		{"key":"ifun" , "value":3},
		{"key":"rA" , "value":"0"},
		{"key":"rB" , "value":"0"},
		{"key":"valC" , "value":"0x00000000"},
		{"key":"valP" , "value":"0x00000002"}
	],
	"EXECUTE" : [
		{"key":"stat" , "value":"STAT_BUB"},
		{"key":"icode" , "value":"I_HALT"},
		{"key":"ifun" , "value":0},
		{"key":"valC" , "value":0},
		{"key":"valA" , "value":0},
		{"key":"valB" , "value":0},
		{"key":"dstE" , "value":15},
		{"key":"dstM" , "value":15},
		{"key":"srcA" , "value":15},
		{"key":"srcB" , "value":15}
	],
	"MEMORY" : [
		{"key":"stat" , "value":"STAT_BUB"},
		{"key":"icode" , "value":"I_HALT"},
		{"key":"valE" , "value":0},
		{"key":"valA" , "value":0},
		{"key":"dstE" , "value":0},
		{"key":"dstM" , "value":0}
	],
	"WRITE BACK" : [
		{"key":"stat" , "value":"STAT_BUB"},
		{"key":"icode" , "value":"I_HALT"},
		{"key":"valE" , "value":0},
		{"key":"valM" , "value":0},
		{"key":"dstE" , "value":0},
		{"key":"dstM" , "value":0},
	]
}
,
{
	"CONDITIONVALUE" : {"ZF" : "0" , SF : "0" , OF : "0"},
	"MEMORY_TABLE" : [{"addr" : "0x00000000" , "val" : "0x00000000"}],
"CODE" : ["jne 805306368" , "xorl eax,eax" , "EMPTY" , "EMPTY" , "EMPTY"],
	"REGVALUE" : 
	{
		"eax" : "0x00000000",
		"ebx" : "0x00000000",
		"ecx" : "0x00000000",
		"edx" : "0x00000000",
		"ebp" : "0x00000000",
		"esp" : "0x00000000",
		"esi" : "0x00000000",
		"edi" : "0x00000000"
	},
	"FETCH" :
	[
		{"key":"predPC" , "value":"0x0000000e"},
		{"key":"instructions" , "value":0},
		{"key":"CPI" , "value":0}
	],
	"DECODE" : [
		{"key":"stat" , "value":"STAT_BUB"},
		{"key":"icode" , "value":"I_HALT"},
		{"key":"ifun" , "value":4},
		{"key":"rA" , "value":"15"},
		{"key":"rB" , "value":"15"},
		{"key":"valC" , "value":"0x0000000e"},
		{"key":"valP" , "value":"0x00000007"}
	],
	"EXECUTE" : [
		{"key":"stat" , "value":"STAT_BUB"},
		{"key":"icode" , "value":"I_HALT"},
		{"key":"ifun" , "value":3},
		{"key":"valC" , "value":0},
		{"key":"valA" , "value":0},
		{"key":"valB" , "value":0},
		{"key":"dstE" , "value":0},
		{"key":"dstM" , "value":15},
		{"key":"srcA" , "value":0},
		{"key":"srcB" , "value":0}
	],
	"MEMORY" : [
		{"key":"stat" , "value":"STAT_BUB"},
		{"key":"icode" , "value":"I_HALT"},
		{"key":"valE" , "value":0},
		{"key":"valA" , "value":0},
		{"key":"dstE" , "value":15},
		{"key":"dstM" , "value":15}
	],
	"WRITE BACK" : [
		{"key":"stat" , "value":"STAT_BUB"},
		{"key":"icode" , "value":"I_HALT"},
		{"key":"valE" , "value":0},
		{"key":"valM" , "value":0},
		{"key":"dstE" , "value":0},
		{"key":"dstM" , "value":0},
	]
}
,
{
	"CONDITIONVALUE" : {"ZF" : "1" , SF : "0" , OF : "0"},
	"MEMORY_TABLE" : [{"addr" : "0x00000000" , "val" : "0x00000000"}],
"CODE" : ["irmovl 2,edx" , "jne 805306368" , "xorl eax,eax" , "EMPTY" , "EMPTY"],
	"REGVALUE" : 
	{
		"eax" : "0x00000000",
		"ebx" : "0x00000000",
		"ecx" : "0x00000000",
		"edx" : "0x00000000",
		"ebp" : "0x00000000",
		"esp" : "0x00000000",
		"esi" : "0x00000000",
		"edi" : "0x00000000"
	},
	"FETCH" :
	[
		{"key":"predPC" , "value":"0x00000014"},
		{"key":"instructions" , "value":0},
		{"key":"CPI" , "value":0}
	],
	"DECODE" : [
		{"key":"stat" , "value":"STAT_BUB"},
		{"key":"icode" , "value":"I_HALT"},
		{"key":"ifun" , "value":0},
		{"key":"rA" , "value":"15"},
		{"key":"rB" , "value":"2"},
		{"key":"valC" , "value":"0x00000002"},
		{"key":"valP" , "value":"0x00000014"}
	],
	"EXECUTE" : [
		{"key":"stat" , "value":"STAT_BUB"},
		{"key":"icode" , "value":"I_HALT"},
		{"key":"ifun" , "value":4},
		{"key":"valC" , "value":14},
		{"key":"valA" , "value":7},
		{"key":"valB" , "value":0},
		{"key":"dstE" , "value":15},
		{"key":"dstM" , "value":15},
		{"key":"srcA" , "value":15},
		{"key":"srcB" , "value":15}
	],
	"MEMORY" : [
		{"key":"stat" , "value":"STAT_BUB"},
		{"key":"icode" , "value":"I_HALT"},
		{"key":"valE" , "value":0},
		{"key":"valA" , "value":0},
		{"key":"dstE" , "value":0},
		{"key":"dstM" , "value":15}
	],
	"WRITE BACK" : [
		{"key":"stat" , "value":"STAT_BUB"},
		{"key":"icode" , "value":"I_HALT"},
		{"key":"valE" , "value":0},
		{"key":"valM" , "value":0},
		{"key":"dstE" , "value":15},
		{"key":"dstM" , "value":15},
	]
}
,
{
	"CONDITIONVALUE" : {"ZF" : "1" , SF : "0" , OF : "0"},
	"MEMORY_TABLE" : [{"addr" : "0x00000000" , "val" : "0x00000000"}],
"CODE" : ["irmovl 3,ebx" , "irmovl 2,edx" , "jne 805306368" , "xorl eax,eax" , "EMPTY"],
	"REGVALUE" : 
	{
		"eax" : "0x00000000",
		"ebx" : "0x00000000",
		"ecx" : "0x00000000",
		"edx" : "0x00000000",
		"ebp" : "0x00000000",
		"esp" : "0x00000000",
		"esi" : "0x00000000",
		"edi" : "0x00000000"
	},
	"FETCH" :
	[
		{"key":"predPC" , "value":"0x0000001a"},
		{"key":"instructions" , "value":0},
		{"key":"CPI" , "value":0}
	],
	"DECODE" : [
		{"key":"stat" , "value":"STAT_BUB"},
		{"key":"icode" , "value":"I_HALT"},
		{"key":"ifun" , "value":0},
		{"key":"rA" , "value":"15"},
		{"key":"rB" , "value":"2"},
		{"key":"valC" , "value":"0x00000002"},
		{"key":"valP" , "value":"0x00000014"}
	],
	"EXECUTE" : [
		{"key":"stat" , "value":"STAT_BUB"},
		{"key":"icode" , "value":"I_HALT"},
		{"key":"ifun" , "value":0},
		{"key":"valC" , "value":14},
		{"key":"valA" , "value":7},
		{"key":"valB" , "value":0},
		{"key":"dstE" , "value":15},
		{"key":"dstM" , "value":15},
		{"key":"srcA" , "value":15},
		{"key":"srcB" , "value":15}
	],
	"MEMORY" : [
		{"key":"stat" , "value":"STAT_BUB"},
		{"key":"icode" , "value":"I_HALT"},
		{"key":"valE" , "value":0},
		{"key":"valA" , "value":7},
		{"key":"dstE" , "value":15},
		{"key":"dstM" , "value":15}
	],
	"WRITE BACK" : [
		{"key":"stat" , "value":"STAT_BUB"},
		{"key":"icode" , "value":"I_HALT"},
		{"key":"valE" , "value":0},
		{"key":"valM" , "value":0},
		{"key":"dstE" , "value":0},
		{"key":"dstM" , "value":15},
	]
}
,
{
	"CONDITIONVALUE" : {"ZF" : "1" , SF : "0" , OF : "0"},
	"MEMORY_TABLE" : [{"addr" : "0x00000000" , "val" : "0x00000000"}],
"CODE" : ["irmovl 1,eax" , "irmovl 3,ebx" , "irmovl 2,edx" , "jne 805306368" , "xorl eax,eax"],
	"REGVALUE" : 
	{
		"eax" : "0x00000000",
		"ebx" : "0x00000000",
		"ecx" : "0x00000000",
		"edx" : "0x00000000",
		"ebp" : "0x00000000",
		"esp" : "0x00000000",
		"esi" : "0x00000000",
		"edi" : "0x00000000"
	},
	"FETCH" :
	[
		{"key":"predPC" , "value":"0x0000000d"},
		{"key":"instructions" , "value":0},
		{"key":"CPI" , "value":0}
	],
	"DECODE" : [
		{"key":"stat" , "value":"STAT_BUB"},
		{"key":"icode" , "value":"I_HALT"},
		{"key":"ifun" , "value":0},
		{"key":"rA" , "value":"15"},
		{"key":"rB" , "value":"0"},
		{"key":"valC" , "value":"0x00000001"},
		{"key":"valP" , "value":"0x0000000d"}
	],
	"EXECUTE" : [
		{"key":"stat" , "value":"STAT_BUB"},
		{"key":"icode" , "value":"I_HALT"},
		{"key":"ifun" , "value":0},
		{"key":"valC" , "value":2},
		{"key":"valA" , "value":0},
		{"key":"valB" , "value":0},
		{"key":"dstE" , "value":15},
		{"key":"dstM" , "value":15},
		{"key":"srcA" , "value":15},
		{"key":"srcB" , "value":15}
	],
	"MEMORY" : [
		{"key":"stat" , "value":"STAT_BUB"},
		{"key":"icode" , "value":"I_HALT"},
		{"key":"valE" , "value":0},
		{"key":"valA" , "value":7},
		{"key":"dstE" , "value":15},
		{"key":"dstM" , "value":15}
	],
	"WRITE BACK" : [
		{"key":"stat" , "value":"STAT_BUB"},
		{"key":"icode" , "value":"I_HALT"},
		{"key":"valE" , "value":0},
		{"key":"valM" , "value":0},
		{"key":"dstE" , "value":15},
		{"key":"dstM" , "value":15},
	]
}
,
{
	"CONDITIONVALUE" : {"ZF" : "1" , SF : "0" , OF : "0"},
	"MEMORY_TABLE" : [{"addr" : "0x00000000" , "val" : "0x00000000"}],
"CODE" : ["halt" , "irmovl 1,eax" , "irmovl 3,ebx" , "irmovl 2,edx" , "jne 805306368"],
	"REGVALUE" : 
	{
		"eax" : "0x00000000",
		"ebx" : "0x00000000",
		"ecx" : "0x00000000",
		"edx" : "0x00000000",
		"ebp" : "0x00000000",
		"esp" : "0x00000000",
		"esi" : "0x00000000",
		"edi" : "0x00000000"
	},
	"FETCH" :
	[
		{"key":"predPC" , "value":"0x0000000e"},
		{"key":"instructions" , "value":0},
		{"key":"CPI" , "value":0}
	],
	"DECODE" : [
		{"key":"stat" , "value":"STAT_BUB"},
		{"key":"icode" , "value":"I_HALT"},
		{"key":"ifun" , "value":0},
		{"key":"rA" , "value":"15"},
		{"key":"rB" , "value":"15"},
		{"key":"valC" , "value":"0x00000000"},
		{"key":"valP" , "value":"0x0000000e"}
	],
	"EXECUTE" : [
		{"key":"stat" , "value":"STAT_BUB"},
		{"key":"icode" , "value":"I_HALT"},
		{"key":"ifun" , "value":0},
		{"key":"valC" , "value":1},
		{"key":"valA" , "value":0},
		{"key":"valB" , "value":0},
		{"key":"dstE" , "value":0},
		{"key":"dstM" , "value":15},
		{"key":"srcA" , "value":15},
		{"key":"srcB" , "value":15}
	],
	"MEMORY" : [
		{"key":"stat" , "value":"STAT_BUB"},
		{"key":"icode" , "value":"I_HALT"},
		{"key":"valE" , "value":0},
		{"key":"valA" , "value":0},
		{"key":"dstE" , "value":15},
		{"key":"dstM" , "value":15}
	],
	"WRITE BACK" : [
		{"key":"stat" , "value":"STAT_BUB"},
		{"key":"icode" , "value":"I_HALT"},
		{"key":"valE" , "value":0},
		{"key":"valM" , "value":0},
		{"key":"dstE" , "value":15},
		{"key":"dstM" , "value":15},
	]
}
,
{
	"CONDITIONVALUE" : {"ZF" : "1" , SF : "0" , OF : "0"},
	"MEMORY_TABLE" : [{"addr" : "0x00000000" , "val" : "0x00000000"}],
"CODE" : ["irmovl 2,edx" , "halt" , "irmovl 1,eax" , "irmovl 3,ebx" , "irmovl 2,edx"],
	"REGVALUE" : 
	{
		"eax" : "0x00000000",
		"ebx" : "0x00000000",
		"ecx" : "0x00000000",
		"edx" : "0x00000000",
		"ebp" : "0x00000000",
		"esp" : "0x00000000",
		"esi" : "0x00000000",
		"edi" : "0x00000000"
	},
	"FETCH" :
	[
		{"key":"predPC" , "value":"0x00000014"},
		{"key":"instructions" , "value":0},
		{"key":"CPI" , "value":0}
	],
	"DECODE" : [
		{"key":"stat" , "value":"STAT_BUB"},
		{"key":"icode" , "value":"I_HALT"},
		{"key":"ifun" , "value":0},
		{"key":"rA" , "value":"15"},
		{"key":"rB" , "value":"2"},
		{"key":"valC" , "value":"0x00000002"},
		{"key":"valP" , "value":"0x00000014"}
	],
	"EXECUTE" : [
		{"key":"stat" , "value":"STAT_BUB"},
		{"key":"icode" , "value":"I_HALT"},
		{"key":"ifun" , "value":0},
		{"key":"valC" , "value":0},
		{"key":"valA" , "value":0},
		{"key":"valB" , "value":0},
		{"key":"dstE" , "value":15},
		{"key":"dstM" , "value":15},
		{"key":"srcA" , "value":15},
		{"key":"srcB" , "value":15}
	],
	"MEMORY" : [
		{"key":"stat" , "value":"STAT_BUB"},
		{"key":"icode" , "value":"I_HALT"},
		{"key":"valE" , "value":1},
		{"key":"valA" , "value":0},
		{"key":"dstE" , "value":0},
		{"key":"dstM" , "value":15}
	],
	"WRITE BACK" : [
		{"key":"stat" , "value":"STAT_BUB"},
		{"key":"icode" , "value":"I_HALT"},
		{"key":"valE" , "value":0},
		{"key":"valM" , "value":0},
		{"key":"dstE" , "value":15},
		{"key":"dstM" , "value":15},
	]
}
,
{
	"CONDITIONVALUE" : {"ZF" : "1" , SF : "0" , OF : "0"},
	"MEMORY_TABLE" : [{"addr" : "0x00000000" , "val" : "0x00000000"}],
"CODE" : ["irmovl 3,ebx" , "irmovl 2,edx" , "halt" , "irmovl 1,eax" , "irmovl 3,ebx"],
	"REGVALUE" : 
	{
		"eax" : "0x00000000",
		"ebx" : "0x00000000",
		"ecx" : "0x00000000",
		"edx" : "0x00000000",
		"ebp" : "0x00000000",
		"esp" : "0x00000000",
		"esi" : "0x00000000",
		"edi" : "0x00000000"
	},
	"FETCH" :
	[
		{"key":"predPC" , "value":"0x0000001a"},
		{"key":"instructions" , "value":0},
		{"key":"CPI" , "value":0}
	],
	"DECODE" : [
		{"key":"stat" , "value":"STAT_BUB"},
		{"key":"icode" , "value":"I_HALT"},
		{"key":"ifun" , "value":0},
		{"key":"rA" , "value":"15"},
		{"key":"rB" , "value":"3"},
		{"key":"valC" , "value":"0x00000003"},
		{"key":"valP" , "value":"0x0000001a"}
	],
	"EXECUTE" : [
		{"key":"stat" , "value":"STAT_BUB"},
		{"key":"icode" , "value":"I_HALT"},
		{"key":"ifun" , "value":0},
		{"key":"valC" , "value":2},
		{"key":"valA" , "value":1},
		{"key":"valB" , "value":1},
		{"key":"dstE" , "value":2},
		{"key":"dstM" , "value":15},
		{"key":"srcA" , "value":15},
		{"key":"srcB" , "value":15}
	],
	"MEMORY" : [
		{"key":"stat" , "value":"STAT_BUB"},
		{"key":"icode" , "value":"I_HALT"},
		{"key":"valE" , "value":1},
		{"key":"valA" , "value":0},
		{"key":"dstE" , "value":15},
		{"key":"dstM" , "value":15}
	],
	"WRITE BACK" : [
		{"key":"stat" , "value":"STAT_BUB"},
		{"key":"icode" , "value":"I_HALT"},
		{"key":"valE" , "value":1},
		{"key":"valM" , "value":0},
		{"key":"dstE" , "value":0},
		{"key":"dstM" , "value":15},
	]
}
,
{
	"CONDITIONVALUE" : {"ZF" : "1" , SF : "0" , OF : "0"},
	"MEMORY_TABLE" : [{"addr" : "0x00000000" , "val" : "0x00000000"}],
"CODE" : ["halt" , "irmovl 3,ebx" , "irmovl 2,edx" , "halt" , "irmovl 1,eax"],
	"REGVALUE" : 
	{
		"eax" : "0x00000001",
		"ebx" : "0x00000000",
		"ecx" : "0x00000000",
		"edx" : "0x00000000",
		"ebp" : "0x00000000",
		"esp" : "0x00000000",
		"esi" : "0x00000000",
		"edi" : "0x00000000"
	},
	"FETCH" :
	[
		{"key":"predPC" , "value":"0x0000001b"},
		{"key":"instructions" , "value":0},
		{"key":"CPI" , "value":0}
	],
	"DECODE" : [
		{"key":"stat" , "value":"STAT_BUB"},
		{"key":"icode" , "value":"I_HALT"},
		{"key":"ifun" , "value":0},
		{"key":"rA" , "value":"15"},
		{"key":"rB" , "value":"15"},
		{"key":"valC" , "value":"0x00000000"},
		{"key":"valP" , "value":"0x0000001b"}
	],
	"EXECUTE" : [
		{"key":"stat" , "value":"STAT_BUB"},
		{"key":"icode" , "value":"I_HALT"},
		{"key":"ifun" , "value":0},
		{"key":"valC" , "value":3},
		{"key":"valA" , "value":0},
		{"key":"valB" , "value":0},
		{"key":"dstE" , "value":3},
		{"key":"dstM" , "value":15},
		{"key":"srcA" , "value":15},
		{"key":"srcB" , "value":15}
	],
	"MEMORY" : [
		{"key":"stat" , "value":"STAT_BUB"},
		{"key":"icode" , "value":"I_HALT"},
		{"key":"valE" , "value":1},
		{"key":"valA" , "value":0},
		{"key":"dstE" , "value":15},
		{"key":"dstM" , "value":15}
	],
	"WRITE BACK" : [
		{"key":"stat" , "value":"STAT_BUB"},
		{"key":"icode" , "value":"I_HALT"},
		{"key":"valE" , "value":1},
		{"key":"valM" , "value":0},
		{"key":"dstE" , "value":15},
		{"key":"dstM" , "value":15},
	]
}
]
