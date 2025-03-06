function adicionaItem() {
    const listaDeItens = document.getElementById("lista");
    const novoItem = document.createElement("li");
    novoItem.textContent = "Novo item";

    listaDeItens.appendChild(novoItem);
}

function removeItem() {
    const listaDeItens = document.getElementById("lista");
    const ultimoItemDaLista = listaDeItens.lastElementChild;

    listaDeItens.removeChild(ultimoItemDaLista);
}