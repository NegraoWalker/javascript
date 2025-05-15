function extraiAnoMesDia(dataEmString) {
    let data = new Date(dataEmString);
    let ano = data.getFullYear();
    let mes = data.getMonth() + 1;
    let dia = data.getDate();
    console.log(`Ano: ${ano} - Mês: ${mes} - Dia: ${dia}`);
}

extraiAnoMesDia("2024-10-07");