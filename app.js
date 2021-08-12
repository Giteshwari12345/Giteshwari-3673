console.log("Hello JS form Giteshwari");

const quizDB = [
    {
        question: "Q1: What is the full form of HTML?",
        a: "HighText Machine Language",
        b: "HyperText and links Markup Language",
        c: "HyperText Markup Language",
        d: "None of these",
        ans: "ans3"
    },
    {
        question: "Q2: Which of the following HTML attribute is used to define inline styles?",

        a: "style",
        b: "type",
        c: "class",
        d: "None of the above",
        ans: "ans1"

    },
    {
        question: "Q3: What are the types of unordered or bulleted list in HTML?",

        a: "disc, square, triangle",
        b: "polygon, triangle, circle",
        c: " disc, circle, square",
        d: "All of the above",
        ans: "ans3"
    },
    {
        question: "Q4: What are the types of unordered or bulleted list in HTML?",
        a: "disc, square, triangle",
        b: "polygon, triangle, circle",
        c: " disc, circle, square",
        d: "All of the above",
        ans: "ans3"
    },
    {
       question: "Q5: CSS stands for?",

        a: "Cascade style sheets",
        b: "Color and style sheets",
        c: "Cascading style sheets",
        d: "None of the above",
        ans: "ans3"
    },
    {
       question: "Q6: Which of the following is the correct syntax for referring the external style sheet?",

        a:"<style src = example.css>",
        b: "<style src = example.css>",
        c: "<stylesheet> example.css </stylesheet>",
        d: "<link rel=stylesheet type=text/css href=example.css>",
        ans: "ans4"
    },
    {
        question: "Q7: Which of the following CSS property is used to set the background image of an element?",

        a: "background-attachment",
        b: "background-image",
        c: "background-color",
        d: "None of the above",
        ans: "ans2"
    },
    {
        question: "Q8:  Which one of the following also known as Conditional Expression?",

        a: "Alternative to if-else",
        b: "Switch statement",
        c: "If-then-else statement",
        d: "immediate if",
        ans: "ans4"
    },
    
    {
        question: "Q9:In JavaScript, what is a block of statement?",

        a: "Conditional block",
        b: "block that combines a number of statements into a single compound statement",
        c: "both conditional block and a single statement",
        d: "block that contains a single statement",
        ans: "ans2"

    },
    {
        question: "Q10: The function and  var are known as:",

        a: "Keywords",
        b: "Data types",
        c: "Declaration statements",
        d: "Prototypes",
        ans: "ans3"
    },
    {
        question: "Q11:  Which of the following variables takes precedence over the others if the names are the same?",

        a: "Global variable",
        b: "The local element",
        c: "The two of the above",
        d: "None of the above",
        ans: "ans2"
    },
    
{
    question: "Q12: Which of the following type of a variable is volatile?",

    a: "Mutable variable",
    b: "Dynamic variable",
    c: "Volatile variable",
    d: "Immutable variable",
    ans: "ans1"
},
{
    question: "Q13: Which of the following option is used as hexadecimal literal beginning?",

    a: "00",
    b: "0x",
    c: "0X",
    d: "Both 0x and 0X",
    ans: "ans4",
},
    {
    question:"Q14:  In JavaScript the x===y statement implies that:",

    a: "Both x and y are equal in value, type and reference address as well",
    b: "Both are x and y are equal in value only",
    c: "Both are equal in the value and data type",
    d: "Both are not same at all",
    ans: "ans3",
    },
    {
        question: "Q15: In JavaScript, what will be used for calling the function definition expression:",

    a: "Function prototype",
    b: "Function literal",
    c: "Function calling",
    d: "Function declaration",
    }
];


const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore')

let questionCount = 0;
let score = 0;

const loadQuestions = () => {

    const questionList = quizDB[questionCount]

    question.innerHTML = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}


loadQuestions();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((CurrentEle) => {
        if (CurrentEle.checked) {
            answer = CurrentEle.id;
        }
    })
    return answer;
}

submit.addEventListener('click', () => {
    const chekcAnswer = getCheckAnswer();
    console.log(chekcAnswer);

    if (chekcAnswer == quizDB[questionCount].ans) {
        score++
    };

    questionCount++;

    if (questionCount < quizDB.length) {
        loadQuestions();
    } else {
        showScore.innerHTML = `
            <h3>Your Score ${score}/${quizDB.length}</h3>
            <button class="btn" onclick="location.reload()">Play Again</button>
        `;
        showScore.classList.remove('scoreArea');
    }
})