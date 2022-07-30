const salvarFilmes = require('./salvarFilmes')
const catalogo = require('../database/catalogo.json')
const buscarFilme = require('./buscarFilme')
const porFilmesEmCartez = (codigo) => {

    let filme = buscarFilme(codigo)
    filme.emCartaz = true
    salvarFilmes(catalogo)
    
}