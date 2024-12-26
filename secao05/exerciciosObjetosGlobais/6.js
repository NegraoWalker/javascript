/*
Crie uma função que receba a data de nascimento de uma pessoa e calcule sua
idade com base na data atual. Exiba a idade no console.
Exemplo Entrada: // 1990-05-15
Exemplo Saída: // Idade: 34
*/

function calcularIdade(dataNascimento) {
    // Converte a string da data de nascimento para um objeto Date
    const dataNascimentoObj = new Date(dataNascimento);
    const hoje = new Date(); // Obtém a data atual
    
    // Calcula a idade com base na diferença de anos
    let idade = hoje.getFullYear() - dataNascimentoObj.getFullYear();
    
    // Ajusta a idade caso o mês/dia atual ainda não tenha atingido o mês/dia de nascimento
    if (
        hoje.getMonth() < dataNascimentoObj.getMonth() || 
        (hoje.getMonth() === dataNascimentoObj.getMonth() && hoje.getDate() < dataNascimentoObj.getDate())
    ) {
        idade--;
    }
    
    // Exibe a idade no console
    console.log(`Idade: ${idade}`);
}

// Exemplo de uso
calcularIdade('1990-05-15');
