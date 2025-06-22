function adicionaElemento() {
    const elementoUl = document.getElementById("lista");
    const elementoLi = document.createElement("li");
    elementoLi.textContent = "Novo item"
    elementoUl.appendChild(elementoLi);
}

function removeElemento() {
    const elementoUl = document.getElementById("lista");
    const elementoLi = elementoUl.lastElementChild;
    elementoUl.removeChild(elementoLi)
}