
const questions = [
    {
        question : 'who is our prime minister?',
        answers:[
            {text: 'ambani', correct : "false"},
            {text: 'adani', correct : "false"},
            {text: 'modi jii', correct : "true"},
            {text: 'rahul gandhi', correct : "false"},
        ]
    },
        {
            question : 'who is time period of our prime minister?',
            answers:[
                {text: '2', correct : "false"},
                {text: '3', correct : "false"},
                {text: '5', correct : "true"},
                {text: '1', correct : "false"},
            ]
        },
        {
            question : 'what is our national bird?',
            answers:[
                {text: 'owl', correct : "false"},
                {text: 'peacock', correct : "true"},
                {text: 'parrot', correct : "false"},
                {text: 'hans', correct : "false"},
            ]
        },
        {
            question : 'where is tajmahal?',
            answers:[
                {text: 'delhi', correct : "false"},
                {text: 'uttarakhand', correct : "false"},
                {text: 'punjab', correct : "false"},
                {text: 'aagra', correct : "true"},
            ]
        },
        {
            question : 'where id india gate..?',
            answers:[
                {text: 'himanchal', correct : "false"},
                {text: 'delhi', correct : "true"},
                {text: 'chandigarh', correct : "false"},
                {text: 'gujrat', correct : "false"},
            ]
        },
]

const questionElement = document.getElementById('question');
const answerButton = document.getElementById('ans-btn');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = 'Next';
    showQuestion()
}
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + '.' + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButton.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click',selectAnswer)
    })
}
function resetState() {
    nextButton.style.display = 'none';
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild)
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true';
    if (isCorrect) {
        selectedBtn.classList.add('correct')
        score++;    
    }else{
        
        selectedBtn.classList.add('inCorrect')
    }
    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct  === 'true') {
            button.classList.add('correct')
        }
        button.disabled = true;
    })
    nextButton.style.display = 'block';
}

function showScore() {
    resetState();
    questionElement.innerHTML = `you scored ${score} out of ${questions.length}!`
    nextButton.innerHTML = 'play Again ';
    nextButton.style.display = 'block';
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    }else{
        showScore();
}
}

nextButton.addEventListener('click',() => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();