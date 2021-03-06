void SelectPC()
{
	if (M_icode == IJXX && !M_Cnd) f_pc = M_valA;
	else if (W_icode == IRET && D_icode == INOP) f_pc = W_valM;
	else if (M_icode == IPUSHL && E_icode == IRET) f_pc = M_valA;
	else f_pc = F_predPC;
}

string get_register_name(int index)
{
	if(index == 0)return "eax";
	if(index == 1)return "ecx";
	if(index == 2)return "edx";
	if(index == 3)return "ebx";
	if(index == 4)return "esp";
	if(index == 5)return "ebp";
	if(index == 6)return "esi";
	if(index == 7)return "edi";
}

string set_real_instruction(int pc)
{
	string res = "";
	int icode = (memory[pc] >> 4) & 0xF;
	int ifun = memory[pc] & 0xF;
	int rA = (memory[pc + 1] >> 4) & 0xF;
	int rB = (memory[pc + 1] & 0xF);
	int valC = memory[pc + 2] + (memory[pc + 3] << 8)
	+ (memory[pc + 4] << 16) + (memory[pc + 5] << 24);
	if(icode == 0)
	{
		res = "halt";
	}
	if(icode == 1)
	{
		res = "nop";
	}
	if(icode == 2)
	{
		res = "rrmovl " + get_register_name(rA) + "," + get_register_name(rB);
	}
	if(icode == 3)
	{
		res = "irmovl "+to_string(valC) + ","+get_register_name(rB);
	}
	if(icode == 4)
	{
		res = "rmmovl "+get_register_name(rA) + ","+to_string(valC)+"("+
		get_register_name(rB) + ")";
	}
	if(icode == 5)
	{
		res = "mrmovl "+to_string(valC)+"("+get_register_name(rB)+"),"+
		get_register_name(rA);
	}
	if(icode == 6)
	{
		if(ifun == 0)
			res = "addl";
		if(ifun == 1)
			res = "subl";
		if(ifun == 2)
			res = "andl";
		if(ifun == 3)
			res = "xorl";
		res = res + " " + get_register_name(rA) + ","+get_register_name(rB);
	}
	if(icode == 7)
	{
		valC = memory[pc + 1] + (memory[pc + 2] << 8)
	+ (memory[pc + 3] << 16) + (memory[pc + 4] << 24);
		if(ifun == 0)
			res = "jmp";
		if(ifun == 1)
			res = "jle";
		if(ifun == 2)
			res = "jl";
		if(ifun == 3)
			res = "je";
		if(ifun == 4)
			res = "jne";
		if(ifun == 5)
			res = "jge";
		if(ifun == 6)
			res = "jg";
		res = res + " " + to_string(valC);
	}
	if(icode == 8)
	{
		valC = memory[pc + 1] + (memory[pc + 2] << 8)
	+ (memory[pc + 3] << 16) + (memory[pc + 4] << 24);
		res = "call " + to_string(valC);
	}
	if(icode == 9)
	{
		res = "ret";
	}
	if(icode == 10)
	{
		res = "pushl " + get_register_name(rA);
	}
	if(icode == 11)
	{
		res = "popl " + get_register_name(rA);
	}
	if (icode == 12)
	{
		res = "testl " + get_register_name(rA) + "," + get_register_name(rB);
	}
	if (icode == 13)
	{
		res = "cmpl " + get_register_name(rA) + "," + get_register_name(rB);
	}
	return res;
}

void NeedValReg()
{
	need_regids = need_valC = false;

	switch(f_icode)
	{
		case IRRMOVL: case IOPL: case IPUSHL: case IPOPL:
		case IIRMOVL: case IRMMOVL: case IMRMOVL: case ITESTL: case ICMPL:
			need_regids = true; break;
		default: need_regids = false;
	}

	switch(f_icode)
	{
		case IIRMOVL: case IRMMOVL: case IMRMOVL:
		case IJXX: case ICALL:
			need_valC = true; break;
		default: need_valC = false;
	}
}

void Instructionmemory()
{
/* Set imem_error */
	if (f_pc < 0 || f_pc >= memoryLength)
		imem_error = true;
	else imem_error = false;

/* Set f_icode and f_ifun */
	if (imem_error)
	{
		f_icode = INOP;
		f_ifun = FNONE;
		f_real_ins = "nop";
		return;
	}
	
	f_icode = (memory[f_pc] >> 4) & 0xF;
	f_ifun = memory[f_pc] & 0xF;

    d_real_ins = set_real_instruction(f_pc);

	NeedValReg();
/* Set f_rA, f_rB, and f_valC */
	if (need_regids)
	{
		f_rA = (memory[f_pc+1] >> 4) & 0xF;
		f_rB = memory[f_pc+1] & 0xF;
	}
	else f_rA = f_rB = RNONE;

	if (need_valC)
	{
		f_valC = memory[f_pc+1+need_regids] + (memory[f_pc+2+need_regids] << 8) + (memory[f_pc+3+need_regids] << 16) + (memory[f_pc+4+need_regids] << 24);
	}
	else f_valC = 0;
}

void Instrvalid()
{
	switch(f_icode)
	{
		case INOP: case IHALT: case IRRMOVL: case IIRMOVL:
		case IRMMOVL: case IMRMOVL: case IOPL: case IJXX:
		case ICALL: case IRET: case IPUSHL: case IPOPL: case ITESTL: case ICMPL:
			instr_valid = true; break;
		default: instr_valid = false;
	}
}

void Stat()
{
	if (imem_error) f_stat = SADR;
	else if (!instr_valid) f_stat = SINS;
	else if (f_icode == IHALT) f_stat = SHLT;
	else f_stat = SAOK;
}

void PCincrement()
{
	f_valP = f_pc + 1 + (int)need_regids + 4 * (int)need_valC;
}

void PredictPC()
{
	if (f_icode == IJXX || f_icode == ICALL)
		f_predPC = f_valC;
	else f_predPC = f_valP;
	cerr << "just read from addr. " << f_predPC << endl;
	f_real_ins = set_real_instruction(f_predPC);
}

void Fetch()
{
	SelectPC();
	Instructionmemory();
	Instrvalid();
	Stat();
	PCincrement();
	PredictPC();
}
