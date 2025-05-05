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
console.log(loginUserMessage("Surabhi"));
// if no value is passed then it will be undefined not null
