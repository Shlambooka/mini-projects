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
    if (fahrenheitBtn.checked){
        let celsiusValue 
        let fahrenheitValue = userInput
        celsiusValue = (fahrenheitValue - 32) * 5 / 9
        returnContainer.textContent = fahrenheitValue.toFixed(1) + "°F converts to " + celsiusValue.toFixed(1) + "°C"
    }
    else if (celsiusBtn.checked){
        let celsiusValue = userInput
        let fahrenheitValue
        fahrenheitValue = celsiusValue * (9 / 5) + 32
        returnContainer.textContent = celsiusValue.toFixed(1) + "°C converts to " + fahrenheitValue.toFixed(1) + "°F"
    }
    else {
        returnContainer.textContent = "Please select Celsius or Fahrenheit."
    }
}