function fatorial(numero) {
    if (numero === 0 || numero === 1) { //Condição de parada da recursividade
        return 1;
    }
    return numero * fatorial(numero - 1); //Recursividade
}

let numero = 5;
console.log(`Fatorial de ${numero} é ` + fatorial(numero));