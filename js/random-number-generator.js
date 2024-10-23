const numberGeneratorBtn = document.getElementById("submit")

const numContainer = document.getElementById("myH1")

let displayNumber = "0"

numberGeneratorBtn.onclick = function() {
    displayNumber = Math.floor(Math.random() * 100)
    // displayNumber = Math.random()
    numContainer.textContent = displayNumber
}

