//Declaração do objeto carro
let carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2024,
  cor: "Prata",
  airbag: true,
  itens: ["abs", "4 portas", "step"],
};
/*======================================================================================================================*/
console.log(carro.marca); //Acessando um campo/propriedade do objeto
console.log(carro["modelo"]); //Acessando um campo/propriedade do objeto
/*======================================================================================================================*/
carro.cor = "Preto"; //Alterando o valor de uma propriedade
console.log(carro.cor);
/*======================================================================================================================*/
carro.kmRodados = 25000; //Adicionando uma nova propriedade ao objeto
console.log(carro);
