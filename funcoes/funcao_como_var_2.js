function subtrair(a, b){
    return a - b;
}
const subtracao = subtrair; //pode se armazenar uma função numa constante variável;

console.log(subtrair(5, 2));
console.log(subtracao(5, 2));