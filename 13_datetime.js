// //  Dates
// let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());
// console.log(typeof(myDate)); //object this is imp for interviews

// let mycreatedDate = new Date(2025,2,20)//month starts from 0 in js, so 0 is Jan,then continue
// console.log(mycreatedDate);
// console.log(mycreatedDate.toLocaleString());
// console.log(mycreatedDate.toDateString());
// // if we write in YYYY-MM-DD format month will start from 1 that is 1 is Jan
// let createdDate = new Date(12-1-2025);
// console.log(createdDate);   
// console.log(createdDate.toLocaleString());
// // next format MM-DD-YYYY
let datecraeted = new Date("02-20-2025");
let myTimeStamp = Date.now()//millisec value
// console.log(myTimeStamp);
// console.log(datecraeted.getTime());
// // value will be in millisec
// // to convert into sec
// console.log(Math.floor(Date.now()/1000));
let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1); //month as output
console.log(newDate.getDay());
console.log(newDate.getHours());

// '${newDate.getday()} and the time'
newDate.toLocaleString('default',{
    weekday:"long"
})
