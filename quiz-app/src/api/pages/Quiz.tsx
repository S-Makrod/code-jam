import { useState } from "react"
import Option from "../../components/Option"
import Question from "../../types/question"

interface Props {
  questions: Array<Question>,
  numberOfPlayers: number;
}

const Quiz = (props: Props) => {
  const [questions, setQuestions] = useState([
    {
      question: "Which planet is known as the 'Red Planet'?",
      topic: "Astronomy",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      correctAnswer: "Mars",
      difficulty: 2,
    },
    {
      question:
        "What is the name of the galaxy that contains our Solar System?",
      topic: "Astronomy",
      options: ["Andromeda", "Triangulum", "Milky Way", "Whirlpool"],
      correctAnswer: "Milky Way",
      difficulty: 3,
    },
    {
      question: "Which planet has the most moons?",
      topic: "Astronomy",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      correctAnswer: "Jupiter",
      difficulty: 3,
    },
    {
      question: "What is the largest planet in our Solar System?",
      topic: "Astronomy",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      correctAnswer: "Jupiter",
      difficulty: 2,
    },
    {
      question: "Which planet is closest to the Sun?",
      topic: "Astronomy",
      options: ["Venus", "Mercury", "Earth", "Mars"],
      correctAnswer: "Mercury",
      difficulty: 2,
    },
    {
      question: "What is the chemical symbol for gold?",
      topic: "Chemistry",
      options: ["Au", "Ag", "Go", "Gd"],
      correctAnswer: "Au",
      difficulty: 3,
    },
    {
      question: "Which element has the highest melting point?",
      topic: "Chemistry",
      options: ["Iron", "Tungsten", "Carbon", "Osmium"],
      correctAnswer: "Tungsten",
      difficulty: 5,
    },
    {
      question: "What is the chemical formula for water?",
      topic: "Chemistry",
      options: ["H2O", "O2", "CO2", "H2O2"],
      correctAnswer: "H2O",
      difficulty: 1,
    },
    {
      question: "What is the atomic number of carbon?",
      topic: "Chemistry",
      options: ["6", "12", "14", "16"],
      correctAnswer: "6",
      difficulty: 3,
    },
    {
      question: "Which gas is most abundant in the Earth's atmosphere?",
      topic: "Chemistry",
      options: ["Oxygen", "Hydrogen", "Nitrogen", "Carbon Dioxide"],
      correctAnswer: "Nitrogen",
      difficulty: 2,
    },
    {
      question: "What is the powerhouse of the cell?",
      topic: "Biology",
      options: ["Nucleus", "Ribosome", "Mitochondria", "Chloroplast"],
      correctAnswer: "Mitochondria",
      difficulty: 2,
    },
    {
      question: "What is the smallest unit of life?",
      topic: "Biology",
      options: ["Organ", "Tissue", "Cell", "Molecule"],
      correctAnswer: "Cell",
      difficulty: 3,
    },
    {
      question: "Which part of the plant conducts photosynthesis?",
      topic: "Biology",
      options: ["Root", "Stem", "Leaf", "Flower"],
      correctAnswer: "Leaf",
      difficulty: 2,
    },
    {
      question: "What type of macromolecule are enzymes?",
      topic: "Biology",
      options: ["Carbohydrates", "Lipids", "Proteins", "Nucleic Acids"],
      correctAnswer: "Proteins",
      difficulty: 4,
    },
    {
      question: "What is the genetic material in a cell?",
      topic: "Biology",
      options: ["RNA", "Protein", "DNA", "Carbohydrate"],
      correctAnswer: "DNA",
      difficulty: 2,
    },
    {
      question: "Who was the first President of the United States?",
      topic: "History",
      options: [
        "Thomas Jefferson",
        "John Adams",
        "George Washington",
        "Abraham Lincoln",
      ],
      correctAnswer: "George Washington",
      difficulty: 1,
    },
    {
      question: "In which year did the Titanic sink?",
      topic: "History",
      options: ["1912", "1915", "1920", "1925"],
      correctAnswer: "1912",
      difficulty: 3,
    },
    {
      question: "Who was the first emperor of China?",
      topic: "History",
      options: ["Liu Bang", "Qin Shi Huang", "Kublai Khan", "Sun Yat-sen"],
      correctAnswer: "Qin Shi Huang",
      difficulty: 4,
    },
    {
      question: "What was the primary cause of the Cold War?",
      topic: "History",
      options: [
        "Territorial disputes",
        "Economic competition",
        "Ideological differences",
        "Resource scarcity",
      ],
      correctAnswer: "Ideological differences",
      difficulty: 4,
    },
    {
      question: "Which empire was known as the 'Land of the Rising Sun'?",
      topic: "History",
      options: [
        "Ottoman Empire",
        "British Empire",
        "Japanese Empire",
        "Roman Empire",
      ],
      correctAnswer: "Japanese Empire",
      difficulty: 2,
    },
    {
      question: "Who wrote 'Romeo and Juliet'?",
      topic: "Literature",
      options: [
        "Charles Dickens",
        "Mark Twain",
        "William Shakespeare",
        "Jane Austen",
      ],
      correctAnswer: "William Shakespeare",
      difficulty: 2,
    },
    {
      question: "Which Shakespeare play features the character Shylock?",
      topic: "Literature",
      options: ["Hamlet", "Othello", "The Merchant of Venice", "Macbeth"],
      correctAnswer: "The Merchant of Venice",
      difficulty: 4,
    },
    {
      question: "Who wrote 'Pride and Prejudice'?",
      topic: "Literature",
      options: [
        "Emily Bronte",
        "Jane Austen",
        "Charles Dickens",
        "George Eliot",
      ],
      correctAnswer: "Jane Austen",
      difficulty: 3,
    },
    {
      question: "Which novel begins with the line 'Call me Ishmael'?",
      topic: "Literature",
      options: [
        "Moby-Dick",
        "To Kill a Mockingbird",
        "1984",
        "The Great Gatsby",
      ],
      correctAnswer: "Moby-Dick",
      difficulty: 3,
    },
    {
      question: "Who wrote '1984'?",
      topic: "Literature",
      options: [
        "George Orwell",
        "Aldous Huxley",
        "Ray Bradbury",
        "J.D. Salinger",
      ],
      correctAnswer: "George Orwell",
      difficulty: 3,
    },
    {
      question: "What is the capital of France?",
      topic: "Geography",
      options: ["Berlin", "Madrid", "Rome", "Paris"],
      correctAnswer: "Paris",
      difficulty: 1,
    },
    {
      question: "Which ocean is the largest?",
      topic: "Geography",
      options: [
        "Atlantic Ocean",
        "Indian Ocean",
        "Arctic Ocean",
        "Pacific Ocean",
      ],
      correctAnswer: "Pacific Ocean",
      difficulty: 2,
    },
    {
      question: "Which country has the most population?",
      topic: "Geography",
      options: ["India", "United States", "Indonesia", "China"],
      correctAnswer: "China",
      difficulty: 2,
    },
    {
      question: "Which continent is known as the 'Dark Continent'?",
      topic: "Geography",
      options: ["Asia", "Africa", "South America", "Australia"],
      correctAnswer: "Africa",
      difficulty: 3,
    },
    {
      question: "Which is the smallest country in the world by area?",
      topic: "Geography",
      options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
      correctAnswer: "Vatican City",
      difficulty: 3,
    },
    {
      question: "Which company developed the Windows operating system?",
      topic: "Computer Science",
      options: ["Apple", "Microsoft", "Google", "IBM"],
      correctAnswer: "Microsoft",
      difficulty: 3,
    },
    {
      question: "What does HTML stand for?",
      topic: "Computer Science",
      options: [
        "HyperText Markup Language",
        "HyperText Machine Language",
        "HyperText and Links Markup Language",
        "HyperText Markdown Language",
      ],
      correctAnswer: "HyperText Markup Language",
      difficulty: 2,
    },
    {
      question: "Who is known as the father of computer science?",
      topic: "Computer Science",
      options: ["Alan Turing", "Bill Gates", "Steve Jobs", "Charles Babbage"],
      correctAnswer: "Alan Turing",
      difficulty: 4,
    },
    {
      question:
        "What is the name of the first electronic general-purpose computer?",
      topic: "Computer Science",
      options: ["ENIAC", "UNIVAC", "IBM 701", "Mark I"],
      correctAnswer: "ENIAC",
      difficulty: 4,
    },
    {
      question: "Which language is primarily used for web development?",
      topic: "Computer Science",
      options: ["Python", "Java", "JavaScript", "C++"],
      correctAnswer: "JavaScript",
      difficulty: 2,
    },
  ])

  const [currentQuestionId, setCurrentQuestionId] = useState(0)

  const [questionCount, setQuestionCount] = useState(1)

  const onClickAnswer = (id) => {
    setCurrentQuestionId(currentQuestionId + 1)
    setQuestionCount(questionCount + 1)
  }

  return (
    <div>
      <h3>Question Number: {questionCount}/{questions.length}</h3>
      <h3>Player 1</h3>
      <h3>Score: </h3>
      <h3>
        Question: {questions[currentQuestionId].question}
      </h3>
      <div>
        {questions[currentQuestionId].options.map((option, index) => (
          <Option text={option} id={index} onClick={onClickAnswer} />
        ))}
      </div>
    </div>
  )
}

export default Quiz
