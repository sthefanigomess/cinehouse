const catalogo = require('../database/catalogo.json')

const alterarStatusEmCartaz = (codigo) => {
    for(let filme of catalogo){
        
        if (filme.codigo == codigo){
            filme.emCartaz = filme.emCartaz ? false : true
        }
    }
}

module.exports = alterarStatusEmCartaz