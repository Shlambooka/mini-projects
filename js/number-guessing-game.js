const startBtn = document.getElementById("myButton")
let randomNum = Math.floor(Math.random() * 100 + 1)
let userInput

startBtn.onclick = function(){
    userInput = window.prompt("Choose a number between 1 and 100.")
    convertToNumber()
}

function convertToNumber() {
    userInput = Number(userInput)
    console.log(`User chose: ${userInput}`,"Data type is", typeof userInput, `randomNum = ${randomNum}`) 
    checkInput()
}


function checkInput(){   
    if (userInput === randomNum){
        alert(`You chose the correct number: ${randomNum}!`)
        randomNum = Math.floor(Math.random() * 100 + 1)
    }
    else if (userInput > 100 || userInput < 1) {
        userInput = window.prompt("That number isn't between 1 and 100. Try again.")
        convertToNumber()
    } 
    else if (userInput < randomNum) {   
        userInput = window.prompt(`The number is higher than ${userInput}.`)
        convertToNumber()
    } 
    else if (userInput > randomNum) {
        userInput = window.prompt(`The number is lower than ${userInput}`)
        convertToNumber()
    }
    else {
        userInput = window.prompt("Is that even a number?! Try again.")
        convertToNumber()
    }
}








