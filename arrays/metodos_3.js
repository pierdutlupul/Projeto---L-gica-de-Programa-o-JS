const numeros = [10, 25, 31, 47];

function praCadaElemento(elemento, indice, array){ //sempre o 1° param passado para o for each sera o elementos 
    console.log(elemento, indice, array);          // o segundo param o indice
}                                                  // o terceiro param o array completo

numeros.forEach(praCadaElemento);
