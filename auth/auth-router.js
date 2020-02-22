const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets');

const users = require('../jokes/jokesModel');

const router = require('express').Router();

router.post('/register', (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;

  users.add(user)
    .then(info => {
      res.status(201).json(info);
    })
    .catch(err => {
      res.status(500).json({
        error: 'Failed to create user.'
      })
    })
});

router.post('/login', (req, res) => {
  // implement login
});

module.exports = router;
