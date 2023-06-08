import { app } from "./app"
import { createUser } from "./endpoints/createUsers"
import { createProduct } from "./endpoints/createProducts"
import { searchProducts } from "./endpoints/searchProducts"
import { searchUsers } from "./endpoints/searchUsers"
import { createPurchase } from "./endpoints/purchaseRecord"
import { userShoppingSearch } from "./endpoints/userShoppingSearch"

// Endpoint que pega todos os users
app.get("/users", searchUsers)

// Endpoint que pega todas as compra de um usuário pelo user_id
app.get("/users/:userId/purchases", userShoppingSearch)

// Endpoint que cria um usuário
app.post("/users", createUser )

//Endpoint que pega todos os produtos
app.get("/products", searchProducts)

//Endpoint que cria um produto
app.post("/products", createProduct )

// Endpoint que realiza uma compra
app.post("/purchases", createPurchase)


