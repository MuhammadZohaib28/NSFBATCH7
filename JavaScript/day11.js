// //ARRAYS IN JS

// const std1 = "Muneeb"
// const std2 = "Aqsa"
// const std3 = "Haider"

// const studentsName = ["Muneeb", "Aqsa", "Haider"]

// console.log(studentsName[2])

// //OBJECTS IN JS

// //DRY - DONOT REPEAT YOURSELF
// const stdName = "Muneeb"
// const stdAge = "15"
// const stdFatherName = "xyz"

// //KEY VALUE PAIR

// const muneebData = {
//     name: "Muneeb",
//     age: 15,
//     fatherName: "xyz",
//     hobbies: ["Swimming", "Coding", "Cooking"],
//     cnic: false
// }

// // console.log(muneebData.name, muneebData.age)

// console.log(Object.keys(muneebData))

// const muneebKeys = Object.keys(muneebData)

// for(let i = 0; i <= muneebKeys.length - 1; i++){
//     console.log(muneebKeys[i], "YEH FOR LOOP SAY ARAHA HAIO")
// }

// // () =>

// // function() {

// // }

// muneebKeys.map((i) => console.log(i))

// console.log(Object.values(muneebData))

// const muneebValues = Object.values(muneebData)

// console.log(muneebValues)

// muneebValues.map((i) => console.log(i))

// muneebData.hobbies.map((i) => console.log(i))

const sumArray = [1, 2, 3, 4, 5, 6];

const sum = sumArray.reduce((total, num) => total + num, 0);

const max = Math.max(...sumArray);
const min = Math.min(...sumArray);

console.log(sum, "Total Sum");
console.log(max, "max");
console.log(min, "min");

const revArray = [];
for (let i = sumArray.length - 1; i >= 0; i--) {
  revArray.push(sumArray[i]);
}

console.log(revArray, "yeh reverse array hai");

const newArray = [1, 2, 3, 4, 4, 4, 5, 6, 7, 7, 8, 9];

const duplicateRemoves = [...new Set(newArray)];
console.log(duplicateRemoves, "DUP");

const newArrayy = [1, 2, 3, 5, 7, 8, 9];

const missing = [];
for (let i = 1; i <= Math.max(...newArrayy); i++) {
  if (!newArrayy.includes(i)) missing.push(i);
}

const newArrays = [...missing, ...newArrayy];
console.log(missing);
console.log(newArrays.sort());

const rev = [1, 2, 3, 4, 5, 6];
for (let i = rev.length - 1; i >= 0; i--) {
  console.log(rev[i]);
}

console.log(Math.max(...rev));
console.log(Math.min(...rev));

const duplicates = [11, 2, 2, 3];

console.log(...new Set(duplicates));

fetch("https://emojihub.yurace.pro/api/all/category/smileys-and-people")
  .then((response) => response.json())
  .then((data) => {
    // Extract only the emoji characters
    const emojis = data.map((item) => item.unicode[0]);
    console.log(emojis);

    // Or if you want to join them into a string:
    console.log(emojis.join(" "));
  })
  .catch((error) => console.error("Error fetching emojis:", error));
