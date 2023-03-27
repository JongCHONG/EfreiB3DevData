// See https://aka.ms/new-console-template for more information

//a
Console.WriteLine("a-----------");

int num1;
num1 = 1;

int num2;
num2 = -2;

Console.WriteLine(num1);
Console.WriteLine(num2);

//b
Console.WriteLine("b-----------");

int temp;
temp = num1;
num1 = num2;
num2 = temp;

Console.WriteLine(num1);
Console.WriteLine(num2);

//c 
Console.WriteLine("c-----------");

if ((num1 > 0 && num2 > 0) || (num1 < 0 && num2 < 0))
{
    Console.WriteLine("true");
}
else
{
    Console.WriteLine("false");
}

//d 
Console.WriteLine("d-----------");

int numCopys = 1;
int price10 = 2;
double price20 = 1.5;
int price30 = 1;
int total;

if (numCopys <= 10)
{
    total = price10 * numCopys;
    Console.WriteLine(total);
}
