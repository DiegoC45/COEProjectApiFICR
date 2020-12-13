# Matrícula

## POST /api/matricula - Registrar matrícula no sistema

### Request

**Body**

- **aprovado (boolean)**: Status da aprovação.
- **dataDeMatricula (date)**: Data de matrícula. 
- **usuario (string / required)**: ID do usuário matriculado. 
- **curso (string / required)**: ID do curso. 

```
{
   "aprovado": false,
   "dataDeMatricula": "2020-12-21",
   "usuario": "5fd23c9ae8096e00178c794b",
   "curso": "5fcb0d196a3de43280bc8ee6"
}
```

### Response

**Status code**

- **201 Created**: Matrícula criada com sucesso.

**Body**

- **message**: Mensagem informando que a requisição foi bem sucedida.
- **data**: Registro da matrícula criada.

```
{
    "message": "Matrícula efetivada com sucesso.",
    "data": {
        "aprovado": false,
        "_id": "5fd5a6ec3627b6049c809559",
        "usuario": "5fd23c9ae8096e00178c794b",
        "curso": "5fcb0d196a3de43280bc8ee6",
        "aulas": [
            {
                "_id": "5fd5a6ec3627b6049c80955a",
                "video": {
                    "_id": "5fd035ca48003a5037883f70",
                    "nome": "Curso de HTML5 - 00",
                    "conteudo": "HTML5 é uma linguagem de marcação hipertexto utilizada para criar sites. A versão 5 da linguagem foi homologada e lançada a partir de 2009, mas só ganhou mercado no final de 2012 com o surgimento dos grandes navegadores compatíveis.",
                    "url": "https://www.youtube.com/watch?v=epDCjksKMok&list=PLHz_AreHm4dlAnJ_jJtV29RFxnPHDuk9o",
                    "nrOrdem": 0,
                    "curso": "5fcb0d196a3de43280bc8ee6",
                    "__v": 0
                },
                "visualizado": false
            },
            {
                "_id": "5fd5a6ec3627b6049c80955b",
                "video": {
                    "_id": "5fd5a41943e57175f91f2afe",
                    "nome": "Curso de HTML5 - 01",
                    "conteudo": "HTML5 é uma linguagem de marcação hipertexto utilizada para criar sites. A versão 5 da linguagem foi homologada e lançada a partir de 2009, mas só ganhou mercado no final de 2012 com o surgimento dos grandes navegadores compatíveis.",
                    "url": "https://www.youtube.com/watch?v=epDCjksKMok&list=PLHz_AreHm4dlAnJ_jJtV29RFxnPHDuk9o",
                    "nrOrdem": 0,
                    "curso": "5fcb0d196a3de43280bc8ee6",
                    "__v": 0
                },
                "visualizado": false
            }
        ],
        "dataDeMatricula": "2020-12-13T05:30:20.437Z",
        "__v": 0
    }
}
```

**Status code**

- **422 Unprocessable Entity**

**Body**

- **message**: Mensagem informando a causa do erro. 

```
{
    "message": "Curso e usuário são obrigatórios."
}
```

## GET /api/usuarios/:id/matriculas - Listar matrículas por usuários 

### Request

**URL Params**

- **id (string)**: ID do usuário. 

**Query Params**

- **aprovado (boolean)**: Filtra pelo status de aprovação do aluno. Se `true` retorna somente as matrículas onde o usuário já foi aprovado no curso, se `false` retorna somente os não aprovados e retorna todas as matrículas caso não seja informado.

```
/api/usuarios/5fd23c9ae8096e00178c794b/matriculas?aprovado=true
```

### Response

**Status code**

- **200 OK**: Sucesso.

**Body**

- **matriculas**: Lista de todas matrículas, obedecendo o status de aprovação informado.

```
[
    {
        "aprovado": true,
        "_id": "5fd5a4359901a33348093274",
        "usuario": "5fd23c9ae8096e00178c794b",
        "curso": {
            "_id": "5fcb0d196a3de43280bc8ee6",
            "nome": "Curso HTML5 Completo e GRÁTIS",
            "descricao": "Professor: Gustavo Guanabara",
            "badge": "HTML5_AVANCADO",
            "categoria": "5fcb0d176a3de43280bc8ee5",
            "__v": 0
        },
        "aulas": [
            {
                "_id": "5fd5a4359901a33348093275",
                "video": {
                    "_id": "5fd035ca48003a5037883f70",
                    "nome": "Curso de HTML5 - 00",
                    "conteudo": "HTML5 é uma linguagem de marcação hipertexto utilizada para criar sites. A versão 5 da linguagem foi homologada e lançada a partir de 2009, mas só ganhou mercado no final de 2012 com o surgimento dos grandes navegadores compatíveis.",
                    "url": "https://www.youtube.com/watch?v=epDCjksKMok&list=PLHz_AreHm4dlAnJ_jJtV29RFxnPHDuk9o",
                    "nrOrdem": 0,
                    "curso": "5fcb0d196a3de43280bc8ee6",
                    "__v": 0
                },
                "visualizado": true
            },
            {
                "_id": "5fd5a4359901a33348093276",
                "video": {
                    "_id": "5fd5a41943e57175f91f2afe",
                    "nome": "Curso de HTML5 - 01",
                    "conteudo": "HTML5 é uma linguagem de marcação hipertexto utilizada para criar sites. A versão 5 da linguagem foi homologada e lançada a partir de 2009, mas só ganhou mercado no final de 2012 com o surgimento dos grandes navegadores compatíveis.",
                    "url": "https://www.youtube.com/watch?v=epDCjksKMok&list=PLHz_AreHm4dlAnJ_jJtV29RFxnPHDuk9o",
                    "nrOrdem": 0,
                    "curso": "5fcb0d196a3de43280bc8ee6",
                    "__v": 0
                },
                "visualizado": true
            }
        ],
        "dataDeMatricula": "2020-12-13T05:18:45.363Z",
        "__v": 0
    }
]
```

## PUT /api/matriculas/:id/ - Editar matrícula

### Request

**URL Params**

- **id (string)**: ID da matrícula. 

**Body**

- **aulas (array / required)**: Aulas do curso matriculado.
- **dataDeMatricula (date / optional)**: Data da matrícula.
- **aprovado (boolean / optional)**: Status da matrícula.

OBS.: Caso queira informar que uma aula do curso foi visualizada, basta alterar para `true` o campo `visualizado` da aula em questão na lista `aulas` e fazer a requisição. Caso todas as aulas tenham sido visualizadas, o campo `aprovado` da matrícula será modificado também para `true` automaticamente pela API.

```
{
    "_id": "5fd5a4359901a33348093274",
    "aprovado": false,
    "aulas": [
        {
            "_id": "5fd5a4359901a33348093275",
            "video": {
                "_id": "5fd035ca48003a5037883f70",
                "nome": "Curso de HTML5 - 00",
                "conteudo": "HTML5 é uma linguagem de marcação hipertexto utilizada para criar sites. A versão 5 da linguagem foi homologada e lançada a partir de 2009, mas só ganhou mercado no final de 2012 com o surgimento dos grandes navegadores compatíveis.",
                "url": "https://www.youtube.com/watch?v=epDCjksKMok&list=PLHz_AreHm4dlAnJ_jJtV29RFxnPHDuk9o",
                "nrOrdem": 0,
                "curso": "5fcb0d196a3de43280bc8ee6",
                "__v": 0
            },
            "visualizado": true
        },
        {
            "_id": "5fd5a4359901a33348093276",
            "video": {
                "_id": "5fd5a41943e57175f91f2afe",
                "nome": "Curso de HTML5 - 01",
                "conteudo": "HTML5 é uma linguagem de marcação hipertexto utilizada para criar sites. A versão 5 da linguagem foi homologada e lançada a partir de 2009, mas só ganhou mercado no final de 2012 com o surgimento dos grandes navegadores compatíveis.",
                "url": "https://www.youtube.com/watch?v=epDCjksKMok&list=PLHz_AreHm4dlAnJ_jJtV29RFxnPHDuk9o",
                "nrOrdem": 0,
                "curso": "5fcb0d196a3de43280bc8ee6",
                "__v": 0
            },
            "visualizado": false
        }
    ],
    "dataDeMatricula": "2020-12-13T05:18:45.363Z",
}
```


```
/api/matriculas/5fd23c9ae8096e00178c794b
```

### Response

**Status code**

- **200 OK**: Sucesso.

**Body**

- **matricula**: Retorna a matrícula com suas aulas associadas e, se for o caso, o status `aprovado` alterado automaticamente.

```
{
    "aprovado": false,
    "_id": "5fd5a4359901a33348093274",
    "usuario": "5fd23c9ae8096e00178c794b",
    "curso": {
        "_id": "5fcb0d196a3de43280bc8ee6",
        "nome": "Curso HTML5 Completo e GRÁTIS",
        "descricao": "Professor: Gustavo Guanabara",
        "badge": "HTML5_AVANCADO",
        "categoria": "5fcb0d176a3de43280bc8ee5",
        "__v": 0
    },
    "aulas": [
        {
            "_id": "5fd5a4359901a33348093275",
            "video": {
                "_id": "5fd035ca48003a5037883f70",
                "nome": "Curso de HTML5 - 00",
                "conteudo": "HTML5 é uma linguagem de marcação hipertexto utilizada para criar sites. A versão 5 da linguagem foi homologada e lançada a partir de 2009, mas só ganhou mercado no final de 2012 com o surgimento dos grandes navegadores compatíveis.",
                "url": "https://www.youtube.com/watch?v=epDCjksKMok&list=PLHz_AreHm4dlAnJ_jJtV29RFxnPHDuk9o",
                "nrOrdem": 0,
                "curso": "5fcb0d196a3de43280bc8ee6",
                "__v": 0
            },
            "visualizado": true
        },
        {
            "_id": "5fd5a4359901a33348093276",
            "video": {
                "_id": "5fd5a41943e57175f91f2afe",
                "nome": "Curso de HTML5 - 01",
                "conteudo": "HTML5 é uma linguagem de marcação hipertexto utilizada para criar sites. A versão 5 da linguagem foi homologada e lançada a partir de 2009, mas só ganhou mercado no final de 2012 com o surgimento dos grandes navegadores compatíveis.",
                "url": "https://www.youtube.com/watch?v=epDCjksKMok&list=PLHz_AreHm4dlAnJ_jJtV29RFxnPHDuk9o",
                "nrOrdem": 0,
                "curso": "5fcb0d196a3de43280bc8ee6",
                "__v": 0
            },
            "visualizado": false
        }
    ],
    "dataDeMatricula": "2020-12-13T05:18:45.363Z",
    "__v": 0
}
```
**Status code**

- **404 Not Found**: Não existe matrícula com o ID informado.

**Body**

- **message**: Mensagem informando a causa do erro. 

```
{
    "message": "Matrícula não encontrada."
}
```