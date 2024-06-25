import { Container, Paper, Table, TableContainer, Typography, TableHead, TableRow, TableCell, TableBody, Button } from "@mui/material"
import { useState, useEffect } from "react"
import quizService from "../api/services/quizService"
import { useNavigate } from "react-router-dom"
import routes from "../navigation/routes"


const Summary = () => {
    const [score, setScore] = useState(0)

    const navigate = useNavigate()
    
    useEffect(() => {
        getScores()
    }, [])

    const getScores = async () => {
        const res = await quizService.retrieveScore("Player")
        if (res.success) {
            setScore(res.data as number)
        }
    }

    return (
        <Container maxWidth="sm">
            <Typography variant="h3">
                Summary
            </Typography>
            <Typography variant="h5">
                Final Score: {score}
            </Typography>
            <Button onClick={() => navigate(routes.main)}>
                Play Again!
            </Button>
        </Container>
    )
}

export default Summary;