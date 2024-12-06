const media = function (nota1, nota2, nota3) {
  return (nota1 + nota2 + nota3) / 3;
};

const mediaFinal = function (provaFinal, media) {
  let mediaFinal = (provaFinal + media) / 2;
  console.log(`A média final do aluno é: ${mediaFinal}`);
};

mediaFinal(6.6, media(7, 8, 7));
