const car = {
    brand: "Toyota",
    model:"Camry",
    year: 2024,
    color:"Silver",
    fuelType: "Gasoline",
    price: "$25,000",
}

for (info in car) {
    // console.log(info);
    console.log(`${info}: ${car[info]}`);
}

// for (info of car) { //Não funciona para objetos
//     console.log(info);
// }