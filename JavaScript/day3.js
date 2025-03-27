//Logical Operators

//OR - ||
//AND - &&
//NOT - !

const userAge = 24;
const userName = "Sami"

// > - greator 
// < - less then

const userAgeResponse = userAge > 23

const userNameResponse = userName == "Zohaib"

// = - equals too - assign operator
// == - comparision
// === - Comparision TYPE+

//BOOLEAN - TRUE / FALSE


console.log(userNameResponse, "NAME")
console.log(userAgeResponse, "AGE")



console.log(userAgeResponse || userNameResponse, "OR WALA CONSOLE HAI YEH")



// AND - &&



const userAgeNew = 18;
const userNameNew = "Anees"

const compareAge = userAgeNew >= 18
console.log(compareAge, "newAge")

const compareName = userNameNew === "Haseeb"
console.log(compareName, "newName")

console.log(compareAge && compareName, "AND OPERATOR hai yeh")

console.log(compareAge && !compareName, "NOT OPERATOR hai yeh")


//IF ELSE OPERATORS

const userNewAge = 18

if (userNewAge >= 18) {
    console.log("You are eligible for CNIC card")
} else {
    console.log("You are NOT eligible for CNIC card")
}