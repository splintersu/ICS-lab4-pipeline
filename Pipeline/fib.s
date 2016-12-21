irmovl 1010 , %ebp
irmovl 1000 , %esp
call main
halt
fib:
pushl %ebp
rrmovl %esp , %ebp
mrmovl 12 ( %ebp ) , %ecx 
mrmovl 8 ( %ebp ) , %ebx 
addl %ebx , %ecx
subl %esi , %edi
je end
pushl %ebx
pushl %ecx
call fib
jmp wp
end:
rrmovl %ecx , %eax
wp:
rrmovl %ebp , %esp
popl %ebp
ret
main:
pushl %ebp
rrmovl %esp , %ebp
irmovl 1 , %esi
pushl %edi
irmovl 1 , %edi
pushl %edi
pushl %edi
irmovl 10 , %edi  
call fib
rrmovl %ebp , %esp
popl %ebp
ret
