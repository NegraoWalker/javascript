/*
Exercício 1: Verificação de Desconto
Crie um programa verificaDesconto que verifique se um cliente tem direito a um desconto. Se o valor da
compra for maior ou igual a R$ 100, o cliente recebe um desconto de 10%. Caso contrário, nenhum desconto
é aplicado. O programa deve imprimir mensagens que retornem o se o cliente possui ou não o direito de
retorno e o valor da compra no console
*/

let valorDaCompra = 99.99;

if (valorDaCompra >= 100) {
   const desconto = 0.1 * valorDaCompra;
   valorDaCompra = valorDaCompra - desconto;
   console.log(`Cliente possui desconto de 10% na compra. Valor da compra deduzido o desconto ${valorDaCompra.toFixed(2)}`); 
} else {
    console.log(`Cliente não possui desconto de 10% na compra. Valor da compra ${valorDaCompra.toFixed(2)}`); 
}