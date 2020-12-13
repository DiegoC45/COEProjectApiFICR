# Video

## GET /api/videos - Listar vídeos 

### Request

**Query Params**

- **text (string)**: Texto de busca. 

```
/api/videos?text=HTML5
```

### Response

**Status code**

- **200 OK**: Sucesso.

**Body**

- **cursos**: Lista de todos os vídeos cujo o nome contenha em qualquer parte o texto de busca. Caso não seja informado um texto de busca, todos os cursos serão retornados na lista.

```
[
    {
        "_id": "5fd035ca48003a5037883f70",
        "nome": "Curso de HTML5 - 00",
        "conteudo": "HTML5 é uma linguagem de marcação hipertexto utilizada para criar sites. A versão 5 da linguagem foi homologada e lançada a partir de 2009, mas só ganhou mercado no final de 2012 com o surgimento dos grandes navegadores compatíveis.",
        "url": "https://www.youtube.com/watch?v=epDCjksKMok&list=PLHz_AreHm4dlAnJ_jJtV29RFxnPHDuk9o",
        "nrOrdem": 0,
        "curso": "5fcb0d196a3de43280bc8ee6",
        "__v": 0
    },
    {
        "_id": "5fd53e1ad7d737f4642b1c5d",
        "nome": "Javascript for begginers",
        "conteudo": "Curso básico de Javascript",
        "url": "https://www.youtube.com/watch?v=PkZNo7MFNFg",
        "nrOrdem": 0,
        "curso": "5fd53d4ad7d737f4642b1c5c",
        "__v": 0
    },
    {
        "_id": "5fd5a41943e57175f91f2afe",
        "nome": "Curso de HTML5 - 01",
        "conteudo": "HTML5 é uma linguagem de marcação hipertexto utilizada para criar sites. A versão 5 da linguagem foi homologada e lançada a partir de 2009, mas só ganhou mercado no final de 2012 com o surgimento dos grandes navegadores compatíveis.",
        "url": "https://www.youtube.com/watch?v=epDCjksKMok&list=PLHz_AreHm4dlAnJ_jJtV29RFxnPHDuk9o",
        "nrOrdem": 0,
        "curso": "5fcb0d196a3de43280bc8ee6",
        "__v": 0
    }
]
```

## GET /api/curso/:id/videos - Busca vídeos por curso. 

### Request

**URL Params**

- **id (string)**: ID do curso. 

```
/api/cursos/5fcb0d196a3de43280bc8ee6/videos
```

### Response

**Status code**

- **200 OK**: Sucesso.

**Body**

- **videos**: Vídeos do curso com o ID informado.

```
[
    {
        "_id": "5fd035ca48003a5037883f70",
        "nome": "Curso de HTML5 - 00",
        "conteudo": "HTML5 é uma linguagem de marcação hipertexto utilizada para criar sites. A versão 5 da linguagem foi homologada e lançada a partir de 2009, mas só ganhou mercado no final de 2012 com o surgimento dos grandes navegadores compatíveis.",
        "url": "https://www.youtube.com/watch?v=epDCjksKMok&list=PLHz_AreHm4dlAnJ_jJtV29RFxnPHDuk9o",
        "nrOrdem": 0,
        "curso": "5fcb0d196a3de43280bc8ee6",
        "__v": 0
    },
    {
        "_id": "5fd5a41943e57175f91f2afe",
        "nome": "Curso de HTML5 - 01",
        "conteudo": "HTML5 é uma linguagem de marcação hipertexto utilizada para criar sites. A versão 5 da linguagem foi homologada e lançada a partir de 2009, mas só ganhou mercado no final de 2012 com o surgimento dos grandes navegadores compatíveis.",
        "url": "https://www.youtube.com/watch?v=epDCjksKMok&list=PLHz_AreHm4dlAnJ_jJtV29RFxnPHDuk9o",
        "nrOrdem": 0,
        "curso": "5fcb0d196a3de43280bc8ee6",
        "__v": 0
    }
]
```