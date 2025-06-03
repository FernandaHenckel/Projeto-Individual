var database = require("../database/config")

function listar() {
    var pontuacaoMax = `
        select u.nome as usuario, q.pontuacao as pontuacao from usuario u join quiz q on q.fk_usuario = u.id order by q.pontuacao;
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