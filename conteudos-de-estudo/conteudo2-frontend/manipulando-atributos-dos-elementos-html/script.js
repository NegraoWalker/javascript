let meuElemento = document.getElementById('meuElemento');

function virarCirculo() {
    meuElemento.classList.add('circulo');
    meuElemento.classList.remove('quadrado');
}

function virarQuadrado() {
    meuElemento.classList.add('quadrado');
    meuElemento.classList.remove('circulo');
}

function alterarFormato() {
    meuElemento.classList.toggle('circulo');
    meuElemento.classList.toggle('quadrado');
}

function verificarClasse() {
    if (meuElemento.classList.contains('circulo')) {
        console.log("O elemento possui a classe círculo!");
    }else {
        console.log("O elemento possui a classe quadrado!");
    }
}
