/*
Exercício 4: Classificação de Desempenho de Vendas
Você está gerenciando uma equipe de vendedores e deseja avaliar o desempenho de cada vendedor com
base em suas vendas mensais em relação a uma meta estabelecida. Escreva um programa
desempenhoIndividualDeVendas que determine a categoria de desempenho de um vendedor com base no
percentual alcançado em relação à meta. As categorias incluem "Excelente Desempenho" (para vendedores
que alcançaram ou excederam a meta), "Muito Bom Desempenho" (para vendedores com vendas entre 90% e
99% da meta), "Bom Desempenho" (para vendedores com vendas entre 80% e 89% da meta), "Desempenho
Satisfatório" (para vendedores com vendas entre 61% e 79% da meta) e "Desempenho Insatisfatório" (para
vendedores com vendas abaixo de 60% da meta). Execute o código e informe a categoria de desempenho do
vendedor com base nas vendas mensais e na meta de vendas estabelecida
*/

const metaDeVendas = 10000; //R$10.000

let desempenhoVendasDoVendedor = 59; //Valor em porcentagem

if (desempenhoVendasDoVendedor >= 100) {
    console.log("Excelente Desempenho");
} else if (desempenhoVendasDoVendedor >= 90 && desempenhoVendasDoVendedor <= 99) {
    console.log("Muito Bom Desempenho");
} else if (desempenhoVendasDoVendedor >= 80 && desempenhoVendasDoVendedor <= 89) {
    console.log("Bom Desempenho");
} else if (desempenhoVendasDoVendedor >= 61 && desempenhoVendasDoVendedor <= 79) {
    console.log("Desempenho Satisfatório");
} else if ( desempenhoVendasDoVendedor <= 60) {
    console.log("Desempenho Insatisfatório");
} else {
    console.log("Desempenho Insatisfatório");
}