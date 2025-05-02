# TO-DO List API
A To-Do List API é uma RESTful API construída com Node.js e Express, permitindo gerenciar uma lista de tarefas. O projeto realiza operações básicas de CRUD (Criar, Ler, Atualizar e Deletar) em tarefas. A aplicação utiliza um arquivo JSON para armazenar as tarefas, sem a necessidade de um banco de dados externo. Essa API é ideal para quem deseja uma solução simples e leve para gerenciamento de tarefas.


# Endpoints da API
GET `/tasks`
- Lista todas as tarefas armazenadas no arquivo JSON.
- Resposta de Sucesso:
    ```json
    [
      {
        "id": 1,
        "task": "Descrição da tarefa"
      },
      {
        "id": 2,
        "task": "Outra tarefa"
      }
    ]
    ```
- Status: `200 OK`

---

POST `/task`
- Cria uma nova tarefa e a adiciona ao arquivo JSON.
- Body:
    ```json
    {
      "task": "Descrição da nova tarefa"
    }
    ```
- Resposta de Sucesso:
    ```json
    {
      "id": 1,
      "task": "Descrição da nova tarefa"
    }
    ```
- Status: `201 Created`

---

PUT `/task/:id`
- Atualiza uma tarefa existente com base no ID fornecido.
- Parâmetros:
    - `id`: ID da tarefa que será atualizada.
- Body:
    ```json
    {
      "task": "Tarefa atualizada"
    }
    ```
- Resposta de Sucesso:
    ```json
    {
      "id": 1,
      "task": "Tarefa atualizada"
    }
    ```
- Status: `200 OK`

---

DELETE `/task?id`
- Deleta uma tarefa específica com base no ID fornecido.
- Parâmetros:
    - `id`: ID da tarefa que será deletada.
- Resposta de Sucesso:
  ```json
    {
      "message": "Tarefa deletada com sucesso"
    }
    ```
- Status: `200 OK`
---

# Como rodar o projeto

Requisitos
Antes de rodar o projeto, é necessário ter o seguinte instalado:

- **Node.js** (versão 14 ou superior)
- **npm** (gerenciador de pacotes do Node.js)

1. Clonar o Repositório
   ```bash
   git clone https://github.com/lucas-jurgensen/node_fs_todo.git
   cd node_fs_todo
   ```

2. Instalar as dependências do projeto
   ```bash
    npm install
   ```

3. Rodar o servidor localmente
    ```bash
    npm run dev
    ```
O servidor será iniciado na porta `3000`. Você pode acessar a API em http://localhost:3000

- Você pode testar os endpoints utilizando ferramentas como o Postman ou o Insomnia, fazendo requisições para os seguintes endpoints:

`GET /tasks` - Para listar todas as tarefas.

`POST /task` - Para criar uma nova tarefa.

`PUT /task/:id` - Para atualizar uma tarefa existente.

`DELETE /task?id` - Para deletar uma tarefa.

