// Função que mostra os pares e ímpares entre o valor de entrada (limite) e 0.
function exibirTipo(limite) {
    for(let c = 0; c <= limite; c++){
        if (c%2 == 0){
            console.log(c +' = PAR')
        }
        else{
            console.log(c + ' = IMPAR')
        }
    }
};
exibirTipo(5);