const array = [2, 5, 8, 1];
console.log(
  array.some(function (numero) {
    return numero > 7;
  })
);

/* 
  O método some() verifica se pelo menos um elemento do array satisfaz a condição especificada.
*/
