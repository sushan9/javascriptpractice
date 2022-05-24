
// consider the example of logical and operator
//here both condition must be true to return the true value , if one condition fails then the condition returns the false value.
let age=17
if(age>=0 && age<=10){
    console.log("The person cannot play this game")
}else if(age>=10 && age<=18){
    console.log("person is allowed to play kids game")

}else if(age>=50){
    console.log("person cannot play game is he is suffered from disease")
}
else{
    console.log("person can play any game")
}

//lets take another example of logical or operator

//if one condition is true then it returns the true value
if(age>=0 ||age<=12){
    console.log("kids are not allowed to play game")
}
//simplest example to understand
if(2>3 || 7<8){
    console.log("this is true")
}


//logical not operator

let marks=90 
if(!(marks===85)){  //it will run this code until and unless marks is not equal to 90.
    console.log("Try hard")
}