const Track = require('../models/Track')

const tracks = [
    new Track('Nodejs', 'Estudar express', 'Backend')
]
module.exports = {
    find: () => {
        return [...tracks]
    }
}