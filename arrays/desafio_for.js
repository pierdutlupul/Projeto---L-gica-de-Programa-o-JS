const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

/* //resolução menos flexível
for (let i = 8; i >= 0; i -= 2){
    console.log(numeros[i]);
} */

/* //resolução mais flexível 
for (let i = numeros.length - 2; i >= 0; i -= 2){
    console.log(numeros[i]);
}

 */

console.log(numeros.length)