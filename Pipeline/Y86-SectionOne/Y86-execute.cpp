
int ALUA,ALUB,ALUfun,ALUresult,e_valA,e_dstE; conditionCodeType CC; bool e_Cnd;


void Execute()
{
	switch(lastCond.E_icode)  //Select input A to ALU
	{
		case IRRMOVL: case IOPL:
			ALUA = lastCond.E_valA; break;
		case IIRMOVL: case IRMMOVL: case IMRMOVL:
			ALUA = lastCond.E_valC; break;
		case ICALL: case IPUSHL:
			ALUA = -4; break;
		case IRET: case IPOPL:
			ALUA = 4; break;
		default: ALUA = -1;
	}

	switch(lastCond.E_icode)  //Select input B to ALU
	{
		case IRMMOVL: case IMRMOVL: case IOPL: case ICALL: 
		case IPUSHL: case IRET: case IPOPL:
			ALUB = lastCond.E_valB; break;
		case IRRMOVL: case IIRMOVL:
			ALUB = 0; break;
		default: ALUB = -1;
	}

	switch(lastCond.E_icode)  //Set the ALU function
	{
		case IOPL: ALUfun = lastCond.E_ifun;
		default: ALUfun = ALUADD;
	}
	if (ALUA == -1 || ALUB == -1) ALUfun = -1;

	switch(ALUfun)
	{
		case 0: ALUresult = ALUA + ALUB; break;
		case 1: ALUresult = ALUA - ALUB; break;
		case 2: ALUresult = ALUA & ALUB; break;
		case 3: ALUresult = ALUA ^ ALUB; break;
		default: ALUresult = -1;
	}

	if (ALUfun == -1) CC.Reset();  //Updatte condition codes
	else
	{
		CC.ZF = (ALUresult == 0);
		CC.SF = (ALUresult < 0);
		CC.OF = ((ALUA < 0) == (ALUB < 0) && (ALUresult < 0) != (ALUA < 0));
	}

	if ( (lastCond.M_icode == IMRMOVL || lastCond.M_icode == IPOPL) &&
		 (lastCond.E_icode == IRMMOVL || lastCond.E_icode == IPUSHL) &&
		 (lastCond.M_dstM == lastCond.E_srcA) &&
		 (lastCond.M_dstM != lastCond.E_srcB))
		e_valA = m_valM;
	else e_valA = lastCond.E_valA;

	if (lastCond.E_icode == IRRMOVL && !e_Cnd)
		e_dstE = RNONE;
	else e_dstE = lastCond.E_dstE;
}
