import express, { Express, Request, Response } from "express";
import cors from 'cors'

const app : Express = express()
const port = 3000;
const data : Question[] = require('./questions.json')
app.use(express.json())
app.use(cors())

interface Question {
    question : string, 
    topic : string 
    options : Array<string>,
    correctAnswer? : string,
    difficulty : number
}

interface Player {
    username : string,
    password : string,
    score : number
}

interface AnswerResponse {
    user : string,
    questionId : number,
    answerResponse : string
}

let players : Player[] = []

function getQuestions(data : Question[], difficulty? : string, topic? : string) {
    let questions : Question[] = data;
    if (difficulty != undefined) {
        questions = questions.filter((e) => e.difficulty.toString() == difficulty)
    }
    if (topic != undefined) {
        questions = questions.filter((e) => e.topic == topic)
    }
    questions.forEach((e) => delete e.correctAnswer)
    return questions
}

app.get("/questions/:id", (req : Request, res : Response) => {
    let id : number = parseInt(req.params.id)
    res.status(200).send({
        "question": data[id].question,
        "topic": data[id].topic,
        "options": data[id].options,
        "difficulty": data[id].difficulty
    })
})

app.get("/questions", (req : Request, res : Response) => {
    res.status(200).send(getQuestions(data, req.query.difficulty as string, req.query.topic as string))
})

app.get("/topics", (req : Request, res : Response) => {
    let topics : string[] = []
    data.forEach((e) => {
        if (!topics.includes(e.topic)) {
            topics.push(e.topic)
        }
    })
    res.status(200).send(topics)
})

app.get("/score/:playerName", (req : Request, res : Response) => {
    console.log(req.params.playerName)
    if (players.map((e) => e.username).includes(req.params.playerName)) {
        console.log(players.filter((e) => e.username == req.params.playerName)[0].score)
        res.status(200).send(`${players.filter((e) => e.username == req.params.playerName)[0].score}`)
    } else {
        res.status(400).send("User does not exist!")
    }
})

app.get("/answer/:id", (req : Request, res : Response) => {
    let id : number = parseInt(req.params.id)
    res.status(200).send(data[id].correctAnswer)
})

app.post("/verify", (req : Request, res : Response) => {
    let body : AnswerResponse = req.body
    if (body.answerResponse == data[body.questionId].correctAnswer) {
        players.filter((e) => e.username == body.user)[0].score += 1
        res.send("Correct")
    } else {
        res.send("Incorrect")
    }
})

app.post("/register", (req : Request, res : Response) => {
    let body : Player = {...req.body, "score" : 0}
    if (!players.some((e) => {
        return e.username == body.username
    })) {
        players.push(body)
        res.send("Registered player")
    } else {
        res.send("Player already registered")
    }
})

app.post("/unregister/:playerName", (req : Request, res : Response) => {
    console.log(players)
    if (players.some((e) => {
        return e.username == req.params.playerName
    })) {
        players = players.filter((e) => e.username != req.params.playerName)
        res.send("Unregistered player")
    } else {
        res.send("Player does not exist!")
    }
})

app.post("/reset", (req : Request, res : Response) => {
    players.forEach((e) => {
        e.score = 0
    })
    res.send("Reset scores!")
})

function filterQuestions(diff : String, topic : String) {
    return data.filter((e : any) => e.difficulty == diff && e.topic == topic)
}

app.listen(port, () => {
    console.log("Server is running on PORT: ", port);
}).on("error", (error) => {
    throw new Error(error.message);
})