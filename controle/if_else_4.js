const hora = 23;
let saudacao;

if (hora < 12) {
    saudacao = "bom dia";
} else if (hora < 16) {
    saudacao = "boa tarde";
} else if(hora < 22) {
    saudacao = "boa noite";
} else {
    saudacao = "muito tarde";
}



console.log(saudacao);