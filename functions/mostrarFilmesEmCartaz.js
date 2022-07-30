const mostrarFilmes = require('./mostrarFilmes')
const mostrarFilmesEmCartaz = (filmes) => {

    filmes.filter((filme) => filme.emCartaz)

    mostrarFilmes(filmes)

}

module.exports = mostrarFilmesEmCartaz