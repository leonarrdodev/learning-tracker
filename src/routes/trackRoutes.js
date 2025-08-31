const express = require('express')
const router = express.Router()
const trackController = require('../controllers/trackController')


//Rota para listar todas as tracks
router.get('/', trackController.getAllTracks)

//Rota para pagina individual da track
router.get('/:id', trackController.getTrackById)
module.exports = router