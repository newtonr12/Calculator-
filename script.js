function printSymbol(e) {
    let result = document.getElementById("result");
    let obj = e.target;

    if (obj.id === "ce-ac") {
        if (result.value !== "0") {
            result.value = "0"; // AC functionality
        } else {
            let currentValue = result.value;
            result.value = currentValue.slice(0, -1); // CE functionality
        }
    } else if (result.value == "0") {
        result.value = obj.textContent;
    } else {
        result.value = result.value + obj.textContent;
    }
}

let ceAcButton = document.getElementById("ce-ac"); // Modify the button ID
let result = document.getElementById("result");
let symbols = document.getElementsByClassName("symbol");

for (let i = 0; i < symbols.length; i++) {
    symbols[i].addEventListener("click", printSymbol);
}

ceAcButton.addEventListener("click", printSymbol); // Listen for clicks on the CE/AC button
let equal = document.getElementById("equal");

equal.addEventListener("click", () => {
    try {
        result.value = eval(result.value);
    } catch (error) {
        result.value = "Error"; // Display an error message
    }
});
