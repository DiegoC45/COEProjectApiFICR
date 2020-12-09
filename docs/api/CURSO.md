# Curso

## GET /api/cursos - Listar cursos 

### Request

**Query Params**

- **q (string)**: Texto de busca. 

```
/api/cursos?q=html
```

### Response

**Status code**

- **200 OK**: Sucesso.

**Body**

- **cursos**: Lista de todos os cursos cujo o nome contenha em qualquer parte o texto de busca. Caso não seja informado um texto de busca, todos os cursos serão retornados na lista.

```
[
    {
        "_id": "5fcb0d196a3de43280bc8ee6",
        "nome": "Curso HTML5 Completo e GRÁTIS",
        "descricao": "Professor: Gustavo Guanabara",
        "badge": "HTML5_AVANCADO",
        "categoria": "5fcb0d176a3de43280bc8ee5",
        "__v": 0
    }
]
```

## GET /api/cursos/:id - Busca curso pelo ID. 

### Request

**URL Params**

- **id (string)**: ID do curso desejado. 

```
/api/cursos/5fcb0d196a3de43280bc8ee6
```

### Response

**Status code**

- **200 OK**: Sucesso.

**Body**

- **curso**: Curso com o ID informado.

```
{
    "_id": "5fcb0d196a3de43280bc8ee6",
    "nome": "Curso HTML5 Completo e GRÁTIS",
    "descricao": "Professor: Gustavo Guanabara",
    "badge": "HTML5_AVANCADO",
    "categoria": "5fcb0d176a3de43280bc8ee5",
    "__v": 0
}
```

**Status code**

- **404 Not Found**: Não existe curso com o ID informado.

**Body**

- **message**: Mensagem informando a causa do erro. 

```
{
    "message": "Curso não encontrado."
}
```