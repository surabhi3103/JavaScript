// const marvel_heros =["Hulk", "Iron","Thor"]
// const dc_heros =["Batman", "Super"]
// to merge two arrays
// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);
//  const all_heros = [...marvel_heros, ...dc_heros]
// console.log(all_heros);//this spreads the individual elements of the array it is used to concatenate the two arrays
// const all_heros = [...marvel_heros, "Spiderman", ...dc_heros]
// console.log(all_heros);

// const myArray = [1, 2, 3, [4, 5, 6], 7, [8, 9,[5,9,9]]]
// const flatArray = myArray.flat(2) // this will flatten the array to 2 levels
// console.log(flatArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 5, 9, 9]  important

// console.log(Array.isArray([1, 2, 3])); // true
// console.log(Array.from({name: "hello"})); // [ { name: 'hello' } ] this converts the object into an array
// interestion case it will return an empty array
// console.log(Array.isArray("hello")); // false
// console.log(Array.from("hello")); // [ 'h', 'e', 'l', 'l', 'o' ]  this converts the it into an array
// console.log(Array.from({ length: 5 }, (_, i) => i + 1)); // [ 1, 2, 3, 4, 5 ] this creates an array of length 5 and fills it with the values from 1 to 5
// console.log(Array.of(1, 2, 3)); // [ 1, 2, 3 ] this creates an array from the arguments passed to it
// console.log(Array.of(5)); // [ 5 ] this creates an array with a single element 5
// console.log(Array.of()); // [] this creates an empty array 

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ] this creates an array from the arguments passed to it
