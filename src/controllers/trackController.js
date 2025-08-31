const inMemoryTrackRepository = require('../repositories/inMemoryTrackRepository')

module.exports = {
    getAllTracks: (req, res) => {
        try{
            const tracks = inMemoryTrackRepository.find()
            res.render('tracks/index', {tracks})
        } catch(err){
            res.status(500).send(err.message)
        }
    }
}