var database = require("../database/config");

function buscarAlbunsFav(idGrafico, limite_linhas) {
    if (idGrafico == 1) {
        var instrucaoSql = `select album, count(album) as quantidadeAlbum from usuario group by album`;
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
    }

    if (idGrafico == 2) {
        var instrucaoSql = `select pontuacao as pontuacao from quiz`;

        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
    }
}

function buscarResultados(idResultados) {
    if (idResultados == 1) {
        var instrucaoSql = `select album, count(album) as quantidadeAlbum from usuario group by album order by quantidadeAlbum desc limit 1`;

        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
    }

    if (idResultados == 2) {
        var instrucaoSql =`select u.nome, q.pontuacao from usuario u join quiz q on q.fk_usuario = u.id order by q.pontuacao desc limit 1`;

        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
    }
}

module.exports = {
    buscarAlbunsFav,
    buscarResultados
}
