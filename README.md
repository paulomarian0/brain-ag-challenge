# Desafio Técnico - Brain AG

## Pré-requisitos

- Node.js: [Instalação](https://nodejs.org/)
- Docker: [Instalação](https://docs.docker.com/get-docker/)

## Como começar

1. Clone este repositório:

    ```bash
    git clone https://github.com/paulomarian0/brain-ag-challenge.git
    ```

2. Entre no diretório do projeto:

    ```bash
    cd brain-ag-challenge
    ```

3. Instale as dependências:

    ```bash
    npm i
    ```

4. Crie um arquivo `.env`, você pode copiar o conteúdo do `.env.example`, para rodar o docker localmente e o servidor rodar na porta 3000.

5. Inicie os containers Docker:

    ```bash
    npm run docker-start
    ```

6. Execute o setup do Prisma:

    ```bash
    npm run prisma:setup
    ```

7. Inicie o servidor de desenvolvimento:

    ```bash
    npm run dev
    ```

## Documentação

A documentação da API pode ser acessada em [localhost:3000/docs](http://localhost:3000/docs).
