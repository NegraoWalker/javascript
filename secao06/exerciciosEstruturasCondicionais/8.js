/*
Exercício 8: Verificação de Placa de Veículo
Crie uma função verificarPlaca que recebe o último dígito da placa de um veículo como argumento (um
número de 0 a 9) e retorna uma mensagem indicando o dia de rodízio em São Paulo, com base no último
dígito da placa.
*/


console.log(verificarPlaca(2)); // Segunda-feira: Rodízio para placas com final 1 e 2.
console.log(verificarPlaca(5)); // Quarta-feira: Rodízio para placas com final 5 e 6.
console.log(verificarPlaca(9)); // Sexta-feira: Rodízio para placas com final 9 e 0.
console.log(verificarPlaca(12)); // Por favor, insira um número válido de 0 a 9.



function verificarPlaca(ultimoDigito) {
    // Verifica se o argumento é válido (de 0 a 9)
    if (ultimoDigito < 0 || ultimoDigito > 9 || isNaN(ultimoDigito)) {
        return "Por favor, insira um número válido de 0 a 9.";
    }

    // Define o dia de rodízio com base no último dígito
    switch (ultimoDigito) {
        case 1:
        case 2:
            return "Segunda-feira: Rodízio para placas com final 1 e 2.";
        case 3:
        case 4:
            return "Terça-feira: Rodízio para placas com final 3 e 4.";
        case 5:
        case 6:
            return "Quarta-feira: Rodízio para placas com final 5 e 6.";
        case 7:
        case 8:
            return "Quinta-feira: Rodízio para placas com final 7 e 8.";
        case 9:
        case 0:
            return "Sexta-feira: Rodízio para placas com final 9 e 0.";
        default:
            return "Erro: entrada inválida.";
    }
}


