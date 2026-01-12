const crypto = require('node:crypto')

class Task {
    constructor(title, trackId){
        this.id = crypto.randomUUID()
        this.title = title
        this.trackId = trackId
        this.status = 'pendente'
        this.createdAt = new Date()     
        
    }
}
