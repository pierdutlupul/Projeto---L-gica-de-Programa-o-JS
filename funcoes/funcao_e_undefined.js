function semRetorno(){
    console.log("Funcao foi chamada!"); //por não retornar nada seu valor será undefined
}

let a = 3;
let b = a * 7 + 10;
let c = semRetorno();

console.log(a, b, c);