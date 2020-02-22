const db = require('../database/dbConfig');

function add(user) {
    return db('users')
        .insert(user, 'id')
}

function findBy(user) {
    return db('users')
        .where(user)
}

module.exports = {
    add,
    findBy
}