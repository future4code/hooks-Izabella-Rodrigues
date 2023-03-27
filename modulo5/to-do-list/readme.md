
# To Do List 

### Estrutura de Dados

* Usuários:
    * Name;
    * nickname;
    * email;
    * id;
 
* Tarefas:
    * title;
    * description;
    * deadline;
    * status: to do, doing, done;
    * author;
    * responsible;
    * id;

### Criação de Tabelas - MySql

    CREATE TABLE to_do_list_users (
        id VARCHAR(70) PRIMARY KEY,
        name VARCHAR(20) NOT NULL,
        nickname VARCHAR(20) NOT NULL,
        email VARCHAR(70) NOT NULL
    );
    
    CREATE TABLE  to_do_list_tasks (
        id VARCHAR(70) PRIMARY KEY,
        title VARCHAR(70) NOT NULL,
        description VARCHAR(1000) NOT NULL,
        deadline DATE,
        status ENUM("TO_DO", "DOING", "DONE") DEFAULT "TO_DO",
        author_id VARCHAR(70),
        FOREIGN KEY (author_id) REFERENCES to_do_list_users(id)
    );

    CREATE TABLE to_do_list_responsible (
        task_id VARCHAR(70),
        responsible_id VARCHAR(70),
        PRIMARY KEY (task_id, responsible_id),
        FOREIGN KEY (task_id) REFERENCES to_do_list_tasks(id),
        FOREIGN KEY (responsible_id) REFERENCES to_do_list_users(id),
    );

### Endpoints    

- **1. Criar usuário**
    
    **Método:** POST
    **Path:** `/user`
    
    **Body:**
    
    ```json
    {
    	"name": "Astro Dev",
    	"nickname": "astrodev",
    	"email": "astro@dev.com"
    }
    ```
    
    **Observações**:
    
    - O seu código deve validar se os três campos estão completos (ou seja se não foram enviados ou se não estão vazios) e retornar um erro caso não estejam válidos
    - O seu código deve gerar o id do usuário

    - **2. Pegar usuário pelo id**
    
    **Método:** GET
    **Path:** `/user/:id`
    
    **Path Param**: é o id do usuário
    
    **Body de Resposta:**
    
    ```json
    {
    	"id": "001",
    	"nickname": "astrodev"
    }
    ```
    
    **Observações**:
    
    - O endpoint deve retornar um erro se não encontrar o usuário

    - **3. Editar usuário**
    
    **Método:** PUT
    **Path:** `/user/edit/:id`
    
    **Path Param**: é o id do usuário
    
    **Body:**
    
    ```json
    {
    	"name": "Astro Dev",
    	"nickname": "astrodev"
    }
    ```
    
    **Observações**:
    
    - O seu código só deve alterar o que for enviado
    - Se algum valor enviado for vazio, deve retornar um erro

    - **4. Criar tarefa**
    
    **Método:** POST
    **Path:** `/task`
    
    **Body:**
    
    ```json
    {
    	"title": "Criar banco dos alunos",
    	"description": "Devemos criar o banco dos alunos para o módulo do backend",
    	"limitDate": "04/05/2020",
    	"creatorUserId": "001"
    }
    ```
    
    **Observações**:
    
    - O seu código deve validar se todos os campos não estão vazios,
    - O seu código deve gerar o id da tarefa,
    - A data deve se recebida no formato mostrado acima: `DD/MM/YYYY` e o seu código deve fazer a conversão necessária para salvar no banco

    - **5. Pegar tarefa pelo id**
    
    **Método:** GET
    **Path:** `/task/:id`
    
    **Path Param**: é o id da tarefa
    
    **Body de Resposta:**
    
    ```json
    {
    	"taskId": "001",
    	"title": "Criar banco dos alunos",
    	"description": "Devemos criar o banco dos alunos para o módulo do backend",
    	"limitDate": "04/05/2020",
    	"status": "to_do",
    	"creatorUserId": "001",
    	"creatorUserNickname": "astrodev"
    }
    ```
    
    **Observações**:
    
    - O endpoint deve retornar um erro se não encontrar a task
    - Perceba que o endpoint retorna informações tanto da tarefa como do usuário criador
    - O seu código deve converter a data recebida do banco para o formato mostrado acima (`DD/MM/YYYY`)