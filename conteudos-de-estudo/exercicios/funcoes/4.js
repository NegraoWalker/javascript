function valorASerPagoProduto(valorProdutoEtiqueta) {
    valorImposto = 8.875 / 100 * valorProdutoEtiqueta;
    valorProdutoComImposto = valorProdutoEtiqueta + valorImposto;
    return `O valor a ser pago pelo produto é R$${valorProdutoComImposto.toFixed(2)}`
}

console.log(valorASerPagoProduto(12));