//Importar as dependencias 
const catalogo = require('./database/catalogo.json')
const mostrarFilmes = require('./functions/mostrarFilmes')
const buscarFilme = require('./functions/buscarFilme')

//Definindo a acao a ser realizada
let acao = process.argv[2]

//Decidindo o que fazer
switch(acao){
    case 'mostrar':
        mostrarFilmes(catalogo)
    break
    
    case 'buscar':
        let codigo = process.argv[3]
        let filmeEncontrado = buscarFilme(codigo)
        console.log(filmeEncontrado)
    break

    case 'adicionar':
        console.log('adicionar filme')
    break

    default:
        console.error('Acao nao encontrada!!!')

}