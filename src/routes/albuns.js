var express = require("express");
var router = express.Router();

var albumController = require("../controllers/albumController");

router.get("/buscarAlbuns", function (req, res) {
    // função que vai ser chamada quando acessar /album/cadastrar
    albumController.buscarAlbuns(req, res);
});

module.exports = router;