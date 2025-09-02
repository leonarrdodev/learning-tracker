const express = require('express')
const router = express.Router()
const trackController = require('../controllers/trackController')


//Rota para listar todas as tracks
router.get('/', trackController.getAllTracks)

//Rota para exibir formulario de criação
router.get('/new', trackController.showCreateForm)

//Rota para pagina individual da track
router.get('/:id', trackController.getTrackById)

//Rota para criar uma track
router.post('/', trackController.createTrack)


//Mostrar formulario
router.get('/:id/edit', trackController.showEditForm)

//Atualizar track
router.post('/:id/update', trackController.updateTrack)



module.exports = router