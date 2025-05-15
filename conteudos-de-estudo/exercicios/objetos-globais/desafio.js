function formatarPadraoBrasileiroDate(dataString) {
    let data = new Date(dataString + "T00:00:00");

    let dataFormatada = data.toLocaleDateString("pt-BR");
    console.log("Data formatada no padrão brasileiro: " + dataFormatada);
}

formatarPadraoBrasileiroDate("2024-10-07");