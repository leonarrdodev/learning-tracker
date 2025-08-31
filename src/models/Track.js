const crypto = require('node:crypto');

class Track {
  constructor(title, description, category) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.description = description;
    this.category = category;
    this.createdAt = new Date();
  }
}

module.exports = Track;


