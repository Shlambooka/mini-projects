
const increaseBtn = document.getElementById("submitIncrement")
const decreaseBtn = document.getElementById("submitDecrement")
const resetBtn = document.getElementById("submitReset")
const countContainer = document.getElementById("myH1")

let displayNumber = "0"

increaseBtn.onclick = function() {
    displayNumber++
    countContainer.textContent = displayNumber
}

decreaseBtn.onclick = function() {
    displayNumber--
    countContainer.textContent = displayNumber
}

resetBtn.onclick = function() {
    displayNumber = 0
    countContainer.textContent = displayNumber
}