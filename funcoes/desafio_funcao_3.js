function calcMenorNota(n1, n2, n3){
    if (n1 <= n2 && n1 <= n3){
        return n1;
    } else if(n2 <= n1 && n2 <= n3){
        return n2;
    } else {
        return n3;
    }
}

function mediaNotas(n1, n2, n3){
    const menorNota = calcMenorNota(n1, n2, n3)
    if (n1 == menorNota) {
        return (n2 + n3) / 2;
    } else if (n2 == menorNota){
        return (n1 + n3) / 2;
    } else if (n3 == menorNota){
        return (n1 + n2) / 2;
    }
}

function retornaConceito(n1, n2, n3){
    if (mediaNotas(n1, n2, n3) <= 10 && mediaNotas(n1, n2, n3) >= 7) {
        return "Aprovado";
    } else if (mediaNotas(n1, n2, n3) < 7 && mediaNotas(n1, n2, n3) >= 4) {
        return "Recuperação"
    } else if (mediaNotas(n1, n2, n3) < 4){
        return "Reprovado"
    }
}

console.log(`Seu status consta como: ${retornaConceito(4, 3, 2)}`); 