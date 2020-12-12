process.env.NODE_ENV = 'test';

const Categoria = require('../src/models/categoria'),
    chai = require('chai'),
    should = chai.should(),
    chaiHttp = require('chai-http'),
    app = require('../src/app'),
    categoriaTeste = null;

chai.use(chaiHttp);

beforeEach((done) => {

    new Categoria({ nome: 'HTML5' })
      .save()
      .then(categoria => {
        this.categoriaTeste = categoria;
        done();
      })
      .catch(error => {
        done(error);
      });
});

afterEach((done) => {
    Categoria.deleteMany({}, () => {
      this.categoriaTeste = null;
      done();
    })
    .catch(error => done(error));
});

describe('GET categorias', () => {
  it('Deve listar todas as categorias', (done) => {
    chai
      .request(app)
      .get('/api/categorias')
      .end((error, response) => {
        response.should.have.status(200);
        response.body.should.be.a('array');
        done();
      });
  });
});

describe('GET categorias/:id', () => {
  it('Deve buscar a categoria pelo ID', (done) => {
    const id = this.categoriaTeste._id.toString();
    chai
      .request(app)
      .get(`/api/categorias/${id}`)
      .end((error, response) => {
        response.should.have.status(200);
        response.body.should.be.a('object');
        response.body.should.have.property('_id').eq(id);
        done();
      });
  });
});

describe('GET categorias/:id', () => {
  it('Não deve buscar a categoria pelo ID inexistente', (done) => {
    chai
      .request(app)
      .get(`/api/categorias/${-1}`)
      .end((error, response) => {
        response.should.have.status(404);
        response.body.should.be.a('object');
        response.body.should.have.property('message').eq('Categoria não encontrada.');
        done();
      });
  });
});