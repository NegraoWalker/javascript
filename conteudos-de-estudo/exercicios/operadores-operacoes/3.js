const ORCAMENTO = 250, DESCONTO = 50, CUSTO_DO_PRODUTO = 300;
let valorProdutoFinal = CUSTO_DO_PRODUTO - DESCONTO;
let estaDentroDoOrcamento = true;

console.log(`Preço com desconto: ${valorProdutoFinal} e está dentro do orçamento: ${estaDentroDoOrcamento}`);