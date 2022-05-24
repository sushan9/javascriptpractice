//difference between let,const and var
//var is not used in block scope as it is acessible everywhere in program and difficult to debug

function funscope(){
   let name='sushan'
   console.log(name);
}
funscope();
console.log(name);//not acessible in function

function constt(){
    const name='sushan'
    console.log(name);

}
constt();
console.log(name);//not acessible

function varr() {
    var name='sushan'
    console.log(name)
}
varr();
console.log(varr);
console.log(name);//not acessible
//this is the function block


console.log("let us discuss about the block scope in javascript")
//let
if(0==='0'||'ram'==='ram'){
    let test='true'
    console.log(test)
}
//console.log(test)// error not acessible

//const

if(0==='0'||'ram'==='ram'){
    const test='true'
    console.log(test)
}
//console.log(test)//error not acessible

if(0==='0'||'ram'==='ram'){
    var test='true'
    console.log(test)
}
console.log(test)
console.log(test)//it is acessible
// hence, using var in the block scope is not the best practice for the programmer. becoz it is acess outside the block scope also.

//global scope declaration
var test='false';
if(0==='0'||'ram'==='ram'){
    let test='true'
    console.log(test)
}
console.log(test)


