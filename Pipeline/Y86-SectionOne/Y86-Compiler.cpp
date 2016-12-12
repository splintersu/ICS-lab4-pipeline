/*
	Y86 - Compiler
	Assembly language --> Machine language

	0 %eax      1 %ecx      2 %edx
	3 %ebx      4 %esp      5 %ebp
	6 %esi      7 %edi      F null
*/

#include <bits/stdc++.h>
using namespace std;

void PrintVal(string operationVal)
{
	switch(operationVal)
	{
		case "%eax": printf("0"); break;
		case "%ecx": printf("1"); break;
		case "%edx": printf("2"); break;
		case "%ebx": printf("3"); break;
		case "%esp": printf("4"); break;
		case "%ebp": printf("5"); break;
		case "%esi": printf("6"); break;
		case "%edi": printf("7"); break;
	}
}

void Compiler()
{
	int i,operationLength;
	string operation, operationType, operationDest, operationVal;
	while (getline(cin, operation))
	{
		operationLength = operation.size();
		operationType = "";
		for (i=1; i<=operationLength && operation == ' '; i++);
		for (; i<=operationLength && operation[i] != ' '; i++)
			operationType += operation[i];

		switch(operationType)
		{
			case "halt":
				printf("00\n"); break;

			case "nop": ;
				printf("10\n"); break;

			case "rrmovl":
				printf("20 ");
				operationVal = "";
				for (i++; i<=operationLength && operation[i] != ','; i++)
					operationVal += operation[i];
				PrintVal(operation);
				operationVal = "";
				for (i++; i<=operationLength && operation[i] != ','; i++)
					operationVal += operation[i];
				PrintVal(operation);
				printf("\n");
				break;

			case "irmovl": ;

			case "rmmovl": ;
			case "mrmovl": ;
			case "":;
			case "":;
			case "call": ;
			case "ret": ;
			case "pushl": ;
			case "popl": ; 
		}
	}
}

int main()
{
	freopen("input.txt", "r", stdin);
	freopen("output.txt", "w", stdout);



	return 0;
}
