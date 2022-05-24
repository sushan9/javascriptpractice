//function are the resuable piece of code that we can use all the tim in the code
//in function name=> parameters
//in function call=> arguments
//---- function declarations

console.log("Examples")
function firstfunc(){ 
    console.log("Hey, this is my first code")
}
firstfunc();

function arithmetic(x,y){
    console.log(x+y)
    console.log(x-y)
    console.log(x*y)
    console.log(x/y)
    console.log(x%y)
}
arithmetic(3,4);
//arithmetic(50,34)
//passing string
function detail(name,caste){
    let city="kathmandu"
    console.log(name,caste)
    console.log(`person belong to ${city}`)
}
detail("sushan","poudel")


function university(name,address){
    console.log(`${name} university is a good university of ${address}`)
}
university('Tribhuvan','Nepal')
university('Havard','USA');


//return keyword
//return keyword is going to be the end of any function

//examples:
function add(a,b){
    return a+b;

console.log(addnum)//look here this code will not execute because anything written below return keyword will be neglected, becoz return keyword is the end of function
}
//add(4,5)//donot use in this way
console.log(add(4,5))
//you can also store the value in variables also
let addnum=add(4,6)
console.log(addnum)

//another example
function buyproduct(walletmoney,productprice){
    if(walletmoney>=productprice){
        return "purchase successful";
    }
    //you can also remove the else part to shorten your code
    else{
        return "Insufficient money";
    }
    //return "insufficient balance";
}
//store in one variable
let confirm=buyproduct(100,150)
console.log(confirm)

