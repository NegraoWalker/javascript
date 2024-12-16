const array = [4, 6, 8, 2];
console.log(
  array.every(function (numero) {
    return numero > 3;
  })
);

/*
  O método every() verifica se todos os elementos do array satisfazem a condição especificada.
*/
