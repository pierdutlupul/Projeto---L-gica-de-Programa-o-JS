// 1) função com parâmetros e com retorno
function somar(a, b) {
    return a + b;
}

let resultado = somar(30, 56);
console.log(`O resultado é ${resultado}`); 
console.log(`O resultado é ${somar(30, 56)}`);

// 2) função com parâmetros e sem retorno
function exibirMultiplicacao(a, b) {
    console.log(a * b);
}

exibirMultiplicacao(10, 21);
exibirMultiplicacao(7, 9);

// 3) função sem parâmetros e com retorno
function retornarDataAtual() {
    return new Date();
}

console.log(retornarDataAtual());

// 4) função sem parâmetros e sem retorno
function exibirHoraAtual(){
    console.log(new Date().getHours());
}

exibirHoraAtual();