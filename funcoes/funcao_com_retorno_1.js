function sempreRetornaUm() {
    return 1;
}

function textoOuNumero(retornaTexto) {
    /*   return retornaTexto ? "Sou um texto!" : 123; => operador ternário */
    if (retornaTexto) {
        return "Sou um texto!";
    } else {
        return 123;
    }
}

let valor = sempreRetornaUm() + 999; //armazena o valor retornado da função no caso "1" à variável valor
console.log(valor);

let texto = textoOuNumero(true);
console.log(texto);

console.log(textoOuNumero(false));