//* ==============================
//* Object in JavaScript
//* ==============================

// objects are the fundamental part of javascript providing a way to group related data and functions together.in javascript ,and object is a collection of key value pair where each key is string (or a symbol) and each value can be a daeta type,including other objects. objects can have properties and methods making them versetile for various use cases in the javascript .

//* ==============================
//* Creating Objects:
//* ==============================
//? There are several ways to create objects in JavaScript. The most common one is using object literals:

const product={
    id:1,
    pName:"laptop"

}


let person={
    name:"vinod",
    age:30,
    isStudent:false,
    greet:function(){
   console.log("hello everyone");
    }

}

let person1={
     name:"vinod",
    age:30,
    "is'Student":false,
    greet:function(){
   console.log("hello everyone");
    }
}

//* ==============================
//* Accessing Properties:
//* ==============================
//? You can access object properties using dot notation or square bracket notation:
console.log(person1.name)
console.log((person1.age))
console.log(person1["is'Student"]);
console.log(person1[`is'Student`]);



//* =================================
//* Adding and Modifying Properties:
//* =================================
//? You can add new properties or modify existing ones:


person1.job="web dev";
// person1.age=18;
person1["age"]=12;
console.log(person1);



//* =================================
//* Methods:
//* =================================
//? Methods in objects are functions associated with the object. They can be invoked using the same notation as properties:

person1.greet();

//* ========================================
//* We can add dynamic keys in an object
//* ========================================

let idType="studentId";

let student={
    [idType]:"A12334",
    sName:"vinod",
    isStudent:true,
    greet: function(){
console.log(`hey my ${idType} is ${student[idType]} and my name is ${student.sName}`)
    }
}

student.greet();

//* =================================
//* Data Modeling:
//* =================================

//? Data modeling is the process of creating a visual representation of either a whole information system or parts of it to communicate connections between data points and structures. The goal is to illustrate the types of data used and stored within the system, the relationships among these data types, the ways the data can be grouped and organized and its formats and attributes.

// / Objects are excellent for modeling real-world entities. For instance, you might represent a car, a user, or a product as an object with properties like color, brand, username, etc.



let car={
    brand:"Toyota",
    model:"carmy",
    year:2022,
    start:function(){
        console.log("engine started");
    }

}


//* =====================================
//*  Interview Question
//* ======================================
//! Explain the difference between passing objects by reference and by value in JavaScript. Provide an example to demonstrate each scenario.

//? sol: In JavaScript, primitive data types like numbers and strings are passed by value, while objects are passed by reference.
//? Passing by value: When passing by value, a copy of the primitive value is created and passed to the function or assigned to a variable. Any changes made to the copy do not affect the original value.

let a = 10;
const modifyValue=(x)=>(x=20);
console.log(modifyValue(a));
console.log(a);

//? Passing by reference: When passing by reference, a reference to the memory location of the object is passed to the function or assigned to a variable. Any changes made to the object through this reference will affect the original object.


// let obj={id:1,name:"kodifier"};

// let obj1=obj;
// obj1.name="thapa technical";
// console.log(obj1)
// console.log("original ",obj);



// To avoid this behavior and create a true copy of the object, you can use methods like Object.assign() or the spread operator (...):

//? Object.assign() is used to copy properties from one or more source objects to a target object.


let obj={id:1,name:'kodify'}
 let ob1={id:2,name:'thapa technical'};

//  let newobj=Object.assign({},obj,ob1);
 let newobj={...obj,...ob1}
 console.log("original",newobj);



 //* =====================================
//* Comparison by Reference:
//* ======================================

//? Two objects are equal only if they refer to the same object.
//? Independent objects (even if they look alike) are not equal:


let obj1={name:"vinod"}
let obj2={name:"vinod"};

const isEqual=ob1===obj2?true:false;
console.log(isEqual);




//* =====================================
//* JSON (JavaScript Object Notation):
//* ======================================

//?JSON is a data interchange format derived from JavaScript objects. Objects can be easily converted to JSON and vice versa.

 let student1 = {
  id: 1,
  sName: "Vinod",
  sAge: 29,
  isStudent: false,
  greet: function () {
    console.log(
      `hey my id is ${student.identity} & my name is ${student.sName}`
    );
  },
};
let JSONData=JSON.stringify(student1);    //consvert the object into json
console.log(JSONData);
let parseObject=JSON.parse(JSONData);
console.log(parseObject);




//* =====================================
//* "this" Object
//* ======================================

//? In JavaScript, the this keyword refers to an object.

// Which object depends on how this is being invoked (used or called).

// The this keyword refers to different objects depending on how it is used:

// In an object method, this refers to the object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), apply(), and bind() can refer this to any object.

// Note
// this is not a variable. It is a keyword. You cannot change the value of this.



function callme() {
  console.log(this);
}

// callme(); // try to run on browser console


// todo  Let's check the this keyword values in an object methods

// * Regular Function Expression:
                  