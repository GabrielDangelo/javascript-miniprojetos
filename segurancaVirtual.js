// Função com objetivo de verificar se o nome da pessoa está na lista de convidados.
function VerificarEntrada(){
    
    // Pega o valor de um elemento pela id, nesse caso a id 'nome', que se encontra no arquivo html, em uma input, e o atribui a variável 'nomeConvidado'.
    const nomeConvidado = document.getElementById('nome').value;

    // Variável que recebe a lista de convidados.
    const convidados = ['Maia', 'Melquesedeque', 'Kaue', 'Leandro', 'Dangelo'];

    // Se nomeConvidado estiver no array (lista), ele pega o elemento que estiver com a id 'PermissaoDeEntrada' e muda o texto (innerText), que originalmente está 'Pesquisando...' para 'Você está na lista!'. 
    if(convidados.includes(nomeConvidado)){
        document.getElementById('PermissaoDeEntrada').innerText = 'Você está na lista!';
    }

    // Senão, ele muda o texto para 'Você não está na lista.'
    else{
        document.getElementById('PermissaoDeEntrada').innerText = 'Você não está na lista.'
    }
}