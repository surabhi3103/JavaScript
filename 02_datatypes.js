// "use strict"; // treat all JS code  as newer version
// // alert(3+3); we are using node js, not browser so it will not give the results
// console.log(3+3);
// console.log("Surabhi");
// let name = "Surabhi";
// let age  =10;
// let isLoggedIn = false;
// let state = null;
// let country = undefined;

// // number => 2 to power of 53
// // bigint
// // string=> "" in double quotes only
// // boolean => true or false
// // null=> standalone value
// // undefined=> variable is declared but not assigned any value
// // symbol => unique
// // object => collection of key value pairs

// console.log(typeof age);
// console.log(typeof (null));
// console.log(typeof undefined);


// // JavaScript is a dynamic language and not static, which means that variables can hold values of different types during runtime. 
// // Unlike languages such as Typescript or Java, you don't need to declare the data type of a variable explicitly.

// // Data types are primitive and non primitive 
// //  refer notes 
// // Primitive data types are the basic data types of JavaScript, which are used to store and manipulate data
// // Non-primitive data types are complex data types that are derived from primitive data types
// // Non-primitive data types include arrays, objects, sets, maps, etc.
// // Primitive data types include number, string, boolean, null, undefined, etc.

// const heros =["hi","Hello"]  //arrays
// let myobj = {
//     name :"Surabhi",
//     age  = 22,
// } // object


// function here function is stored in the variable named myfunction
// const myFunction = function(){
//     console.log("hello world");
    
// }
// console.log(typeof(myFunction));

// // Symbol: Unique 
// const id  = Symbol('123')
// const anotherId = Symbol('123') 
// console.log(id === anotherId) // false

// // https://262.ecma-international.org/5.1/#sec-11.4.3


// memory
// stack > primitive
// heap memory --> non primitive
// let myYoutube ="Surabhi"
// let anothername = myYoutube;
// anothername = "Mungle"
// console.log(myYoutube);
// console.log(anothername);
//here anothername will give Mungle as the output
// whereas myYoutube will give the Surabhi
//  because stck memory me duplicate bnta hai

let userone={
    email: "user.com",
    upi: "user@ybl"
}

let userTwo = userone 
userTwo.email ="hi.com";
console.log(userone.email);
console.log(userTwo.email);

// non primitive will save in heap memory
// then userone and userTwo will get the same referance
// dono ki values change hojayegi
