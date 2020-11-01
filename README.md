# Coe API

API REST para o projeto Coe. Projeto criado como atividade de avaliação do 4º período de ADS.

## Ferramentas
*  [Node.js](https://nodejs.org/en/)
*  [npm](https://www.npmjs.com/)
*  [nodemon](https://nodemon.io/)
*  [Express](https://expressjs.com/)

## Instalação

Execute o comando na raiz do projeto:

```bash
npm install
```

## Ambiente de desenvolvimento

### Clonando o repositório

Para configurar o ambiente de desenvolvimento, primeiro faça o clone do repositório no seu computador:

```bash
git clone git@github.com:DiegoC45/COEProjectApiFICR.git
```

Em seguida, inicie o git flow:

```bash
git flow init
```

Pressione `Enter` até alcançar o seguinte resultado:

```bash
No branches exist yet. Base branches must be created now.
Branch name for production releases: [master]
Branch name for "next release" development: [develop]

How to name your supporting branch prefixes?
Feature branches? [feature/]
Bugfix branches? [bugfix/]
Release branches? [release/]
Hotfix branches? [hotfix/]
Support branches? [support/]
Version tag prefix? []
Hooks and filters directory? [~/COEProjectApiFICR/.git/hooks]
```

Para mais informações sobre o git flow, [clique aqui](https://danielkummer.github.io/git-flow-cheatsheet/index.pt_BR.html).

### Executando o servidor

Para executar o servidor no ambiente de desenvolvimento.

```bash
npm run dev
```

### Fluxo do git para o desenvolvimento das features

Para desenvolver uma feature, é preciso garantir que o repositório local está sincronizado com o remoto:

```bash
git checkout develop
git pull origin develop
```

Em seguida, crie a branch da feature com a ajuda do git flow, que já fará o checkout:

```bash
git flow feature start nome-da-branch
```

Após fazer o commit das alterações, digite o comando abaixo e crie um pull request pra develop no GitHub:

```bash
git push -u origin nome-da-branch
```
