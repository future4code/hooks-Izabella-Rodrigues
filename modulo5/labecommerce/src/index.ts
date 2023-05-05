import { app } from "./app"


// Endpoint que pega todos os users
app.get("/users", )

// Endpoint que pega todas as compra de um usuário pelo user_id
app.get("/users/:userId/purchases", )

// Endpoint que cria um usuário
app.post("/users", )

//Endpoint que pega todos os produtos
app.get("/products", )

//Endpoint que cria um produto
app.post("/products", )

// Endpoint que realiza uma compra
app.post("/purchases", )
