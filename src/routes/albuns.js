var express = require("express");
var router = express.Router();

var albumController = require("../controllers/albumController");

router.get("/buscarAlbunsFav/:idGrafico", function (req, res) {
    // função que vai ser chamada quando acessar /album/cadastrar
    albumController.buscarAlbunsFav(req, res);
});

router.get("/tempo-real/:idResultados", function (req, res) {
    medidaController.buscarResultados(req, res);
})

module.exports = router;