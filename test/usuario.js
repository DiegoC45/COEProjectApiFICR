process.env.NODE_ENV = 'test';

const Usuario = require('../src/models/usuario'),
    chai = require('chai'),
    should = chai.should(),
    chaiHttp = require('chai-http'),
    app = require('../app');

chai.use(chaiHttp);

afterEach((done) => {
    Usuario.deleteMany({}, done())
    .catch(error => done(error));
});

describe('POST usuario', () => {
  it('Deve criar um usuário', (done) => {
    chai
      .request(app)
      .post('/api/usuarios')
      .send({
        nome: 'Lionel',
        sobrenome: 'Messi',
        email: 'jogadormessi@mail.com',
        senha: '12345678'
      })
      .end((error, response) => {
        response.should.have.status(201);
        response.body.should.be.a('object');
        response.body.should.have.property('data');
        response.body.should.have.nested.property('data._id');
        response.body.should.have.nested.property('data.nome', 'Lionel');
        response.body.should.have.nested.property('data.sobrenome', 'Messi');
        response.body.should.have.nested.property('data.email', 'jogadormessi@mail.com');
        done();
      });
  });
});
