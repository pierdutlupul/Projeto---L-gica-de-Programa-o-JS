function retornaUmaFuncao(){

    function bomDia() {
        return "Bom Dia";
    }
    
    return bomDia; //retorna a função bomDia para a função retornaUmaFuncao
    // return bomDia(); retornaria a chamada da função, no caso a string "Bom dia"
}

console.log(retornaUmaFuncao);
console.log(retornaUmaFuncao());
console.log(retornaUmaFuncao()());