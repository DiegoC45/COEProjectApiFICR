# Matrícula

## POST /api/matricula - Registrar matrícula no sistema

### Request

**Body**

- **aprovado (boolean / required)**: Status da aprovação.
- **dataDeMatricula (boolean / required)**: Senha de acesso do usuário. 

```
{
    "aprovado": "true",
    "dataDeMatricula": "12/11/2020"
}
```

### Response

**Status code**

- **200 OK**: Login feito com sucesso.

**Body**

- **message**: Mensagem informando que a requisição foi bem sucedida.
- **data**: Matrícula efetivada com sucesso..

```
{
    "message": "Matrícula efetivada com sucesso.",
    "data": {
        "_id": "5fb08558cc69d86704910e8b",
        "aprovado": "true",
        "dataDeMatricula": "12/11/2020",
        "__v": 0
    }
}
```

**Status code**

- **404 Forbidden**

**Body**

- **message**: Mensagem informando a causa do erro. 

```
{
    "message": "Erro ao inserir matrícula."
}
```
