function sayMyName(){
    console.log("S");
    console.log("U");
    console.log("R");
    console.log("A");
    console.log("B");
    console.log("H");
    console.log("I");
    
}

// sayMyName(); //here sayMyName is reference for the function and when () is added the function is executed
// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }
// addTwoNumbers(10, 20); 
// addTwoNumbers(1, "2"); // here 1 is number and "2" is string so it will be converted to string and output will be 12
// addTwoNumbers(1, null); // 1 as output and null as 0 so output will be 1

// store function in a variable 


const addTwoNumbers = function(number1, number2){
    // agar yha console log kiya toh function ke andar hi print hoga
    // console.log(number1 + number2);
    // return statement se function ka execution khatam ho jata hai
    let result = number1 + number2;
    return result; // iske baad kuch print nhi hoga kyuki return ke baad function khatam ho jata hai
    // or return number1 + number2;
}
const result = addTwoNumbers(10, 20);
// console.log("Result is: " + result); // here result is undefined because function does not return anything


function loginUserMessage(username){//pass username =any thing so that it will not give undefine incase the username is not passed
    if (username === undefined) {
        return "Please enter a username";
        
    }
    return `${username} is logged in`;
}
// console.log(loginUserMessage("Surabhi"));
// if no value is passed then it will be undefined not null

// if there are multiple parameters
function calculateCartPrice(...num1){//... is rest operator which will take all the values passed in the function
    // also called as spread operator
    return num1;
}
console.log(calculateCartPrice(10, 20, 30, 40, 50)); // here it will return an array of all the values passed


// function calculateCartPrice(val1,val2,...num1){//... is rest operator which will take all the values passed in the function
//     // also called as spread operator
//     return num1;
// }
// console.log(calculateCartPrice(10, 20, 30, 40, 50)); // here it will return 30 40 50 as val1 is 10 and val2 is 20


// // function using object

// const user ={
//     username : "Surabhi",
//     password: "123456",
// }
// function handleJob(anyobject){
//     console.log('Username is ${anyobject.username} and the price is ${anyobject.price}');
    
// }
// handleJob(user); // here user is passed as object and the function will print the values of the object



const myNewArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function returnSecondValue(getArray){
    return getArray[1]; // here it will return the second value of the array
}
console.log(returnSecondValue(myNewArray)); // here it will return 2 as the second value of the array  
console.log(returnSecondValue([1, 2, 3, 4, 5])); // here it will return 2 as the second value of the array
  