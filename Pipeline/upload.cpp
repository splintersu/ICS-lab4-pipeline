void Upload()
{
    W_stat = m_stat;
    W_icode = M_icode;
    W_valE = M_valE;
    W_valM = m_valM;
    W_dstE = M_dstE;
    W_dstM = M_dstM;

    M_stat = E_stat;
    M_icode = E_icode;
    M_Cnd =  e_Cnd;
    M_valE = e_valE;
    M_valA = E_valA;
    M_dstE = e_dstE;
    M_dstM = E_dstM;

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

    D_stat = f_stat;
    D_icode = f_icode;
    D_ifun = f_ifun;
    D_rA = f_rA;
    D_rB = f_rB;
    D_valC = f_valC;
    D_valP =  f_valP;

    F_predPC = f_predPC;
}
