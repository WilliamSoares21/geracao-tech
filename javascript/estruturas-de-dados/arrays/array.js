let nomes = ["Gleidson", "Márcio", "Alessandro", "Glauber"];

console.log(nomes[0]); // Gleidson
console.log(nomes[2]); // Alessandro

nomes.push("João");
console.log(nomes); // ["Gleidson", "Márcio", "Alessandro", "Glauber", "João"]

nomes[1] = "Marcos";
console.log(nomes); // ["Gleidson", "Marcos", "Alessandro", "Glauber", "João"]

nomes.splice(2, 1);
console.log(nomes); // ["Gleidson", "Marcos", "Glauber", "João"]:let arrayIndex = array.length
