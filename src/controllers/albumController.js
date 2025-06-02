var albumModel = require("../models/albumModel");

function buscarAlbuns(req, res) {
         albumModel.buscarAlbuns()
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String
                        console.log(resultadoAutenticar);
                            res.json(resultadoAutenticar);
                   

                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao pegar os álbuns Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

module.exports = {
    buscarAlbuns
}