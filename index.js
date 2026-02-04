// let const var
let a = 10;
let b = 20;
let sum = a+b;
console.log("the sum of a and b:" + sum);
let bool = true;

let und;
let nul=null;

console.log(typeof bool);
console.log(typeof und);
console.log(typeof nul);

console.log(a*b);
console.log(a/b);
console.log(a-b);
console.log(a%b);



let age = 20;
if(age>=18){
    console.log("You are eligible to vote");
}
else{
    console.log("you are not");
}

//array

let arr = [18,26,6,7,8];

console.log(arr[3]);

arr.push(10);
arr.pop(6);

console.log(arr.length)

//object

let students = {
    name:"radha",
    age:32

}

//function

function add(p,q){
    return p+q;
}

console.log(add(7,8));


//arrow function
// ingle line codes by arrow function
const multiply = (p,q) => p*q;

console.log("arrow function",multiply(5,15));

//date
let today = new Date();
console.log(today);


//math
console.log(Math.sqrt(36));
console.log(Math.random());

//string

txt = "hello hiiiii";

console.log(txt.length);
console.log(txt.toUpperCase());//error

//type conversion

let strum="123";
let convert = Number(strum);
console.log(convert+10);