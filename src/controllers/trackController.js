const inMemoryTrackRepository = require('../repositories/inMemoryTrackRepository');

module.exports = {
    getAllTracks: (req, res) => {
        try {
            const tracks = inMemoryTrackRepository.find();
            res.render('tracks/index', { tracks });
        } catch (err) {
            res.status(500).send(err.message);
        }
    },

    getTrackById: (req, res) => {
        try {
            const { id } = req.params;
            const track = inMemoryTrackRepository.findById(id);
            if (track) {
                res.render('tracks/show', { track });
            } else {
                res.status(404).send('Trilha não encontrada');
            }
        } catch (err) {
            res.status(500).send(err.message);
        }
    },

   
    showCreateForm: (req, res) => {
        res.render('tracks/new');
    },


    createTrack: (req, res) => {
    try {
        const newTrack = inMemoryTrackRepository.create(req.body);

   
        res.redirect(`/tracks/${newTrack.id}`);
    } catch (err) {
        res.status(400).render('tracks/new', { error: err.message });
        }
    },

    showEditForm: (req, res) => {
        try{
            const {id} = req.params
            const track = inMemoryTrackRepository.findById(id)
            if(track){
                res.render('tracks/edit', {track})
            } else {
            res.status(404).send('Trilha não encontrada para edição');
        }
        } catch(err){
            res.status(404).render('tracks/edit', {error: err.message})
        }
        
    },

    updateTrack: (req, res) => {
        try{
            const {id} = req.params
            inMemoryTrackRepository.update(id, req.body)
            res.redirect(`/tracks/${id}`)

        } catch(err){
            console.error('Erro ao atualizar a trilha:', err);
            res.status(500).send('Ocorreu um erro ao atualizar a trilha.');
        }
        

    }
};