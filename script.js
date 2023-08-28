const printSymbol = (e) =>
{
    let result = document.getElementById("result");
    let obj = e.target;
    result.textContent = result.textContent + obj.textContent;
}

//clear screen
let clearScreen = () => {
    document.getElementById('result').textContent = 0;
}

let result = document.getElementById("result");
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let num3 = document.getElementById("num3");
let num4 = document.getElementById("num4");
let num5 = document.getElementById("num5");
let num6 = document.getElementById("num6");
let num7 = document.getElementById("num7");
let num8 = document.getElementById("num8");
let num9 = document.getElementById("num9");
let clear = document.getElementById('clear');
num1.addEventListener("click", printSymbol);
num2.addEventListener("click", printSymbol);
num3.addEventListener("click", printSymbol);
num4.addEventListener("click", printSymbol);
num5.addEventListener("click", printSymbol);
num6.addEventListener("click", printSymbol);
num7.addEventListener("click", printSymbol);
num8.addEventListener("click", printSymbol);
num9.addEventListener("click", printSymbol);
clear.addEventListener('click', clearScreen);