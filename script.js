const startBtn = document.querySelector('.start-btn');
const popupInfo = document.querySelector('.popup-info');
const exitBtn = document.querySelector('.exit-btn');
const main = document.querySelector('.main');
const continueBtn = document.querySelector('.continue-btn');
const quizSection = document.querySelector('.quiz-section');
const quizBox = document.querySelector('.quiz-box');
const resultBox = document.querySelector('.result-box');
const tryAgainBtn = document.querySelector('.tryAgain-btn');
const giftBtn = document.querySelector('.win-btn')
const giftBox = document.querySelector('.code-popup')


startBtn.onclick = () => {
    popupInfo.classList.add('active');
    main.classList.add('active');
}


exitBtn.onclick = () => {
    popupInfo.classList.remove('active');
    main.classList.remove('active');
    
}

tryAgainBtn.onclick = () => {
    resetQuiz();
}


continueBtn.onclick = () => {
    quizSection.classList.add('active');
    popupInfo.classList.remove('active');
    main.classList.remove('active');
    quizBox.classList.add('active');
    
    showQuestions(0);
    questionCounter(1);
    headerScore();
}

giftBtn.onclick = () => {
    giftBox.classList.add('active');
}

let questionCount = 0;
let questionNumb = 1;
let userScore = 0;

const nextBtn = document.querySelector('.next-btn');

nextBtn.onclick = () => {
    if (questionCount < questions.length - 1) {
        questionCount++;
        showQuestions(questionCount);
        
        questionNumb++;
        questionCounter(questionNumb);

        nextBtn.classList.remove('active');
    }
    else {
        showResultBox();
    }
}

const optionList = document.querySelector('.option-list');

// getting questions and options

function showQuestions(index) {
    const questionText = document.querySelector('.question-text');
    questionText.textContent = `${questions[index].numb}. ${questions[index].question}`;

    let optionTag = `<div class="option"><span>${questions[index].options[0]}</span></div>
    <div class="option"><span>${questions[index].options[1]}</span></div>
    <div class="option"><span>${questions[index].options[2]}</span></div>`;

    optionList.innerHTML = optionTag;

    const option = document.querySelectorAll('.option');
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute('onclick', 'optionSelected(this)');
    }
}

function optionSelected(answer) {
    let userAnswer = answer.textContent;
    let correctAnswer = questions[questionCount].answer;
    let allOptions = optionList.children.length;

    if (userAnswer == correctAnswer) {
        answer.classList.add('richtig');
        userScore += 1;
        headerScore();
    }
    else {
        answer.classList.add('falsch');

        for (let i = 0; i < allOptions; i++) {
            if (optionList.children[i].textContent == correctAnswer) {
                optionList.children[i].setAttribute('class', 'option richtig');
            }
        }
    }

    for (let i = 0; i < allOptions; i++) {
        optionList.children[i].classList.add('lock-options');
    }

    nextBtn.classList.add('active');
}

function questionCounter(index) {
    const questionTotal = document.querySelector('.question-total');
    questionTotal.textContent = `${index} von ${questions.length} Fragen`;
}


function headerScore() {
    const headerScoreText = document.querySelector('.header-score');
    headerScoreText.textContent = `Punkte: ${userScore} / ${questions.length}`; 
}


function showResultBox() {
    quizBox.classList.remove('active');
    resultBox.classList.add('active');

    const scoreText = document.querySelector('.score-text');
    scoreText.textContent = `Deine Punkte ${userScore} von ${questions.length}`;

    if (userScore == 5) {
        giftBtn.classList.add('active');
    }

}


function resetQuiz() {
    quizSection.classList.remove('active');
    resultBox.classList.remove('active');
    quizBox.classList.remove('active');
    giftBox.classList.remove('active');
    giftBtn.classList.remove('active')

    questionCount = 0;
    questionNumb = 1;
    userScore = 0;

    const option = document.querySelectorAll('.option');
    for (let i = 0; i < option.length; i++) {
        option[i].classList.remove('richtig');
        option[i].classList.remove('falsch');
        option[i].classList.remove('lock-options');
    }

    nextBtn.classList.remove('active');
    headerScore();
}
