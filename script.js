//if the clicked object is a digit 
function printSymbol(e)
{
    let result = document.getElementById("result");
    let obj = e.target;
    
    if (result.value == 0)
        result.value = obj.textContent;
    else
        result.value = result.value + obj.textContent;
}
 
let result = document.getElementById("result");
let clear = document.getElementById("clear");
let equal = document.getElementById("equal");
let symbols = document.getElementsByClassName("symbol")
for (let i = 0; i < symbols.length; i++)
    symbols[i].addEventListener("click", printSymbol);
clear.addEventListener("click", () => result.value = 0 );
equal.addEventListener("click", e => result.value = eval(result.value) )
