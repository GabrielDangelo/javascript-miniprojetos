// Função para exibir asteriscos sempre acrescentando 1, formando um triângulo escaleno.
function exibirAsteriscos(quantidade) {
    for(let c = 1; c <= quantidade; c++){
        console.log("*".repeat(c));     // repeat serve para repetir uma string, tendo como parâmetro a quantidade de repetições.
    }
}
exibirAsteriscos(10);