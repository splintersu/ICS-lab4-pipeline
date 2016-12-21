irmovl 10 , %ebx
irmovl 1 , %ecx
st:
addl %ecx , %eax
icmpl %eax , %ebx
jl ed
jmp st
ed:
irmovl 123456 , %edi
halt
