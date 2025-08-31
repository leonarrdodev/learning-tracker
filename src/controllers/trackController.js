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

    // CORREÇÃO: Removida a barra inicial
    showCreateForm: (req, res) => {
        res.render('tracks/new');
    },

    // CORREÇÃO: Nome da função e lógica interna
    createTrack: (req, res) => {
    try {
        const newTrack = inMemoryTrackRepository.create(req.body);

        // ---- ADICIONE AS LINHAS DE DEPURAÇÃO AQUI ----
        console.log('--- DADOS DA NOVA TRILHA ---');
        console.log(newTrack);
        console.log('ID para redirecionar:', newTrack.id);
        // ---------------------------------------------

        res.redirect(`/tracks/${newTrack.id}`);
    } catch (err) {
        console.error('--- ERRO AO CRIAR TRACK ---');
        console.error(err); 
        res.status(400).render('tracks/new', { error: err.message });
    }
}
};