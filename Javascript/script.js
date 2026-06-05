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

var a = 10;
var b = 20;
if(true){
    console.log(`${a} = ${b} = ${a+b}`)
}
var a;
console.log(a);
var a = 10;

var a = 10;
var b = 20;
if(true){
    console.log(a);
    //let b = 30
    const b = 30;
    console.log(b);
}
console.log(a);
console.log(b);

var a = 10;
if(a%2===0){
    console.log(`${a} is Even`);
}
else{
    console.log(`${a} is odd`);
}

var mark = 90;

if(mark >=70){
    console.log("A Grade");
}
else if(mark >=35){
    console.log("Pass")
}
else{
    console.log("Fail")
}

var a = 10;
//condition ? true statement: false statement
var result = a%2===0 ? "Even" : "Odd";
console.log(result)

mark = 90;
var result = (mark>=90) ? "O Grade" :
             (mark>=70) ? "A Grade" :
             (mark>=35) ? "Pass" :
             "Fail";
             console.log(result);

var day = 2;
switch(day){
    case 1:{
        console.log("Sunday");
        break;
    }
    case 2:{
    console.log("Monday");
    break;
    }
    case 3:{
        console.log("Tuesday");
        break;
    }
    case 4:{
        console.log("Wednesday");
        break;
    }
    case 5:{
        console.log("Thursday");
        break;
    }
    case 6:{
        console.log("Friday");
        break;
    }
    case 7:{
        console.log("Saturday"):
        break;
    }
    default:{
        console.log("Invalid Input");
    }
}

//Looping statements

for(var i=1;i<=10;i++){
    console.log(i);
}

var val = 1024;
while(val >= 0){
    count++;
    val = Math.floor(val/10);
}
console.log(count);

do{
    console.log("Do...while")
}while(false);


for(let i=1;i<=10;i++){
    if(i%2!==0){
        continue;
    }
    continue.log(i);
}



function add(a , b){
    console.log(10+20);
}

add(); //Hoisting

//Arrow Function
var demo=()=>{
    console.log(10+20);
}
demo(10,20);
demo();
demo(10);

var arr = [10,20,30];
var arr2 =[40,50];

console.log(arr);
console.log(arr2);

//Destructing operator

var [m1,m2,m3,m4,m5] = [90,99,98,97,100]
console.log(m1,m2,m3,m4,m5);

var obj ={
    name:"Nirmal",
    mobile:9876543210,
    dept:[CT,AIDS];
    email:email@gmail.com,
    isactive: true,
}
console.log(name,mobile,dept,email,isactive)

var arr = [10,20,30,40,50];

for(let i in arr){
    console.log(index)
}

for(let value of arr){
    console.log(value)
}
var obj ={
    name:"Nirmal",
    dept:[AIDS],
    mobile:9876543210
}
for(let key in obj){

}

var arr =[1,2,3,4,5];

var result = arr.map((val)=>(val*2));
console.log(result)

var even = arr.filter((val)=>val%2===0);
console.log(even)
var sum = arr.reduce((add,val1)=>(add,val),0);
console.log(sum)
var userName = {
    name = "Nimral"
}
var user = {
    ...name,
    password:12345678
}console.log(user);