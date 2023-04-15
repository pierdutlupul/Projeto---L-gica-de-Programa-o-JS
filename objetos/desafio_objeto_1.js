const data = {
    dia: 10,
    mes: 04,
    ano: 202,
    metodo: function(){
        return `${this.dia}/${this.mes}/${this.ano}`
    },
}

console.log(data.metodo());