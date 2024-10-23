const numberGeneratorBtn = document.getElementById("submit")
const numContainer = document.getElementById("myHolder")

let displayNumber = "0"

numberGeneratorBtn.onclick = function() {
    displayNumber = Math.floor(Math.random() * 10 + 1)
    // displayNumber = Math.random()
    numContainer.textContent = displayNumber
}

