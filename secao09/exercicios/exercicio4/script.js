let count = 0;
 
// Adiciona o evento keydown corretamente
document.addEventListener("keydown", preventScroll);
 
function preventScroll(event) {
    if (event.key === "ArrowDown") {  // Verifica se a tecla pressionada é "ArrowDown"
        event.preventDefault();
        count++;
        console.log(`Rolagem bloqueada ${count} vezes`);
    }
    // Remove o evento após 10 execuções
    if (count >= 10) {
        document.removeEventListener("keydown", preventScroll);
        console.log("O bloqueio de rolagem foi removido após 10 vezes.");
    }
}