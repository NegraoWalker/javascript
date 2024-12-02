const produtoDisponivel = true;
const qtdDeProdutosEstoque = 10;
const qtdDeProdutosMinEstoque = 15;

if (qtdDeProdutosEstoque <= qtdDeProdutosMinEstoque) {
  console.log(
    "O produto está disponível e tem quantidade suficiente: false e o produto está indisponível: false"
  );
}
