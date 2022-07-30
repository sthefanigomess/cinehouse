const salvarFilmes = require("./salvarFilmes") 
const adicionarFilme = (filme) => {
    
    let filmes = require('../database/catalogo.json')

    filmes.push(filme)

    salvarFilmes(filmes)

}

module.exports = adicionarFilme
