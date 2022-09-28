import express from 'express'
import cors from 'cors'
import { v4 as generateId } from 'uuid';

const app = express()

app.use(express.json())
app.use(cors())

//Exercicio 01

app.get("/ping", (request, response) => {
    response.send("Pong! 🏓")
})


//Exercicio 02

type taskType = {
    userId: number,
    tarefaId: string,
    title: string,
    completed: boolean
}

//Exercicio 03

const tasks: taskType [] = [
    {
        userId: 1,
        tarefaId: generateId(),
        title: "Estudar",
        completed: true
    }, 
    {
        userId: 2,
        tarefaId: generateId(),
        title: "Ler",
        completed: true
    },
    { 
        userId: 3,
        tarefaId: generateId(),
        title: "Academia",
        completed: true
    },
    { 
        userId: 4,
        tarefaId: generateId(),
        title: "Trabalho",
        completed: true
    },
    { 
        userId: 5,
        tarefaId: generateId(),
        title: "Lazer",
        completed: false
    },
    { 
        userId: 6,
        tarefaId: generateId(),
        title: "Médico",
        completed: false
    },
    { 
        userId: 7,
        tarefaId: generateId(),
        title: "Exames",
        completed: false
    },
    { 
        userId: 8,
        tarefaId: generateId(),
        title: "Aula Inglês",
        completed: true
    },
 
]


//Exercicio 04

app.get ("/completedtasks/:trueorfalse", (req, res) => {
    
    let trueorfalse: any = req.params.trueorfalse

    try {
        if (trueorfalse === "true") {
            trueorfalse = true
        } else if (trueorfalse === "false") {
            trueorfalse = false
        } else {
            res.send ("Autorization deve ser 'true' ou 'false'.")
        }
     
        const taskList = tasks.filter ((tasks) => {
            return tasks.completed === trueorfalse
        })

        res.send(taskList)

    } catch (error: any) {
        res.send(error.message)
    }
})
    
   
//Exercicio 05

app.post("/createtask", (req, res) => {
    const userId = req.body.userId
    const title = req.body.title

        const newTask: taskType = {
            userId,
            tarefaId: generateId(),
            title,
            completed: false
        }

        tasks.push(newTask)

        res.send ("Tarefa criada com Sucesso")
        
        })





app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
   });