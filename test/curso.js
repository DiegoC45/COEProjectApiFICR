process.env.NODE_ENV = 'test';

const Curso = require('../src/models/curso'),
    Categoria = require('../src/models/categoria'),
    chai = require('chai'),
    should = chai.should(),
    chaiHttp = require('chai-http'),
    app = require('../src/app'),
    cursoTeste = null;

chai.use(chaiHttp);

beforeEach((done) => {

    new Categoria({ nome: 'HTML5' })
      .save()
      .then(categoria => {

        new Curso({
          nome: 'Curso HTML5 Completo e GRÁTIS',
          descricao: 'Professor: Gustavo Guanabara',
          badge: 'HTML5_AVANCADO',
          categoria
        })
          .save()
          .then(curso => {

            this.cursoTeste = curso;
            done();
          })
      })
      .catch(error => {
        done(error);
      });
});

afterEach((done) => {
    Curso.deleteMany({}, () => {
      this.cursoTeste = null;
      done();
    })
    .catch(error => done(error));
});

describe('GET cursos', () => {
  it('Deve listar todos os cursos', (done) => {
    chai
      .request(app)
      .get('/api/cursos')
      .end((error, response) => {
        response.should.have.status(200);
        response.body.should.be.a('array');
        done();
      });
  });
});

describe('GET cursos/:id', () => {
  it('Deve buscar o curso pelo ID', (done) => {
    const id = this.cursoTeste._id.toString();
    chai
      .request(app)
      .get(`/api/cursos/${id}`)
      .end((error, response) => {
        response.should.have.status(200);
        response.body.should.be.a('object');
        response.body.should.have.property('_id').eq(id);
        done();
      });
  });
});

describe('GET cursos/:id', () => {
  it('Não deve buscar o curso pelo ID inexistente', (done) => {
    chai
      .request(app)
      .get(`/api/cursos/${-1}`)
      .end((error, response) => {
        response.should.have.status(404);
        response.body.should.be.a('object');
        response.body.should.have.property('message').eq('Curso não encontrado.');
        done();
      });
  });
});
