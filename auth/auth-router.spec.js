const request = require('supertest');
const server = require('../api/server');

describe('Post /register', () => {
    it('Should return 201', () => {
       request(server)
        .post('/api/auth/register')
        .send({username: 'Aaron', password: 'pass'})
        .expect(201);
    })
    it('Should return json', () => {
        request(server)
         .post('/api/auth/register')
         .send({username: 'Aaron', password: 'pass'})
         .expect('Content-Type', /json/)
     })
});

describe('Post /login', () => {
    it('Should return 200', () => {
        request(server)
            .post('/api/auth/login')
            .auth('username', 'password')
            .expect(200)
    })
    it('Should return json', () => {
        request(server)
            .post('/api/auth/login')
            .auth('username', 'password')
            .expect('Content-Type', /json/)
    })
})

describe('Get /', () => {
    it('Should return 401 with no auth', () => {
        request(server)
            .get('/api/auth')
            .expect(401)
    })
    it('Should return 200 with auth', () => {
        request(server)
            .get('/api/auth')
            .auth('token')
            .expect(200)
    })
})