const precoProduto = 200;
const desconto = 40;
const imposto = 12;

const precoDoProdutoComDesconto = precoProduto - desconto;

const precoFinalProduto = precoDoProdutoComDesconto + imposto;
console.log("Preço final do produto: R$ " + precoFinalProduto);
