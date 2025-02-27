let elementoHTMLSelecionado = document.getElementById("meuElemento");

function alteraFormatoParaCirculo() {
    elementoHTMLSelecionado.classList.add("circulo");
    elementoHTMLSelecionado.classList.remove("quadrado");
}

function alteraFormatoParaQuadrado() {
    elementoHTMLSelecionado.classList.add("quadrado");
    elementoHTMLSelecionado.classList.remove("circulo");
}

function alteraFormato() {
    elementoHTMLSelecionado.classList.toggle("circulo");
    elementoHTMLSelecionado.classList.toggle("quadrado");
}

function verificaClasse() {
    if (elementoHTMLSelecionado.classList.contains("circulo")) {
        console.log("O elemento HTML possui a classe circulo");
    } else {
        console.log("O elemento HTML possui a classe quadrado");
    }
}