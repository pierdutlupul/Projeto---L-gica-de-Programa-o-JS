function retornarUmaFuncao() {
    return function () {
        return "Boa tarde!"
    }
}

console.log(retornarUmaFuncao); // retorna a própria função
console.log(retornarUmaFuncao()); //retorna o return function q é uma função anonima
console.log(retornarUmaFuncao()()); /* ele vai primeiramente retornar a função anonima function 
através da chamada de retornarUmaFunção e depois vai exbir o retorno da função function 
que é boa tarde exibindo assim a string */