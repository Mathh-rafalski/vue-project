const express = require('express'),
    router = express.Router(),
    servCtrl = require('../controller/servicoController')

    router.post('/',servCtrl.salvar)
    router.get('/',servCtrl.listar)

module.exports = router
//localhost:3000/login