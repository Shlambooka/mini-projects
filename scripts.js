
let displayNumber = "1"

document.getElementById("myH1").textContent = displayNumber

document.getElementById("submitIncrement").onclick = function() {
    displayNumber++
    document.getElementById("myH1").textContent = displayNumber
}

document.getElementById("submitDecrement").onclick = function() {
    displayNumber--
    document.getElementById("myH1").textContent = displayNumber
}

document.getElementById("submitReset").onclick = function() {
    displayNumber = 0
    document.getElementById("myH1").textContent = displayNumber
}