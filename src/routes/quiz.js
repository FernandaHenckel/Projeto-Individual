var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.post("/cadastrar", function (req, res) {
    // função que vai ser chamada quando acessar /quiz/cadastrar
    quizController.cadastrar(req, res);
});

router.post("/listar", function (req, res) {
    // função que vai ser chamada quando acessar /quiz/listar
    quizController.listar(req, res);
});

router.get("/pontuacaoUser/:idGrafico", function (req, res) {
    // função que vai ser chamada quando acessar /album/cadastrar
    quizController.pontuacaoUser(req, res);
});

module.exports = router;