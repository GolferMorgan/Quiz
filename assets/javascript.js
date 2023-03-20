const startButton = document.getElementById('start')
const nextButton = document.getElementById('next')
const highScoresButton = document.getElementById('high-scores')
const questionContainerElement = document.getElementById('question-container')
const scoreText= document.getElementById('score')
const SCORE_POINTS = 100
let score = 0 
let randomQuestions, currentQuestions
const questionElement = document.getElementById('question')
const answersElement = document.getElementById('answers')
const highScores = JSON.parse(localStorage.getItem('highScores')) || []


//added start button to make the quiz start//
startButton.addEventListener('click', start)

//added next button to move to next question//
nextButton.addEventListener('click', () => {
    currentQuestions++
    setNextQuestion()
})
//made the question choices random//
function start() {
   console.log('quiz started')
   startButton.classList.add('hide')
   randomQuestions = questions.sort(() => Math.random() - .5)
   currentQuestions = 0
   score = 0
   questionContainerElement.classList.remove('hide')
   setNextQuestion()
}
//made the answees show up//
function setNextQuestion() {
    resetState()
    showQuestion(randomQuestions[currentQuestions])

}
//made the question and answer portion visible and work correctly
function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answersElement.appendChild(button)
    })
}

function resetState() {
    nextButton.classList.add('hide')
    while (answersElement.firstChild) {
        answersElement.removeChild
        (answersElement.firstChild)
    }
}
//makes the answer button selectable//
function selectAnswer(e) {
    const selectButton = e.target
    const correct = selectButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answersElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (randomQuestions.length > currentQuestions +1) { 
    nextButton.classList.remove('hide')
    highScores.classList.add('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusclass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('incorrect')
    }
}

function clearStatusclass(element) {
    element.classList.remove('correct')
    element.classList.remove('incorrect')
}

//added score submission form//
function formSubmission() {firstName.innerText (confirm('do you want to submit your score'))}

//added questions and answers//
const questions = [
    {
    question: 'Which of the following is not a major championship?',
    answers: [
        { text: 'Bay Hill Invitational', correct: true },
        { text: 'The Masters', correct: false },
        { text: 'The U.S. Open', correct: false },
        { text: 'The British Open', correct: false },
    ]},
    {
    question: 'Who is the greatest golfer of all time?',
    answers: [
        { text: 'Greg Norman', correct: false },
        { text: 'Jordan Speith', correct: false },
        { text: 'Tiger Woods', correct: true },
        { text: 'Justin Thomas', correct: false },
    ]},
    {
    question: 'Where is the Masters played?',
    answers: [
        { text: 'TPC Sawgrass', correct: false },
        { text: 'Augusta National', correct: true },
        { text: 'Torrey Pines', correct: false },
        { text: 'Pebble Beach', correct: false },
    ]},
    {
        question: 'Which golf ball has been voted the best ball in golf?',
        answers: [
            { text: 'Taylormade', correct: false },
            { text: 'Titleist', correct: true },
            { text: 'Bridgestone', correct: false },
            { text: 'Srixon', correct: false },
        ]
    }
]