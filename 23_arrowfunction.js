const user ={
    username : "Surabhi",
    price:999,
    welcomeMessage : function(){
        console.log(`${this.username} , welcome to the world of JS`);// here this keyword is used to refer the username property of the object 
        console.log(this);
        
    }
}
  // user.welcomeMessage(); // Surabhi welcome to the world of JS
// In the above code, we have created an object user with properties username and price.
// We have also created a method welcomeMessage that uses the this keyword to refer to the username property of the object.
// The this keyword is used to refer to the current object in which the method is defined.
// In this case, the this keyword refers to the user object.

// user.username = "sam";
// user.welcomeMessage();
// console.log(this);// if we run this command on;y it will return an empty object

function one(){
  // let username ="Surabhi";
  // console.log(this);
  // this will have alot of values you can see by running these individually 
  // console.log(this.username);// undefined as output
  
}
// one()

// const one  = function(){
//   let username ="Surabhi"
//   console.log(this.username);
// }
// this will give the same output as earlier


const chai = () => { // => is an arrow function 
  let username ="Surabhi"
  console.log(this.username);
  // if we use this only without username it will give  {} as output
} 
// chai()

// function mai jaake this use nhi kar parhe hai bs objects mai kar sakte hai 



// Arrow function//
// const addTwo =(num1,num2) => {
//   return num1 +num2
// }
// console.log(addTwo(3,4));
// implicit return
// const addTwo =(num1,num2) => num1 +num2
// const addTwo =(num1,num2) => (num1 +num2)
// two ways to write
// console.log(addTwo(9,5));
const addTwo=(num1,num2) => ({username:"Surabhi"})
console.log(addTwo(9,2));



