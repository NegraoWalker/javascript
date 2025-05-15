function geraNumeroAleatorio(min, max) {
    console.log("Aleatório entre 0 e 1: " + Math.random());
    console.log("Aleatório entre 0 e 100: " + Math.random() * 100);
    console.log(`Aleatório entre ${min} e ${max}: ${Math.random() * (max - min) + min}`);
}

geraNumeroAleatorio(50,100);