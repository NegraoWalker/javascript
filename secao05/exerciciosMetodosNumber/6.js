/*
Verificar se o número é finito
Você quer garantir que um número não seja Infinity ou NaN antes de usá-lo em cálculos.
Exemplo de Entrada: // 1 / 0;
// NaN ou “abc”;
Exemplo de Saída: // ""O número é infinito ou não é um número."
*/

const entrada1 = NaN; //1/0, NaN, "abc", 42



if(!Number.isFinite(entrada1)) {
    console.log("O número é infinito ou não é um número.");
}