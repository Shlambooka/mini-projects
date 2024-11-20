
function rollDice(){
    const numOfDice = document.getElementById("numOfDice").value
    const diceResult = document.getElementById("diceResult")
    const diceImages = document.getElementById("diceImages")
    const values = []
    const images = []

    for(let i = 0; i < numOfDice; i++){
        const value = Math.floor(Math.random() * 6) + 1
        values.push(value)
        images.push(`<img src="../images/dice-icons/${value}.svg" alt="Dice ${value}" width="75px">`)
    }
    diceResult.textContent = `Dice Result: ${values.join(', ')}`
    diceImages.innerHTML = images.join("")
}










/*
const rollBtn = document.getElementById("submit")
const dice = document.getElementById("dice")
const max = 6
const min = 1

let diceSideOne = document.getElementById("dicePosOne")
let diceSideTwo = document.getElementById("dicePosOne")
let diceSideThree = document.getElementById("dicePosOne")
let diceSideFour = document.getElementById("dicePosOne")
let diceSideFive = document.getElementById("dicePosOne")
let diceSideSix = document.getElementById("dicePosOne")

rollBtn.onclick = function(){
    userInput = document.getElementById("userInput").value
    if (userInput > max || userInput < min){
        window.alert("Please choose a number between 0 and 6.")
    } 
    else if (userInput == 1){
        let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
        console.log(randomNum)  
        displaySide(randomNum)
    }
    else {
        console.log("userInput is not equal to 1")
    }
}

function displaySide(side){
    switch(side){
        case 1:
            console.log("You rolled: " + side)
            side1 = diceSideOne.src = "../images/dice-icons/dice_icons-01.svg"
            break
        case 2:
            console.log("You rolled: " + side)
            side2 = diceSideTwo.src = "../images/dice-icons/dice_icons-02.svg"
            break 
        case 3:
            console.log("You rolled: " + side)
            side3 = diceSideThree.src = "../images/dice-icons/dice_icons-03.svg"
            break 
        case 4:
            console.log("You rolled: " + side)
            side4 = diceSideFour.src = "../images/dice-icons/dice_icons-04.svg"
            break
        case 5:
            console.log("You rolled: " + side)
            side5 = diceSideFive.src = "../images/dice-icons/dice_icons-05.svg"
            break
        case 6:
            console.log("You rolled: " + side)
            side6 = diceSideSix.src = "../images/dice-icons/dice_icons-06.svg"
            break
    }
}
    */