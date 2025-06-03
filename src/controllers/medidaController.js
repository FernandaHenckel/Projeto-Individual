var albumModel = require("../models/albumModel");

function buscarAlbuns(req, res) {

    const limite_linhas = 7;

    var idGraficos = req.params.idGraficos;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    albumModel.buscarAlbuns(idGraficos, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function buscarResultados(req, res) {

    var idResultados = req.params.idResultados;

    console.log(`Recuperando medidas em tempo real`);

    albumModel.buscarResultados(idResultados).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    buscarAlbuns,
    buscarResultados

}