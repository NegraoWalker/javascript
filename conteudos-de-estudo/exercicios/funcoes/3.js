function conversaoTemperatura(grausCelsius) {
    grausF = grausCelsius * (9 / 5) + 32;
    return `A temperatura correspondente em Farenheit é de ${grausF}°F`;
}

console.log(conversaoTemperatura(35));