import express from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

//Exercicio 01

app.get("/", (req, res) => {          
    res.send("Hello from Express")
})

//Exercicio 02

type User = {
    id: number,
    nome: string,
    phone: number,
    email: string,
    website: string
}

//Exercicio 03




//Exercicio 04

//Exercicio 05

//Exercicio 06

//Exercicio 07

//Exercicio 08



app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
   });




