const cliente = {
    codigo: 16532,
    nome: "Ana",
    vip: true,
    endereco: {
        logradouro: "Rua Abc",
        numero: 123,
        complento: "Apto 101 Bloco B",
        pontosRef: [
            {nome: "Hospital X", muitoProximo: true},
            {nome: "Shopping Y", muitoProximo: false},
        ]
    },
    nomeFilhos: ["Bia", "Carlos", "Gabriel"],
};

console.log(cliente.endereco.pontosRef[0].muitoProximo);
