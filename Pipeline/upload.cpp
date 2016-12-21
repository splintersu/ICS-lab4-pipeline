void SetW()
{
    W_stat = m_stat;
    W_icode = M_icode;
    W_valE = M_valE;
    W_valM = m_valM;
    W_dstE = M_dstE;
    W_dstM = M_dstM;
    W_real_ins = M_real_ins;
}

void SetM()
{
    M_stat = E_stat;
    M_icode = E_icode;
    M_Cnd =  e_Cnd;
    M_valE = e_valE;
    M_valA = E_valA;
    M_dstE = e_dstE;
    M_dstM = E_dstM;
    M_real_ins = E_real_ins;
}

void SetE()
{
    E_stat = D_stat;
    E_icode = D_icode;
    E_ifun = D_ifun;
    E_valC = D_valC;
    E_valA = d_valA;
    E_valB = d_valB;
    E_dstE = d_dstE;
    E_dstM = d_dstM;
    E_srcA = d_srcA;
    E_srcB = d_srcB;
    E_real_ins = D_real_ins;
}

void SetD()
{
    D_stat = f_stat;
    D_icode = f_icode;
    D_ifun = f_ifun;
    D_rA = f_rA;
    D_rB = f_rB;
    D_valC = f_valC;
    D_valP =  f_valP;
    D_real_ins = d_real_ins;
}

void Upload()
{
    if (W_bubble)
    {
        W_stat = SAOK; W_icode = INOP;
        W_real_ins = "nop";
    }
    else if (!W_stall) SetW();

    if (M_bubble)
    {
        M_stat = SAOK; M_icode = INOP;
        M_real_ins = "nop";
    }
    else if (!M_stall) SetM();

    if (E_bubble)
    {
        E_stat = SAOK; E_icode = INOP; E_ifun = FNONE;
        E_real_ins = "nop";
    }
    else if (!E_stall) SetE();

    if (D_bubble)
    {
        D_stat = SAOK; D_icode = INOP; D_ifun = FNONE;
        D_real_ins = "nop";
    }
    else if (!D_stall) SetD();

    if (!F_stall) {F_predPC = f_predPC;F_real_ins = f_real_ins;}
}
