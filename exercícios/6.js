function inverso(a) {
    if(a == false || a == true){
        return !a;
    } else if(a > 0 || a < 0){
        return -1 * a;
    } else {
        return "booleano ou números esperado, mas o parâmetro é do tipo string";
    }
}
console.log(inverso());