//ARRAYS IN JS

const std1 = "Muneeb"
const std2 = "Aqsa"
const std3 = "Haider"


const studentsName = ["Muneeb", "Aqsa", "Haider"]

console.log(studentsName[2])


//OBJECTS IN JS

//DRY - DONOT REPEAT YOURSELF
const stdName = "Muneeb"
const stdAge = "15"
const stdFatherName = "xyz"


//KEY VALUE PAIR

const muneebData = {
    name: "Muneeb",
    age: 15,
    fatherName: "xyz",
    hobbies: ["Swimming", "Coding", "Cooking"],
    cnic: false
}


// console.log(muneebData.name, muneebData.age)


console.log(Object.keys(muneebData))



const muneebKeys = Object.keys(muneebData)

for(let i = 0; i <= muneebKeys.length - 1; i++){
    console.log(muneebKeys[i], "YEH FOR LOOP SAY ARAHA HAIO")
}

// () =>
    
// function() {

// }    


muneebKeys.map((i) => console.log(i))






console.log(Object.values(muneebData))

const muneebValues = Object.values(muneebData)

console.log(muneebValues)


muneebValues.map((i) => console.log(i))



muneebData.hobbies.map((i) => console.log(i))