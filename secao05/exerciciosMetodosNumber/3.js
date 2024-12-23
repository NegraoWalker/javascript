/*
Arredonde valores financeiros
Você tem um valor financeiro com várias casas decimais e deseja exibi-lo com apenas duas
casas decimais.
Exemplo de Entrada: 
// 1234.56789;
Exemplo de Saída: 
// Valor formatado: 1234.57
*/

const valorFinanceiro = 1234.56789;

console.log(valorFinanceiro.toFixed(2));