/*
Crie uma função que receba uma data e a formate no padrão brasileiro (dia/mês/ano).
Exiba o resultado no console.
Exemplo Entrada: // 2024-10-07
Exemplo Saída: // Data formatada no padrão brasileiro: 07/10/2024
*/

function formatarDataParaBrasileiro(data) {
    // Converte a string da data para um objeto Date
    const dataObjeto = new Date(data);

    // Obtém o dia, mês e ano e formata com dois dígitos para dia e mês
    const dia = String(dataObjeto.getDate()).padStart(2, '0');
    const mes = String(dataObjeto.getMonth() + 1).padStart(2, '0'); // Mês começa em 0
    const ano = dataObjeto.getFullYear();

    // Cria a data no formato brasileiro
    const dataFormatada = `${dia}/${mes}/${ano}`;

    // Exibe o resultado no console
    console.log(`Data formatada no padrão brasileiro: ${dataFormatada}`);
}

// Exemplo de uso
formatarDataParaBrasileiro('2024-10-07');
