void DecodeProc()
{
    switch(D_icode)
    {
        case IRRMOVL: case IRMMOVL: case IOPL: case IPUSHL:
            d_srcA = D_rA; break;
        case IPOPL: case IRET:
            d_srcA = RESP; break;
        default: d_srcA = RNONE;
    }

    switch(D_icode)
    {
        case IOPL: case IRMMOVL: case IMRMOVL:
            d_srcB = D_rB; break;
        case IPUSHL: case IPOPL: case ICALL: case IRET:
            d_srcB = RESP; break;
        default: d_srcB = RNONE;
    }

    switch(D_icode)
    {
        case IRRMOVL: case IIRMOVL: case IOPL:
            d_dstE = D_rB; break;
        case IPUSHL: case IPOPL: case ICALL: case IRET:
            d_dstE = RESP; break;
        default: d_dstE = RNONE;
    }

    switch(D_icode)
    {
        case IMRMOVL: case IPOPL:
            d_dstM = D_rA; break;
        default: d_dstM = RNONE;
    }
}

void Registerwrite(int type, int val)
{
    switch(type)
    {
        case EAX: eax = val; break;
        case ECX: ecx = val; break;
        case EDX: edx = val; break;
        case EBX: ebx = val; break;
        case ESP: esp = val; break;
        case EBP: ebp = val; break;
        case ESI: esi = val; break;
        case EDI: edi = val; break;
    }
}

void Registerread(int type, int &val)
{
    switch(type)
    {
        case EAX: val = eax; break;
        case ECX: val = ecx; break;
        case EDX: val = edx; break;
        case EBX: val = ebx; break;
        case ESP: val = esp; break;
        case EBP: val = ebp; break;
        case ESI: val = esi; break;
        case EDI: val = edi; break;
        default: val = 0;
    }
}

void Registerfile()
{
    Registerwrite(W_dstM, W_valM);
    Registerwrite(W_dstE, W_valE);
    Registerread(d_srcA, d_rvalA);
    Registerread(d_srcB, d_rvalB);
}

void SelFwdA()
{
    if (D_icode == ICALL || D_icode == IJXX)
        d_valA = D_valP;
    else if (d_srcA == e_dstE) d_valA = e_valE;
    else if (d_srcA == M_dstM) d_valA = m_valM;
    else if (d_srcA == M_dstE) d_valA = M_valE;
    else if (d_srcA == W_dstM) d_valA = W_valM;
    else if (d_srcA == W_dstE) d_valA = W_valE;
    else d_valA = d_rvalA;
}

void FwdB()
{
    if (d_srcB == e_dstE) d_valB = e_valE;
    else if (d_srcB == M_dstM) d_valB = m_valM;
    else if (d_srcB == M_dstE) d_valB = M_valE;
    else if (d_srcB == W_dstM) d_valB = W_valM;
    else if (d_srcB == W_dstE) d_valB = W_valE;
    else d_valB = d_rvalB;
}

void Decode()
{
    DecodeProc();
    Registerfile();
    SelFwdA();
    FwdB();
}
