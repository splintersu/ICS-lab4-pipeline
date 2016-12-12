void Addr()
{
    switch(M_icode)
    {
        case IRMMOVL: case IPUSHL: case ICALL: case IMRMOVL:
            mem_addr = M_valE; break;
        case IPOPL: case IRET:
            mem_addr = M_valA; break;
    }
}

void Memcond()
{
    if (M_icode == IMRMOVL || M_icode == IPOPL || M_icode == IRET)
        mem_read = true;
    else mem_read = false;

    if (M_icode == IRMMOVL || M_icode == IPUSHL || M_icode == ICALL)
        mem_write = true;
    else mem_write = false;
}

void Datamemory()
{
    dmem_error = false;

    if (mem_read)
    {
        if (0 < mem_addr || mem_addr >= memoryLength)
            dmem_error = true;
        else m_valM = memory[mem_addr];
    }

    if (mem_write)
    {
        if (0 < mem_addr || mem_addr >= memoryLength)
            dmem_error = true;
        else memory[mem_addr] = M_valA;
    }
}

void MSTAT()
{
    if (dmem_error) m_stat = SADR;
    else m_stat = M_stat;
}

void Memory()
{
    Addr();
    Memcond();
    Datamemory();
    MSTAT();
}
