#define     INOP 		0x1
#define     IHALT		0x0
#define     IRRMOVL 	0x2
#define     IIRMOVL 	0x3
#define     IRMMOVL 	0x4
#define     IMRMOVL 	0x5
#define     IOPL 		0x6
#define     IJXX 		0x7
#define     ICALL 		0x8
#define     IRET 		0x9
#define     IPUSHL 		0xA
#define     IPOPL 		0xB

#define     FNONE 		0x0

#define     RESP 		0x4
#define     RNONE 		0xF

#define     ALUADD      0x0
#define     ALUSUB      0x1
#define     ALUAND      0x2
#define     ALUXOR      0x3

#define     EAX         0x0
#define     ECX         0x1
#define     EDX         0x2
#define     EBX         0x3
#define     ESP         0x4
#define     EBP         0x5
#define     ESI         0x6
#define     EDI         0x7

#define     SAOK 		0x1
#define     SADR 		0x2
#define     SINS 		0x3
#define     SHLT 		0x4

int stat;

int W_stat, W_icode, W_valE, W_valM, W_dstE, W_dstM;

int m_valM, m_stat, mem_addr;
bool dmem_error, mem_read, mem_write;

int M_stat, M_icode, M_Cnd, M_valE, M_valA, M_dstE, M_dstM;

int aluA, aluB, alufun, e_valE, e_dstE, e_valA;
bool e_Cnd, set_cc;

int E_stat, E_icode, E_ifun, E_valC, E_valA, E_valB, E_dstE, E_dstM, E_srcA, E_srcB;

int d_srcA, d_srcB, d_dstE, d_dstM, d_valA, d_valB, d_rvalA, d_rvalB;

int D_stat, D_icode, D_ifun, D_rA, D_rB, D_valC, D_valP;

int f_pc, f_icode, f_ifun, f_stat, f_predPC, f_rA, f_rB, f_valC, f_valP;
bool imem_error, instr_valid, need_regids, need_valC;

int F_predPC;


const int maxMemoryLength = (int)1e6 + 7;
int memory[maxMemoryLength], memoryLength;

int eax, ecx, edx, ebx, esp, ebp, esi, edi;
bool ZF, SF, OF;

bool F_stall, F_bubble, D_stall, D_bubble, E_stall, E_bubble, M_stall, M_bubble, W_stall, W_bubble;

int clockcounter;
string real_instruction[1000000];