import express, { Express, Request, Response } from "express";


const app : Express = express()
const port = 3000;
const data : Question[] = require('./questions.json')

interface Question {
    question : string, 
    topic : string 
    options : Array<string>,
    correctAnswer : string,
    difficulty : number
}

interface Player {
    username : string,
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
    return questions.map((e) => e.question)
}

app.get("/questions/:id", (req : Request, res : Response) => {
    let id : number = parseInt(req.params.id)
    res.status(200).send(data[id].question)
})

app.get("/questions", (req : Request, res : Response) => {
    res.status(200).send(getQuestions(data, req.query.difficulty as string, req.query.topic as string))
})

app.get("/score/:playerName", (req : Request, res : Response) => {
    if (players.map((e) => e.username).includes(req.params.playerName)) {
        res.status(200).send(players.filter((e) => e.username == req.params.playerName)[0].score)
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
    if (body.answerResponse = data[body.questionId].correctAnswer) {
        players.filter((e) => e.username == body.user)[0].score += 1
        res.send("Correct")
    }
})

function filterQuestions(diff : String, topic : String) {
    return data.filter((e : any) => e.difficulty == diff && e.topic == topic)
}

app.listen(port, () => {
    console.log("Server is running on PORT: ", port);
}).on("error", (error) => {
    throw new Error(error.message);
})