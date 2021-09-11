// Função que descobre se um número é divisível por 3 ou por 5 ou pelos dois, retornando 'fizz', 'Buzz' ou 'fizzBuzz', respectivamente. Caso o tipo de variável não seja número, retornará 'Não é um número.', se não divisível por nenhum, retorna o número.

function fizzBuzz(num){
    if (typeof num !== 'number'){
        return 'Não é um número.'
    }
    if (num % 3 == 0 && num % 5 == 0){
        return 'fizzBuzz';
    }
    if (num % 3 == 0) {
        return 'fizz';
    }
    if (num % 5 == 0) {
        return 'Buzz';
    }
    return num;
}
console.log(fizzBuzz(15));