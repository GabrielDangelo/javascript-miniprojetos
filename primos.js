// Funcão para imprimir apenas os números primos existentes do 0 a um limite.
// Um número primo é aquele que é divisível apenas por 2 números: 1 e ele mesmo.
function numPrimos(limite){
    let d = 0;
    for(let c = 1; c <= limite; c++){
        for(let i = 1; i <= limite; i++){
            if(c%i === 0){
                d++;    // sempre que a divisão de 'c' por 'i' for exata, vai se adicionar + 1 na variável 'd'
            }
        }
        // se houver apenas duas divisões exatas do número correspondente a 'c', ele será imprimido, pois significa que ele é um número primo.
        if(d === 2){        
            console.log(c);
        }
        d = 0;
    }
}
numPrimos(19);