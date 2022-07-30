const catalogo = require('../database/catalogo.json')

const listarTodosOsFilmes = () => {
    for(let filme of catalogo){
        console.log(filme)
    }
}

module.exports = listarTodosOsFilmes