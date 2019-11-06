
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
//11. Login Form : show value on console
function displayLoginConcole(){
	let email = document.getElementById('email').value;
	let password = document.getElementById('password').value;
	let url = document.getElementById('url').value;

	console.log("Email: " + email);
	console.log("Password: " + password);
	console.log("URL: " + url);
}


function displayNewProductPopup1(){
	let product = document.getElementById("product").value;
	let name = document.getElementById("name").value;
	let unit = document.getElementById("unit").value;
	let quantity = document.getElementById("quantity").value;
	let supplier = document.getElementById("supplier").value;
	let date = document.getElementById("date").value; 

	console.log(product);
	console.log(name);
	console.log(unit);
	console.log(quantity)
	console.log(supplier);
	console.log(date);

	let output = "Product Number:" + product + " \n " + "Product Name:" + name + " \n " + "Unit Price:" + unit + " \n " + "Quantity:" + quantity + " \n " + "Date:" + date;
	window.alert(output);
	console.log(output);

}


////////////////////////////////////////////////////////////////
//12. Login Form : show value on console
var myVar = setInterval(myTimer,1000);
function myTimer(){
	var d = new Date();
	document.getElementById("clock").innerHTML = d.toLocaleTimeString();
}








