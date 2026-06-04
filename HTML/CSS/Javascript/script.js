var a = 10; //Reinitializ&Redeclare
let b = 20; //Reinitialize
const c = 30;

console.log(a);
console.log(b);
console.log(c);

var num = 10;
var str = "Nirmal";
var undefined;
var Null = null;
var boolean = true;

console.log(typeof num);
console.log(typeof str);
console.log(typeof underline);
console.log(typeof Null);
console.log(typeof boolean);


var BigInt = 123n;
var symbol = ('li');

console.log(typeof BigInt)
console.log(typeof symbol)


var arr = [10,20,30,40];
console.log(typeof arr, arr);
var obj ={
    name:"Nirmal";
    dept:["Ai&Ds"]
}
console.log(typeof obj,obj);

//Arithmatic operator (+,-,*,%,/)

var a = 10;
var b = "Viky";

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a % b);
console.log(a / b);
console.log(a ** b);

//logical operators(&&, ||, 1)
//                &&  ||
//true true       true true
//true false      false true
//false true      false true
//false false     false false\

var a = true;
var b = false;

console.log(a && b);
console.log(a || b);
console.log(!a);

//Relational operator (>,<,>=,<=,==,!=)

a=10;
b=20;

console.log(a>b)
console.log(a<b)
console.log(a>=b)
console.log(a<=b)
console.log(a==b)
console.log(a!=b)

a=10;
b=20;

a+=b;
console.log(a);
a-=b;
console.log(a);

//unary operator(--,++)

var a = 10;

console.log(a++);
console.log(++a);

var a =10;

console.log(a--);
console.log(--a);

a = 1;
b = 1;
c = 0;

var result = a++ + --b + ++c - ++a + ++b + c++ + b++ + a;
console.log(result) 