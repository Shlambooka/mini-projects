const celsiusBtn = document.getElementById("celsiusBtn")
const fahrenheitBtn = document.getElementById("fahrenheitBtn")
const submitBtn = document.getElementById("submit")
const returnContainer = document.getElementById("myH1")


submitBtn.onclick = function(){
    userInput = document.getElementById("userInput").value
    userInput = Number(userInput)
    userInputCheck()
 
}

function userInputCheck(){

    if (isNaN(userInput)){
        returnContainer.textContent = "Your input cannot be converted."
    }
    else{
    checkRadioBtn()
    }
}

function checkRadioBtn(){
    if (celsiusBtn.checked){
        let celsiusValue 
        let fahrenheitValue = userInput
        celsiusValue = (fahrenheitValue - 32) * 5/9
        returnContainer.textContent = fahrenheitValue + "°F converts to " + celsiusValue + "°C"
    }
    else if (fahrenheitBtn.checked){
        let celsiusValue = userInput
        let fahrenheitValue
        fahrenheitValue = celsiusValue * (9 / 5) + 32
        returnContainer.textContent = celsiusValue + "°C converts to " + fahrenheitValue + "°F"
    }
    else {
        returnContainer.textContent = "Please select Celsius or Fahrenheit."
    }
}