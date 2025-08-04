// ============================================variable section starts from here========================
// variable is like a container which contains any type of value in js.



// variables naming conventions;



// valid variable name
// var my_Name="john";
// console.log(my_Name);


// valid variable name
// var _myName="Doe";
// console.log(_myName);


// invalid variable name
// var 123Age=12;
// console(123Age);


// valid variable name
// var $cityName="NewYork";
// console.log($cityName);


// invalid variable name 
// var my@Email="asdf@gmail";
// console.log(my@Email);


// ==============================variable section ends here====================================================


// ============================data type section starts from here=========================================
// data type is simply identifies the type of variable in js
// data types in js


// Number 
// var num=5;
// console.log(num);


// String 
// var name="vikash";
// var name1='vikash';
// console.log(name);
// console.log(name1);




// Boolean =>stores only true and false value
// var isRanning=false;
// console.log(isRanning);


// undefind=>make a varible but not defind it or intialized her value
// var a;
// console.log(a);


// null=> null means nothing in the laguage of programming
// var s=null;
// console.log(s);


// bigint
// const bigNumber=12345678654345676543456n;
// console.log(bigNumber);

// symbol
// const mySymbol=Symbol("description");
// console.log(mySymbol);


// typeof operater =>this keyword is use to find the type of any variable in javascript 

// var a=5;
// console.log(typeof a);

// type check of null==> typeof of null is an object

// var a=null;
// console.log(typeof a);


// convert a string to a number

// var a="10";
// console.log(typeof a);
// console.log(typeof +a);    // this + operater is change a typeof string to a number;
// console.log(Number(a));    // this Number constructor also convert it into the number;


// convert a number to string
// let str=5;
// console.log(typeof String(str));
// console.log(typeof (str+""));




// concept of truthy and falshy values;

// truthy values =>truthy values are the values which are consider as true in the condition checking, which are always true in any condition.
// true
// any non empty string
// non zero values 
// Array and object in case of non empty

// falshy values =>falshy values are the values which are consider as false in the condition checking, which are always false  in any condition.
// false
// 0(zero)
// '' (empty string)
// null
// undefind
// NaN
 
// example of truthy values 
// var myName="vikash";
// if(myName){
//     console.log("its a truthy value")
// }else{
//     console.log("its a falshy value")
// }



// example of falshy values
// var myName="";
// if(myName){
//     console.log("its a truthy value");
// }else{
//     console.log("its a falshy value");
// }
//================================ data type section ends here====================================================







// ======================================ParseInt and ParseFloat Section============================================

// parseINt => parseInt is used to parse a string and convert it into an integer (Whole Number);
// const myString="43";
// console.log(typeof myString);
// const myNumber=parseInt(myString);
// console.log(myNumber);
// console.log(typeof myNumber);

// parseFloat=> paseFloat is used to parse a string and convert it into a floating point number(decimal number);
// const myString="43.5";
// const myNumber=parseFloat(myString);
// console.log(myNumber);

// Both the functions will attempt the convertion as much of string as possible until an invalid character encontered;

// some exaples
// console.log(parseInt("123"))    //123



// console.log(parseInt("123",10));    //123


// console.log(parseInt("   123   "));     //123


// console.log(parseInt("077"));   //ignore the 0  //77


// console.log(parseInt("1.9"));    //ignore the floating value because this is a int method.  //1

// console.log(parseInt("$123"));  //NaN=>  not a number

// console.log(parseInt("-123"));     //-123


// console.log(parseInt("xyz"));    //NaN


// purpuse of NaN in js 
// NaN stands for "Not a Number" and is return when a mathametical operation dosnt yield a valid number.

// also a function provide by js that check that a value is a number or not    //notNaN();
// console.log(isNaN("5"));        //this gives an false because 5 is number
// console.log("a");               // this gives true because this is not a number






// ============================parseInt & parseFloat section ends here=======================











// ==================================Data types part 2=============================================

// concatination in js
// In js, the + sign is not only use for arthmatic operation(addition) but also use to contatinate two strings in js, when + operator is used with 
// strings it contatinate the two strings together


// its a important note that if any operand of the + operater is a string in js will treat the other operands as string as well, resulting in string concatination if both operands are number the + operater perform numeric addition.

// const str="hello "+"world";
// console.log(str);  // this gives hello world




// type coercion is the automatic conversion of "values" from one data type to another.
// it is fundamantal part of javasript and can be used to make more readable and efficient.
// there are two types of ciercion in javascript. implicit coercion and explicit coercion , implicit coercion is happans automatically and explicit coersion is done by programmer.

// its worth nothing that type coersion can lead to unexpected results so its essntaile to be aware of how javascript handles these situations.
// console.log("5"-5);            // this gives 0(zero) implicit coersion
// console.log("5" +10);           // this gives 510 because it contatinate the string and number 


// tricky interview questions

// console.log(10 +"20")     //1020
// console.log("9"-5);     //4
// console.log("java" + "script")         // gives javascript
// console.log(" "+ " ")    gives empty spaces
// console.log(" "+0)       //0
// console.log("vinod"-"thapa")    //NaN
// console.log(true+true)    //2
// console.log(true+false);  //1
// console.log(false + true)     //1
// console.log(false-true);       //-1
// ===================================data types part 2 ends here===================================================



// =============================Expressions and operaters starts from here==========================================











//-============================================= operators js===========================================================
// 1) Assingment operator=> Assigment operator in programming are symbols used to assign values to variable. they take the value on the right side of the operator and assign it to a varible on the left side.

// var myFavNumber=15; // assigns the value 15 to myFavNumber

// 2) Arthmatic operators=> Arthmatic operators performs the basic operations like addition, substraction,multiplication and division on variable and values.

// addition using the + operator
// var a=10;
// var b=20;
// var sum=a+b;
// console.log(sum);

// substraction using - sign=> use to substact right operand to the left operand 
// var a=20;
// var b=10;
// console.log(a-b);

// multiplication using * sign=>use to multiply the two values or variables
// var p=5;
// var q=10;
// console.log(q*p);

// division using /
// var v=10;
// var s=5;
// console.log(v/s);

// modulus operator %=> use to find the remaindar 
// var a=10;
// var b=3;
// console.log(a%b);


// interview question
// var a="hello"/2;         //gives NaN
// console.log(a);


// var a=0.1+0.2
// console.log(a.toFixed(3))   // use to toFixed() method to find the or give the output after the decimal points number

// var a=55*"hello";   //NaN

// var c="3"+5;     //35
// console.log(c);


// 3) comperision operaters=> comperision operaters in javascript is to compare values and return a boolean result (true and false).

//1)  (==) => checks if two values are equal peforming type coersion if neccessary.

//2)  (===)(strict equal)=> checks if two values are equal without performing coersion.
// console.log(5==5);   //true 

// console.log(5===5) // gives true and strictly by data type and then value==value or not

// 3) not equal(!=)
// console.log(5!=5);    //false

// 4) greater than(>)
// console.log(5>3); // true

// 5) less than
// console.log(5<3);    //false

// 6) greater than equal to(>=)
// console.log(10>=10)  //true
// 7) less than equal to 
// console.log(10<=5); //false

// difference between == &===
// var num1='1';
// var num2=1;
// if(num1==num2){     // in case to == it gives true and in case of === it gives false because === check the data type also 
//     console.log("equal")
// }
// else{
//     console.log("not equal");
// }


// 4) logical operators
// there are three main logical operaters (&&): logical AND, (||) logical OR , (!) logical NOT


// logical And(&&)=> return the true if both the operants return true
// var a=5;
// var b=4;
// console.log(a>0 && b>0)


// logical AND (||) logical or gives true if one condition is true
// var a=4;
// var b=3;
// console.log(a>0 || b<0);     // true 

// logical ! 
// it reverse the value of if true then it give false and if false then return true
// console.log(!(5==5));       // it give false 





// 5) ternary operator
// syntax => condition? Expression true: Expression false;

// write a program to check if candidate is ElagibleForDrive or not. Age is greater than or equal to 18
// let age=18;
// var result=age>=18?"yes":"no";
// console.log(result);

// var score=58;
// var result=score>60?"pass":"fail";


// combined interview questions
// console.log("5"-3);    //2

// console.log(2<12<5);

// console.log("12"+10+20);     //121020

// ========================================operaters end here===============================================








//============================================= Control statements and loops=============================================
// if else
// switch statemet
// while loop
// do while loop 
// for loop
// for in for of (used in arrays)

// if else 
    // syntax 
// if(condition) {

// code is execute if the condition is true
// }

// else{
    // code is execute if the condition is false
// }


// var temperature=30;
// if(temperature>=30){
//     console.log("lets go to beach");
// }else if(temperature>20 && temperature<=30){
//     console.log("lets watch the tv");

// }
// else{
//     console.log("coled");
// }


// let userAge=22;
// let isCitizen=true;
// let isRegister=false;

// if(userAge>=18){
// if(isCitizen){
//     if(isRegister){
//         console.log("you are eligible for vote")
//     } else{
//         console.log("you are not eligible for vote")
//     }

// }else{
//  console.log("you are not eligible due to citizenship status")
// }


// }else{
//     console.log("not eligible for vote")
// }



// write a program to check if it is even or odd
// var num=6;
// if(num%2==0){
//     console.log("number is even")
// }else{
//     console.log("number is odd");
// }


// write a program to check if it is positive nagative or zero
// var num=12;
// if(num===0){
//     console.log("num is zero")
// }
// else if(num>0){
//     console.log("num is positive")
// }
// else{
//     console.log("negative");
// }



// =============================switch statement============================================================
// Switch Statement: The switch statement is used to perform different actions based on different conditions.

// var day="monday";
// switch(day){
//     case "monday":
//     console.log("today is monday");
//     break;
//     case "tueday":
//         console.log("today is tuesday");
//         break;
//         default:"no condition matches";
// }

// Q=> //! Write a JavaScript switch statement that takes a variable areaOfShapes representing different shapes, and based on its value, calculates and logs the area of the corresponding shape. Consider three shapes: 'Rectangle,' 'Circle,' and 'Square.' For 'Rectangle,' use variables a and b as the sides; for 'Circle,' use a variable r as the radius; and for 'Square,' use variable a as the side length. If the provided shape is not recognized, log a message saying, 'Sorry the shape is not available.' Test your switch statement with areaOfShapes set to 'Square' and sides a and b set to 5 and 10, respectively. Ensure that the correct area (25 in this case) is logged to the console.

//  let areaOfShapes="circle";
//  var result;
// switch(areaOfShapes){
//     case "square":
//         var a=5; 
//         var b=10;
//         result=a*a;
//         console.log(result);
    
    
//     break;
//     case "rectangle":
//         result=a*b;
//         console.log(result);
//         break;
        

//         case "circle":
//             var r=2;
//             result=3.14*(r*r);
//             console.log(result);
// }




// why is there a break statement after each case in switch case?
//  the breake statement is used to exit the switch statement after the corrosponding case is executed,reprevinting fall through the subsequent cases.


// ============================================control statement ends here==============================================





// =====================================loops start from here=========================================================

// ==============================================while loop===========================================================
// a while loop in javascript is control stucture  that repeadly executes a block of code as long as specified condition is remains true. the loop is continues iterating while the condition is true and it terminates when the condition become false.

// syntax
// while (condition) {
//     // code executes as long as condition is true.
// }
// example of  while loop 

// var i=1;
// while(i<=10){
//     console.log(i);
//     i++;
// }


// print the table of 5
// var num=1;
// while(num<=10){
//     console.log('5 * '+num+ ' = ' +5*num);
//     num++;
// }

// ====================================================do while loop==================================================


// Do...While Loop: A do...while loop in JavaScript is similar to a while loop, but it guarantees that the loop body will be executed at least once before checking the loop condition. The loop continues to execute while the specified condition is true, and it terminates when the condition becomes false.
// do{
// // code to be executed at atlest once
// }while(conditon);

// example of do while loop

// var i=1;
// do{
//     console.log(i);
//     i++;
// }while(i<=10)


// valid a user input do while loop(user need to write a valid number);
// var userInput;
// var positiveNumber;

// do{
//     userInput=prompt("enter any Number");
//     positiveNumber=parseFloat(userInput);

// }while(isNaN(positiveNumber)|| positiveNumber<0);
// console.log("you need to enter a valid number",positiveNumber);


// ===================================================for loop==========================================================

// For Loop: A for loop in JavaScript is a control flow statement that allows you to repeatedly execute a block of code a specified number of times. It's particularly useful when you know the exact number of iterations needed.




// for(intialization; condition; increment){
//     code to be executed
// }

// example of for loop
// for(var i=0; i<=10; i++){
//     console.log(i);
// }

//  The code for (;;) {} represents an infinite loop in JavaScript. This constructor is commonly used when you want a loop to run infinitly or until a break statement is encountered within the loop. It's equivalent to while (true) {}.


// calcute the sum from  1 to 10 using for loop

// var sum=0;
// for(var i=0; i<=10; i++){
//     sum=sum+i;
    
// }
// console.log(sum);


//  check the number is prime or not 
// var num=13;
// var isPrime=true;
// for(var i=2; i<num; i++){
//     if(num%i===0){
//         isPrime=false;
//         break;
//     }
// }
// if(isPrime){
//     console.log("prime number")
// }
// else{
//     console.log("not prime");
// }


// 1: program To check if a year is a leap year🧑‍💻

// var year=2002;
// if((year%4==0&& !year%100==0)|| year%400==0){
//     console.log(year,"it's a leap year");
// }else{
//     console.log("it's not a leap year")
// }



// draw a pattern
// for(var i=1; i<=5; i++){
//     var pattern=""
//     for(var j=0; j<=i; j++){
//         pattern=pattern+ '* ';
//     }
//     console.log(pattern);
// }

// =============================== control statement and loops=======================================================






// ==============================================functions in js========================================================

// IN javascript a function is block of reusable code that perform a specific task or tasks.Functions are used to organize code into a modular and managable piece,promote code reuse, and make program more readable.


// -------------------------1) function declaration--------------------------------
//* ===============================
//* Function Declaration:
//* ==============================
// Declare a function using the function keyword, followed by the function name, parameters (if any), and the function body.
//? This step defines the function and specifies what code should be executed when the function is called.


// syntax 
// function functionName(parameters){
// code to be execute
// return result 
// }





// function sum(a,b){
//     return a+b;
// }



//----------------------2) function calling or function invocation-------------------------------------.
//* =================================================
//* Function Invocation (Calling a Function):
//* =================================================

// After declaring a function, you can invoke or call it by using its name followed by parentheses.
//? If the function has parameters, provide values (arguments) for those parameters inside the parentheses.
// console.log(sum(10,20));


//todo Tips "1st declare the function & then call it" In JavaScript, it's a good practice to declare (define) your functions before you call them. This ensures that the function is available for use when you try to call it




// -------------------------- 3) function parameter---------------------------
//* =================================================
//* Function parameter
//* =================================================
// A function parameter is a variable that is listed as a part of a function declaration. It acts as a placeholder for a value that will be provided when the function is called. Parameters allow you to pass information into a function, making it more versatile and reusable.

// Syntax: function functionName(parameter1, parameter2, ...params) {
//   // Function body
//   // Code to be executed when the function is called
// }



//--------------4) function arguments-----------------------. 
//* =================================================
//* Function arguments
//* =================================================
//  A function argument is a value that you provide when you call a function. Arguments are passed into a function to fill the parameters defined in the function declaration.

//? syntax:
//? functionName(argument1, argument2, ...);


// /! Practice Time
//? Let's say we want to greet students with one same line
//! Write a JavaScript program that defines a function called greet to welcome individuals to the Thapa Technical JS Course. The function should take a name parameter and output the message "Hello [name], Welcome to Thapa Technical JS Course". Call the function twice, once with the argument "vinod" and once with the argument "ram


// function greet(name){
//     console.log("hello "+name+" Welcome to Thapa Technical js Course");

// }
// greet("vinod");
// greet("Ram");



// ----------------------- 5) function expression------------------------
//  ==============================
//* Function expressions
//* ==============================
//? A function expression is a way to define a function as part of an expression. It can be either named or anonymous. If it's named, it becomes a named function expression.

// var result= function sum(a,b){
//     console.log(a+b);
// }
// result(10,29);

// ----------------------6) Anonymous Functions-----------------------
//* ==============================
//*  Anonymous Function
//* =============================
//? An anonymous function is a function without a name. It can be created using either a function expression or a function declaration without a specified name.

// var result=function(a,b){
//     console.log(a+b);
// }
// result(10,20);

// ------------------------------- 7) Return Keyword-------------------------------------------------------
//* ==============================
//*  Return Keyword
//* =============================
//? Return Keyword: In JavaScript, the return statement is used within a function to specify the value that the function should produce or provide back to the code that called it. The return statement stops the execution of a function and sends a value back to the caller


// function sum(a,b){
//     return a+b;
// }
//  var result=sum(10,20);
//  console.log(result);


 //* ==============================
//* IIFE - immediately invoked function expression
//* =============================
//? An IIFE, or Immediately Invoked Function Expression, is a JavaScript function that is defined and executed immediately after its creation. It is a way to create a self-contained block of code that doesn't interfere with the surrounding code and executes immediately

// Syntax
// (function () {
//   // code to be executed
// })();


// (function (a,b){
//     console.log( a+b);
// })(5,6);


