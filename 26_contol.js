// if
const isUserLoggedIn = true;
const temperature = 30;
if(2=="2"){
    console.log("Executed");

}
// operators:
// ==, ===, !=, !==, >, <, >=, <=
// === checks the type of the variable and also the value
// == checks the value of the variable only
if(temperature > 25){
    console.log("Temperature is greater than 25");

}
console.log("Temperature is less than 25");


// if else
if(temperature > 25){
    console.log("Temperature is greater than 25");
}
else{
    console.log("Temperature is less than 25");
}


// if else if
if(temperature > 25){
    console.log("Temperature is greater than 25");
}
else if(temperature < 25){
    console.log("Temperature is less than 25");
}
else{
    console.log("Temperature is equal to 25");
}



// const score = 50;
// if(score>25){
//     const power = "Fly"; // Block scope bcoz of const
//     //if we use var instead of const, it will be global scope
//     console.log(`User power:${power}`);
//     }
    // console.log(`User power:${power}`); // ReferenceError: power is not defined
// The variable power is defined inside the if block, so it is not accessible outside the block.
    
const userLoggedIn = true;
const debitCard = true;
const loggedInfromGoogle = false;
const loggedInfromEmail = true;
if (userLoggedIn && debitCard) {
    console.log("Allow to buy course");
    
} 
if(loggedInfromGoogle || loggedInfromEmail){
    console.log("User looged in from Google or Email");
    
}
 

// switch case  
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }
// const month =3
// switch (month) {
//     case 1:
//         console.log("January");
//         break;
//     case 2:
//         console.log("February");
//         break;
//     case 3:
//         console.log("March");
//         break;
//     case 4:
//         console.log("April");
//         break;
//     case 5:
//         console.log("May");
//         break;
//     case 6:
//         console.log("June");
//         break;
//     case 7:
//         console.log("July");
//         break;
//     case 8:
//         console.log("August");
//         break;
//     case 9:
//         console.log("September");
//         break;
//     case 10:
//         console.log("October");
//         break;
//     case 11:
//         console.log("November");
//         break;
//     case 12:
//         console.log("December");
//         break;

//     default:
//         break;
// }


// const userEmail = " Surabhi.com"
// if (userEmail) {
//     console.log("Got user mail")
// }
// else{
//     console.log("User mail not found");
    
// }


// Falsy values
// false,0,"",null,undefined,NaN,BigInt(0), -0, 0(zero)

// Truthy values
// "0", " ", [], {}, true, -1, 1, BigInt(1), Symbol(), function(){}, new Date(), Infinity
// "false" is also truthy 


// nullish coalescing operator
// nullish coalescing operator (??) is used to check if a variable is null or undefined
// it returns the right side value if the left side value is null or undefined
// it is used to provide a default value to a variable

// let val1;
// val1 = 5 ?? 10; // 5
// val1 = null ?? 10; // 10
// val1 = undefined ?? 10; // 10
// val1 = 0 ?? 10; // 0
// val1 = "" ?? 10; // ""
// val1 = false ?? 10; // false
// val1 = NaN ?? 10; // NaN
// val1 = BigInt(0) ?? 10; // BigInt(0)
// val1 = -0 ?? 10; // -0
// val1 = null ?? 10 ?? 20; // 10
// console.log(val1); // 5
// nullish coalescing operator is used to provide a default value to a variable
// it is used to check if a variable is null or undefined


// Terniary operator
// condition ? expression1 : expression2
//  condition ? true : false

const iceTeaprice = 100;
iceTeaprice > 100 ? console.log("Ice tea is expensive") : console.log("Ice tea is cheap");