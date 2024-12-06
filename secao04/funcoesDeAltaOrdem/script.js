//Funções de Alta Ordem:
//1. Recebem uma ou mais funções como argumento
function aplicarOperacao(x, operacao) {
  return operacao(x);
}

function dobrar(numero) {
  return numero * 2;
}

function triplicar(numero) {
  return numero * 3;
}

const resultado1 = aplicarOperacao(16, dobrar);
const resultado2 = aplicarOperacao(4, triplicar);

console.log(resultado1);
console.log(resultado2);

//========================================================================================================================
//2. Recebem uma função como resultado
function criarIncrementador(incremento) {
  return function (numero) {
    return numero + incremento;
  };
}

const incrementoPor2 = criarIncrementador(2);

console.log(incrementoPor2(3));
