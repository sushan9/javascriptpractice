// if -else statement in javascript

let age=19
if(age===18){//using strict equality operator
   console.log("Allow to go alone")
}
else{
    console.log("donot allow to go alone")
}

//another example
if(age>=18){//using greater than or equal to operator
    console.log("allow to go alone")
}
else{
    console.log("donot allow to go alone")
}

//using else if statement
let marks=80
if(marks===90){
    console.log("you got A")
}
else if(marks===80){
   console.log("you got B")
} 
else{
    console.log("you got C")
}


console.log("---switch statement----") 
//switch statement in javascript

let age1=19
switch(age1){
    case 18:
        console.log("allow to go with family")
        break
        case 19:
            console.log("allow to go alone")
            break
            default:
                console.log("you are small to go alone")
}


console.log("---ternary operator----")
//ternary operator in javascript    

age===18?console.log("allow to go alone"):console.log("you are small to go alone")


