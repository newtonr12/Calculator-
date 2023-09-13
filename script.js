
//this prints out symbol on the calculator screen..
function printSymbol(e)
{
    let result = document.getElementById("result");
    let obj = e.target;
    
    result.value = result.value + obj.textContent;
}
//if the clicked object is a digit 
function printDigit(e)
{
    let result = document.getElementById("result");
    let obj = e.target;
    
    if (result.value == 0)
        result.value = obj.textContent;
    else
        result.value = result.value + obj.textContent;
}


num0.addEventListener("click", printDigit);
num1.addEventListener("click", printDigit);
num2.addEventListener("click", printDigit);
num3.addEventListener("click", printDigit);
num4.addEventListener("click", printDigit);
num5.addEventListener("click", printDigit);
num6.addEventListener("click", printDigit);
num7.addEventListener("click", printDigit);
num8.addEventListener("click", printDigit);
num9.addEventListener("click", printDigit);
sub.addEventListener("click", printSymbol);
plus.addEventListener("click", printSymbol);
mult.addEventListener("click", printSymbol);
div.addEventListener("click", printSymbol);
decimal.addEventListener("click", printSymbol);
leftp.addEventListener("click", printSymbol);
rightp.addEventListener("click", printSymbol);
clear.addEventListener("click", 
    () => document.getElementById("result").value = 0 );
//clear.addEventListener("click", clearScreen);
equal.addEventListener("click", e => result.value = eval(result.value) )
