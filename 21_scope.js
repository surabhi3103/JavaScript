// Block Scope
// A block is any code wrapped in curly braces {}.

// Variables declared with let and const inside a block are only accessible within that block.

// This is known as block scope.
// var is not block-scoped — it's function-scoped or global.

// Inner Scope
// An inner scope exists inside another (outer) scope — like a function within a function or a block within a block.

// Inner scopes can access variables from outer scopes, but not vice versa.


let a = 300
if (true) {
    let a = 200
    console.log("INNER :",a) // 200
    
}
console.log("OUTER :",a) // 300
// The inner a is not accessible outside the block.
// The outer a is accessible inside the block.
// The inner scope can access the outer scope's variables, but not the other way around. ;
