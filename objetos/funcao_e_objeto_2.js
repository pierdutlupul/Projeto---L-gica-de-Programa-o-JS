function criarData(dia, mes, ano){ 
    return {
        dia: dia,
        mes: mes,
        ano: ano,
        metodo: function(){
            return `${this.dia}/${this.mes}/${this.ano}`
        }
    };
}
 

const d1 = criarData(9, 10, 2010);
const d2 = criarData(22, 11, 2023);
const d3 = criarData(3, 4, 2022);
console.log(d1.metodo());
console.log(d2.metodo());
console.log(d3.metodo());