const startBtn = document.getElementById("myButton")
let randomNum = Math.floor(Math.random() * 10 + 1)
let userInput

startBtn.onclick = function(){
    userInput = window.prompt("Choose a number between 1 and 10.")
    userInput = Number(userInput)
    checkInput()
}


 function checkInput(){   
    if(userInput > 10 || userInput < 1) {
        userInput = window.prompt("Please choose a number between 1 and 10.")
        checkInput()
    } 
    else if (userInput < randomNum) {   
        userInput = window.prompt("Try a higher number.")
        checkInput()
    } 
    else if (userInput > randomNum) {
            console.log("Try lower.", randomNum)
            checkInput()
    }
    else {
            randomNum = Math.floor(Math.random() * 10 + 1)
            alert("YOU WON!")
     }
}








