function criarElementoHTMLComInnerText() {
  const elementoSelecionado = document.getElementById("lista-de-elementos");
  const novoElemento = document.createElement("li");
  novoElemento.innerText = "Texto adicionado como elemento li usando innerText";
  elementoSelecionado.appendChild(novoElemento);
}

function criarElementoHTMLComInnerHTML() {
  const elementoSelecionado = document.getElementById("lista-de-elementos");
  const novoElemento = document.createElement("li");
  //   novoElemento.innerHTML = `<input type="text" />`;
  novoElemento.innerHTML = `<p>Parágrafo adicionado com innerHTML com elemento da lista</p>`;
  elementoSelecionado.appendChild(novoElemento);
}

function criarElementoHTMLComTextContent() {
  const elementoSelecionado = document.getElementById("lista-de-elementos");
  const novoElemento = document.createElement("li");
  novoElemento.textContent =
    "Texto adicionado como elemento li usando textContent";
  elementoSelecionado.appendChild(novoElemento);
}
