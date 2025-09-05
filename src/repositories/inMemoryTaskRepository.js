const Task = require('../models/Task')

const tasks = []

module.exports = {
    create: (data) => {
        const task = new Task(data.title, data.trackId)
        tasks.push(task)
        return task
    },
    findByTrackId: (trackId) => {
        return tasks.filter(tasks => tasks.trackId === trackId)
    }
}