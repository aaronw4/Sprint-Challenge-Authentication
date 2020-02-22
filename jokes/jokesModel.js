const db = require('../database/dbConfig');

function add(user) {
    return db('users')
        .insert(user, 'id')
}

module.exports = {
    add
}