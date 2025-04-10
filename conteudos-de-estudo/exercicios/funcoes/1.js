function calcularMedia(nota1, nota2, nota3) {
    media = ((nota1 + nota2 + nota3) / 3);
    return `A média desse aluno é ${media.toFixed(2)}`;
}

console.log(calcularMedia(8.63, 7.45, 5));