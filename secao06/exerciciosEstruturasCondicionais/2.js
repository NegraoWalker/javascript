/*
Exercício 2: Verificação de Produto em Estoque
Escreva um programa verificarEstoque que verifica se um produto está em estoque com base na quantidade
disponível. Se a quantidade disponível for maior que zero, exiba "Produto disponível", caso contrário, exiba
"Produto esgotado" no console.
*/

let qtdProdutoEmEstoque = 2;

if (qtdProdutoEmEstoque > 0) {
    console.log(`Produto disponível em estoque. A quantidade é ${qtdProdutoEmEstoque}`);
} else {
    console.log("Produto esgotado!");
}