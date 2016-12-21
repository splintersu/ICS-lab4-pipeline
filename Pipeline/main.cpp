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
	{
		add_memory_addr(memoryLength);
		memoryLength++;
	}

	cerr << "input files: " ;
	for (int i=0; i<memoryLength; i++)
		cerr << memory[i] << ' ';
	cerr << endl;
	cerr << endl;

}

void Init()
{
	W_stat = SAOK; W_icode = INOP;
	M_stat = SAOK; M_icode = INOP;
	E_stat = SAOK; E_icode = INOP; E_ifun = FNONE;
	D_stat = SAOK; D_icode = INOP; D_ifun = FNONE; D_rA = D_rB = RNONE;
	F_predPC = 0;

	F_real_ins = set_real_instruction(F_predPC);
	D_real_ins = "EMPTY";
	E_real_ins = "EMPTY";
	M_real_ins = "EMPTY";
	W_real_ins = "EMPTY";
}

void Print()
{
	printf("{\n");
	printf("	\"CONDITIONVALUE\" : {\"ZF\" : \"%d\" , SF : \"%d\" , OF : \"%d\"},\n"
		, int(ZF) , int(SF) , int(OF));
	printf("	\"MEMORY_TABLE\" : [\n");
	int mem_cnt = 0;
	for(auto x : saved_addr)
	{
		++mem_cnt;
		printf("		{\"addr\" : \"%d\" , \"val\" : \"%03d|0x%02x\"}"
			, x , memory[x] & 0xFF , memory[x] & 0xFF);
		if(mem_cnt < saved_addr.size())
			printf(",\n");
	}
	printf("],\n");
	printf("\"CODE\" : [\"");
	cout << F_real_ins;
	printf("\" , \"");
	cout << D_real_ins;
	printf("\" , \"");
	cout << E_real_ins;
	printf("\" , \"");
	cout << M_real_ins;
	printf("\" , \"");
	cout << W_real_ins;
	printf("\"],\n");
	

	/*
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
	*/
	printf(
"	\"REGVALUE\" : \n\
	{\n\
		\"eax\" : \"% 9d\",\n\
		\"ebx\" : \"% 9d\",\n\
		\"ecx\" : \"% 9d\",\n\
		\"edx\" : \"% 9d\",\n\
		\"ebp\" : \"% 9d\",\n\
		\"esp\" : \"% 9d\",\n\
		\"esi\" : \"% 9d\",\n\
		\"edi\" : \"% 9d\"\n\
	},\n" , eax , ebx , ecx , edx , ebp , esp , esi , edi);

/*
	printf(
"	\"FETCH\" :\n\
	[\n\
		{\"key\":\"predPC\" , \"value\":\"0x%08x\"},\n\
		{\"key\":\"instructions\" , \"value\":%d},\n\
		{\"key\":\"CPI\" , \"value\":%d}\n\
	],\n" 
	, F_predPC , 0 , 0
	);
*/
	printf(
"	\"FETCH\" :\n\
	[\n\
		{\"key\":\"predPC\" , \"value\":\"%d\"},\n\
		{\"key\":\"instructions\" , \"value\":%d},\n\
		{\"key\":\"CPI\" , \"value\":%d}\n\
	],\n" 
	, F_predPC , 0 , 0
	);

/*
	printf(
"	\"DECODE\" : [\n\
		{\"key\":\"stat\" , \"value\":\"%d\"},\n\
		{\"key\":\"rA\" , \"value\":\"%d\"},\n\
		{\"key\":\"rB\" , \"value\":\"%d\"},\n\
		{\"key\":\"valC\" , \"value\":\"0x%08x\"},\n\
		{\"key\":\"valP\" , \"value\":\"0x%08x\"}\n\
	],\n" , D_stat , D_rA, D_rB, D_valC , D_valP);
*/
	printf(
"	\"DECODE\" : [\n\
		{\"key\":\"stat\" , \"value\":\"%d\"},\n\
		{\"key\":\"rA\" , \"value\":\"%d\"},\n\
		{\"key\":\"rB\" , \"value\":\"%d\"},\n\
		{\"key\":\"valC\" , \"value\":\"%d\"},\n\
		{\"key\":\"valP\" , \"value\":\"%d\"}\n\
	],\n" , D_stat , D_rA, D_rB, D_valC , D_valP);

	printf(
"	\"EXECUTE\" : [\n\
		{\"key\":\"stat\" , \"value\":\"%d\"},\n\
		{\"key\":\"valC\" , \"value\":%d},\n\
		{\"key\":\"valA\" , \"value\":%d},\n\
		{\"key\":\"valB\" , \"value\":%d},\n\
		{\"key\":\"dstE\" , \"value\":%d},\n\
		{\"key\":\"dstM\" , \"value\":%d},\n\
		{\"key\":\"srcA\" , \"value\":%d},\n\
		{\"key\":\"srcB\" , \"value\":%d}\n\
	],\n" , E_stat , E_valC , E_valA , E_valB , E_dstE , E_dstM , E_srcA , E_srcB);


	printf(
"	\"MEMORY\" : [\n\
		{\"key\":\"stat\" , \"value\":\"%d\"},\n\
		{\"key\":\"valE\" , \"value\":%d},\n\
		{\"key\":\"valA\" , \"value\":%d},\n\
		{\"key\":\"dstE\" , \"value\":%d},\n\
		{\"key\":\"dstM\" , \"value\":%d}\n\
	],\n" , M_stat , M_valE , M_valA , M_dstE , M_dstM);

	printf(
"	\"WRITE BACK\" : [\n\
		{\"key\":\"stat\" , \"value\":\"%d\"},\n\
		{\"key\":\"valE\" , \"value\":%d},\n\
		{\"key\":\"valM\" , \"value\":%d},\n\
		{\"key\":\"dstE\" , \"value\":%d},\n\
		{\"key\":\"dstM\" , \"value\":%d},\n\
	]\n" , W_stat , W_valE , W_valM , W_dstE , W_dstM);

	printf("}\n");
}

void Proc()
{
	bool st = false;
	while (W_stat == SAOK)
	{
		clockcounter ++;
		Memory();
		Execute();
		Decode();
		Fetch();
		PipelineControlLogic();
		if(st)
			printf(",\n");
		st = true;
		Print();
		Upload();
		cerr << endl;
		/*
		clockcounter ++;
		Upload();
		Memory();
		Execute();
		Decode();
		Fetch();
		PipelineControlLogic();
		printf(",\n");
		Print();
		cerr << endl;
		*/
	}
}

int main()
{
	freopen("machlanginput.txt", "r", stdin);
	freopen("../html/log.js", "w", stdout);

	Read();
	Init();

	printf("complete_data = [\n");
	Proc();
	printf("]\n");

	return 0;
}
