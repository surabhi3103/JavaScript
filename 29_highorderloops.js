// // for of 
// ["","",""] // empty string
// [{},{},{}] // empty object

// const arr =[1,2,3,4,5,6,7,8,9,10];
//  for (const num of arr) { // kis object pe loop lagana chahte hai(yha object ka matlab js wala obj nhi hai)
// console.log(num);
    
//  }

// const myString =["hello","world","this","is","a","string"];
// for (const str of myString) {
//     console.log(str);
// }

// const greetings = "Hello World";
// for (const char of greetings){
// console.log(`each letter is ${char}`);
// char = char + 1; // this will not work
// char += 1; // this will not work
// char = char + 1; // this will not work
// }

//  Maps:In JavaScript, the term "map" can refer to two distinct concepts: the Map object and the map() method for arrays.
// Map Object
// The Map object is a built-in data structure that stores key-value pairs, similar to objects. However, unlike objects, Map allows keys of any data type, including objects and primitive values. It also maintains the insertion order of elements.
//  on;lly unique values will be printed  and in order of insertion
// const myMap = new Map();
// myMap.set('name', 'John');
// myMap.set(1, 'Number one');
// myMap.set({}, 'An object');
// console.log(myMap);
// console.log(myMap.get('name')); // Output: John
// console.log(myMap.size); // Output: 3
// for (const [key,value] of myMap) {
//     console.log(key, ':-', value); // Output: [ 'name', 'John' ] [ 1, 'Number one' ] [ {}, 'An object' ]
    
// }


// const myObject = {
//     name: 'John',
//     age: 30,
//     city: 'New York'
// };
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value); // Output: [ 'name', 'John' ] [ 'age', 30 ] [ 'city', 'New York' ]
    
// }
// here output is : nyObject is not iterable
// because object is not iterable


// forin loop

const myObject = {
    js : 'JavaScript',
    py : 'Python',
    rb : 'Ruby',
    c : 'C++',
    java : 'Java',
} 
for (const key in myObject) {
    console.log(key);
        
    }

for (const key in myObject) {
    console.log(myObject[key]);
        
    }

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
        
    }
// Why can’t you just use value directly?
// There’s no built-in value variable in a for...in loop. The loop only gives you keys. If you write console.log(value), it will give an error unless you've defined a value variable separately.
// The for...in loop iterates over the keys of an object, not the values. If you want to access the values, you need to use the keys to index into the object.

// for in for arays
const myArray = ['apple', 'banana', 'cherry'];
for (const key in myArray) {
    console.log(key); // Output: 0, 1, 2 Prints the index
    console.log(myArray[key]); // Output: apple, banana, cherry Uses the index to access and print the element:
}
//  this is important
//  for...in Explained:
// for...in iterates over the enumerable properties (keys/indexes) of an object.

// In the case of an array, the indexes (0, 1, 2) are the keys.
// In the case of an object, the property names are the keys.
//  for...in is not recommended for arrays because it can iterate over properties that are not part of the array itself (like methods added to the Array prototype).
//  for...in is generally used for objects, not arrays.

// +++++++++++++++ for each +++++++++++++++

// The forEach() method executes a provided function once for each array element.
// It is a method of the Array prototype and is not available for objects.
// The forEach() method takes a callback function as an argument and applies it to each element in the array.
// The callback function can take up to three arguments: the current element, the index of the current element, and the array itself.
// The forEach() method does not return a new array; it simply executes the provided function for each element.
//  forEach() is not available for objects.
 
//  const coding = ['js', 'py', 'rb', 'c', 'java'];

// coding.forEach(function (val) {
//     console.log(val); // Output: js, py, rb, c, java  
// }
// );

// coding.forEach( (item) => {
//     console.log(item); // Output: js, py, rb, c, java
// } )
// coding.forEach(function (value, index, array) {
//     console.log(value); // Output: js, py, rb, c, java
//     console.log(index); // Output: 0, 1, 2, 3, 4
//     console.log(array); // Output: ['js', 'py', 'rb', 'c', 'java']
    
// });


// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe); // Output: js, py, rb, c, java

//  coding.forEach((item) => {
//     console.log(item);
//     console.log(item.length); // Output: 2, 2, 2, 1, 4
//  }
// );



const myCoding =[
    {
        langName: 'JavaScript',
        langType: 'Scripting',
    }
    {
        langName: 'Python',
        langType: 'Scripting',
    },
    {
        langName: 'Ruby',
        langType: 'Scripting',
    },
    {
        langName: 'C++',
        langType: 'Compiled',
    },
    {
        langName: 'Java',
        langType: 'Compiled',
    }
]

myCoding.forEach((item) => {
    console.log(item.langName); // Output: JavaScript, Python, Ruby, C++, Java
    console.log(item.langType); // Output: Scripting, Scripting, Scripting, Compiled, Compiled
}
);