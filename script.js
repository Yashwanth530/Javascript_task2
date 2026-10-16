// Part 1: Variables and Data Types 
// Declare variables using var, let, and const. Reassign and redeclare them wherever allowed, then print the results.

var fruit = "apple";
let userName = "yashwanth";
const animal = "tiger";

fruit = "orange";
var fruit = "grape";

userName = "kishan";

console.log(fruit,name,animal);

// Create variables for your name, age, and programming knowledge. Print each variable and its data type using typeof
 
var name = "yashwanth";
var age = 23;
var programmingknowledge = "java script";

console.log(name);
console.log(age);
console.log(programmingknowledge);
console.log(typeof(name));
console.log(typeof(age));
console.log(typeof(programmingknowledge));

// Create an array of 5 fruits. Print the complete array, the first element, and the last element.
let fruits = ["apple","banana","orange","grape","kiwi"];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[fruits.length-1]);

//Create an object containing your name, role, and CGPA. Print each property separately

let userDetails = {
    name: "yashwanth",
    role: "frontend developer",
    cgpa: 7.5,
};
console.log(userDetails.name);
console.log(userDetails.role);
console.log(userDetails.cgpa);


// Take the user's name and age using prompt(). Display the name using alert() and print the age in the console.

/*
let username = prompt("Enter your name");
let userage = prompt("Enter your age");

alert(username);
console.log(userage);
*/


//  Part 2: Operators // 
// Declare two numbers and perform addition, subtraction, multiplication, division, modulus, and exponentiation. 

let x = 2;
let b = 4;
console.log(x + b)
console.log(x - b)
console.log(x * b)
console.log(x / b)
console.log(x % b)
console.log(x ** b)

console.clear();


// Predict the output:
let a = 5;
console.log(a++); // 5
console.log(a); //6
console.log(++a); // 7

 // 8. Predict the output:
let a1 = 10;
 let b1 = a1--; 
 let c = --a1;
console.log(a1); // 8
console.log(b1); // 10
console.log(c); // 8

// Use the +=, -=, *=, /=, and %= assignment operators on a variable and print the final value after each operation.
let p = 2;
p += 3;
console.log(p);
p -= 4;
console.log(p);
p  *= 5;
console.log(p);
p /= 6;
console.log(p);
p %= 4;
console.log(p);

// Predict the results of these comparisons:

console.log(5 == "5"); // true
console.log(5 === "5"); // false
console.log(10 != "10"); // false
console.log(10 !== "10"); // true

// Use &&, ||, and ! to check different combinations of conditions.

console.log(5 > 4 && 6 >= 6 && 12 <= 3) // false 
console.log(5 > 4 || 6 >= 6 || 12 <= 3) // true
console.log(5 > 4 && 6 >= 6 || !12 <= 3) // true

// Use the ternary operator to check whether a user's age is 18 or above and print an appropriate message.
let userage = 12; 
userage >= 18 ? console.log("your age is elgible") : console.log("your age is not elgible");

console.clear();

// Part 3: Type Casting and Conditions

// 13. Predict the data type of each expression:
console.log(typeof ("hello" + 10)); // string
console.log(typeof (10 + true)); // number
console.log(typeof (10 + null)); // number 
console.log(typeof ("hello" + undefined)); // string

// Use Number() to convert a value received through prompt() into a number. Add 10 and print the result.

let userInput = prompt("Enter a number:");
let number = Number(userInput);
console.log(number + 10);

// Use Boolean() to check the Boolean values of an empty string, a non-empty string, 0, and true.
console.log(Boolean(""));
console.log(Boolean("abc"));
console.log(Boolean("0"));
console.log(Boolean("true"));

// Write an if-else statement to check whether a number is positive or not.
let num = 10
if(num > 0){
    console.log("number is positive")
}
else {
    console.log("number is not positive")

}

console.clear();

// Use else-if to display a message based on the time entered by the user: early morning, morning, afternoon, evening, or night.


let time = 9

if(time >= 5 && time <= 7){
    console.log("early morning")
}
else if(time >= 8 && time <= 11)
{
    console.log("good morning")
}
else if(time >= 12 && time <= 15)
{
    console.log("good afternoon")
}
else if(time >= 16 && time <= 18)
{
    console.log("good evening")
}
else if(time >= 19-23 && time <= 0-4)
{ 
    console.log("good night")
}
else{
    console.log("time invalid")
}

console.clear()


// Create a nested if statement to check eligibility based on age, height, and weight, following the conditions in your code.
let personage = 23;
let height = 175;
let weight = 80;

if(personage >= 18){
if(height >= 160){
if(weight >= 57){
    console.log("your are elgible");
    }
    else{
        console.log("your  age is not elgible");
    }
 } else{
                console.log("your height is not elgible");
            }
        }else{
                    console.log("your weight is not elgible");
                };
// Part 4: Switch and Loops 

// Use switch to display a message based on a traffic light color: red, yellow, or green. Display an error for an invalid color.

let trafficlight  = "red"

switch(trafficlight){
    case "red" : console.log("stop the veighcle");break
    case "yellow" : console.log("start the veighcle");break
    case "green" : console.log("go the veighcle");break
    default : console.log("traffic is  error");break
};

// Use a for loop to print numbers from 1 to 20.

for(let a = 1 ; a <=20  ; a++)
    console.log(a)


// Use a for loop to print all even numbers from 2 to 20.

for( let b = 2 ; b <= 20 ; b += 2)
    console.log(b)
// Use a while loop to print numbers from 10 down to 1.

let y = 10
while(y >= 1){
    console.log(y)
y--
}

// Write a JavaScript program using a do-while loop to print numbers from 1 to 10.

let z = 1
do{
    console.log(z)
    z++
}
while(z <= 10)

    console.clear();

// Write a JavaScript program using a for-of loop to print each character in the string "JavaScript".

let str = "javaScript"
for(let d of str){
    console.log(d)
}

// Create an array containing 5 student names and use a for-of loop to print every student’s name.
/*
let arr = ["yash","sai","kishan","raju","nani"]
for(let a of arr)
{
    console.log(a)
}
*/
// Use a for-in loop to print all the keys and values of this object:

let obj = {
    name : "priya",
    role : "Frontend Developer",
    cgpa : 9

}
for(let c in obj)
    console.log(c, obj[c])

// Part 5: Mixed Practice

// Take two numbers using prompt() and display their sum, difference, product, and remainder.

let m = Number(prompt("enter your first number"));
let n = Number(prompt("enter your second number"));
alert("Sum: " + (m + n));
alert("Difference: " + (m - n));
alert("Product :" + (m * n));
alert("Remainder: "  + (m % n));

console.clear();

// Create an array containing 5 numbers and use a loop to print only the numbers greater than 10.
let arr = [2, 14, 6, 18, 10];
for (let num of arr) {
    if (num > 10) {
        console.log(num);
    }
}

// Take a user's age using prompt(). Use a conditional statement to check eligibility, then display the result using alert().
    

    let uage = prompt("enter your  age")
    if( uage  >= 18){
        alert("your age is elgible")
    }
    else{
        alert("your age is not elgible")
    }





// Create a simple menu using switch with these options: addition, subtraction, multiplication, and division. Take two numbers from the user and display the selected operation's result

let num1 = Number(prompt("enter your first  number"));
let num2 = Number(prompt("enter your second  number"));

let choice = Number(prompt(
    "choose an operation:\n1. addition\n2.  Subtraction\n3. Multiplication\n4. Division"
));

switch(choice) {
    case 1: alert("addition : " +(num1 + num2));
    break;
    case 2: alert("Subtraction : " +(num1 - num2));
    break;
    case 3: alert("Multiplication : " +(num1 * num2));
    break;
    case 4:
if(num2 !== 0){
 alert(" Division : " +(num1 / num2));
}
    else{
        alert("cannot divide by zero")
    }
    break;

    default:
        alert("Invalid choice. Please select 1,2,3, or 4.");
};

/*
let num1 = Number(prompt("Enter the first number"));
let num2 = Number(prompt("Enter the second number"));

let choice = Number(prompt(
    "Choose an operation:\n1. Addition\n2. Subtraction\n3. Multiplication\n4. Division"
));

switch (choice) {
    case 1:
        alert("Addition: " + (num1 + num2));
        break;

    case 2:
        alert("Subtraction: " + (num1 - num2));
        break;

    case 3:
        alert("Multiplication: " + (num1 * num2));
        break;

    case 4:
        if (num2 !== 0) {
            alert("Division: " + (num1 / num2));
        } else {
            alert("Cannot divide by zero");
        }
        break;

    default:
        alert("Invalid choice. Please select 1, 2, 3, or 4.");
}
*/















