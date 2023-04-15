//break
for (let i = 1; i <= 5; i++) {
    if(i === 3) {
        break; /*após o break ser executado ou seja quando i === 3
        ele vai sair do contexto for(todo) e ir para próxima 
        linha de código após as chaves pertencentes do for*/}
    console.log(i);
}
//continue
for (let i = 1; i <= 5; i++) {
    if(i === 3){
        continue; /* o continue interrompe apenas a condição i === 3 pula ela e 
      e continua executando o laço for ou seja vai para a condição i === 4 (não finaliza o laço for) */
    }
    console.log(i);
}