import { Container, Paper, Table, TableContainer, Typography, TableHead, TableRow, TableCell, TableBody, Button } from "@mui/material"
import { useNavigate } from "react-router-dom"
import routes from "../navigation/routes"


const Summary = ({score}) => {
    const navigate = useNavigate()

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