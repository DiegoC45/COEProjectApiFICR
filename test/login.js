process.env.NODE_ENV = 'test';

const Usuario = require('../src/models/usuario'),
    bcrypt = require('bcrypt'),
    chai = require('chai'),
    should = chai.should(),
    chaiHttp = require('chai-http'),
    app = require('../app'),
    usuarioTeste = null,
    SALT_RANDS = 12;

chai.use(chaiHttp);

beforeEach((done) => {

    const senha = '12345678';
    bcrypt.hash(senha, SALT_RANDS)
        .then((senhaCriptografada) => {
            const novoUsuario = new Usuario({
                nome: 'Neymar',
                sobrenome: 'Junior',
                email: 'jogadorneymar@mail.com',
                senha: senhaCriptografada
              });
            
              novoUsuario.save()
                .then(usuario => {
                  this.usuarioTeste = usuario;
                  done();
                })
                .catch(error => {
                  done(error);
                });
        })
});

afterEach((done) => {
    Usuario.deleteMany({}, () => {
      this.usuarioTeste = null;
      done();
    })
    .catch(error => done(error));
});

describe('POST login', () => {
  it('Deve permitir login do usuário', (done) => {
    chai
      .request(app)
      .post('/api/login')
      .send({
        email: 'jogadorneymar@mail.com',
        senha: '12345678'
      })
      .end((error, response) => {
        response.should.have.status(200);
        response.body.should.be.a('object');
        response.body.should.have.property('data');
        response.body.should.have.property('message', 'Login feito com sucesso.');
        response.body.should.have.nested.property('data.email', 'jogadorneymar@mail.com');
        done();
      });
  });
});

describe('POST login', () => {
  it('Não deve permitir login com email não cadastrado', (done) => {
    chai
      .request(app)
      .post('/api/login')
      .send({
        email: 'jogadorzlatan@mail.com',
        senha: '12345678'
      })
      .end((error, response) => {
        response.should.have.status(403);
        response.should.have.property('statusType').eq(4);
        response.body.should.have.property('message', 'Usuário ou senha inválidos.');
        done();
      });
  });
});

describe('POST login', () => {
    it('Não deve permitir login com senha inválida', (done) => {
      chai
        .request(app)
        .post('/api/login')
        .send({
          email: 'jogadorneymar@mail.com',
          senha: '87654321'
        })
        .end((error, response) => {
          response.should.have.status(403);
          response.should.have.property('statusType').eq(4);
          response.body.should.have.property('message', 'Usuário ou senha inválidos.');
          done();
        });
    });
  });
