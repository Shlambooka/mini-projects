const startBtn = document.getElementById("myButton")
let randomNum = Math.floor(Math.random() * 100 + 1)
let userInput
let attempts = 0

startBtn.onclick = function(){
    userInput = window.prompt("Choose a number between 1 and 100.")
    convertToNumber()
}

function convertToNumber() {
    userInput = Number(userInput)
    console.log(`User chose: ${userInput}`,"Data type is", typeof userInput, `randomNum = ${randomNum}`) 
    checkCancel()
}

function checkCancel(){
    if (userInput) {
        checkInput()
    }
    else {
        alert("You ended the game.")
        attempts = 0
    }
}

function checkInput(){  
    attempts++ 

    if (isNaN(userInput)){
        userInput = window.prompt("Is that even a number?! Try again.")
        convertToNumber()
    }
    else if (userInput > 100 ) {
        userInput = window.prompt("That number is above 100. Try again.")
    }
    else if (userInput < 1) {
        userInput = window.prompt("That number is below 1. Try again.")
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
        randomNum = Math.floor(Math.random() * 100 + 1)
    }
    else {
        alert("You ended the game.")
        attempts = 0
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


























/* MY CODE FOR THE ORIGINAL WORKING VERSION

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

*/







