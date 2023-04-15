const numeros = [1, 2, 3, 4, 5];

numeros[0] = 100;
numeros.push(6); 

console.log(numeros.includes(10)); // verifica se o valor passado a includes está no array 
console.log(numeros.join(" - ")); //junta todos os elementos do array com um elemento específico que você colocar


const numeros2 = numeros.concat(7, 8, 9); /* vai gerar um outro array, a partir do primeiro array 
concatenado com os numeros passados */
console.log(numeros2);