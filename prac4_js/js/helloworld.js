console.log("hello world !")

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



function b(){
	console.log("function is called")
}
console.log(a)
var a=5;

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