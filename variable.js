//variable declaration
/*
1. var
2. let
3. const  
*/

var age=25;
console.log(age);

let firstName='sushan';
console.log(firstName);
// in  use of const we can not change the value or reassign the value of the variable
const lastName='poudel';
console.log(lastName);
//const lastName='thapa';// error thrown

//string
//new string
let citys= new String('kathmandu');
console.log(citys);

//string literal
let city= 'kathmandu';
//console.log(city);

//toUpperCase method
console.log(city.toUpperCase());
//toLowerCase method
console.log(city.toLowerCase());

// concatenation
let firstName1='sushan';
let lastName1='poudel'; 
console.log(firstName1+' '+lastName1);
console.log(`${firstName1} ${lastName1}`);

//length 
console.log(city.length);

//finding the index

let mayor=' Bidya sundar sakya  ';
console.log(mayor[6]);
console.log(mayor[3]);
console.log(mayor[mayor.length-1]);
console.log(mayor.indexOf('n'));

console.log(mayor.trim());// trim method remove the extra space
console.log(mayor.charAt(4));

console.log(mayor.slice(3,13));

console.log(mayor.split(' '));

console.log(mayor.replace('sakya','hariharibol'));

console.log(mayor.includes('@'));
console.log(mayor.includes('sun'));

//these are string method in javascript. Remember these things.
