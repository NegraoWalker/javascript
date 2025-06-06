function criaElementoHTMLComInnerText() {
    const ulSelecionada = document.getElementById("lista-de-elementos");
    const novaLi = document.createElement("li");
    novaLi.innerText = "Novo input com InnerText";

    const novoInput = document.createElement("input");
    novaLi.appendChild(novoInput);
    ulSelecionada.appendChild(novaLi);
}

function criaElementoHTMLComInnerHTML() {
    const ulSelecionada = document.getElementById("lista-de-elementos");
    const novaLi = document.createElement("li");
    novaLi.innerHTML = "<input type='text' />";
}