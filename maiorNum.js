// declaração de variáveis e seus valores.
let a = 3;
let b = 7;

// função para descobrir e retornar o maior número, com dois parâmetros.
function maiorNum(num1, num2){
    if (num1 > num2){
       return num1
    }
    else if (num2 > num1){
       return num2
    }
    else {
       return num1  // se os dois num forem iguais, é retornado a primeira variável, que possui o mesmo valor que a segunda.
    }
}

// aplicando a função
console.log(maiorNum(a, b));