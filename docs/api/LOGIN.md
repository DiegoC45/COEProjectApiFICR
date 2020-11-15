# Usuário

## POST /api/login - Logar no sistema 

### Request

**Body**

- **email (string / required)**: Email do usuário.
- **senha (string / required)**: Senha de acesso do usuário. 

```
{
    "email": "jogadorneymar@mail.com",
    "senha": "12345678"
}
```

### Response

**Status code**

- **200 OK**: Login feito com sucesso.

**Body**

- **message**: Mensagem informando que a requisição foi bem sucedida.
- **data**: Usuário logado.

```
{
    "message": "Login feito com sucesso.",
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

- **403 Forbidden**: Falha ao fazer login no sistema.

**Body**

- **message**: Mensagem informando a causa do erro. 

```
{
    "message": "Usuário ou senha inválidos."
}
```