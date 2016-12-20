void SelectPC()
{
    if (M_icode == IJXX && !M_Cnd) f_pc = M_valA;
    else if (W_icode == IRET && D_icode == INOP) f_pc = W_valM;
    else if (M_icode == IPUSHL && E_icode == IRET) f_pc = M_valA;
    else f_pc = F_predPC;
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
        return;
    }
    f_icode = (memory[f_pc] >> 4) & 0xF;
    f_ifun = memory[f_pc] & 0xF;

    /* Set f_rA, f_rB, and f_valC */
    f_rA = (memory[f_pc+1] >> 4) & 0xF;
    f_rB = memory[f_pc+1] & 0xF;
    f_valC = memory[f_pc+2] + (memory[f_pc+3] << 8) + (memory[f_pc+4] << 16) + (memory[f_pc+5] << 24);
}

void Instrvalid()
{
    switch(f_icode)
    {
        case INOP: case IHALT: case IRRMOVL: case IIRMOVL:
        case IRMMOVL: case IMRMOVL: case IOPL: case IJXX:
        case ICALL: case IRET: case IPUSHL: case IPOPL:
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

void NeedValReg()
{
    switch(f_icode)
    {
        case IRRMOVL: case IOPL: case IPUSHL: case IPOPL:
        case IIRMOVL: case IRMMOVL: case IMRMOVL:
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

    if (!need_regids) f_rA = f_rB = RNONE;
    if (!need_valC) f_valC = 0;
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
}

void Fetch()
{
    SelectPC();
    Instructionmemory();
    Instrvalid();
    Stat();
    NeedValReg();
    PCincrement();
    PredictPC();
}
