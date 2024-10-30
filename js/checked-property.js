const myCheckbox = document.getElementById("myCheckbox")
const visaBtn = document.getElementById("visaBtn")
const masterCardBtn = document.getElementById("masterCardBtn")
const payPalButton = document.getElementById("payPalButton")
const mySubmit = document.getElementById("mySubmit")
const mySubResult = document.getElementById("myOutput")
const myPaymentResult = document.getElementById("myPayment")

mySubmit.onclick = function() {
    if (myCheckbox.checked){
        mySubResult.textContent = ("You have subscribed.")
    } 
    else {
        mySubResult.textContent = ("You have NOT subscribed.")
    }
    if (visaBtn.checked){
        myPaymentResult.textContent = ("You are paying with Visa.")
    }
    else if (masterCardBtn.checked){
        myPaymentResult.textContent = ("You are paying with MasterCard.")
    }
    else if (payPalButton.checked){
        myPaymentResult.textContent = ("You are paying with PayPal.")
    }
    else {
        myPaymentResult.textContent = ("Please select payment type.")
    }
}