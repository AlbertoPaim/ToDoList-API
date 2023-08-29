# Lista de Tarefas API

Uma API simples para gerenciar uma lista de tarefas.

**Autor:** Alberto Paim

## Funcionalidades

- **Criar uma tarefa:** O ID será gerado automaticamente. O título é obrigatório.  
![Criar uma tarefa](https://raw.githubusercontent.com/AlbertoPaim/ToDoList-API/main/images/title%20is%20required.png)
 
- Se o campo "Done" não for informado, será gerado como "false" automaticamente.  
![Criar uma tarefa](https://raw.githubusercontent.com/AlbertoPaim/ToDoList-API/main/images/created.png)

- **Atualizar uma tarefa:** Modifique o título e indique se a tarefa foi concluída ou não.  
![Atualizar uma tarefa](https://raw.githubusercontent.com/AlbertoPaim/ToDoList-API/main/images/update.png)

- **Deletar uma tarefa:**  
![Deletar uma tarefa](https://raw.githubusercontent.com/AlbertoPaim/ToDoList-API/main/images/deleted.png)

- Uma tarefa não marcada como feita não pode ser deletada.  
![Deletar uma tarefa](https://raw.githubusercontent.com/AlbertoPaim/ToDoList-API/main/images/cannot%20delete%20unfi.png)

- **Listar todas as tarefas:** Exibe todas as tarefas existentes, incluindo as modificações feitas.  
![Listar todas as tarefas](https://raw.githubusercontent.com/AlbertoPaim/ToDoList-API/main/images/all.png)

## Tecnologias Utilizadas

- Node.js
- Pacote Express

## Requisitos

- Node.js instalado

## Como Instalar

1. Clone este repositório para uma pasta local: git clone https://github.com/AlbertoPaim/ToDoList-API

2. Navegue até a pasta do projeto no terminal.

3. Instale as dependências usando o seguinte comando: npm install

4. Execute o servidor com o seguinte comando: npm run dev

## Rotas

- **POST** /tasks: Cria uma nova tarefa.
- **PU**T /tasks/:id Atualiza uma tarefa existente.
- **DELETE** /tasks/:id Deleta uma tarefa, desde que esteja marcada como concluída.
- **GET** /tasks: Lista todas as tarefas.

## Testando as Rotas

Você pode testar as rotas da API usando uma ferramenta para envio de solicitações HTTP, como o [Postman](https://www.postman.com/) ou qualquer outra alternativa similar. Isso permitirá que você explore e interaja com as diferentes funcionalidades da API, incluindo a criação, atualização, deleção e listagem de tarefas.

Certifique-se de usar o método HTTP correto (por exemplo, POST, PUT, DELETE, GET) e fornecer os parâmetros necessários nas solicitações para verificar o funcionamento da API.

O servidor estará executando na porta: http://localhost:3000
