//IF ELSE CONDITIONS - CONDITIONAL STATEMENTS

const userAge = 27

if (userAge >= 18) {
    console.log("You are eligible for CNIC")
} else {
    console.log("You are not eligible for CNIC")
}


//Template Literals - BACK TICS

const temperature = 17;

if (temperature >= 40) {
    console.log(`The temperature is ${temperature} and today is VERY HOT`)
} else if (temperature >= 32) {
    console.log(`The temperatue is ${temperature} and today is SUNNY DAY`)
} else if (temperature >= 24) {
    console.log(`The temperatue is ${temperature} and today is GOOD DAY`)
} else if (temperature >= 18) {
    console.log(`The temperatue is ${temperature} and today is COLD DAY`)
} else {
    console.log(`The temperature is ${temperature} and today is VERY COLD DAY`)
}




const isUserMember = true;
const userPassword = "QWERTY12345."

if (userPassword === "QWERTY12345." && isUserMember) {
    console.log(`Welcome to the account`)
} else if (!userPassword === "QWERTY12345.") {
    console.log("The password is wrong")
} else if (isUserMember) {
    console.log("Please create your account")
} else {
    console.log("Something went wrong")
}




const userMarks = 584;

if (userMarks > 100) {
    console.log(`Marks enter are ${userMarks} and it doesn't exist`)
} else if (userMarks >= 80) {
    console.log(`Marks enter are ${userMarks} and user grade is: A+`)
} else if (userMarks >= 70) {
    console.log(`Marks enter are ${userMarks} and user grade is: A`)
} else if (userMarks >= 60) {
    console.log(`Marks enter are ${userMarks} and user grade is: B+`)
} else if (userMarks >= 50) {
    console.log(`Marks enter are ${userMarks} and user grade is: C`)
} else {
    console.log(`Marks enter are ${userMarks} and user grade is: F`)
}
