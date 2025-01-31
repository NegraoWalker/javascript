function criarElementoHTML() {
  const elementoSelecionado = document.getElementById("lista-de-elementos");
  console.log(elementoSelecionado);
  const novoElemento = document.createElement("li");
  console.log(novoElemento);
  const novoInput = document.createElement("input");
  elementoSelecionado.appendChild(novoElemento).appendChild(novoInput);
}
