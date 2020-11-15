# Usuário

## POST /api/usuarios - Criar usuário 

### Request

**Body**

- **nome (string / required)**: Nome do usuário.
- **sobrenome (string / required)**: Sobrenome do usuário.
- **email (string / required / unique)**: Email do usuário.
- **senha (string / required)**: Senha de acesso do usuário. 

```
{
    "nome": "Neymar",
    "sobrenome": "Junior",
    "email": "jogadorneymar@mail.com",
    "senha": "12345678"
}
```

### Response

**Status code**

- **201 Created**: Usuário criado com sucesso.

**Body**

- **message**: Mensagem informando que a requisição foi bem sucedida.
- **data**: Usuário criado com id.

```
{
    "message": "Usuário registrado com sucesso.",
    "data": {
        "_id": "5fb08558cc69d86704910e8b",
        "nome": "Neymar",
        "sobrenome": "Junior",
        "email": "jogadorneymar@mail.com",
        "__v": 0
    }
}
```

**Status code**

- **422 Unprocessable Entity**: Falha ao criar o usuário.

**Body**

- **message**: Mensagem informando a causa do erro. 

```
{
    "message": "Email já cadastrado no sistema."
}
```