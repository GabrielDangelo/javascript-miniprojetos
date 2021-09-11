// Função para criar objeto de endereço.
function Endereco(rua, cidade, cep) {
    this.rua,
    this.cidade,
    this.cep
};
// criando objetos de endereços utilizando a função criada.
const endereco1 = new Endereco('a', 'b', 'c');
const endereco2 = new Endereco('a', 'b', 'c');

// Função para comparar se os dois objetos têm propriedades iguais
function saoIguais(endereco1, endereco2){
    return endereco1.rua === endereco2.rua, endereco1.cidade === endereco2.cidade, endereco1.cep === endereco2.cep
}
console.log(saoIguais(endereco1, endereco2))

// Função para ver se os dois objetos ocupam o mesmo espaço na memória
function temEnderecoMemoriaIgual(endereco1, endereco2){
    return endereco1 === endereco2
}
console.log(temEnderecoMemoriaIgual(endereco1, endereco2))