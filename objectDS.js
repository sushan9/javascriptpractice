//object in javascript
//it is similar like an array, an object is the advanced version off an array as it includes properties along with value
//syntax for object==  const fav={ }
//object literals=> object--store  key value pairs

const detail={
    name: "ram narayan",
    age:31,
    study:"Bachelor",
    email:"ram@yahoo.com",
    "full address":"kathmandu,nepal"
}
console.log(detail)
//accessing the object data=> method 1 using .

console.log(detail.email)
console.log(detail.name)

//hence . method doesnot work in the full address so we use method 2
//accessing the object data=> array brackets 
console.log(detail.age)//uisng .
console.log(detail["full address"])
console.log(detail["study"])



//modifying and updating the object:
// modify
detail["age"]=30
detail["name"]="shyam kumar"
console.log(detail)

//updating the data
detail["experience"]="2 years"
detail["dream"]="Full stack developer"
console.log(detail)

//Nesting of object with object
const person={
    favs:{
    chocolate:"Dairymilk",
     movie:"KGF2"
    },
    study:{
        level:"Bachelor",
        college:"MBM college"
    }
}
console.log(person)

//nesting array within object
const person1={
    favs:{
    chocolate:"Dairymilk",
     movie:"KGF2"
    },
    study:{
        level:"Bachelor",
        college:"MBM college"
    },
    hobbies:['playing','singing','Dancing']
}
console.log(person1)

//nesting object within array
const person2=[
    {
        name:"ram",
        caste:"pandey"
    },
    'good person',
    ['dance','play']
]
console.log(person2)
console.log(person2[0]["name"])
console.log(person2[1])