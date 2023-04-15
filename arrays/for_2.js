const notas = [7, 8, 3, 5, 10, 9, 8, 8];

let valores = "";
// foreach > para cada
for(let nota of notas){ //atribui o valor de cada posição de notas, para váriavel nota percorrendo cada uma das posições
    valores += nota + " "; // vai fazer uma concatenação da string valores com o valor de notas 
}

console.log(valores);

let indices = "";
for (let indice in notas){
    indices += indice + " "
}
console.log(indices);