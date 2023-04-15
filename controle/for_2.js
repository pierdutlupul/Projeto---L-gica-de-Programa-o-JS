//for (;;){ } => laços infinitos

//for ( ; true ; ){ } => laços infinitos

let controle = 1
for (; controle <= 10;) {
    console.log(controle);
    controle += 2
}
console.log("Fim!");