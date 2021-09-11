// Função para calcular a média de um aluno, suas notas estão localizadas em um array.
function mediaAluno(notas){
    let soma = 0;
    for (const key in notas) {
        soma += notas[key]; 
    }
    const media = soma / notas.length;
    return media;
};

const n = [6, 5, 5, 6];
console.log(mediaAluno(n));