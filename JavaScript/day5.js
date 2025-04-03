//SWITCH CASES

const userInput = "B"

switch(userInput){
    case "A":
        console.log("YEH CASE A HAI")
        break;
    case "B":
        console.log("YEH CASE B HAI") 
        break;
    default:
        console.log("CASE INVALID HAI")       
}



const userClick = "Sprite"
const consoleData = `Purchased item is ${userClick} !`
switch(userClick){
    case "Pepsi":
        console.log(consoleData)
        break;
    case "Sprite":
        console.log(consoleData)   
        break; 
    case "Miranda":
        console.log(consoleData)
        break;
    default:
        console.log("Item not available")    
}   



//LOOPS
// 1 - FOR LOOP
// 2 - WHILE LOOP
// 3 - DO WHILE LOOP




//FOR LOOP

for(let i = 1; i <= 50; i++){
    console.log(`SNO - ${i}`)
}