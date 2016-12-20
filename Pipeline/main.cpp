#include <iostream>
#include <bits/stdc++.h>
using namespace std;

#include "header.h"
#include "fetch.cpp"
#include "decode.cpp"
#include "execute.cpp"
#include "memory.cpp"
#include "controllogic.cpp"
#include "upload.cpp"

void Read()
{
	memoryLength = 0;
	while (scanf("%x", memory + memoryLength) != EOF)
		memoryLength++;
}

void Init()
{
	W_stat = SAOK; W_icode = INOP;
	M_stat = SAOK; M_icode = INOP;
	E_stat = SAOK; E_icode = INOP; E_ifun = FNONE;
	D_stat = SAOK; D_icode = INOP; D_ifun = FNONE;
	F_predPC = 0;
}

void Print()
{
	printf("{\n");
	printf("	\"MEMORY_TABLE\" : [{\"addr\" : \"0x00000000\" , \"val\" : \"0x00000000\"}],\n");
	printf("	\"CODE\" : [\"1\" , \"1\" , \"1\" , \"1\" , \"1\"],\n");
	printf("	\"CONDITIONVALUE\" : {\"ZF\" : \"%d\" , SF : \"%d\" , OF : \"%d\"},\n"
		, int(ZF) , int(SF) , int(OF));
	printf(
"	\"REGVALUE\" : \n\
	{\n\
		\"eax\" : \"0x%08x\",\n\
		\"ebx\" : \"0x%08x\",\n\
		\"ecx\" : \"0x%08x\",\n\
		\"edx\" : \"0x%08x\",\n\
		\"ebp\" : \"0x%08x\",\n\
		\"esp\" : \"0x%08x\",\n\
		\"esi\" : \"0x%08x\",\n\
		\"edi\" : \"0x%08x\"\n\
	},\n" , eax , ebx , ecx , edx , ebp , esp , esi , edi);

	printf(
"	\"FETCH\" :\n\
	[\n\
		{\"key\":\"predPC\" , \"value\":\"0x%08x\"},\n\
		{\"key\":\"instructions\" , \"value\":%d},\n\
		{\"key\":\"CPI\" , \"value\":%d}\n\
	],\n" 
	, F_predPC , 0 , 0
	);

	printf(
"	\"DECODE\" : [\n\
		{\"key\":\"stat\" , \"value\":\"STAT_BUB\"},\n\
		{\"key\":\"icode\" , \"value\":\"I_HALT\"},\n\
		{\"key\":\"ifun\" , \"value\":%d},\n\
		{\"key\":\"rA\" , \"value\":\"%d\"},\n\
		{\"key\":\"rB\" , \"value\":\"%d\"},\n\
		{\"key\":\"valC\" , \"value\":\"0x%08x\"},\n\
		{\"key\":\"valP\" , \"value\":\"0x%08x\"}\n\
	],\n" , D_ifun , D_rA, D_rB, D_valC , D_valP);

	printf(
"	\"EXECUTE\" : [\n\
		{\"key\":\"stat\" , \"value\":\"STAT_BUB\"},\n\
		{\"key\":\"icode\" , \"value\":\"I_HALT\"},\n\
		{\"key\":\"ifun\" , \"value\":%d},\n\
		{\"key\":\"valC\" , \"value\":0x%08x},\n\
		{\"key\":\"valA\" , \"value\":0x%08x},\n\
		{\"key\":\"valB\" , \"value\":0x%08x},\n\
		{\"key\":\"dstE\" , \"value\":0x%08x},\n\
		{\"key\":\"dstM\" , \"value\":0x%08x},\n\
		{\"key\":\"srcA\" , \"value\":0x%08x},\n\
		{\"key\":\"srcB\" , \"value\":0x%08x}\n\
	],\n" , E_ifun , E_valC , E_valA , E_valB , E_dstE , E_dstM , E_srcA , E_srcB);

	printf(
"	\"MEMORY\" : [\n\
		{\"key\":\"stat\" , \"value\":\"STAT_BUB\"},\n\
		{\"key\":\"icode\" , \"value\":\"I_HALT\"},\n\
		{\"key\":\"valE\" , \"value\":0x%08x},\n\
		{\"key\":\"valA\" , \"value\":0x%08x},\n\
		{\"key\":\"dstE\" , \"value\":0x%08x},\n\
		{\"key\":\"dstM\" , \"value\":0x%08x}\n\
	],\n" , M_valE , M_valA , M_dstE , M_dstM);

	printf(
"	\"WRITE BACK\" : [\n\
		{\"key\":\"stat\" , \"value\":\"STAT_BUB\"},\n\
		{\"key\":\"icode\" , \"value\":\"I_HALT\"},\n\
		{\"key\":\"valE\" , \"value\":0x%08x},\n\
		{\"key\":\"valM\" , \"value\":0x%08x},\n\
		{\"key\":\"dstE\" , \"value\":0x%08x},\n\
		{\"key\":\"dstM\" , \"value\":0x%08x},\n\
	]\n" , W_valE , W_valM , W_dstE , W_dstM);

	printf("}\n");
}

void Proc()
{
	while (W_stat == SAOK)
	{
		++clockcounter;
		Memory();
		Execute();
		Decode();
		Fetch();
		PipelineControlLogic();
		Upload();
		printf(",\n");
		Print();
	}
}

int main()
{
	freopen("machlanginput.txt", "r", stdin);
	freopen("../html/log.js", "w", stdout);

	Read();
	Init();
	printf("complete_data = [\n");
	Print();
	Proc();
	printf("]\n");
	return 0;
}
