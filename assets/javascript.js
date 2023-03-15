const startButton = document.getElementById('start')
const questionContainerElement = document.getElementById('question-container')
const randomQuestions, currentQuestions

const questionElement = document.getElementById('question')
const answersButtonsElement = document.getElementById('answer-button')
const questions = [
    {
    question: 'Which of the following is not a major championship?',
    answers: [
        {text: 'Bay Hill Invitational', correct: true},
        {text: 'The Masters', correct: false},
        {text: 'The U.S. Open', correct: false},
        {text: 'The British Open', correct: false},
    ]},
    {
    question: 'Who is the greatest golfer of all time?',
    answers: [
        {text: 'Greg Norman', correct: false},
        {text: 'Jordan Speith', correct: false},
        {text: 'Tiger Woods', correct: true},
        {text: 'Justin Thomas', correct: false},
    ]}
]

startButton.addEventListener('click', start)

function start() {
   console.log('quiz started')
   startButton.classList.add('hide')
   randomQuestions = questions.sort(() => Math.random() - .5)
   currentQuestions = 0
   questionContainerElement.classList.remove('hide')
   setNextQuestion()
}

function setNextQuestion() {
    showQuestion(randomQuestions[currentQuestions])

}

function showQuestion(question) {
    questionElement.innerText = question.question

}

function selectAnswer() {

}