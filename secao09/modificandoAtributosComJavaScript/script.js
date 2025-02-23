function trocaImagem() {
    const elementoSelecionado = document.getElementById("myImage");
    const valorAtualSrc = elementoSelecionado.getAttribute("src");

    if (valorAtualSrc === "imagem1.png") {
        elementoSelecionado.setAttribute("src", "imagem2.png");
        elementoSelecionado.setAttribute("alt", "Professor Daniel");
    } else {
        elementoSelecionado.setAttribute("src", "imagem1.png");
        elementoSelecionado.setAttribute("alt", "Pessoa desconhecida");
    }
}

function trocaOTipoDoInput() {
    const elementosSelecionados = document.getElementsByClassName("myInput"); //O método getElementsByClassName retorna uma HTMLCollection, que é uma lista de elementos, mesmo que haja apenas um elemento com essa classe. Portanto, você precisa acessar o primeiro elemento dessa coleção para poder manipular seus atributos.
    const elementoSelecionado = elementosSelecionados[0];

    const valorAtualType = elementoSelecionado.getAttribute("type");

    switch (valorAtualType) {
        case "text":
            elementoSelecionado.setAttribute("type", "number");
            break;
        case "number":
            elementoSelecionado.setAttribute("type", "radio");
            break;
        case "radio":
            elementoSelecionado.setAttribute("type", "range");
            break;
        default:
            elementoSelecionado.setAttribute("type", "text");
            break;
    }
}