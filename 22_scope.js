function one (){
    const username  ="Surabhi"
    function two(){
        const website = "youtube";
        console.log(username);
        
    }
    // console.log(website); // ReferenceError: website is not defined
    two();
    // The inner scope can access the outer scope's variables, but not the other way around.
    // The outer scope cannot access the inner scope's variables.
}
// one();
// in if else

if (true) {
    const username ="Surabhi"
    if (username === "Surabhi") {
        const website = " youtube";
        //console.log(username+ website);
        
 
    }
    // console.log(website); // ReferenceError: website is not defined
    
}
// console.log(username); // ReferenceError: username is not defined so error
// The inner scope can access the outer scope's variables, but not the other way around.
// The outer scope cannot access the inner scope's variables.



// ++++++Interesting++++++
console.log(addone(5)); // 6

function addone(num){//addone (5) ko agar isse phehle likhyte toh error nhi  aayega
    return num+1;
}
// console.log(addone(5)); // 6
 // 6
// The function addone takes a number as an argument and returns that number plus one.
// This is a simple function that demonstrates how to add one to a number.

const addtwo = function(num){//addtwo (5) ko agar isse phehle likhyte toh error aayega
    return num+2;
}
// console.log(addtwo(5)); // 7