// These are variables
var string
string = "This is a string"
// A string is any letter, number, or phrase written in quotations.

// Concatenation allows you to add
// two strings together.
text1 = "Hello"
text1 += "I'm Sam"
// would console.log "Hello I'm Sam"

var array
array = [0, 1, 2, 3, 4]
// An array is a list of words or integers written in square brackets.
// These items are indexed starting with 0 so that the computer can easily
// refer back to them later.

var integer
integer = 4
// An integer is a number. A number can also be a string if it is written
// in quotations.

// Booleans are true/false statements.
var boolean
boolean = 10>5;
	console.log("true")

// This is an alert. When the page is loaded, a window will pop up
// with the message "FEED ME!"
alert("FEED ME!")

// This is a comment

/* This is
a
multi-line
comment*/

// Using console.log allows you to print what the console is processing.
// if the posed condition is true, the console will output
// the following statement
if ("samBerman".length > 7 ) {
    console.log("You have a long name!");
}
// when you enter the above code, the console will
// print the statement "You have a long name!"

// else statements

if ("the first road is clear") 
{
    console.log("Let's go down the first road!");
} else 
{
    console.log("Let's go down the second road!");   
}
// If the first condition is true, the console will
// print "Let's go down the first road!"
// otherwise, it will print "Let's go down the second road!"

// if else statements: if the first condition is not
// true the console can output an alternative message
"Sam".length

if ("myName".length > 7) {
    console.log("You have a short name!")
}
else {
    console.log("The condition is false")
}

/*Global scope is a variable (outside of a function),
that can be accessed in almost any part of your code*/
var z = 3
console.log(z)
3

/*Local scope is a variable that only exists
within the function you are currently in*/
var z = 3
undefined
function scope(){
  var z = 20;
  console.log(z);
}

scope()
20

console.log(z)
3

// The equal sign
// A single '=' is used for assignment
var x = 3
// The triple '=' is used for comparisons
if (10 === 10) {
    console.log("You got a true!");
} else {
    console.log("You got a false!");
}

// A function is a block of code designed to perform a task
function myFunction(2, 3)
	console.log(2 + 3)
// The console will print the sum of 2 and 3

//Problems

if (n<10) {
	alert("This variable is less than 10.")
} else {
	alert("n>10")
};

n = 5
x = 7
function sum(n,x);
sum()
console.log(n + x)

string1 = "Hi"
string2 = "I'm Sam"
function strings(string1,string2)
strings()
console.log(string1 + string2)