function calcularMedia(nota1, nota2, nota3) {
    media = ((nota1 + nota2 + nota3) / 3);
    return media;
}

function calcularMediaFinal(calcularMedia, notaProvaFinal) {
    mediaFinal = ((calcularMedia + notaProvaFinal) / 2);
    return `A média desse aluno é ${mediaFinal.toFixed(2)}`;
}


console.log(calcularMediaFinal(calcularMedia(5.50,6.1,7.2), 4));