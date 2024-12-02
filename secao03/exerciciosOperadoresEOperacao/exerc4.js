const qtdDeProdutosEmEstoque = "20";
const qtdMinDeProdutosEmEstoque = 20;

const convQtdDeProdutosEmEstoque = Number(qtdDeProdutosEmEstoque);

if (convQtdDeProdutosEmEstoque >= qtdMinDeProdutosEmEstoque) {
  console.log("A quantidade  no estoque é suficiente: true");
}
