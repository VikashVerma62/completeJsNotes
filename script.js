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


// ================================ECMAScript 2015/ES6 =====================================
// in 1996 javascript is created
// in 1997=> ECMAScript internationals it was then submitted for standandization which resulted in ESCAScript.

// in 2015/ES6 decided to switch to annual releases of ECMAscript.

// /* ==============================
// //* Features of ES6
// //* =============================

// 1) let and const 
// 2) template literals(Strings)
// 3) defalt arguments.
// 4) arrow functions.
// 5) Destructuring.
// 6) Object Properties
// 7) Rest operator.
// 8) spead operator.


// 1) -----------------------let and const------------------------- 



// /* ==============================
// //* let and const
// //* =============================

// let => the let keyword is used to declared as block scope variable declared with let are mutable ,meaning their values can be ressinged.
// var a=10;
// a=20;console.log(a);

// let a=10;
// a=20; console.log(a);



// const keyword=> the const keyword is used to declared variables with the block scope. it cannot be reassingned ,const variable are immutable.
// const a=10;
// a=20;        //reassingment is not possible in const.
// console.log(a);

//  using var keyword
// var 
// if (true) {
//   var name = "vinod";
//   console.log(name);
// }
// name = "technical";
// console.log(name);
  
// let
// if (true) {
//   let name = "vinod";
// //   console.log(name);
// }
// // name = "technical";
// console.log(name);       //not access outside the block

// const
// if(true){
//     const  name="vikash";
//     console.log(name);
// }
// console.log(name);
// // 


// 2)---------------------template literals----------------

// /* ==============================
// //* template literals
// //* =============================

// /? In ECMAScript 6 (ES6), template strings, also known as template literals, provide a convenient and flexible way to create strings in JavaScript. Template strings are enclosed in backticks (``) rather than single or double quotes.



// let firstName="vinod ";
// let lastName="thapa";

// // let fullName=firstName+lastName;
// let fullName=`${firstName} ${lastName};`
// console.log(fullName);

// let age=20;
// let message=`my age is ${age}`
// console.log(message);

// String iterpolation
//? String Interpolation:  Template strings support string interpolation, allowing you to embed expressions directly within the string. Interpolated expressions are enclosed in ${}

// let num=5;
// let ans=`5*${num}=${5*num}`
// console.log(ans);



//  ==============================
// //* advantages of template literals
// //* =============================
//  Readability: Template strings make the code more readable, especially for complex string constructions.

//? Conciseness: They eliminate the need for explicit string concatenation and reduce the use of escape characters.

//? Expression Flexibility: Any JavaScript expression can be embedded within ${}.

//? Multi-line Support: Creating multi-line strings is more straightforward.


// 3) -------------------defalt parameter------------------
//  ==============================
// //* default parameter
// //* =============================

//? In ECMAScript 6 (ES6), default parameters were introduced, providing a more concise way to handle function parameter defaults. Default parameters allow you to specify default values for function parameters in the function declaration itself. If a parameter is not provided when the function is called, the default value is used.
// function sum(a=10,b=10){
//     return a+b;

// }
// let ans=sum(20,20);
// console.log(ans);



// function sum(a,b){
//     return a+b;
// }
// let ans=sum(10);
// console.log(ans);   //if we give two parameter and pass only one argument than it gives NaN.

// 4)------------------------------------- fat arrow functions----------------------------------------------------------
//  ==============================
// //* Fat Arrow Funtions
// //* =============================



// /? In ECMAScript 6 (ES6), arrow functions, also known as fat arrow functions, were introduced as a concise way to write anonymous functions.


// this is your traditional function
// let add=function(a,b){
//     return a+b;
// }
// let ans=add(10,29);
// console.log(ans)



// syntax of fat arrow function

// let add=(parameter1,parameter2...)=>{

// }

// todo NOTES
// //?🚀 1: If the function body consists of a single expression, the braces {} and the return keyword can be omitted.
// const sum=(a,b)=>`the sum is ${a+b}`
// console.log(sum(10,20));



// //? 🚀 2: If there is only one parameter, the parentheses () around the parameter list can be omitted.
// const square = (a) => `The square of ${a} is  ${a * a}`;
// console.log(square(5));


// //? 🚀 3: If there are no parameters, use an empty set of parentheses ().
// const greet = () => console.log("Plz LIKE SHARE & SUBSCRIBE!");
// greet();




// //  ==============================
// //* interview questions
// //* =============================


//! Question 1: Calculator Function
//! Write a JavaScript function calculator that takes two numbers and an operator as parameters and returns the result of the operation. The function should support addition, subtraction, multiplication, and division.

// function calculator(num1,num2,operater){
//     let result;
// switch(operater){
//     case "+":
//       result=  num1+num2 ;
//         return result;

//     case "-":
//     result=    num1-num2;
//         return result;

//         case "*":
//            result= a*b;
//            return result;
//             case "/":
//             result=  a/b;
//                 return result;

// }
// }
// console.log(calculator(5,6,"+"))
// //! Reverse a String:
// //! Write a function to reverse a given string without using built-in reverse methods.

// let isReverse=(str)=>{
//     let reverse='';
//     for(let char=str.length-1; char>=0; char--){
//         reverse=reverse+ str[char];
//     }
//     return reverse;
// }
// console.log(isReverse("vinod thapa"));

// //! Palindrome Check:
// //! Create a function to determine if a given string is a palindrome (reads the same backward as forward).













//=========================================== ARRAYS IN JAVASCRIPT=====================================================

// //  ==============================
// //*  ARRAYS IN JS
// //* =============================




// JAVASCRIPT array is an object that represents a collection of similiar type of elements.
// each value(name) will be called as an element of an array.

// in array each Element is represented by index  which starts with zero. and we can access each elements by using indexes.

// first element or head element=> refers to the element at index 0;
// last element or tail => refers to the last element which can obtained using array.lenght-1;


// const persons=["ram","hari","sita","bishal","gita"];

// persons[-1]='hariom';   this gives an error

// persons.at(-1)="hariom"; // this method starts from last index of an array.


// ECMScript 2022 also introduces new.at() method in array which helps of index last element too easily.


// / //  ==============================
// //*  TOPICS TO BE COVERED
// //* =============================

// 1) Creating array/ accessing elements/modifying elements.
// 2) how to Insert ,Add,Replace and Delete elements in array(CRUD);
// 3) Fileter in an array.
// 4) very important array methods.
// 5) Array traversal/iterating over arrays.
// 6) searching in Array.
// 7) how to sort and compare an array.


// / //  ==============================
// //*  CREAT ELEMENTS IN ARARAY
// //* =============================

// /? Arrays in JavaScript can be created using the Array constructor or with array literals (square brackets []).

//? Using Array constructor

// let fruits=new  Array('apple','banana','orange');
// console.log(fruits);

//? Using array literal


// let array=["ram","hari","sita","gita"];
// console.log(array);

//? we can also create an empty array
// let array=[]


// / //  ==============================
// //*  ACCESSING ELEMENTS IN ARRAY
// //* =============================

// Accessing elements using zero based indexing.

// let fruits=["apple",'banana','orange'];
// console.log(fruits[0]);


//* ======================================
//*  Modifying Elements:
//* =====================================
//?👉  Modifying Elements: You can modify array elements by assigning new values to specific indices.

// let fruits=["apple",'banana','orange'];
// fruits[2]="mango";
// console.log(fruits)


//* =============================================
//*  Array Traversal / Iterating Over Arrays
//* ============================================

//?👉 Array Traversal / Iterating Over Arrays k              
//? 1: for of loop , also known as iterable
//* for...of Loop: The for...of loop is used to iterate over the values of an iterable object, such as arrays, strings, or other iterable objects.
 

// let fruits=["apple",'banana','orange',"graps","mango"];
// for(let items of fruits){
//     console.log(items);
// }

//? 2: for in loop
//* for...in Loop: The for...in loop is used to iterate over the properties (including indices) of an object.
// for in loop is use to find print the index of array

// let array=["apple","banana","orange","graps","mango"];
// for(let items in array){
//     console.log(items);
// }


// ? 3: forEach Method
//* The arr.forEach() method calls the provided function once for each element of the array. The provided function may perform any kind of operation on the elements of the given array.

// syntax  of forEach loop

//  array.forEach(function callback(currentValue,index,array){
// //your logic here
// }.thisValue);

// array.forEach((currentValue,index,array)=>{

// your logic here 

    // },thisValue)


// array:array on which the foreach method is called.
// callback: A function that will be called once for each element in the array.
// current value:the current element being proccesed in the array.
// index (optional):the index of the current element being proccessed.
// array:(optinal):the array foreach is called upon.
// thisvalue(optinal):a value of use this when executing the callback function



// ? 4: map function
//* map() creates a new array from calling a function for every array element. map() does not change the original array.

// array.map(function callback(currentValue,index,array){
// //your logic here
// }.thisValue);

// tradition function

// array.map(function callback(currentValue,index,array){
// //your logic here
// }.thisValue);



// =============================================
//*  QUESTIONS
//* ============================================
// //! write a program to Multiply each element with 2
// const numbers = [1, 2, 3, 4, 5];
// forEach -  Performs an action on each element

// numbers.forEach((currElem,index,numbers)=>{
//    console.log(`${currElem*2}`)
// perfoms an action on each elements of an array
// })

//  const doubleValue=numbers.map((currElem,index,numbers)=>{
//    return (`${currElem*2}`)
// creates a new arrray with transformed elements
// })
// console.log(doubleValue);




// key deferences
// forEach:it does not return a value. a forEach method is used for eterating over the elements of an array and perfoming a side effect such as modifying the arrray or perfoming a task for each element.

// map: it returning a new array containing the result for appling a function to each element in the original array. the original array remains unchanged.


// chaining
// forEach : it does not return a value so it can not be directly chained with other array methods.

// map: since it return a new array , you can chain other array method after using map.




// use case 
// forEach: use when you want to iterate over the array elements and perform an action on each element , but you don't need a new array.

// map: Used when you want to create a new array based on tranformation of each element in the original array.



//* ==========================================================================
//*  How to Insert, Add, Replace and Delete Elements in Array(CRUD) - p1
//* ==========================================================================


//? 👉 How to Insert, Add, Replace and Delete Elements in Array(CRUD)
// let fruits=["apple","orange","mango","graphs","banana"];
//? 1: push(): Method that adds one or more elements to the end of an array.
// the push method returns the new lenth of the array also.


// fruits.push('Guava')
// console.log(fruits);



//? 2: pop(): Method that removes the last element from an array.
// console.log(fruits.pop());
// console.log(fruits);



//? 3: unshift(): Method that adds one or more elements to the beginning of an array.
// the unshift  method returns the new lenth of the array also.
// console.log(fruits.unshift("guava"));
// console.log(fruits);




//? 4: shift(): Method that removes the first element from an array.
// console.log(fruits.shift());
// console.log(fruits);



//* ==========================================================================
//*  what if, we want to add or remove anywhere in an elements - p2
//* ==========================================================================

//? The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place

//* syntax
//? splice(start, deleteCount, item1, item2, /* …, */ itemN)
//  let fruits = ["apple", "orange", "banana", "mango"];
 
//! what if you want to add the element at the end
//  console.log(fruits.splice());    // gives an empty array.
// fruits.splice(1,1,"graphs")           // here delete 1 element of index 1 and add graphs of that deleted element.
// console.log(fruits);

// /! what if you want to add the element at the end
// fruits.splice(fruits.length,0,"guava");
// console.log(fruits);


// add anywhere in array 
// fruits.splice(1,0,"guava");
// console.log(fruits);



//* =========================================
//*  Searching in an Array
//* =========================================
//? For Search we have - indexOf, lastIndexOf & includes
//  const numbers = [1, 2, 3, 6,4, 5, 6, 7, 8, 9]; 

//  /?1: indexOf Method: The indexOf method returns the first index at which a given element can be found in the array, or -1 if it is not present.
// syntax
// indexOf(searchElement);
// indexOf(searchElement, fromIndex);
// console.log(numbers.indexOf(6));
// ? 2: lastIndexOf Method: The lastIndexOf() method of Array instances returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.
// console.log(numbers.lastIndexOf(6,8));



//? 3: The includes method checks whether an array includes a certain element, returning true or false.
// Syntax
// includes(searchElement)
// includes(searchElement, fromIndex)
// let array=[1,2,3,4,5,6,7,8];
// console.log(array.includes(6));





//* ===========
//*  Questions
//* ============


//todo Challenge time
const months = ["Jan", "march", "April", "June", "July"];
// 1: Add Dec at the end of an array?
months.push("Dec");
// console.log(months);

// 2: What is the return value of splice method?
// console.log(months.splice());     //give an empty array


// 3: Update march to March (update)?
// months.splice(1,1,"March");
// console.log(months);


// 4: Delete June from an array?
// months.splice(3,1);
// console.log(months);






//* =================
//*  Fileter in Array
//* =================


//? Search +  Filter
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//? 1: find Method: The find method is used to find the first element in an array that satisfies a provided testing function. It returns the first matching element or undefined if no element is found.

// const result=[1, 2, 3, 4, 5,4, 6,2, 7, 8, 9];

//  let data=result.find((currElem)=>{
//     return currElem>6;
// })
// console.log(data);



//? 2: findIndex Method: The findIndex() method of TypedArray instances returns the index of the first element in a typed array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.
// const numbers=[1,2,3,4,5,6,7,8,9];
// const result=numbers.map((currElem)=>{
//     return currElem*5;
// })
// console.log(result);
// const result1=result.findIndex((currElem)=>{
//     return currElem>10;
// })
// console.log(result1);



//* 3:  filter Method: The filter method creates a new array with all elements that pass the test implemented by the provided function.
// syntax:
//? filter(callbackFn)
//? filter(callbackFn, thisArg)

// const numbers=[1,2,3,4,5,6,7,8,9];
// const result=numbers.filter((curreElem)=>{

//     return curreElem>4;
// });
// console.log(result);



// UseCase: In E-commerce website when we want to Remove or delete any product from addToCart page.
//! Ex. le'ts say user wants to delete value 6.
// let value = 6;
// const numbers = [1, 2, 3, 4, 6, 5, 6, 7, 8, 9];


// let value=6;
// const number=[1,2,3,4,5,6,7,8,9];
// let updateCart=number.filter((currElem)=>{
//     return currElem!=value;
// })
// console.log(updateCart);



// !Example 2: Filtering Products by Price
// const products = [
//   { name: "Laptop", price: 1200 },
//   { name: "Phone", price: 800 },
//   { name: "Tablet", price: 300 },
//   { name: "Smartwatch", price: 150 },
// ];

// const filterProduct=products.filter((currElem)=>{
//     return currElem.price<=500;
// })
// console.log(filterProduct);



//* =========================================
//*  How to Sort and Compare an Array
//* =========================================
//? How to Sort and Compare an Array
//? Sorting an Array: The sort method sorts the elements of an array in place and returns the sorted array. By default, it sorts elements as strings.


let fruits = ["apple", "orange", "banana", "mango"];
// let number=[1,4,4,5,3,2,1];
// fruits.sort();
// number.sort();
// console.log(fruits);
// console.log(number);

// if we want to sort in the desending order 
// fruits.sort((a,b)=>{
//     if(a>b) return -1;
//     if(b>a) return 1;

// })
// console.log(fruits);


//* =========================================
//*  Very Important Array Methods
//* =========================================

//? Map(), Filter(), Reduce(),
// map() creates a new array from calling a function for every array element.
// map() does not execute the function for empty elements.
// map() does not change the original array.

//? Map(), Reduce(), Filter()
// map() creates a new array from calling a function for every array element.
// map() does not execute the function for empty elements.
// map() does not change the original array.


// Original array of numbers
//  const numbers = [1, 2, 3, 4, 5];

// // Using map to square each number and create a new array

// let result=numbers.map((currElem)=>{
//     return (currElem*currElem);
// })
// console.log(result);


// Q1: using the map method ,Write a function that takes an array of string and return a new array where each string is capatillized.


//  const words = ["Banana", "Apple", "Orange", "Mango"];
//  const result=words.map((currElem)=>{
//     return currElem.toUpperCase();
//  })
//  console.log(result);


//  Q2: Using the map method, Write a function that takes an array of number and return a new array where  each number is squared but if it is an even number;
// const number=[1,2,3,4,5,6];
//  const square=number.map((currElem)=>{
//     if(currElem%2==0){
//         return currElem*currElem;
//     }
// }) 
// .filter((currElem)=>{
//    return currElem!=undefined;
// })
// console.log(square);



//? Reduce method
// The reduce method in JavaScript is used to accumulate or reduce an array to a single value. It iterates over the elements of an array and applies a callback function to each element, updating an accumulator value with the result. The reduce method takes a callback function as its first argument and an optional initial value for the accumulator as the second argument.
// syntax
// array.reduce(function callback(accumulator, currentValue, index, array) {
//   // Your logic here
//   // Return the updated accumulator value
// }, initialValue);




// const productPrice=[100,200,300,400,500];
// const totalPrice=productPrice.reduce((accum,currElem)=>{
//         return accum+currElem;
// },0)
// console.log(totalPrice);










// ==========================================STRINGS IN JAVASCRIPT======================================================


//* =========================================
//*  STRINGS IN JS
//* =========================================


// Strings are the fundamental data type that represents a squence of characters.

// note: string created with single and double quates work as same.
// there is no difference in these two.

/* =========================================
//*  string properties
//* =============================== */
// const str="hello world";
// console.log(str.length);




//* =========================================
//*  ESCAPE CHARACTER
//* =========================================

//          code       result         description
//          \'          '               single quote
//           \"          "               double quote
//            \\         \                backslash


// let text="my name is 'thapa technical ' i am a full stack developer";
// console.log(text);
// let text='my name is "thapa technical "i am a full stack developer';
// console.log(text);



let text1="my name is \" thapa technical\" and i am a \'full stack\' developer";
// console.log(text1);


//  /?1: indexOf Method: The indexOf method returns the first index (position) of the first occurance of a string in a string   or -1 if the string is not found
// syntax
// indexOf(searchElement);
// indexOf(searchElement, fromIndex);

// let text="vinod thapa";
// console.log(text.indexOf("thapa"));




// the Array.from() method returns an array from any object with legth property.
// let strArr=Array.from(text);
// console.log(strArr);
// let maparr=strArr.map((currElem,index)=>{
//   return  `${currElem}--> ${index}`

// })
// console.log(maparr)




// ? 2: lastIndexOf Method: The lastIndexOf() method returns the index of the last occurence of a specified text in a string.
// let text2 ="hello javascript,welcome to the world best javascript course";
// let index=text2.indexOf("javascript");
// let index1=text2.lastIndexOf("javascript");
// console.log(index);
// console.log(index1)

// 3: search method searches a string for a string (for a regular expression )and returnig the position of the match.

// let text="hello javascript,welcome to the world best javascript course";
// let result=text.search("hiii");
// console.log(result);

// important points=> the search() method cannot take a second start argument.
// the indexOf cannot take powerfull seach value (regular expression).

// they accept the same arguments (parameter) and return the same value.

// 4: returns an array of the matched values or null if no match found.

// here the js coverts the normal text into regular expressions text match(/javasript/) without the global flag.



// let text="hello javascript,welcome to the world best javascript course";

// let result=text.match("javascript");
// console.log(result);                //print the result in the form an array.



// 5: matchAll():returns an itrator of all matches provided information about each match.returns an empty itarator if no match found.


// here the js coverts the normal text into regular expressions text match(/javasript/) at the end.
// let text="hello javascript,welcome to the world best javascript course";

// let matchResult="javascript";

// for(let item of matchResult){
//     console.log(item[0]);
// }



// 6: includes():returns true if the string contains the specified value and false otherwise.
// this  is also case sensitive 


// let text="hello javascript,welcome to the world best javascript course";
// let result=text.includes("j");
// console.log(result);



// 7: startsWith(): startsWith method returns true if a string begins with specified value. otherwise return false.

// let text="hello javascript,welcome to the world best javascript course";
// let result=text.startsWith("welcome");
// console.log(result);

// start position for the search element can be specified.


// 8: endsWith(): the endsWith method return true if a string ends with a specified value ,otherwise it return false.
// let text="hello javascript,welcome to the world best javascript course";
// let result=text.endsWith("course");
// console.log(result);






//* =========================================
//*  EXTRACTING STRING PARTS
//* =========================================


// slice(): extract a part of string and return a extract part in a  new string

// slice(start ,end)

// todo javascript count position from 0.
// first position is 0 and last position is 1.

// the last index is not includs by the slice method.

// let text="hello javascript,welcome to the world best javascript course";
// let result=text.slice(6);  //all the words after the 6th index
// console.log(result);
// let result1=text.slice(6,15) // starts with 6 and ends with 14 because last index is not includes.
// console.log(result1);



// substring : same as slice method 

// similarties: in both the slice and substring methods,the end parameter idicates the ending index up to which the extraction occurs but the character at the end index is excludes from the extracted string 



//interview questions
// what is the output the following course.

// let text="hello javascript,welcome to the world best javascript course";

// let result=text.slice(1);
// console.log(result);
// let result=text.replace("h", "vi")
// console.log(result);
// let result=text.substring(1);
// console.log(result);



//* =========================================
//*  EXTRACTING STRING PARTS
//* =========================================
// there are there methods to extacting string character

// the charAt(position) method
// the charCodeAt(position) method
// the at(position) method


// the charAt:method returns the character at specific position in a string


// let text="hello javascript,welcome to the world best javascript course";
// let result=text.charAt(6);
// console.log(result);
// let result=text.charAt(-6);    //gives an empty string.
// console.log(result);



// charCodeAt():the charCodeAt method return the code of the character at a spefied index in a string. the method returs a UTF 16 (an integer between 0 to 65335)

// let text="hello javascript,welcome to the world best javascript course";
// let result=text.charCodeAt(6);
// console.log(result);


// todo ES2022 the string at method is introduced 

// the at method returns the character at a specified index in a string , the at method returs same as charAt




//* =========================================
//* REPLACING STRING CONTENT
//* =========================================


// replace(): the replace method used to replace a specified value with another value.


// Case insensitive replacement to perform a case insensitive replacement you can use the i flag in the regular expression 
// let originalString="hello world! how are you world";
// let replaceString=originalString.replace(/world/gi,"vinod");
// console.log(replaceString);



// other important methods.
// trim(): remove whitespace from the both end of the string.
// let str="     hello world";
// console.log(str.length);

// let trimstr=str.trim();
// console.log(trimstr.length);

// split method: split the string into an array of substring based on a specified delimeter.
// const str = "apple,banana,Guava";
// let strArr=str.split(".");
// console.log(strArr);




//* =========================================
//* INTERVIEW QUESTIONS    
//* =========================================

// Q1 Print all the alphabat from a to z
// for(let char=97; char<=122; char++){
//     console.log(String.fromCharCode(char));
// }

// Q2: write a function to check if all vowels are present in a string or not?
// const countVowel=(str)=>{
//     const vowel="aeiou";
//     let count =0;
//     for(let char of str){
//         // console.log(char);
//         if(vowel.includes(char)){
//             count++;
//         }
        
//     }
//     return count;
// }

// console.log(countVowel("hello a e i o u world"));

// Q3: write a function to check if vowels present in a string or not.
// const checkAllVowelPresentOrNot=(str)=>{
// const vowels="aeiou";
// for(let char of vowels){
//     if(!str.includes(char)){
//         return false;
//     }
// }
// return true;
// }
// console.log(checkAllVowelPresentOrNot("my name  is vinod thapa"));


// Q4:write a javascript function if the given string is pegram or not.
// const pangramChecker=(str)=>{
//     let inputArr=str.toLowerCase().split("");
//     console.log(inputArr);
// }
// console.log(pangramChecker("the quick brown for fox jumps over the lazy dog"));





// =================================================MATH OBJECT IN JS=========================================================================




//* =========================================
//*1. MATH OBJECT IN JS    
//* =========================================


// math namespace object contains static properties and mehod for mathmatical constrants and fuctions.
// math works with number type it does not work with bigInt.

// constrants.
// Math.PI :represents the mathmatical constrant pi 
const pi=Math.PI;
console.log(pi);



// difference between Round, Floor and Cial.


// Math.round();

// rouds to the nearest integer.
console.log(Math.round(4.5)); //5
console.log(Math.round(4.1));   //4

// Math.floor()

//  always rounds down to the nereast integer.
console.log(Math.floor(4.9));   //4 gives floor or lower values 
console.log(Math.floor(4.1));     //4 

// Math.ceil

// Always rounds up the nereast upper integer value.
console.log(Math.ceil(4.1));  //5
console.log(Math.ceil(4.9));   //5




//* =========================================
//* 2.BASIC OPERATIONS.
//* =========================================


//1. Math.abs() :
// the method returns the absolute value of Number.

// or in simple how far for the number is from 0. it will be always positive.

console.log(Math.abs(5.4));
console.log(Math.abs(-115));

//2. Math.round();

// rouds to the nearest integer.
console.log(Math.round(4.5)); //5
console.log(Math.round(4.1));   //4

//3. Math.floor()

//  always rounds down to the nereast integer.
console.log(Math.floor(4.9));   //4 gives floor or lower values 
console.log(Math.floor(4.1));     //4 

//4. Math.ceil

// Always rounds up the nereast upper integer value.
console.log(Math.ceil(4.1));  //5
console.log(Math.ceil(4.9));   //5


// 5.Math.tranc():
// Always returs the integer part of a number


console.log(Math.trunc(4.5));    //4
console.log(Math.trunc(5.0))     //5




//* =========================================
//* 2.Exponential and logrithmic funtions.
//* =========================================


// 1. Math.pow(x,y);
    //   x**y 


    // Math.pow(X ,Y): returns the value of x to the powew of y.

    console.log(Math.pow(2,3));
    console.log(2**3);

    // 2.  Math.sqrt(): 

    // this returns the square root x 
    let squreRoot=Math.sqrt(25);
    console.log(squreRoot);


    //   3. Math.log(x):returns the natural logrithm of x.
    let logResult=Math.log(1);
    let logResult1=Math.log(2);
    console.log(logResult);
    console.log(logResult1);


    // 4. Math.Random(): this returns the value between 0 to 1.

    console.log((Math.random()*100).toFixed(2));







    // ==========================================================Windows in js=================================================================
        

    //------------------------------------------------------------- Window--------------------------------------------------------------
    // 1.window is the main container or we can say that global object and any operations related to the entire browser window can be the part or window object.
    // 2. All the member like object method and propeties. if they are the part of winodw object. then we do not refer the window object.
    //3.  window has object method and properties ex setTimeout and setInterval are method whereas the document is the object of the window and it is also a screen object with property discribing the physical display.
















    // -------------------------------------document ----------------------------------------------------------------------------
    // 1.whereas dom is the child of the winow object.
    // 2. where in the dom we pefer the document. if we want to use document object or properties.
    //   3.Document is just the object of the global object which Window which deals with the document html element themselve.

