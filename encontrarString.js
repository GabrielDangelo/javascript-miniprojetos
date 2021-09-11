// Função para exibir todos os valores 'string' dentro do objeto
function exibirString(obj){
    for (const key in obj) {
        if (typeof(obj[key]) === 'string'){
            console.log(key + ': ' + obj[key]);
        }
    }
};

const anime = {
    titulo: 'Steins;Gate',
    ano: 2010,
    autor: 'Jukki Hanada',
    personagem: 'Okabe'
};
exibirString(anime);