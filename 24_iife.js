// Immediately Invoked Function Expressions(IIFE)
// function likha immediately invoke hojaye
// function chai(){
//     console.log(`DB CONNECTED`);
// } 
// chai()
 

// how to run without chai()
(function chai(){
    // function chai is a named IIFE
    console.log(`DB CONNECTED`);
})();
// semi colon is necessary to end the function

(function aurcode(){
    console.log(`DB connected two`);
    
})();


// now using an arrow funtion also called simple IIFE
(() => {
    console.log(`DB connected Three`);
    
})();

//  how to pass a name or other parameters
((name) => {
    console.log(`DB connected Three ${name}`);
    
})('Surabhi');