const express = require('express')
const router = express.Router()
const trackController = require('../controllers/trackController')


//Rota para listar todas as tracks
router.get('/', trackController.getAllTracks)


module.exports = router