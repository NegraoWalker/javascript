/*
Crie uma função que receba uma data e extraia o ano, mês e dia dessa data.
Exiba as informações no console.
Exemplo Entrada: // 2024-10-07
Exemplo Saída: // Ano: 2024, Mês: 10, Dia: 6
*/

function extrairAnoMesDia(data) {
    // Converte a string da data para um objeto Date
    const dataObjeto = new Date(data);
    
    // Extrai o ano, o mês (adiciona 1 porque é baseado em zero) e o dia
    const ano = dataObjeto.getFullYear();
    const mes = dataObjeto.getMonth() + 1; // Mês começa de 0 (janeiro) a 11 (dezembro)
    const dia = dataObjeto.getDate();
    
    // Exibe as informações no console
    console.log(`Ano: ${ano}, Mês: ${mes}, Dia: ${dia}`);
}

// Exemplo de uso
extrairAnoMesDia("2024-10-07T00:00:00");
