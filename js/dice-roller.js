const rollBtn = document.getElementById("submit")
const dice = document.getElementById("dice")
const max = 6
const min = 1
let diceSideEmpty

let diceSideOne = document.getElementById("dicePosOne")
let diceSideTwo = document.getElementById("dicePosOne")
let diceSideThree = document.getElementById("dicePosOne")
let diceSideFour = document.getElementById("dicePosOne")
let diceSideFive = document.getElementById("dicePosOne")
let diceSideSix = document.getElementById("dicePosOne")



const diceSide = [1, 2, 3, 4, 5, 6]

rollBtn.onclick = function(){
    userInput = document.getElementById("userInput").value
    if (userInput > max || userInput < min){
        window.alert("Please choose a number between 0 and 6.")
    } 
    else {
        rollDiceOne()
    }
}

function rollDiceOne(){
    let diceSide = rollDice()
    return displaySide(diceSide)
}

function rollDice(){
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
    console.log(randomNum)  
    return randomNum

}

function displaySide(side){
    console.log("displaySide", side)

    switch(side){
        case 1:
            console.log("You rolled: " + side)
            diceSideOne = diceSideOne.src = "../images/dice-icons/dice_icons-01.svg"
            break
        case 2:
            console.log("You rolled: " + side)
            diceSideTwo = diceSideTwo.src = "../images/dice-icons/dice_icons-02.svg"
            break 
        case 3:
            console.log("You rolled: " + side)
            diceSideThree = diceSideThree.src = "../images/dice-icons/dice_icons-03.svg"
            break 
        case 4:
            console.log("You rolled: " + side)
            diceSideFour = diceSideFour.src = "../images/dice-icons/dice_icons-04.svg"
            break
        case 5:
            console.log("You rolled: " + side)
            diceSideFive = diceSideFive.src = "../images/dice-icons/dice_icons-05.svg"
            break
        case 6:
            console.log("You rolled: " + side)
            diceSideSix = diceSideSix.src = "../images/dice-icons/dice_icons-06.svg"
            break
    }
}