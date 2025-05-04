// Arrays:
// are resizable and can contain a mix of different datatypes
// JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers (or their respective string form) as indexes.
// JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on — and the last element is at the value of the array's length property minus 1.
// JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).
const myArr =[0,1,2,3,5,6,7]
// const myheros =["Iron man","Thor"]
// const myArr2 = new Array(11,22,56)
// console.log(myArr[0]);
// Array methods
// myArr.push(9) // adds the new element
// myArr.push(8)
// myArr.pop() // removes the last element in the array

// myArr.unshift(9) // insert at the start of array
// myArr.shift()
// console.log(myArr.includes(0));
// console.log(myArr.indexOf(3));
// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr); type is string
// slice and splice
// console.log("A", myArr);
const myn1 = myArr.slice(1,3)
console.log(myn1);// last element is not included and the original array remain the same
console.log(myArr);

// console.log("B", myArr);
const myn2 = myArr.splice(1,3) //last element is included and  original array mai se delete hojayega
console.log(myn2);
console.log(myArr);

// // slice:




