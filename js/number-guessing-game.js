const startBtn = document.getElementById("myButton")
const minNum = 1
const maxNum = 100
let randomNum = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum
let userInput
let attempts = 0

startBtn.onclick = function(){
    attempts = 0
    userInput = window.prompt(`Choose a number between ${minNum} and ${maxNum}.`)
    convertToNumber()
}

function convertToNumber() {
    userInput = Number(userInput)
    checkInput()
}

function checkInput(){
    if (isNaN(userInput)){
        userInput = window.prompt("Is that even a number?! Try again.")
        convertToNumber()
    }
    else if (userInput) {
        checkNumber()
    }
    else {
        alert("You ended the game.")
        attempts = 0
    }
}

function checkNumber(){  
    attempts++ 

    if (userInput > maxNum ) {
        userInput = window.prompt(`That number is above ${maxNum}. Try again.`)
        convertToNumber()
    }
    else if (userInput < minNum) {
        userInput = window.prompt(`That number is below ${minNum}. Try again.`)
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
    else if (userInput === randomNum){
        alert(`You chose the correct number: ${randomNum}! It took you ${attempts} attempts.`)
        randomNum = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum
    }
}


/*
const minNum = 1
const maxNum = 100
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum

let attempts = 0
let guess
// set this to true so you can set to false when the game is over
let running = true 

while (running){
    guess = window.prompt(`Guess a number between ${minNum} and ${maxNum}`)
    guess = Number(guess)

    if (isNaN(guess)){
        window.alert("Please enter a valid number.")
    }
    else if (guess < minNum || guess > maxNum) {
        window.alert(`Please enter a number between ${minNum} and ${maxNum}.`)
    }
    else {
        attempts++
        if (guess > answer) {
            window.alert(`The number is lower than ${guess}.`)
        }
        else if (guess < answer) { 
            window.alert(`The number is higher than ${guess}.`)
        }
        else {
            window.alert(`You guessed the number! It was ${answer}. It took you ${attempts} attempts.`)
            running = false // moved here to indicate game exit
        }
    }
}

*/

























