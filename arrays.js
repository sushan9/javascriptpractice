//arrays in js is the collection of data
//to create an array we have to specify the variable.
//-- common misconception:: arrays are  called object but not it is not object but it behaves like an object. thats why we can borrow object method for arrays and they are not called object method they are called as array methods.

let numbers=[1,2,3,4,5]
console.log(numbers)
//string type array
let games=['football','cricket','volleyball','basketball','hockey']
console.log(games)

//arrays of different type such as string,boolean,number,null.....

let arrrays=['sushan',20,null,true,false,undefined]
console.log(arrrays)

//changing the value of arrays
numbers[3]=20
console.log(numbers)

//inserting the new value in arrays
games[games.length]='hellogame'
console.log(games)

//Array methods
console.log("----THis is array methods-----")

//shift methods---remove item from beginning of an array
let names=['ram','shyam','hari','gopal','sita']
console.log(names)
names.shift()
//console.log(names)

//unshift method--- add item to the beginning of the array
names.unshift('pokeyman')
console.log(names)

//pop method---- remove item from end of array
names.pop()
console.log(names)

//push method ---- add item to the enf of array
names.push('krishna')
console.log(names)

//slice method----remove the item from an array 
//slice(starting index,ending index)
let number=[1,2,3,45,54,65]
//let num=number.slice(0,2)
//let num=number.slice(-2)
console.log(number)

//splice -- change the array
//removing
// let nums=number.splice(0,4)
// console.log(nums)

//replacing
let nums=number.splice(0,0,100,101)
console.log(nums)
console.log(number)

const movies=['kgf2','hariharibol','spiderman','harsathmetha','rama']

//includes method
console.log(movies.includes("rama"))
const nepmovie=["premgeet",'premgeet1','premgeet2','premgeet3','a merohajur1','amerohajur3']
//concat
console.log(movies.concat(nepmovie))

//reverse
console.log(movies.reverse())

//join method
console.log(movies.join(' '))



//Nesting of an array
const favs=[['ram','hari','gopal','shyam','rama'],['narayan','prasad','kumar','kaji','bahadur'],['poudel','pandit','rayamaji','khadka','thapa'],['chocolate','icecream','frooty','fanta','cococola']];

console.log(favs)
console.log(favs[1])
console.log(favs[0][3])
console.log(`${favs[2][3]} is a good person`)//to extract ino from array(template literals)




