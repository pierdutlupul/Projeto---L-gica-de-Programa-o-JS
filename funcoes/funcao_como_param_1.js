function executar(funcao){
    if(typeof funcao === "function"){
        console.log(funcao());
    }
   
}

function bomDia(){
    return "Bom dia";
}

executar(bomDia); //tirando os parenteses após bom dia a função é passada como parametro para a função executar

executar(bomDia()); //nesse caso a função bom dia está sendo executada(chamada) 
// e seu resultado é bom dia retornado como string no parametro da função executar, 
//sendo assim a string não é lida no if function e a função acaba por não mostrar nada no console
