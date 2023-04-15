const futuro = Date.now() + 10000; //quantidade de segundos 
let quantidade1 = 0;

while(Date.now() < futuro){
    quantidade1++;
}

console.log("Quantidade " + quantidade1);