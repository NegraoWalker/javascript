function calculaIdade(dataEmString) {
    let data = new Date(dataEmString);
    let dataAgora = Date.now();

    let idade = Math.floor((dataAgora - data) / (1000 * 60 * 60 * 24 * 365));
    console.log(`Idade: ${idade}`);
}

calculaIdade("1990-05-15");
calculaIdade("1993-02-12");
