let count = 0;
const elementHTML = document.getElementById("buttonClick");

elementHTML.addEventListener("click", handleClick);

function handleClick() {
    count++;
    console.log("Valor de count: " + count);
    
    if (count === 5) {
        elementHTML.removeEventListener("click", handleClick);
        console.log("Removeu o addEventListener!");
    }
}