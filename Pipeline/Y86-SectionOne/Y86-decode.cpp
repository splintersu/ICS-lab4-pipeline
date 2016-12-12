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

int d_srcA, d_srcB, d_dstE, d_dstM, d_valA, d_valB;

void Decode()
{
	switch(D_icode)
	{
		case IRRMOVL: case IRMMOVL: case IOPL: case IPUSHL:
			d_srcA = lastCond.d_rA; break;
		case IPOPL: case IRET:
			d_srcA = RESP; break;
		default: d_srcA = RNONE;
	}

	switch(D_icode)
	{
		case IOPL: case IRMMOVL: case IMRMOVL:
			d_srcA = lastCond.d_rB; break;
		case IPUSHL: case IPOPL: case ICALL: case IRET:
			d_srcA = RESP; break;
		default: d_srcA = RNONE;
	}

	switch(D_icode)
	{
		case IRRMOVL: case IIRMOVL: case IOPL:
			d_dstE = lastCond.D_rB; break;
		case IPUSHL: case IPOPL: case ICALL: case IRET:
			d_dstE = RESP; break;
		default: d_dstE = RNONE;
	}

	switch(D_icode)
	{
		case IMRMOVL: case IPOPL:
			d_dstM = lastCond.D_rA; break;
		default: d_dstM = RNONE;
	}

	if (lastCond.D_icode == ICALL || lastCond.D_icode == IJXX)
		d_valA = lastCond.D_valP;
	else if (d_srcA == e_dstE) d_valA = e_valE;
	else if (d_srcA == lastCond.M_dstM) d_valA = m_valM;
	else if (d_srcA == lastCond.M_dstE) d_valA = lastCOnd.M_valE;
	else if (d_srcA == lastCond.M_dstM) d_valA = lastCond.W_valM;
	else if (d_stcA == lastCond.W_dstE) d_valA = lastCond.W_valE;
	else d_valA = d_rvalA;

	if (d_srcB == e_dstE) d_valB = e_valE;
	else if (d_srcB == lastCond.M_dstM) d_valB = m_valM;
	else if (d_srcB == lastCond.M_dstE) d_valB = lastCond.M_valE;
	else if (d_srcB == lastCond.W_dstM) d_valB = lastCond.M_valM;
	else if (d_srcB == lastCond.W_dstE) d_valB = lastCond.W_valE;
	else d_valB = d_rvalB;
}
