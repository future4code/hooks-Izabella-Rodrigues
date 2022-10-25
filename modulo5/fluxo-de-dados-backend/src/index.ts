import express from 'express'
import cors from 'cors'
import { v4 as generateId } from 'uuid';
import { products } from './data';

const app = express()

app.use(express.json())
app.use(cors())

//Exercicio 01

app.get("/ping", (request, response) => {
    response.send("Pong! 🏓")
})

//Exercicio 03

type productsType = {
    productsID: string,
    productsName: string,
    procutsPrice: number
}



app.post('/create/products', (req, res) => {
    let statusCode = 500
    let productsList: productsType[] = products

    try {
      const productsName = req.body.productsName
      const procutsPrice = req.body.procutsPrice
      
      if (!productsName) {
        statusCode = 401
        throw new Error("Você precisa informar um nome!")
      }
  
      const productsExist = productsList.find((products) => products.productsName === productsName)
      if (productsExist) {
        statusCode = 409
        throw new Error("Produto já existe")
      }
  
      const products = {
        productsID: generateId(),
        productsName,
        procutsPrice
      }
  
      productsList.push(products)
  
      return res.status(201).send("Produto cadastrado com sucesso.")
  
    } catch (error: any) {
      return res.status(statusCode).send({ message: error.message, status: statusCode })
    }
  })

//Exercicio 04

app.get('/products', (req, res) => {
  let statusCode = 500
  try {
    res.send (products)

  } catch (error: any) {
    return res.status(statusCode).send({message: error.message, status: statusCode})
  }
})
  
//Exercicio 05

app.put("productsEdit/:id", (req, res) => {
  let statusCode = 500
  const productsID = req.params
  const newPrice = req.body as number


    
})

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
   })

