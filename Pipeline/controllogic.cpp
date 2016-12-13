void PipelineControlLogic()
{
    F_bubble = F_stall = false;
    if ((E_icode == IMRMOVL || E_icode == IPOPL) && (E_dstM == d_srcA || E_dstM == d_srcB) &&
        (D_icode != IRMMOVL && D_icode != IPUSHL) && E_dstM == d_srcA && E_dstM != d_srcB)
    {
        if (D_icode == IRET ||
            (E_icode == IRET && M_icode != IPUSHL) ||
            (M_icode == IRET && W_icode != IPUSHL))
             F_stall = true;
    }

   D_bubble = D_stall = false;
   if ((E_icode == IMRMOVL || E_icode == IPOPL) && (E_dstM == d_srcA || E_dstM == d_srcB) &&
        (D_icode != IRMMOVL && D_icode != IPUSHL) && E_dstM == d_srcA && E_dstM != d_srcB)
        D_stall = true;
    if (E_icode == IJXX && !e_Cnd) D_bubble = true;
    else if ((E_icode != IRMMOVL && E_icode != IPOPL) && (E_dstM == d_srcA || E_dstM == d_srcB) &&
            (D_icode != IRMMOVL && D_icode == IPUSHL) && E_dstM == d_srcA && E_dstM != d_srcB)
    {
            if (D_icode == IRET ||
                (E_icode == IRET && W_icode != IPUSHL) ||
                (M_icode == IRET && W_icode != IPUSHL)) D_bubble = true;
    }

    E_bubble = E_stall = false;
    if (E_icode == IJXX && !e_Cnd) E_bubble = true;
    else if ((E_icode == IMRMOVL || E_icode == IPOPL) && (E_dstM == d_srcA || E_dstM == d_srcB) &&
            (D_icode != IRMMOVL && D_icode != IPUSHL) && E_dstM == d_srcA && E_dstM != d_srcB)
            E_bubble = true;
    
    M_stall = M_bubble = false;
    if (m_stat == SADR || m_stat == SINS || m_stat == SHLT) M_bubble = true;
    else if (W_stat == SADR || W_stat == SINS || W_stat == SHLT) M_bubble = true;

    W_stall = W_bubble = false;
    if (W_stat == SADR || W_stat == SINS || W_stat == SHLT) W_stall = true;
}
