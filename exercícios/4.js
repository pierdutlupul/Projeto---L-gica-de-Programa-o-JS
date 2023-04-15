function nomeDoMes(a){
    
    switch(a){
        case 12: return "dezembro";
        case 11: return "novembro";
        case 10: return "outubro";
        case 9: return "setembro";
        case 8: return "agosto";
        case 7: return "julho";
        case 6: return "junho";
        case 5: return "maio";
        case 4: return "abril";
        case 3: return "março";
        case 2: return "fevereiro";
        case 1: return "janeiro";
        default: return "mes inválido"
    }

}

console.log(nomeDoMes(3));