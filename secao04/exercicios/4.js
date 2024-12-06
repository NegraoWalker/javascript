const valorProdutoImposto = function (valorProduto) {
  let valorComImposto = valorProduto + valorProduto * (8.875 / 100);
  console.log(`O valor a ser pago é ${valorComImposto}`);
};

valorProdutoImposto(50);
