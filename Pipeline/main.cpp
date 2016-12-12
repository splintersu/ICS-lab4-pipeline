#include <iostream>
using namespace std;

#include "header.h"
#include "fetch.cpp"
#include "decode.cpp"
#include "execute.cpp"
#include "memory.cpp"
#include "upload.cpp"

void Read()
{
	memoryLength = 0;
	while (scanf("%x", memory + memoryLength) != EOF)
		memoryLength++;
	
	printf("input file:\n");
	for (int i=0; i<memoryLength; i++)
		printf("%x ", memory[i]);
	printf("\n");
	printf("\n");
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
	printf("%d :  ", f_pc);
	printf("%x %x\n", eax, ecx);
	printf("\n");
	return;

	printf("Write: \n");
	printf("Memory: \n");
	printf("Execute: \n");
	printf("Decode: \n");
	printf("Fetch: \n");

	printf("Condition Code: \n");
	printf("Register File: \n");
}

void Proc()
{
	while (W_stat == SAOK)
	{
		Memory();
		Execute();
		Decode();
		Fetch();
		Upload();

		Print();
	}
}

int main()
{
	freopen("machlanginput.txt", "r", stdin);
	//freopen("log.txt", "w", stdout);

	Read();
	Init();
	Proc();

	return 0;
}
