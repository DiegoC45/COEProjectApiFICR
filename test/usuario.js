process.env.NODE_ENV = 'test';

const Usuario = require('../src/models/usuario'),
    chai = require('chai'),
    should = chai.should(),
    chaiHttp = require('chai-http'),
    app = require('../app'),
    usuarioTeste = null;

chai.use(chaiHttp);

beforeEach((done) => {
  const novoUsuario = new Usuario({
    nome: 'Cristiano',
    sobrenome: 'Ronaldo',
    email: 'jogadorcr7@mail.com',
    senha: '12345678'
  });

  novoUsuario.save()
    .then(usuario => {
      this.usuarioTeste = usuario;
      done();
    })
    .catch(error => {
      done(error);
    });
});

afterEach((done) => {
    Usuario.deleteMany({}, () => {
      this.usuarioTeste = null;
      done();
    })
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

describe('POST usuario', () => {
  it('Não deve criar um usuário com email já cadastrado', (done) => {
    chai
      .request(app)
      .post('/api/usuarios')
      .send({
        nome: 'Cristiano',
        sobrenome: 'Ronaldo',
        email: 'jogadorcr7@mail.com',
        senha: '12345678'
      })
      .end((error, response) => {
        response.should.have.status(422);
        response.should.have.property('statusType').eq(4);
        response.body.should.have.property('message', 'Email já cadastrado no sistema.');
        done();
      });
  });
});