function criaElementoHTML() {
    const ulSelecionada = document.getElementById("lista-de-elementos");
    const novaLi = document.createElement("li");
    const novoInput = document.createElement("input");
    novaLi.appendChild(novoInput);
    ulSelecionada.appendChild(novaLi);
}