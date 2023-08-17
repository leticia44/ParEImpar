function checkParity() {
    var number = parseInt(document.getElementById("numberInput").value);
    var resultElement = document.getElementById("result");

    if (isNaN(number)) {
        resultElement.textContent = "Por favor, insira um valor válido.";
    } else {
        if (number % 2 === 0) {
            resultElement.textContent = "O número é par.";
        } else {
            resultElement.textContent = "O número é ímpar.";
        }
    }
}

var checkButton = document.getElementById("checkButton");
checkButton.addEventListener("click", checkParity);