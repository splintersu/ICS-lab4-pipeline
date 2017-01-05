complete_data = [
{
	"CONDITIONVALUE" : {"ZF" : "0" , SF : "0" , OF : "0"},
	"MEMORY_TABLE" : [
		{"addr" : "0" , "val" : "064|0x40"},
		{"addr" : "1" , "val" : "096|0x60"},
		{"addr" : "2" , "val" : "016|0x10"},
		{"addr" : "3" , "val" : "016|0x10"},
		{"addr" : "4" , "val" : "000|0x00"},
		{"addr" : "5" , "val" : "000|0x00"},
		{"addr" : "6" , "val" : "112|0x70"},
		{"addr" : "7" , "val" : "001|0x01"},
		{"addr" : "8" , "val" : "000|0x00"},
		{"addr" : "9" , "val" : "000|0x00"},
		{"addr" : "10" , "val" : "000|0x00"}],
"CODE" : ["rmmovl esi,4112(eax)" , "EMPTY" , "EMPTY" , "EMPTY" , "EMPTY"],
	"REGVALUE" : 
	{
		"eax" : "        0",
		"ebx" : "        0",
		"ecx" : "        0",
		"edx" : "        0",
		"ebp" : "   500000",
		"esp" : "   500000",
		"esi" : "        0",
		"edi" : "        0"
	},
	"instructions" : "1" , 
	"CPI" : "1.000" , 
	"FETCH" :
	[
		{"key":"stat" , "value":"1"},
		{"key":"predPC" , "value":"0"}	],
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
		{"addr" : "0" , "val" : "064|0x40"},
		{"addr" : "1" , "val" : "096|0x60"},
		{"addr" : "2" , "val" : "016|0x10"},
		{"addr" : "3" , "val" : "016|0x10"},
		{"addr" : "4" , "val" : "000|0x00"},
		{"addr" : "5" , "val" : "000|0x00"},
		{"addr" : "6" , "val" : "112|0x70"},
		{"addr" : "7" , "val" : "001|0x01"},
		{"addr" : "8" , "val" : "000|0x00"},
		{"addr" : "9" , "val" : "000|0x00"},
		{"addr" : "10" , "val" : "000|0x00"}],
"CODE" : ["jmp 1" , "rmmovl esi,4112(eax)" , "EMPTY" , "EMPTY" , "EMPTY"],
	"REGVALUE" : 
	{
		"eax" : "        0",
		"ebx" : "        0",
		"ecx" : "        0",
		"edx" : "        0",
		"ebp" : "   500000",
		"esp" : "   500000",
		"esi" : "        0",
		"edi" : "        0"
	},
	"instructions" : "2" , 
	"CPI" : "1.000" , 
	"FETCH" :
	[
		{"key":"stat" , "value":"1"},
		{"key":"predPC" , "value":"6"}	],
	"DECODE" : [
		{"key":"stat" , "value":"1"},
		{"key":"rA" , "value":"6"},
		{"key":"rB" , "value":"0"},
		{"key":"valC" , "value":"4112"},
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
		{"addr" : "0" , "val" : "064|0x40"},
		{"addr" : "1" , "val" : "096|0x60"},
		{"addr" : "2" , "val" : "016|0x10"},
		{"addr" : "3" , "val" : "016|0x10"},
		{"addr" : "4" , "val" : "000|0x00"},
		{"addr" : "5" , "val" : "000|0x00"},
		{"addr" : "6" , "val" : "112|0x70"},
		{"addr" : "7" , "val" : "001|0x01"},
		{"addr" : "8" , "val" : "000|0x00"},
		{"addr" : "9" , "val" : "000|0x00"},
		{"addr" : "10" , "val" : "000|0x00"}],
"CODE" : ["addl ecx,eax" , "jmp 1" , "rmmovl esi,4112(eax)" , "EMPTY" , "EMPTY"],
	"REGVALUE" : 
	{
		"eax" : "        0",
		"ebx" : "        0",
		"ecx" : "        0",
		"edx" : "        0",
		"ebp" : "   500000",
		"esp" : "   500000",
		"esi" : "        0",
		"edi" : "        0"
	},
	"instructions" : "3" , 
	"CPI" : "1.000" , 
	"FETCH" :
	[
		{"key":"stat" , "value":"1"},
		{"key":"predPC" , "value":"1"}	],
	"DECODE" : [
		{"key":"stat" , "value":"1"},
		{"key":"rA" , "value":"15"},
		{"key":"rB" , "value":"15"},
		{"key":"valC" , "value":"1"},
		{"key":"valP" , "value":"11"}
	],
	"EXECUTE" : [
		{"key":"stat" , "value":"1"},
		{"key":"valC" , "value":4112},
		{"key":"valA" , "value":0},
		{"key":"valB" , "value":0},
		{"key":"dstE" , "value":15},
		{"key":"dstM" , "value":15},
		{"key":"srcA" , "value":6},
		{"key":"srcB" , "value":0}
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
		{"addr" : "0" , "val" : "064|0x40"},
		{"addr" : "1" , "val" : "096|0x60"},
		{"addr" : "2" , "val" : "016|0x10"},
		{"addr" : "3" , "val" : "016|0x10"},
		{"addr" : "4" , "val" : "000|0x00"},
		{"addr" : "5" , "val" : "000|0x00"},
		{"addr" : "6" , "val" : "112|0x70"},
		{"addr" : "7" , "val" : "001|0x01"},
		{"addr" : "8" , "val" : "000|0x00"},
		{"addr" : "9" , "val" : "000|0x00"},
		{"addr" : "10" , "val" : "000|0x00"},
		{"addr" : "4112" , "val" : "000|0x00"},
		{"addr" : "4113" , "val" : "000|0x00"},
		{"addr" : "4114" , "val" : "000|0x00"},
		{"addr" : "4115" , "val" : "000|0x00"}],
"CODE" : ["nop" , "addl ecx,eax" , "jmp 1" , "rmmovl esi,4112(eax)" , "EMPTY"],
	"REGVALUE" : 
	{
		"eax" : "        0",
		"ebx" : "        0",
		"ecx" : "        0",
		"edx" : "        0",
		"ebp" : "   500000",
		"esp" : "   500000",
		"esi" : "        0",
		"edi" : "        0"
	},
	"instructions" : "4" , 
	"CPI" : "1.000" , 
	"FETCH" :
	[
		{"key":"stat" , "value":"1"},
		{"key":"predPC" , "value":"3"}	],
	"DECODE" : [
		{"key":"stat" , "value":"1"},
		{"key":"rA" , "value":"1"},
		{"key":"rB" , "value":"0"},
		{"key":"valC" , "value":"0"},
		{"key":"valP" , "value":"3"}
	],
	"EXECUTE" : [
		{"key":"stat" , "value":"1"},
		{"key":"valC" , "value":1},
		{"key":"valA" , "value":11},
		{"key":"valB" , "value":4112},
		{"key":"dstE" , "value":15},
		{"key":"dstM" , "value":15},
		{"key":"srcA" , "value":15},
		{"key":"srcB" , "value":15}
	],
	"MEMORY" : [
		{"key":"stat" , "value":"1"},
		{"key":"valE" , "value":4112},
		{"key":"valA" , "value":0},
		{"key":"dstE" , "value":15},
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
	"CONDITIONVALUE" : {"ZF" : "1" , SF : "0" , OF : "0"},
	"MEMORY_TABLE" : [
		{"addr" : "0" , "val" : "064|0x40"},
		{"addr" : "1" , "val" : "096|0x60"},
		{"addr" : "2" , "val" : "016|0x10"},
		{"addr" : "3" , "val" : "016|0x10"},
		{"addr" : "4" , "val" : "000|0x00"},
		{"addr" : "5" , "val" : "000|0x00"},
		{"addr" : "6" , "val" : "112|0x70"},
		{"addr" : "7" , "val" : "001|0x01"},
		{"addr" : "8" , "val" : "000|0x00"},
		{"addr" : "9" , "val" : "000|0x00"},
		{"addr" : "10" , "val" : "000|0x00"},
		{"addr" : "4112" , "val" : "000|0x00"},
		{"addr" : "4113" , "val" : "000|0x00"},
		{"addr" : "4114" , "val" : "000|0x00"},
		{"addr" : "4115" , "val" : "000|0x00"}],
"CODE" : ["halt" , "nop" , "addl ecx,eax" , "jmp 1" , "rmmovl esi,4112(eax)"],
	"REGVALUE" : 
	{
		"eax" : "        0",
		"ebx" : "        0",
		"ecx" : "        0",
		"edx" : "        0",
		"ebp" : "   500000",
		"esp" : "   500000",
		"esi" : "        0",
		"edi" : "        0"
	},
	"instructions" : "5" , 
	"CPI" : "1.000" , 
	"FETCH" :
	[
		{"key":"stat" , "value":"1"},
		{"key":"predPC" , "value":"4"}	],
	"DECODE" : [
		{"key":"stat" , "value":"1"},
		{"key":"rA" , "value":"15"},
		{"key":"rB" , "value":"15"},
		{"key":"valC" , "value":"0"},
		{"key":"valP" , "value":"4"}
	],
	"EXECUTE" : [
		{"key":"stat" , "value":"1"},
		{"key":"valC" , "value":0},
		{"key":"valA" , "value":0},
		{"key":"valB" , "value":0},
		{"key":"dstE" , "value":0},
		{"key":"dstM" , "value":15},
		{"key":"srcA" , "value":1},
		{"key":"srcB" , "value":0}
	],
	"MEMORY" : [
		{"key":"stat" , "value":"1"},
		{"key":"valE" , "value":4112},
		{"key":"valA" , "value":11},
		{"key":"dstE" , "value":15},
		{"key":"dstM" , "value":15}
	],
	"WRITE BACK" : [
		{"key":"stat" , "value":"1"},
		{"key":"valE" , "value":4112},
		{"key":"valM" , "value":0},
		{"key":"dstE" , "value":15},
		{"key":"dstM" , "value":15},
	]
}
,
{
	"CONDITIONVALUE" : {"ZF" : "1" , SF : "0" , OF : "0"},
	"MEMORY_TABLE" : [
		{"addr" : "0" , "val" : "064|0x40"},
		{"addr" : "1" , "val" : "096|0x60"},
		{"addr" : "2" , "val" : "016|0x10"},
		{"addr" : "3" , "val" : "016|0x10"},
		{"addr" : "4" , "val" : "000|0x00"},
		{"addr" : "5" , "val" : "000|0x00"},
		{"addr" : "6" , "val" : "112|0x70"},
		{"addr" : "7" , "val" : "001|0x01"},
		{"addr" : "8" , "val" : "000|0x00"},
		{"addr" : "9" , "val" : "000|0x00"},
		{"addr" : "10" , "val" : "000|0x00"},
		{"addr" : "4112" , "val" : "000|0x00"},
		{"addr" : "4113" , "val" : "000|0x00"},
		{"addr" : "4114" , "val" : "000|0x00"},
		{"addr" : "4115" , "val" : "000|0x00"}],
"CODE" : ["halt" , "halt" , "nop" , "addl ecx,eax" , "jmp 1"],
	"REGVALUE" : 
	{
		"eax" : "        0",
		"ebx" : "        0",
		"ecx" : "        0",
		"edx" : "        0",
		"ebp" : "   500000",
		"esp" : "   500000",
		"esi" : "        0",
		"edi" : "        0"
	},
	"instructions" : "6" , 
	"CPI" : "1.000" , 
	"FETCH" :
	[
		{"key":"stat" , "value":"1"},
		{"key":"predPC" , "value":"5"}	],
	"DECODE" : [
		{"key":"stat" , "value":"4"},
		{"key":"rA" , "value":"15"},
		{"key":"rB" , "value":"15"},
		{"key":"valC" , "value":"0"},
		{"key":"valP" , "value":"5"}
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
		{"key":"dstM" , "value":15}
	],
	"WRITE BACK" : [
		{"key":"stat" , "value":"1"},
		{"key":"valE" , "value":4112},
		{"key":"valM" , "value":0},
		{"key":"dstE" , "value":15},
		{"key":"dstM" , "value":15},
	]
}
,
{
	"CONDITIONVALUE" : {"ZF" : "1" , SF : "0" , OF : "0"},
	"MEMORY_TABLE" : [
		{"addr" : "0" , "val" : "064|0x40"},
		{"addr" : "1" , "val" : "096|0x60"},
		{"addr" : "2" , "val" : "016|0x10"},
		{"addr" : "3" , "val" : "016|0x10"},
		{"addr" : "4" , "val" : "000|0x00"},
		{"addr" : "5" , "val" : "000|0x00"},
		{"addr" : "6" , "val" : "112|0x70"},
		{"addr" : "7" , "val" : "001|0x01"},
		{"addr" : "8" , "val" : "000|0x00"},
		{"addr" : "9" , "val" : "000|0x00"},
		{"addr" : "10" , "val" : "000|0x00"},
		{"addr" : "4112" , "val" : "000|0x00"},
		{"addr" : "4113" , "val" : "000|0x00"},
		{"addr" : "4114" , "val" : "000|0x00"},
		{"addr" : "4115" , "val" : "000|0x00"}],
"CODE" : ["jmp 1" , "halt" , "halt" , "nop" , "addl ecx,eax"],
	"REGVALUE" : 
	{
		"eax" : "        0",
		"ebx" : "        0",
		"ecx" : "        0",
		"edx" : "        0",
		"ebp" : "   500000",
		"esp" : "   500000",
		"esi" : "        0",
		"edi" : "        0"
	},
	"instructions" : "7" , 
	"CPI" : "1.000" , 
	"FETCH" :
	[
		{"key":"stat" , "value":"1"},
		{"key":"predPC" , "value":"6"}	],
	"DECODE" : [
		{"key":"stat" , "value":"4"},
		{"key":"rA" , "value":"15"},
		{"key":"rB" , "value":"15"},
		{"key":"valC" , "value":"0"},
		{"key":"valP" , "value":"6"}
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
		{"key":"dstM" , "value":15},
	]
}
,
{
	"CONDITIONVALUE" : {"ZF" : "1" , SF : "0" , OF : "0"},
	"MEMORY_TABLE" : [
		{"addr" : "0" , "val" : "064|0x40"},
		{"addr" : "1" , "val" : "096|0x60"},
		{"addr" : "2" , "val" : "016|0x10"},
		{"addr" : "3" , "val" : "016|0x10"},
		{"addr" : "4" , "val" : "000|0x00"},
		{"addr" : "5" , "val" : "000|0x00"},
		{"addr" : "6" , "val" : "112|0x70"},
		{"addr" : "7" , "val" : "001|0x01"},
		{"addr" : "8" , "val" : "000|0x00"},
		{"addr" : "9" , "val" : "000|0x00"},
		{"addr" : "10" , "val" : "000|0x00"},
		{"addr" : "4112" , "val" : "000|0x00"},
		{"addr" : "4113" , "val" : "000|0x00"},
		{"addr" : "4114" , "val" : "000|0x00"},
		{"addr" : "4115" , "val" : "000|0x00"}],
"CODE" : ["addl ecx,eax" , "jmp 1" , "halt" , "halt" , "nop"],
	"REGVALUE" : 
	{
		"eax" : "        0",
		"ebx" : "        0",
		"ecx" : "        0",
		"edx" : "        0",
		"ebp" : "   500000",
		"esp" : "   500000",
		"esi" : "        0",
		"edi" : "        0"
	},
	"instructions" : "7" , 
	"CPI" : "1.143" , 
	"FETCH" :
	[
		{"key":"stat" , "value":"1"},
		{"key":"predPC" , "value":"1"}	],
	"DECODE" : [
		{"key":"stat" , "value":"1"},
		{"key":"rA" , "value":"15"},
		{"key":"rB" , "value":"15"},
		{"key":"valC" , "value":"1"},
		{"key":"valP" , "value":"11"}
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
		{"key":"stat" , "value":"5"},
		{"key":"valE" , "value":0},
		{"key":"valA" , "value":0},
		{"key":"dstE" , "value":15},
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
]
