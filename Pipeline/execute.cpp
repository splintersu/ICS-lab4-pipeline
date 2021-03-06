void PreALU()
{
    switch(E_icode)
    {
        case IRRMOVL: case IOPL: case ITESTL: case ICMPL:
            aluA = E_valA; break;
        case IIRMOVL: case IRMMOVL: case IMRMOVL:
            aluA = E_valC; break;
        case ICALL:  case IPUSHL:
            aluA = -4; break;
        case IRET: case IPOPL:
            aluA = 4; break;
    }

    switch(E_icode)
    {
        case IRMMOVL: case IMRMOVL: case IOPL:
        case ICALL: case ITESTL: case ICMPL:
        case IPUSHL: case IRET: case IPOPL:
            aluB = E_valB; break;
        case IRRMOVL: case IIRMOVL:
            aluB = 0; break;
    }

    switch(E_icode)
    {
        case IOPL: alufun = E_ifun; break;
        case ITESTL: alufun = ALUAND; break;
        case ICMPL: alufun  = ALUSUB; break;
        default: alufun = ALUADD;
    }
    cerr  << ' ' << aluA << ' ' << aluB << endl;
}

void ALU()
{
    switch(alufun)
    {
        case ALUADD: e_valE = aluA + aluB; break;
        case ALUSUB: e_valE = aluB - aluA; break;
        case ALUAND: e_valE = aluA & aluB; break;
        case ALUXOR: e_valE = aluA ^ aluB; break;
    }
}

void CC()
{
    if ((E_icode == IOPL || E_icode == ITESTL || E_icode == ICMPL) &&
        (m_stat != SADR && m_stat != SINS && m_stat != SHLT) &&
        (W_stat != SADR && W_stat != SINS && W_stat != SHLT))
        set_cc = true;
    else set_cc = false;

    if (set_cc)
    {
        ZF = (e_valE == 0);
        SF = (e_valE < 0);
        OF = ((aluA < 0) == (aluB < 0) && (e_valE < 0) != (aluA < 0));
    }

    cerr << "ALU: " << E_icode << ' ' << E_ifun << ' ' << alufun << ' ' << aluA << ' ' << aluB << ' ' << e_valE << endl;
    cerr << "ConditionCode: " << set_cc << ' ' << ZF << ' ' << SF << ' ' << OF << endl;
}

void Cond()
{
    cerr << "Cond: " << E_icode << ' ' << ZF << ' ' << SF << ' ' << OF << endl;
    if (E_icode != IJXX)
    {
        e_Cnd = true;
        return;
    }
    if (E_ifun == 0x0) e_Cnd = true;                //jmp
    else if (E_ifun == 0x1) e_Cnd = SF || ZF;       //jle
    else if (E_ifun == 0x2) e_Cnd = SF;             //jl 
    else if (E_ifun == 0x3) e_Cnd = ZF;             //je
    else if (E_ifun == 0x4) e_Cnd = !ZF;            //jne
    else if (E_ifun == 0x5) e_Cnd = (!SF) || ZF;    //jge
    else if (E_ifun == 0x6) e_Cnd = !SF;            //jg 
    cerr << "CheckE_Cnd : " << e_Cnd << endl;
    /*
        to be finished.
    */
}

void DstE()
{
    if (E_icode == IRRMOVL && !e_Cnd)
        e_dstE = RNONE;
    else e_dstE = E_dstE; 
}

void Execute()
{
    PreALU();
    ALU();
    CC();
    Cond();
    DstE();
}
