// Função para verificar velocidade, o limite de velocidade é 70, cada 5 km acima do limite você ganha 1 ponto na carteira, se passar de 12 pontos sua carteira é suspendida.
function medidorVelocidade(entrada){
    const velocidadeMax = 70;
    const kmPorPonto = 5;
    if (entrada > velocidadeMax) {
        const acima = entrada - velocidadeMax;
        const pontos = Math.floor(acima/kmPorPonto); // Math.floor para arredondar para um número inteiro caso não seja. 
        if (pontos > 12){
            return 'Carteira Suspendida.'
        }
        else{
            return 'Pontos: ' + pontos;
        }
    }
    else{
        return 'Ok';
    }
};
console.log(medidorVelocidade(180));