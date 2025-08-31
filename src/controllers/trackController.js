const inMemoryTrackRepository = require('../repositories/inMemoryTrackRepository')

module.exports = {
    getAllTracks: (req, res) => {
        try{
            const tracks = inMemoryTrackRepository.find()
            res.render('tracks/index', {tracks})
        } catch(err){
            res.status(500).send(err.message)
        }
    },
    getTrackById: (req, res) => {
        try{
            const {id} = req.params
            const track = inMemoryTrackRepository.findById(id)
            if(track){
                res.render('tracks/show', {track})
            } else{
                res.status(404).send('Trilha não encontrada')
            }
        } catch(err) {
            res.status(500).send(err.message)
        }
    }
}