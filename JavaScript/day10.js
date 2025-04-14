//ARRAYS IN JS

const studentsName = ["Ali", "Zohaib", "Hammad", "Maya", "Ibrahim"]

const std1 = "Ali"
const std2 = "Zohaib"

console.log(studentsName, "ARRAY")

console.log(studentsName[6])
  

//DRY - DO NOT REPEAT YOURSELF

console.log(studentsName.length, "Yeh array ki length hai")



studentsName.push("Saad", "Aqsa")

studentsName.pop()



studentsName.shift()

for(let i = 0; i <= studentsName.length - 1; i++){
    console.log(studentsName[i], i)
}
