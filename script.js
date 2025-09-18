let num1 = document.getElementById("firstNumber");
num1.textContent = Math.ceil(Math.random() * 100);
let num2 = document.getElementById("secondNumber");
num2.textContent = Math.ceil(Math.random() * 100);

function checkButton() {
    let checksum = parseInt(document.getElementById("userInput").value);
    let n1 = parseInt(num1.textContent);
    let n2 = parseInt(num2.textContent);
    let msgres = document.getElementById("gameResult");
    if (checksum === n1 + n2) {
        msgres.textContent = "Congratulation!You got it Right";
        msgres.style.backgroundColor = "#028a0f";
        msgres.style.color = "white"
    } else {
        msgres.textContent = "Please Try again";
        msgres.style.backgroundColor = "#1e217c";
        msgres.style.color = "white";
    }
}

function restart() {
    let nu1 = document.getElementById("firstNumber");
    nu1.textContent = Math.ceil(Math.random() * 100);
    let nu2 = document.getElementById("secondNumber");
    nu2.textContent = Math.ceil(Math.random() * 100);
    let clearmsg = document.getElementById("gameResult");
    clearmsg.textContent = "";
    document.getElementById("userInput").value = "";
}
