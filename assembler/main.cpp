#include <bits/stdc++.h>
using namespace std;

#define pb push_back

map<string , int> register_name;
map<string , int> tag;

map<int , char> Hexconv;

int pos;

struct Bichar
{
	char a,b;
	Bichar(char aa='0' , char bb='0')
	{
		a = aa;b = bb;
	}
	Bichar & operator = (const Bichar& t)
	{
		a = t.a;
		b = t.b;
		return *this;
	}
};

Bichar buffer[500000];
bool endofline[500000];

vector<pair<string , int> > placeholder;

FILE *out;

void output(int V , int st)
{
	for(int i = 0 ; i < 4 ; i++)
	{
		int val = 0;
		for(int j = (i + 1) * 8 - 1 ; j >= i * 8 ; j--)
			val = val << 1 | (V >> j & 1);
		buffer[st + i] = Bichar(Hexconv[val / 16] , Hexconv[val % 16]);
	}
}

void raise_error(string info , string type)
{
	cout << "ERROR" << endl;
	if(type == "unknown register")
	{
		cout << "	unknown register [" << info << "]" << endl;
	}
	if(type == "tag already exists")
	{
		cout << "	tag [" << info << "] already exists" << endl;
	}
	if(type == "unknown tag")
	{
		cout << "	unknown tag [" << info << "]" << endl;
	}
	if(type == "unexpected token")
	{
		cout << "	unexpected token [" << info << "]" << endl;
	}
	if(type == "unrecognized instruction")
	{
		cout << "	unrecognized instruction [" << info << "]" << endl;
	}
	exit(0);
}

int check_register_name(string a)
{
	if(register_name.find(a) == register_name.end())
		raise_error(a , "unknown register");
	return register_name[a];
}

int main(int argc , char *argv[])
{
	Hexconv[0] = '0';
	Hexconv[1] = '1';
	Hexconv[2] = '2';
	Hexconv[3] = '3';
	Hexconv[4] = '4';
	Hexconv[5] = '5';
	Hexconv[6] = '6';
	Hexconv[7] = '7';
	Hexconv[8] = '8';
	Hexconv[9] = '9';
	Hexconv[10] = 'A';
	Hexconv[11] = 'B';
	Hexconv[12] = 'C';
	Hexconv[13] = 'D';
	Hexconv[14] = 'E';
	Hexconv[15] = 'F';
	
	
	register_name["%eax"] = 0;
	register_name["%ecx"] = 1;
	register_name["%edx"] = 2;
	register_name["%ebx"] = 3;
	register_name["%esp"] = 4;
	register_name["%ebp"] = 5;
	register_name["%esi"] = 6;
	register_name["%edi"] = 7;

	assert(argc >= 2);
	freopen(argv[1] , "r" , stdin);
	out = fopen(argv[2] , "w");
	string now;
	pos = 0;
	int linenum = 0;
	while(cin >> now)
	{
		if(now.length() <= 1)continue;
		if(now[now.length() - 1] == ':')
		{
			now = now.substr(0 , now.length() - 1);
			if(tag.find(now) != tag.end())
				raise_error(now , "tag already exists");
			tag[now] = pos;
			continue;
		}
		if(now[0] == '.')
		{
			cout << "WARNING " << endl;
			cout << "	this assmebler doesn't support commands start with ." << endl;
			continue;
		}
		if(now[0] == '#')
		{
			continue;
		}
		if(now == "halt")
		{
			buffer[pos] = Bichar('0' , '0');
			endofline[pos] = true;
			pos += 1;
			continue;
		}
		if(now == "nop")
		{
			buffer[pos] = Bichar('1' , '0');
			endofline[pos] = true;
			pos += 1;
			continue;
		}
		if(now == "rrmovl")
		{
			buffer[pos] = Bichar('2' , '0');
			string reg1 , reg2 , comma;
			int rA , rB;
			cin >> reg1;
			rA = check_register_name(reg1);

			cin >> comma;
			if(comma != ",")
				raise_error(comma , "unexpected token");

			cin >> reg2;
			rB = check_register_name(reg2);
			buffer[pos + 1] = Bichar('0' + rA , '0' + rB);
			endofline[pos + 1] = true;
			pos += 2;
			continue;
		}
		if(now == "irmovl")
		{
			buffer[pos] = Bichar('3' , '0');
			int V , rB;string comma , reg2;
			cin >> V >> comma >> reg2;
			if(comma != ",")
				raise_error(comma , "unexpected token");
			rB = check_register_name(reg2);
			buffer[pos + 1] = Bichar('F' , '0' + rB);
			output(V , pos + 2);
			endofline[pos + 5] = true;
			pos += 6;
			continue;
		}
		if(now == "rmmovl")
		{
			buffer[pos] = Bichar('4' , '0');
			string reg1 , reg2 , comma , left , right;int D;
			cin >> reg1 >> comma >> D >> left >> reg2 >> right;
			if(comma != ",")
				raise_error(comma , "unexpected token");
			if(left != "(")
				raise_error(left , "unexpected token");
			if(right != ")")
				raise_error(right , "unexpected token");
			int rA , rB;
			rA = check_register_name(reg1);
			rB = check_register_name(reg2);
			buffer[pos + 1] = Bichar('0' + rA , '0' + rB);
			output(D , pos + 2);
			endofline[pos + 5] = true;
			pos += 6;
			continue;
		}
		if(now == "mrmovl")
		{
			buffer[pos] = Bichar('5' , '0');
			string reg1 , reg2 , left , right , comma;int D;
			cin >> D >> left >> reg2 >> right >> comma >> reg1;
			if(comma != ",")
				raise_error(comma , "unexpected token");
			if(left != "(")
				raise_error(left , "unexpected token");
			if(right != ")")
				raise_error(right , "unexpected token");
			int rA = check_register_name(reg1);
			int rB = check_register_name(reg2);
			buffer[pos + 1] = Bichar('0' + rA , '0' + rB);
			output(D , pos + 2);
			endofline[pos + 5] = true;
			pos += 6;
			continue;
		}
		if(now == "call")
		{
			buffer[pos] = Bichar('8' , '0');
			string Dest;cin >> Dest;
			placeholder.emplace_back(Dest , pos + 1);
			endofline[pos + 4] = true;
			pos += 5;
			continue;
		}
		if(now == "ret")
		{
			buffer[pos] = Bichar('9' , '0');
			endofline[pos] = true;
			pos += 1;
			continue;
		}
		if(now == "pushl")
		{
			buffer[pos] = Bichar('A' , '0');
			int rA;string reg1;
			cin >> reg1;
			rA = check_register_name(reg1);
			buffer[pos + 1] = Bichar('0' + rA , 'F');
			endofline[pos + 1] = true;
			pos += 2;
			continue;
		}
		if(now == "popl")
		{
			buffer[pos] = Bichar('B' , '0');
			int rA;string reg1;
			cin >> reg1;
			rA = check_register_name(reg1);
			buffer[pos + 1] = Bichar('0' + rA , 'F');
			endofline[pos + 1] = true;
			pos += 2;
			continue;
		}
		if(now == "addl" || now == "subl" || now == "andl" || now == "xorl")
		{
			if(now == "addl")
				buffer[pos] = Bichar('6' , '0');
			if(now == "subl")
				buffer[pos] = Bichar('6' , '1');
			if(now == "andl")
				buffer[pos] = Bichar('6' , '2');
			if(now == "xorl")
				buffer[pos] = Bichar('6' , '3');
			int rA , rB;string reg1 , reg2 , comma;
			cin >> reg1 >> comma >> reg2;
			if(comma != ",")
				raise_error(comma , "unexpected token");
			rA = check_register_name(reg1);
			rB = check_register_name(reg2);
			buffer[pos + 1] = Bichar('0' + rA , '0' + rB);
			endofline[pos + 1] = true;
			pos += 2;
			continue;
		}
		if(now == "jmp" || now == "jle" || now == "jl" || now == "je"
			|| now == "jne" || now == "jge" || now == "jg")
		{
			if(now == "jmp")
				buffer[pos] = Bichar('7' , '0');
			if(now == "jle")
				buffer[pos] = Bichar('7' , '1');
			if(now == "jl")
				buffer[pos] = Bichar('7' , '2');
			if(now == "je")
				buffer[pos] = Bichar('7' , '3');
			if(now == "jne")
				buffer[pos] = Bichar('7' , '4');
			if(now == "jge")
				buffer[pos] = Bichar('7' , '5');
			if(now == "jg")
				buffer[pos] = Bichar('7' , '6');
			string Dest;cin >> Dest;
			placeholder.emplace_back(Dest , pos + 1);
			endofline[pos + 4] = true;
			pos += 5;
			continue;
		}
		raise_error(now , "unrecognized instruction");
	}
	for(auto x : placeholder)
	{
		if(tag.find(x.first) == tag.end())
			raise_error(x.first , "unknown tag");
		output(tag[x.first] , x.second);
	}
	for(int i = 0 ; i < pos ; i++)
	{
		fprintf(out , "%c" , buffer[i].a);
		fprintf(out , "%c" , buffer[i].b);
		if(!endofline[i])fprintf(out , " ");
		else fprintf(out , "\n");
	}
}