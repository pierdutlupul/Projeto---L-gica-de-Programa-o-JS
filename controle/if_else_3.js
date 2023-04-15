const hora = 11;
let saudacao;

if (hora < 12) {
    saudacao = "bom dia";
} else if (hora < 16) {
    saudacao = "boa tarde";
} else {
    saudacao = "boa noite";
}



console.log(saudacao);