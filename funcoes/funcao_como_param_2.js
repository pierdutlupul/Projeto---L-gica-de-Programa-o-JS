function executar(fn, n1, n2){
    if(typeof fn === "function"){ //condição estrita para que fn seja uma função e não cause problemas no código
        console.log(fn(n1, n2));
    }
}

function somar(a, b){
    return a + b;
}

function subtrair(a, b){
    return a - b;
}

function multiplicar(a, b){
    return a * b;
}

executar(somar, 4, 2);
executar(subtrair, 4, 2);
executar(multiplicar, 4, 2);


