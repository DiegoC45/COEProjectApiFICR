# Categoria

## GET /api/categorias - Listar categorias 

### Request

**Query Params**

- **q (string)**: Texto de busca. 

```
/api/categorias?q=html
```

### Response

**Status code**

- **200 OK**: Sucesso.

**Body**

- **categorias**: Lista de todas as categorias cujo o nome contenha em qualquer parte o texto de busca. Caso não seja informado um texto de busca, todas as categorias serão retornadas na lista.

```
[
    {
        "_id": "5fcb0d176a3de43280bc8ee5",
        "nome": "HTML5",
        "__v": 0
    }
]
```

## GET /api/categorias/:id - Busca categoria pelo ID. 

### Request

**URL Params**

- **id (string)**: ID da categoria desejada. 

```
/api/categorias/5fcb0d176a3de43280bc8ee5
```

### Response

**Status code**

- **200 OK**: Sucesso.

**Body**

- **categoria**: Categoria com o ID informado.

```
{
    "_id": "5fcb0d176a3de43280bc8ee5",
    "nome": "HTML5",
    "__v": 0
}
```

**Status code**

- **404 Not Found**: Não existe categoria com o ID informado.

**Body**

- **message**: Mensagem informando a causa do erro. 

```
{
    "message": "Categoria não encontrada."
}
```