// const balance = new Number(400);
// console.log(balance);

// const score = 100
// console.log(score);

// console.log(balance.toString()); // string mai convert hogya hai then we will have additional properties
// console.log(balance.toString().length);
// console.log(balance.toFixed(3));//decimal upto how many numbers

// const num = 25.22562
// console.log(num.toPrecision(3));

// const num2 = 100000000
// console.log(num2.toLocaleString()); // 100,000,000 commas accor to US standards
// console.log(num2.toLocaleString('en-IN'));// in indian standard
// // in indian way

// 6. Other methods
//     .MAX_VALUE
//     .MIN_VALUE
//     .MAX_SAFE_INTEGER
//     .MIN_SAFE_INTEGER



// +++++++Maths++++++ Maths library comes along with JS



// console.log(Math);
// console.log(Math.abs(-4));// neg to positive always
// console.log(Math.ceil(3.7)); // if greater than 3 it will return 4
// console.log(Math.round(4.88));
// console.log(Math.floor(5.99 ));
// console.log(Math.max(4,9));
// console.log(Math.min(4,9));

console.log(Math.random());
// give any random value from 0 to 1
// console.log((Math.random()*10)+1); //This assures that values are atleast 1 & more than 1
const min = 10
const max  = 20
console.log(Math.floor( Math.random() * (max - min+1))+ min);


