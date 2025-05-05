// Objects using Singleton or constructor pattern
// const tinderUser = new Object(); // singleton object
// const tinderUser2 = {}; // object literal or non singleton object
// tinderUser2.name = "John Doe";
// tinderUser2.age = 25;
// tinderUser2.isActive = true;
// tinderUser2.lastLogin = new Date();
// tinderUser2.greet = function () {
//   console.log("Hello " + this.name);
// };
// console.log(tinderUser2);
// console.log(tinderUser2.greet());

// console.log(tinderUser);
// this will give {} that is it is an empty object


// object inside an object
// const regularUser ={
//     email: "hi.com",
//     fullname:{
//         username:{
//             first: "John",
//             last: "Doe"
//         }
//     }
// }

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.username.first);
// console.log(regularUser.fullname.username.last);
// console.log("hello");


// const obj1 ={1: "hi", 2: "hello"};
// const obj2 = {3: "ab", 4: "he"};
// const obj3= Object.assign({},obj1,obj2);// this will merge the two objects but we need to add {}  this is syntax not complusory though
// console.log(obj3);
// const obj3 = {obj1,obj2}
// console.log(obj3);


// const obj4 = {...obj1,...obj2};// this will merge the two objects but we need to add {}  this is syntax not complusory though
// console.log(obj3);
// const obj3 = {obj1,obj2}


// const users = [
//     {
//         id: 1,
//         name: "John Doe",
//     },
//     {
//         id: 2,
//         name: "Jane Doe",
//     }
// ];

// users[1].name
// console.log(users[1].name);
// console.log(Object.keys(tinderUser2));
// console.log(Object.values(tinderUser2));
// console.log(Object.entries(tinderUser2));
// console.log(Object.entries(tinderUser2).length);
// console.log(tinderUser2.hasOwnProperty("name"));


// const course = {
//     courseid : 101,
//     courseDuration : 3,
//     courseInstructor: "Harsh",
// }
// course.coursename 
// const {courseInstructor: Instructor} =course

// console.log(Instructor);

// console.log("hello");

