const Track = require('../models/Track')

const tracks = [
    new Track('Nodejs', 'Estudar express', 'Backend')
]
module.exports = {
    find: () => {
        return [...tracks]
    },
    findById: (id) => {
        return tracks.find(track => track.id === id)
    },
    create: (data) => {
        const track = new Track(data.title, data.description, data.category)
        tracks.push(track)
        return track
    },
    update: function(id, data) {
        const track = this.findById(id);
        if(!track){
            return undefined
        }
        track.title = data.title ?? track.title
        track.description = data.description ?? track.description
        track.category = data.category ?? track.category
        return track
    }
}