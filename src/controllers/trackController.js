const inMemoryTrackRepository = require('../repositories/inMemoryTrackRepository');
const inMemoryTraskRepository = require('../repositories/inMemoryTaskRepository')

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
            const tasks = inMemoryTraskRepository.findByTrackId(id)
            if (track) {
                res.render('tracks/show', { track, tasks });
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

   
        res.redirect(`/tracks/${trackId}`);
    } catch (err) {
        res.status(400).render('tracks/new', { error: err.message });
        }
    },

    createTask: (req, res) => {
        try{
            const {trackId} = req.params
            inMemoryTraskRepository.create({title: req.body.title, trackId: trackId})
            res.redirect(`/tracks/${trackId}`)
        } catch(err) {
            res.status(400).render(`tracks/${trackId}`)
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
    },

    deleteTrack: (req, res) => {
        try{
            const {id} = req.params
            inMemoryTrackRepository.remove(id)
            res.redirect('/tracks')
        } catch(err){
            console.error('Erro ao atualizar a trilha:', err);
            res.status(500).send('Ocorreu um erro ao deletar a trilha.');
        }
    },

    
};
