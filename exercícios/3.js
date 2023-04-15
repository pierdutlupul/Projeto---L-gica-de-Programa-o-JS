function calculaSalario(horasTrabalhadas, salarioPorHora){
    let salario = horasTrabalhadas * salarioPorHora;
    return `Salário igual a R$ ${salario - (0.30 * salario)}`;
}

console.log(calculaSalario(180, 60));