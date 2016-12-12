#include <bits/stdc++.h>
using namespace std;

#define INOP 		0x1
#define IHALT		0x0
#define IRRMOVL 	0x2
#define IIRMOVL 	0x3
#define IRMMOVL 	0x4
#define IMRMOVL 	0x5
#define IOPL 		0x6
#define IJXX 		0x7
#define ICALL 		0x8
#define IRET 		0x9
#define IPUSHL 		0xA
#define IPOPL 		0xB
#define FNONE 		0x0
#define RESP 		0x4
#define RNONE 		0xF
#define ALUADD 		0x0
#define SAOK 		0x1
#define SADR 		0x2
#define SINS 		0x3
#define SHLT 		0x4

const int maxOperationLength = (int)1e6 + 7;

struct conditionCodeType
{
	bool ZF,SF,OF;
	void Reset()
	{
		ZF = SF = OF = false;
	}
}

struct pipelineType
{
	int W_stat, W_icode, W_valE, W_valM, W_dstE, W_dstM;  // Write back Section
	int M_stat, M_icode, M_Cnd, M_valE, M_valA, M_dstE, M_dstM;  // Memory Section
	int E_stat, E_icode, E_ifun, E_valC, E_valA, E_valB, E_dstE, E_dstM, E_srcA, E_srcB; // Execute Section
	int D_stat, D_icode, D_ifun, D_rA, D_rB, D_valC, D_valP; // Decode Section;
	int F_predPC; // Fetch Section

	void Clear()
	{
		W_stat = W_icode = W_valE = W_valM = W_dstE = W_dstM = -1;
		return;
	}

	void Print()
	{
		printf("Write Back:  %x %x %x %x %x %x\n");
		printf("Memory:  \n");
		printf("Execute:  \n");
		printf("Decode:  \n");
		printf("Fetch:  \n");
		return;
	}
};

pipelineType lastCond, nowCond;


int operationLength, operation[maxOperationLength];

void Proc()
{
	Fetch();
	Decode();
	if (lastCond.D_stat != -1) Execute();
	if (lastCond.E_stat != -1) Memory();
	if (lastCond.W_stat != -1) Writeback();
}

int main()
{
	freopen("input.txt", "r", stdin);
	freopen("output.txt", "w", stdout);

// Read machine language code

	operationLength = 0;
	while (scanf("%x", operation + operationLength) != EOF)
		operationLength++;

	for (int i=0; i<=operationLength; i++)
		printf("%d\n", operation[i]);
	printf("\n");



// Simulate Y86
	nowCond.Clear();
	nowCond.F_predPC = 0;
	nowCond.Print();

	for (int i=0; i<=operationLength; i++)
	{
		lastCond = nowCond;
		nowCond.Clear();
		Proc();
		nowCond.Print();
	}


	return 0;
}
