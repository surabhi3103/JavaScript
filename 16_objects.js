// object literals
// has key and value pairs
// key is a string and value can be anything
// Object.create // another way to crarte objects
const mySym = Symbol("mySym");
const JsUser ={
    name : "John",
    age : 30,
    "Suraname" : "Doe", // key with space
    location : "India",
    isActive : true,
    activeFriends : ["Mike", "Tom", "Jerry"],
    [mySym] : "mySymValue", // key is a symbol here we need to add [] brackets such that it will give symbol as an output 
    // if this is used without [] it will give the value of the key as string
}

// console.log(JsUser.name); // John this is a way to access the value of a key
// another way to access the value of a key
// this cannot be used for surname
// console.log(JsUser["name"]); // John
// console.log(JsUser["Suraname"]); // Doe
// console.log(JsUser[mySym]); // mySymValue
// console.log(typeof [mySym]); // mySymValue

// JsUser.name = "Mike"; // this will change the value of the key name
// console.log(JsUser.name); // Mike
// Object.freeze(JsUser); // this will freeze the object and will not allow to change the value of the key
// JsUser.name = "John"; // this will not change the value of the key name
// console.log(JsUser.name); // Mike
// Object.freeze will not allow to add new key value pairs

// console.log(JsUser); // { name: 'Mike', age: 30, Suraname: 'Doe', location: 'India', isActive: true, activeFriends: [ 'Mike', 'Tom', 'Jerry' ], [Symbol(mySym)]: 'mySymValue' }
JsUser.greetings = function(){
    console.log("Hello JS User");
}
JsUser.greetingsTwo = function(){
    console.log('Hello JS User, ${this.name}');
}; // Hello JS User
console.log(JsUser.greetings()); // Hello JS User
console.log(JsUser.greetingsTwo()); // Hello JS User,${this.name} // this will give undefined
// console.log(JsUser.greetings); // [Function: greetings] // this gives [Function (anonymous)] as an output
// first remove the freeze function from the above code and then run this code


