const vetor1 = ["Produto A", "Produto B"];
const vetor2 = ["Produto X", "Produto Y"];

vetor2.push("Produto Z");
const vetor3 = [...vetor2,...vetor1];
console.log(vetor3);