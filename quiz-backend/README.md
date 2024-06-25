# Docs

## Endpoints

### Questions 

- GET /questions?difficulty={}&topic={}
    
    Returns questions without answers
- GET /questions/:id
    
    Returns questions without answers
- GET /score/:player-name
    
    Get score for user with name (unique name)
- GET /answer/:id
    
    Get answer for question
    
    Security issue?

- POST /verify/:id
    
    Checks the question answer (pass in question id)
    
    Pass in player name?

    Format: 
    {
        user : string,
        questionId : number,
        answerResponse : string
    }

- POST /reset
    
    Reset the scores for all players to 0

### Users
- POST /login

- POST /register

- POST /unregister