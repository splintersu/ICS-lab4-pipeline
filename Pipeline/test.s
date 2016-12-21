    irmovl 2 , %edx
    irmovl 1 , %eax
    icmpl %eax , %edx
    je target
    irmovl 2 , %ecx
target:
    irmovl 3 , %ecx
    halt