const produto = {
    nome: "IPad",
    preco: 5600,
    desconto: 0.5,
    precoFinal: function() {
        return this.preco - (this.preco * this.desconto); 
    }
};

console.log(produto.nome);
console.log(produto.precoFinal()); //acessa o atributo nome a partir da variável/constante produto