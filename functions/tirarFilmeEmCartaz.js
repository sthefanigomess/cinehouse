const buscarFilmes = require('./buscarFilme')
const catalogo = require('../database/catalogo.json')
const salvarFilmes = require('./salvarFilmes')
const tirarFilmeDeCartaz = (codigo) => {
    
    let filme = buscarFilmes(codigo)
    
    filme.emCartaz = false
    salvarFilmes(catalogo)

}

module.exports = tirarFilmeDeCartaz