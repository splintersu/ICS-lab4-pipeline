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


int f_pc, f_icode, f_ifun, f_stat, f_predPC; bool instr_valid, need_regids, need_valC;

void Fetch()
{
	if (lastCond.M_icode == IJXX && !lastCond.M_Cnd)
	 	f_pc = lastCond.M_valA;
	else if (lastCond.M_icode == IRET && lastCond.D_icode == INOP)
	 	f_pc = lastCond.W_valM;
	else if (lastCond.M_icode == IPUSHL && lastCOnd.E_icode == IRET)
	 	f_pc = lastCond.M_valA;
	else f_pc = lastCond.F_predPC:

	if (imem_error)  f_icode = INOP;
	else f_icode = imem_icode;

	if (imem_error) f_ifun = FNONE;
	else f_ifun = imem_ifun;

	switch(f_icode)
	{
		case INOP: case IHALT: case IRRMOVL: case IIRMOVL: case IRMMOVL: case IMRMOVL:
		case IOPL: case IJXX: case ICALL: case IRET: case IPUSHL: case IPOPL:
			instr_valid = true; break;
		default: instr_valid = false;
	}

	if (imem_error) f_stat = SADR;
	else if (!instr_valid) f_stat = SINS;
	else if (f_icode == IHALT) f_stat = SHLT;
	else f_stat = SAOK;

	switch(f_icode)
	{
		case IRRMOVL: case IOPL: case IPUSHL: case IPOPL:
		case IIRMOVL: case IRMMOVL: case IMRMOVL:
			need_regids = true; break;
		default: need_regids = false;
	}

	switch(f_icode)
	{
		case IIRMOVL: case IRMMOVL: case IMRMOVL: case IJXX: case ICALL:
			need_valC = true; break;
		default: need_valC = false;
	}

	if (f_icode == IJXX || f_icode == ICALL) f_predPC = f_valC;
	else f_prePC = f_valP;
}
