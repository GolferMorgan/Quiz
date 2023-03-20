//added all my variables//
var startButton = document.getElementById('start')
var nextButton = document.getElementById('next')
var highScoresButton = document.getElementById('high-scores')
var questionContainerElement = document.getElementById('question-container')
var randomQuestions, currentQuestions
var questionElement = document.getElementById('question')
var answersElement = document.getElementById('answers')
var timeEl = document.getElementById('time')
var highScores = JSON.parse(localStorage.getItem('highScores')) || []
var time = 60
var timerEl
var initials = document.getElementById('initials')
var score = document.getElementById('score')

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
   timerEl = setInterval(countdown, 1000) 
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
    }
}
//added the correct and incorrct choices
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

function countdown() {
    time--
    timeEl.textContent = time;
    if (time <= 0)  {
        endQuiz()
    }
}

function endQuiz() {
    clearInterval(timerEl)
    questionContainerElement.style.display = 'none'
}



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

var score = timeLeft 


var highScores = {
    initals: initials.value,
    score: score.value
}

localStorage.getItem('highScores');
localStorage.setItem('highScores', highScores);

