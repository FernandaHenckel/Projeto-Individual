var quizModel = require("../models/quizModel");

function pontuacaoUser(req, res) {

    var idGrafico = req.params.idGrafico;

    quizModel.listar(idGrafico).then(function (resultado) {
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

function cadastrar(req, res) {
    var pontuacao = req.body.pontuacaoFinalServer;
    var id = req.body.idUsuarioServer;

    if (pontuacao == undefined) {
        res.status(400).send("Sua pontuação está undefined!");
    }

    quizModel.cadastrar(id, pontuacao).then(function(resposta){
        res.status(200).send("Pontuação salva com sucesso");
    }).catch(function(erro){
        console.log("erro: " + erro)
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    pontuacaoUser,
    cadastrar
}