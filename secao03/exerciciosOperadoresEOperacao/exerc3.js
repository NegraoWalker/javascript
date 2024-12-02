const orcamento = 250;
const desconto = 50;
const custoDoProduto = 300;

const precoDoProdutoComDesconto = custoDoProduto - desconto;

if (orcamento === precoDoProdutoComDesconto) {
  console.log(
    `Preco do produto com desconto: R$ ${precoDoProdutoComDesconto} e está dentro do orçamento? True`
  );
}
