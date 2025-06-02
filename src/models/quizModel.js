var database = require("../database/config")

function listar() {
    var pontuacaoMax = `
        select pontuacao as pontuacao from quiz;
    `;
    console.log("Executando a instrução SQL: \n" + pontuacaoMax);
    return database.executar(pontuacaoMax);
}

function cadastrar(id, pontuacao) {
    var pontuacaoMax = `
        INSERT INTO quiz (fk_usuario, pontuacao) VALUES ('${id}', '${pontuacao}');
    `;
    console.log("Executando a instrução SQL: \n" + pontuacaoMax);
    return database.executar(pontuacaoMax);
}

module.exports = {
    cadastrar,
    listar
};