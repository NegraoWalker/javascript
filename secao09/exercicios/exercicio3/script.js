const elementoHTMLForm = document.getElementById("myForm");
const elementoHTMLInput = document.getElementById("myInput");
 
// Captura o envio do formulário ao clicar no botão
elementoHTMLForm.addEventListener("submit", handleSubmit);

// Captura a tecla Enter e impede o envio do formulário
elementoHTMLInput.addEventListener("keydown", handleEnter);

function handleSubmit(event) {
    event.preventDefault(); // Previne o envio do formulário
    console.log("Formulário não enviado!");
}

function handleEnter(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        console.log("Envio prevenido ao pressionar Enter!");
    }
}
 