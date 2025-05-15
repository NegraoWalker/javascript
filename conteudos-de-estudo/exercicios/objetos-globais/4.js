function duracaoEntreDatas(data1, data2) {
    let diferencaEmDias = new Date(data2) - new Date(data1);
    diferencaEmDias = Math.floor(diferencaEmDias / (1000 * 60 * 60 * 24));
    console.log(`Diferença em dias entre as datas ${data2} e ${data1}: ${diferencaEmDias}`);
}

duracaoEntreDatas("2024-01-01", "2024-10-07");