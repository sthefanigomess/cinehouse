const catalogo = require('../database/catalogo.json')

const listarFilmesEmCartaz = () => {
    for(let filme of catalogo){
        filme.emCartaz ? console.log(filme) : null
        
    }
}

module.exports = listarFilmesEmCartaz