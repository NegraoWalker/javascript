/*
Crie uma função que receba duas datas e calcule a diferença entre elas em dias.
Exiba o resultado no console.
Exemplo Entrada: // 2024-01-01, 2024-10-07
Exemplo Saída: // Diferença em dias entre 2024-01-01 e 2024-10-07: 280
*/

function calcularDiferencaEmDias(data1, data2) {
    // Converte as strings das datas para objetos Date
    const primeiraData = new Date(data1);
    const segundaData = new Date(data2);
    
    // Calcula a diferença em milissegundos
    const diferencaEmMilissegundos = Math.abs(segundaData - primeiraData);
    
    // Converte a diferença de milissegundos para dias
    const diferencaEmDias = Math.ceil(diferencaEmMilissegundos / (1000 * 60 * 60 * 24));
    
    // Exibe o resultado no console
    console.log(`Diferença em dias entre ${data1} e ${data2}: ${diferencaEmDias}`);
}

// Exemplo de uso
calcularDiferencaEmDias('2024-01-01', '2024-10-07');
