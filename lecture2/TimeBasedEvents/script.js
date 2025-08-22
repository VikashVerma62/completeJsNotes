//* =========================================
//*  Timing Based Events in JavaScript
//* =========================================

//* 1. setTimeout:
//? The setTimeout function is used to execute a function or code block after a specified delay in miliseconds.

// function delayedFunction(x){
//     console.log("this function was delayed by 2000 miliseconds (2seconds)",x);
// }
// setTimeout(delayedFunction,4000);   for without parameter funtion
// setTimeout(()=>delayedFunction(5))
 

//* 2. setInterval:
//? The setInterval function is used to repeatedly execute a function or code block at a specified interval in milliseconds.

//? ex- mind game of counting seconds on mind and after every 5secs we need to draw a straight line on paper.
// and it will continue till I told you to stop

// function reptedFunction(){
//     console.log("this function will be repeated every 1000 miliseconds (1second)")
// }

// setInterval(reptedFunction,1000);



//* 3. Clearing Timeout with clearTimeout:
//? If you want to cancel a scheduled timeout before it occurs, you can use the clearTimeout function.

//? The global clearTimeout() method cancels a timeout previously established by calling setTimeout().

// Syntax:
//* clearTimeout(timeoutID);

// function delayedFunction() {
//   console.log("This function was delayed by 2000 milliseconds (2 seconds).");
// }
// const myWork = setTimeout(delayedFunction, 2000);
// clearTimeout(myWork);


//* 4. Clearing Interval with clearInterval:
//? If you want to cancel a scheduled interval before it occurs, you can use the clearInterval function.

// function repeatedFunction(){
//   console.log("this function calls in every 1 second")
// }
// const id=setInterval(repeatedFunction,1000);
// clearInterval(id);


//* =========================================
//*  Challenge Time
//* =========================================

//! Write a JavaScript program that defines a function called repeatedFunction. This function should log the message "This function repeats every 1000 milliseconds (1 second)" to the console. Then, set up an interval using setInterval() to call repeatedFunction every 1000 milliseconds.  Additionally, after 5 seconds have elapsed, use setTimeout() to clear the interval previously set up. Make sure to log the message "Interval cleared after 5 seconds." when the interval is cleared.


// function repeatedFunction(){
//   console.log("This function repeats every 1000 milliseconds (1 second)");
// }

// repeatedFunction();
// const intervalId=setInterval(repeatedFunction,1000);

// setTimeout(() => {
//   clearInterval(intervalId);
// }, 5000);


