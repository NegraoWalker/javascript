let produtoEstaDisponivel = true;
let qtdDeProdutosEmEstoque = 10, qtdMinimaDeProdutosEmEstoque = 15;

console.log(`O produto está disponível e tem quantidade suficiente: ${qtdDeProdutosEmEstoque >= qtdMinimaDeProdutosEmEstoque} 
    e o produto está indisponível: ${!produtoEstaDisponivel}`);
