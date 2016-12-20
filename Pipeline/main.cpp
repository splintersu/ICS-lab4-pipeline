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
	for (int i=1; i<=10; i++)
		memory[memoryLength++] = INOP;
/*	
	printf("input file:\n");
	for (int i=0; i<memoryLength; i++)
		printf("%x ", memory[i]);
	printf("\n");
	printf("\n");
*/
}

void Init()
{
	W_stat = SAOK; W_icode = INOP;
	M_stat = SAOK; M_icode = INOP;
	E_stat = SAOK; E_icode = INOP; E_ifun = FNONE;
	D_stat = SAOK; D_icode = INOP; D_ifun = FNONE;
	F_predPC = 0;
}

string get_real_instruction(int pc)
{
	if(pc <= 0)
		return "EMPTY";
	if(pc > clockcounter)
		return "ERROR";
	return real_instruction[pc];
}

void Print()
{
	printf("{\n");
	printf("	\"MEMORY_TABLE\" : [{\"addr\" : \"0x00000000\" , \"val\" : \"0x00000000\"}],\n");
	printf("	\"CODE\" : [\"");
	cout << get_real_instruction(clockcounter);
	printf("\" , \"");
	cout << get_real_instruction(clockcounter - 1);
	printf("\" , \"");
	cout << get_real_instruction(clockcounter - 2);
	printf("\" , \"");
	cout << get_real_instruction(clockcounter - 3);
	printf("\" , \"");
	cout << get_real_instruction(clockcounter - 4);
	printf("\"],\n");
	//printf("	\"CODE\" : [\"1\" , \"1\" , \"1\" , \"1\" , \"1\"],\n");
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
		{\"key\":\"valC\" , \"value\":%d},\n\
		{\"key\":\"valA\" , \"value\":%d},\n\
		{\"key\":\"valB\" , \"value\":%d},\n\
		{\"key\":\"dstE\" , \"value\":%d},\n\
		{\"key\":\"dstM\" , \"value\":%d},\n\
		{\"key\":\"srcA\" , \"value\":%d},\n\
		{\"key\":\"srcB\" , \"value\":%d}\n\
	],\n" , E_ifun , E_valC , E_valA , E_valB , E_dstE , E_dstM , E_srcA , E_srcB);

	printf(
"	\"MEMORY\" : [\n\
		{\"key\":\"stat\" , \"value\":\"STAT_BUB\"},\n\
		{\"key\":\"icode\" , \"value\":\"I_HALT\"},\n\
		{\"key\":\"valE\" , \"value\":%d},\n\
		{\"key\":\"valA\" , \"value\":%d},\n\
		{\"key\":\"dstE\" , \"value\":%d},\n\
		{\"key\":\"dstM\" , \"value\":%d}\n\
	],\n" , M_valE , M_valA , M_dstE , M_dstM);

	printf(
"	\"WRITE BACK\" : [\n\
		{\"key\":\"stat\" , \"value\":\"STAT_BUB\"},\n\
		{\"key\":\"icode\" , \"value\":\"I_HALT\"},\n\
		{\"key\":\"valE\" , \"value\":%d},\n\
		{\"key\":\"valM\" , \"value\":%d},\n\
		{\"key\":\"dstE\" , \"value\":%d},\n\
		{\"key\":\"dstM\" , \"value\":%d},\n\
	]\n" , W_valE , W_valM , W_dstE , W_dstM);

	printf("}\n");
}

void Proc()
{
	printf("[\n");
	bool st = false;
	while (W_stat == SAOK)
	{
		++clockcounter;
		Memory();
		Execute();
		Decode();
		Fetch();
		PipelineControlLogic();
		Upload();
		if(st)
		{
			printf(",\n");
		}
		Print();
		st = true;
	}
	printf("]\n");
}

int main()
{
	freopen("machlanginput.txt", "r", stdin);
	freopen("log.txt", "w", stdout);

	Read();
	Init();
	Proc();

	return 0;
}
