// for (let index = 0; index <= 10; index++) {
//     const element = index ;
//     console.log(element);
    
// }


// for (let index = 0; index <= 10; index++) {
//     const element = index ;
//     if(element == 5){
//         console.log("Found 5");
        
//     }
//     console.log(element);
    
// }

for (let i = 0; i <= 10; i++) {
    console.log(`Outer loop: ${i}`);
    
    for (let j = 0; j <= 10; j++) {
        // console.log(`Inner loop: ${j} and inner loop : ${i}`);
       console.log(i + " * " + j + " = " + (i * j));
       
    }
}


//break
// for (let index = 0; index <= 10; index++) {
//     const element = index ;
//     if(element == 5){
//         console.log("Found 5");
//         break;
//     }
//     console.log(element);
// } 
//continue
// for (let index = 0; index <= 10; index++) {
//     const element = index ;
//     if(element == 5){
//         console.log("Found 5");
//         continue;
//     }
//     console.log(element);
// }  