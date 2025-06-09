function trocarImagem() {
    const elementoHTML = document.getElementById("myImage");
    if (elementoHTML.getAttribute("src") === "imagem1.png") {
        elementoHTML.setAttribute("src", "imagem2.png");
    } else {
        elementoHTML.setAttribute("src", "imagem1.png");
    }
}

function trocarTipo() {
    const elementoHTML = document.querySelector("input");
    if (elementoHTML.getAttribute("type") === "text") {
        elementoHTML.setAttribute("type", "checkbox");
    } else {
        elementoHTML.setAttribute("type", "text");
    }
}