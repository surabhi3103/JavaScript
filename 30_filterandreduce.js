// const coding = ["js", "html", "css", "python", "java", "c++", "c#", "php"];
// const values = coding.forEach((item) => {
//     console.log(item);
//     return item;

// })
// console.log(values); // undefined

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// myNums.filter((num) => num>4)
// console.log(newNums); // [5, 6, 7, 8, 9, 10]

// const newnums = myNums.filter((num) =>{
//     return num > 4;// must write return statement otherwise it will return undefined
// })
// console.log(newnums); // [5, 6, 7, 8, 9, 10]


// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
//   ];

//   let userBooks = books.filter( (bk) => bk.genre === 'History')

//   userBooks = books.filter( (bk) => { 
//     return bk.publish >= 1995 && bk.genre === "History"//yha {} that is scope open kiya hai to return statement likhna padega
// })
//   console.log(userBooks);



// const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNumers.map( (num) => num + 10) // without using {} scope
// const newNums = myNumers.map( (num) => { return num + 10})// {} scope is used so return statement is required
// above we have addded 10 to each number using map function

// const newNums = myNumers
//                 .map((num) => num * 10 ) // first we have multiplied each number by 10 then the result from this will be passed to second map function
//                 .map( (num) => num + 1)
                // .filter( (num) => num >= 40)

// console.log(newNums);




const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay); 

// reuduce
