/*
console.log("hello!")

////////////////////////////////////////////
//Reference Error

console.log(total);  //Reference Error : not defined


var total1;
console.log(total1);  // undefined = hoisting , no error

total1 = 55;
console.log(total1);


console.log(total2);
let total2 = 66;  // ReferenceError: cant access total2 before initialization


////////////////////////////////////////////
//Literal Object

var address = { 
	street: 'Main Street', 
	'number': 1000, 
	apartment: { 
		'floor': 3, 
		'number': 301 
	} 
 }

 console.log(address['number'])
 console.log(address.street)

////////////////////////////////////////////
//Lexical Environment 

var a=5;
function b(){
	console.log("function is called")
}
console.log(a)
b()


////////////////////////////////////////////
//execution context & stack example , famous code
//same value output print

function f(){
	for(var i = 0; i<5; i++){
		console.log(i);
	}//end_for : 0 1 2 3 4
	console.log("last i: " + i); //5
}
f();



function f2(){
	for(i = 0; i<5; i++){
		console.log(i);
	}//end_for : 0 1 2 3 4
	console.log("last i: " + i); //5
}
f2();


function f3(){
	for(let j = 0; j<5; j++){
		console.log(j);
	}//end_for : 0 1 2 3 4
	console.log("last j: " + j);  //Reference Error: not defined for j here
}
f3();



////////////////////////////////////////////
//execution context & stack example
function a(){
	var x; //undefined
	console.log("end a , x = " + x);
}
function b(){
	var x = "bb";
	a();
}

var x = "global";
b();


////////////////////////////////////////////
//execution context & stack example
var x = 10; //global
function main() { 
	console.log("<br>x1 is " + x); 
	x = 20; 
	console.log("<br>x2 is " + x); 
	if (x > 0) { 
		var x = 30; // x=30; 
		console.log("<br>x3 is " + x); 
	} 
	console.log("<br>x4 is " + x); 
	var x = 40; // x=40; 
	var f = function(x) { 
			console.log("<br>x5 is " + x); 
		 } 
	f(50); 
	 console.log("<br>x6 is " + x); 
} 
main(); 
console.log("<br>x7 is " + x); //10



////////////////////////////////////////////
//execution context & stack example

function calc (multiplier, base, ...numbers) { 
	var val = numbers.reduce((accumulator, num) => accumulator + num,base); 
	return multiplier * val;
} 
var total = calc(2, 6, 1, 2, 3);
console.log(total); //24


function f2={
	let arr = [1,2,3,4,5];
	return total2 = acc.reduce((num1,num2) => num1+num2,0);

}
total2 = f2();
console.log(total2);


////////////////////////////////////////////
//Timers
console.log(1); 
var a = setTimeout(function(){ console.log(2); }, 1000); 
var b = setTimeout(function(){ console.log(3); }, 0); 
console.log(4); 


////////////////////////////////////////////
//Scope
var x = 10; 
function main() { 
	console.log("<br>x1 is " + x); 
	x = 20; 
	console.log("<br>x2 is " + x); 
	if (x > 0) { 
		var x = 30; // x=30; 
		console.log("<br>x3 is " + x); 
	} 
	console.log("<br>x4 is " + x); 
	var x = 40; // x=40; 
	var f = function(x) { 
			console.log("<br>x5 is " + x); 
		 } 
	f(50); 
	 console.log("<br>x6 is " + x); 
} 
main(); 
console.log("<br>x7 is " + x);


////////////////////////////////////////////
//Constant
const MY_NUM = 8;
MY_NUM = 20;
console.log(MY_NUM);


////////////////////////////////////////////
//Arrays
var names = [1,2,3,'Adnan','Gideon'];
names.forEach(function(arg){console.log(arg)});

for(var i=0; i< names.length;i++){
	console.log(names[i]);
}

////////////////////////////////////////////
//How to add argument to a function

function eat(){
	console.log("Ymmy");
}
eat();
eat.meal = "Dinner";
console.log(eat.meal);
eat.happ="yes";
console.log(eat.happ);
eat();


////////////////////////////////////////////
//Function Statement
function sayHi(){
	console.log("Hi");
}

sayHi(); // if no declaration function -> ReferenceError sayHi is not defined because function is reagarded as a object/variable input

////////////////////////////////////////////
//Function Expression
var hello = function sayHello(){
	console.log("Hello");
}

console.log(hello); //function sayHello(){console.log("Hello")} // like a string variable
sayHello(); // Error ReferenceError : sayHello is not defined


////////////////////////////////////////////
//Flexibility of Function -> Anonymous Function
function myFunc(x){
	x();
}

function mySubFunc(){
	console.log("Function is treated as first-class citizen , variable");
}

myFunc(mySubFunc);

////////////////////////////////////////////
//Arrow Function
//tranditional
function sum1(arg1, arg2){
	return arg1 + arg2 ;
}
var outputAF1 = sum1(2,5);
console.log(outputAF1);

//arrow function transform
var arrowFunc = (num1, num2) => num1 + num2;
var outputAF2 = arrowFunc(2,5);
console.log(outputAF2);

////////////////////////////////////////////
//Arrow Function
//multiple inputs
var multipleArgumentAF = (n1, n2) => {if (n1>n2) return true; else return false;}
var outputMAAF = multipleArgumentAF(3,8);
console.log(outputMAAF);
var outputMAAF2 = multipleArgumentAF(20,8);
console.log(outputMAAF2);

////////////////////////////////////////////
//"arguments" object
function findMax(){
	var max = -Infinity;
	for(var i = 0; i<arguments.length; i++){
		if (max < arguments[i]){
			max = arguments[i];
		}
	}//end_for
	return max;
}

var max1 = findMax(1,3,0,56,89,100);
console.log(max1);

////////////////////////////////////////////
//No Overloading Function
function log(){ 
	console.log("No Arguments"); 
} 

function log(x){ 
	console.log("1 Argument: " + x); 
} 

function log(x, y){ 
	console.log("2 Arguments: " + x + ", " + y); 
} 

log(); // 2 Arguments: undefined, undefined 
log(5); // 2 Arguments: 5, undefined 
log(5, 10); // 2 Arguments: 5, 10


////////////////////////////////////////////
//Default value argument for function
function log(x=5,y=10){
	console.log(x+y);
}
log();
log(4); //14
log(100,200); //20
*/



/*
////////////////////////////////////////////
//IIFE
(function {

}
) ();


(function {

}()
);
*/




////////////////////////////////////////////////////////////////
//1.Define a function max() that takes two numbers as arguments

// Method: function statement
function findMax(n1,n2){
	if(n1>n2)
		return n1;
	else
		return n2;
}
console.log(findMax(5,20));  //20

/*
// Method: arrow function
var findMax = (num1,num2) => num1>num2?num1:num2;
var f1 = findMax(6,90);
console.log(f1);
*/

////////////////////////////////////////////////////////////////
//2.Define a function maxOfThree() 
function maxOfThree(num1, num2, num3){
	var outputmax1 = findMax(num1, num2);
	var max2 = findMax(outputmax1,num3);
	return max2;
}
console.log(maxOfThree(25,4,70)); //70

////////////////////////////////////////////////////////////////
//3.Write a function isVowel() return true/false
function isVowel(letter){
	switch(letter){
		case "a": 
		case "e":
		case "i":
		case "o":
		case "u":return true;break;
		default: return false;
	}
}
console.log(isVowel("o")); //true
console.log(isVowel("k")); //false

////////////////////////////////////////////////////////////////
//4. Define function sum() , multiply() for an array
function sum(arr){
	if(!Array.isArray(arr)) return 0;
	var outsum = 0;
	for(let i = 0; i<arr.length; i++){
		outsum = outsum + arr[i];
	}
	return outsum;
}
console.log(sum('a',9)); //0
console.log(sum([5,7])); //12
console.log(sum([2,3,6,7])); //18

function multiply(arr){
	if(!Array.isArray(arr)) return 0;
	var mul = 1;
	for(let j=0; j<arr.length; j++){
		mul = mul * arr[j];
	}
	return mul;
}
console.log(multiply(3,2)); // 0
console.log(multiply([3,5,2])); //30

////////////////////////////////////////////////////////////////
//5. Define a function reverse() for string
function reverse(str){
	if(str.length==0) return "";
	let output = "";
	for(let i=str.length-1; i>=0; i--){
		var lastCh = str.charAt(i);
		console.log(lastCh);
		output = output + lastCh;
	}
	return output;
}
console.log(reverse("jag testar")); //ratset gaj


////////////////////////////////////////////////////////////////
//6. Write a function findLongestWord() 
function findLongestWord(arr){
	let lWord = arr[0];
	for(let i = 1; i<arr.length; i++){
		if(arr[i].length > lWord.length){
			lWord = arr[i];
		}
	}
	return lWord;
}
console.log(findLongestWord(["hello","happyniess","and","simple","life"])); //happyniess

////////////////////////////////////////////////////////////////
//7.Write a function filterLongWords() 
function filterLongWords(arr,i){
	let newArr = [];
	let newpos = 0;
	for(let pos = 0; pos < arr.length ; pos++){
		if(arr[pos].length >= i){
			newArr[pos] = arr[pos];
			newpos++;
		}
	}//end_for
	return newArr;
} 
console.log(filterLongWords(["hello","happyniess","and","simple","life"],5)); //"hello","happyniess","simple"

////////////////////////////////////////////////////////////////
//8. Transform 4 (imperative -> functional programming using Array.reduce()
let arr1 = [2,3,6,7];
let sum1 = arr1.reduce((a,b) => a+b, 0);
console.log(sum1); //18


let arr2 = [3,5,2];
let mul2 = arr2.reduce((a,b) => a*b, 1);
console.log(mul2);//30

////////////////////////////////////////////////////////////////
//9. function named, findSecondBiggest()
function findSecondBiggest(arr){
	const max = Math.max(...arr); //5
	let secondMax = arr[0];
	for(let i=1; i<arr.length; i++){
		if(secondMax<arr[i] && arr[i] != max){
			secondMax = arr[i];
		}
	}//end_for
	return secondMax;
}
console.log(findSecondBiggest([1,2,3,4,5])); //4

////////////////////////////////////////////////////////////////
//10. function named printFibo(n,a,b)
function printFibo(n,a=0,b=1){
	let arr = []
	if(n==1){
		arr[0] = a;
	}else if(n==2){
		arr[0] = a;
		arr[1] = b;
	}else{
		let num1 = a;
		let num2 = b;
		let next = a + b;
		arr[0] = num1;
		arr[1] = num2;
		arr[2] = next;
		for(let i=3; i<n; i++){
			num1 = arr[i-1];
			num2 = arr[i-2];
			next = num1 + num2;
			arr[i] = next;
		}//end_for
	}//end_if
	console.log(arr);
}
printFibo(n=1,a=0,b=1);//0
printFibo(n=3, a=0, b=1);//0,1,1
printFibo(n=6, a=0, b=1);//0, 1, 1, 2, 3, 5
printFibo(n=10, a=0, b=1);//0, 1, 1, 2, 3, 5, 8, 13, 21, 34

////////////////////////////////////////////////////////////////
//9. function named printFibo(n,a,b)


