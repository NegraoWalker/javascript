/*
Exercício 1: Cálculo do Faturamento Semanal
Você é o gerente de uma lanchonete e deseja calcular o valor total das vendas de hambúrgueres em uma
semana. Cada hambúrguer custa R$10, e você registra o número de hambúrgueres vendidos a cada dia da
semana. Crie um programa que calcule o valor total das vendas em uma semana.
*/

const precoHamburguer = 10;
const vendasSemana = [5, 4, 8, 6, 25, 30, 38];
let valorTotalDeVendas = 0.0;

for (let index = 0; index < 7; index++) {
    valorTotalDeVendas += vendasSemana[index] * 10;
}

console.log(`Valor de vendas na semana foi de R$${valorTotalDeVendas}`);