/*
Exercício 7: Prioridade no Trânsito
Crie uma função chamada coresDoSemaforo que recebe uma cor de semáforo como argumento (por
exemplo, "vermelho", "amarelo" ou "verde") e retorna uma mensagem indicando se é seguro passar ou se é
necessário parar.
*/



coresDoSemaforo("Vermelho");
coresDoSemaforo("amarelo");
coresDoSemaforo("VERDE");
coresDoSemaforo("Azul");

function coresDoSemaforo(cor) {
    const corNormalizada = cor.toLowerCase();

    switch (corNormalizada) {
        case "vermelho":
            console.log("Parar!");
            break;
        case "amarelo":
            console.log("Atenção!");
            break;
        case "verde":
            console.log("Seguir!");
            break;
        default:
            console.log("Cor inválida!");
            break;
    }
}