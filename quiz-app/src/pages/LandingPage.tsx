import { Button, ButtonGroup, Container, Grid, MenuItem, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import questionService from "../api/services/questionService"
import Question from "../types/question"
import { useNavigate } from "react-router-dom"
import routes from "../navigation/routes"
import quizService from "../api/services/quizService"
import { Topics } from "../api/contracts/quiz"

export const topics = [
  { label: 'Math', value: 'Math' },
  { label: 'Astronomy', value: 'Astronomy' },
  { label: 'Chemistry', value: 'Chemistry' },
  { label: 'History', value: 'History' },
]

interface Props {
  questions: Array<Question>,
  setQuestions: (arg: Array<Question>) => void,
  numberOfPlayers: number,
  setNumberOfPlayers: (arg: number) => void
}

const LandingPage = ({questions, setQuestions, numberOfPlayers, setNumberOfPlayers}: Props) => {
  const [topic, setTopic] = useState('All')
  const [topics, setTopics] = useState<Array<{label: string, value: string}>>([])
  const [difficulty, setDifficulty] = useState(1)

  const navigate = useNavigate()

  useEffect(() => {
    loadTopics()
  }, [])

  const loadTopics = async () => {
    const res = await quizService.retrieveTopics()
    if(res.success) {
      let t = res.data as Topics
      setTopics(t.map(val => {return {label: val, value: val}}))
    }
  }

  const getQuestions = async () => {
    let query = ``

    if(difficulty > 0)
      query += `difficulty=${difficulty}&`
    if(topic != 'All')
      query += `topic=${topic}`

    console.log('fetching questions')
    const res = await questionService.retrieve(query)
    console.log(`got ` + res.data)

    for(let i = 0; i < numberOfPlayers; i++) {
      await quizService.registerPlayer(`Player`)
    }

    if (res.success)
      setQuestions(res.data as Question[])

    console.log(questions)

    navigate(routes.quiz)
  }

  return (
    <Container maxWidth='xl'>
        <Typography variant="h1">
            Welcome to Fishermen's Quiz!
        </Typography>

        <Grid container spacing={3} sx={{display: 'flex', justifyContent: 'center', alignContent: 'center', flexDirection: 'column'}}>
          <Grid item sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
            <Typography variant="h3">Start your quiz below</Typography>
          </Grid>
          <Grid item sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
            <Typography variant="body1">Select a Topic</Typography>
            <TextField
              placeholder="topic" 
              fullWidth
              select
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
            >
              <MenuItem value='All'>
                <em>All</em>
              </MenuItem>
                {topics.map(item => <MenuItem key={item.value} value={item.value}>{item.label}</MenuItem>)}
            </TextField>
          </Grid>
          <Grid item sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
            <ButtonGroup aria-label="Basic button group">
              <Button onClick={() => setDifficulty(0)} variant={difficulty == 0? "contained":"outlined"}>Mixed</Button>
              <Button onClick={() => setDifficulty(1)} variant={difficulty == 1? "contained":"outlined"}>Easy</Button>
              <Button onClick={() => setDifficulty(2)} variant={difficulty == 2? "contained":"outlined"}>Medium</Button>
              <Button onClick={() => setDifficulty(3)} variant={difficulty == 3? "contained":"outlined"}>Hard</Button>
            </ButtonGroup>
          </Grid>
          <Grid item sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
            <TextField 
              label='Number of Players'
              type="number"
              value={numberOfPlayers}
              disabled
              onChange={(e) => (e.target.value as unknown as number) >= 1 && setNumberOfPlayers(e.target.value as unknown as number)}
            />
          </Grid>
          <Grid item sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
            <Button variant="contained" onClick={getQuestions}>
              Start Quiz
            </Button>
          </Grid>
        </Grid>
    </Container>
  )
}

export default LandingPage