// Função para somar múltiplos de 3 e 5 existentes entre 0 e um número limite.
function somarMultiplos(limite){
    let soma = 0;
    for(let c = 0; c <= limite; c++){
        if(c%3 === 0 || c%5 === 0){
            soma += c;
        }
    }
    return soma
};
console.log(somarMultiplos(10));