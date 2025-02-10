// Array to store questions and answers
const quizData = [
    { question: "What is the size of `int` in C?", options: ["2 bytes", "4 bytes", "8 bytes", "16 bytes"], answer: "4 bytes" },
    { question: "Which operator is used to access the value at a memory location using a pointer?", options: ["&", "*", "#", "%"], answer: "*" },
    { question: "Which of the following is used to allocate memory dynamically in C?", options: ["malloc()", "free()", "realloc()", "calloc()"], answer: "malloc()" },
    { question: "What is the default value of a static variable in C?", options: ["0", "null", "undefined", "garbage value"], answer: "0" },
    { question: "Which function is used to get the length of a string in C?", options: ["strlength()", "strlen()", "stringlen()", "strlen_len()"], answer: "strlen()" },
    { question: "Which of the following is used to free dynamically allocated memory?", options: ["malloc()", "free()", "realloc()", "calloc()"], answer: "free()" },
    { question: "Which of the following is not a valid data type in C?", options: ["char", "bool", "int", "float"], answer: "bool" },
    { question: "What is the correct syntax to declare a pointer in C?", options: ["int ptr;", "int* ptr;", "ptr* int;", "pointer int;"], answer: "int* ptr;" },
    { question: "Which operator is used to find the address of a variable?", options: ["&", "*", "#", "%"], answer: "&" },
    { question: "Which function is used to input data from the user in C?", options: ["scanf()", "input()", "get()", "read()"], answer: "scanf()" },
    { question: "What does the `break` statement do in a loop?", options: ["Exit the loop", "Skip the current iteration", "Exit the program", "Continue with the next iteration"], answer: "Exit the loop" },
    { question: "What is the output of `printf(\"%d\", 5/2)` in C?", options: ["2", "2.5", "3", "1"], answer: "2" },
    { question: "Which of the following is correct about arrays in C?", options: ["Arrays are zero-indexed", "Arrays are one-indexed", "Arrays cannot store multiple data types", "Arrays are always of fixed size"], answer: "Arrays are zero-indexed" },
    { question: "What does the `continue` statement do in a loop?", options: ["Skip the current iteration", "Exit the loop", "Skip the rest of the program", "Exit the function"], answer: "Skip the current iteration" },
    { question: "Which of the following is correct about a `struct` in C?", options: ["Can store different data types", "Only stores integers", "Only stores floating point values", "Structs are always dynamic"], answer: "Can store different data types" },
    { question: "What is the correct syntax to declare a constant in C?", options: ["#define CONSTANT 10", "const int CONSTANT = 10;", "constant int CONSTANT = 10;", "const CONSTANT = 10;"], answer: "#define CONSTANT 10" },
    { question: "What is the purpose of the `return` statement in a function?", options: ["To return a value", "To exit the function", "To declare a variable", "To initiate a loop"], answer: "To return a value" },
    { question: "Which of the following is the correct syntax for a `for` loop in C?", options: ["for(init; condition; increment)", "for(init condition increment)", "for(init condition)", "for(init; condition)"], answer: "for(init; condition; increment)" },
    { question: "What is the use of `sizeof()` function in C?", options: ["To find the size of a variable", "To find the address of a variable", "To convert data types", "To allocate memory"], answer: "To find the size of a variable" },
    { question: "Which of the following functions is used to copy a string in C?", options: ["strcopy()", "copystr()", "strcpy()", "stringcopy()"], answer: "strcpy()" },
    { question: "Which data type is used to store a single character in C?", options: ["int", "char", "string", "float"], answer: "char" },
    { question: "Which of the following is the correct syntax to define a constant in C?", options: ["const int PI = 3.14;", "#define PI 3.14", "PI = 3.14;", "constant PI = 3.14;"], answer: "#define PI 3.14" },
    { question: "What is the correct syntax to define a function in C?", options: ["function_name(param1, param2)", "return_type function_name(param1, param2)", "function_name(param1, param2): return_type", "void function_name(param1, param2)"], answer: "return_type function_name(param1, param2)" },
    { question: "What does the `typedef` keyword do in C?", options: ["Defines new data types", "Creates aliases for existing data types", "Generates random numbers", "Defines global variables"], answer: "Creates aliases for existing data types" },
    { question: "Which function is used to compare two strings in C?", options: ["compare()", "stringcompare()", "strcmp()", "strcomp()"], answer: "strcmp()" },
    { question: "What does the `&&` operator represent in C?", options: ["OR operator", "NOT operator", "AND operator", "XOR operator"], answer: "AND operator" },
    { question: "What will be the output of `printf(\"%d\", 5 % 2)`?", options: ["2", "1", "3", "5"], answer: "1" },
    { question: "Which header file is required to use `malloc()` and `free()` functions?", options: ["stdio.h", "stdlib.h", "malloc.h", "memory.h"], answer: "stdlib.h" },
    { question: "Which of the following is not a valid way to comment in C?", options: ["// Comment", "/* Comment */", "/** Comment **/", "# Comment"], answer: "# Comment" },
    { question: "What does `void*` represent in C?", options: ["Function pointer", "Generic pointer", "Null pointer", "Array pointer"], answer: "Generic pointer" },
    { question: "What is the output of the following code: `printf(\"%c\", 'A' + 1)`?", options: ["B", "C", "A", "1"], answer: "B" }  
];
function shuffleQuestions(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];  // Swap the elements
    }
}

// Shuffle quiz questions
shuffleQuestions(quizData);
// Variables for tracking quiz state
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];

// Function to display the question and options
function loadQuestion() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');

    // Get current question data
    const currentQuestion = quizData[currentQuestionIndex];

    // Display the question
    questionElement.textContent = currentQuestion.question;

    // Clear previous options
    optionsElement.innerHTML = '';

    // Generate and display the options
    currentQuestion.options.forEach(option => {
        const optionElement = document.createElement('div');
        optionElement.innerHTML = `
            <input type="radio" name="option" value="${option}" /> ${option}
        `;
        optionsElement.appendChild(optionElement);
    });
}

// Function to handle the next question
function nextQuestion() {
    // Get selected answer
    const selectedOption = document.querySelector('input[name="option"]:checked');

    if (selectedOption) {
        const answer = selectedOption.value;
        userAnswers.push({ question: quizData[currentQuestionIndex].question, answer: answer, correctAnswer: quizData[currentQuestionIndex].answer });

        // Check if the answer is correct
        if (answer === quizData[currentQuestionIndex].answer) {
            score++;
        }
    }

    // Move to the next question
    currentQuestionIndex++;

    // If there are more questions, load the next one
    if (currentQuestionIndex < 5) {
        loadQuestion();
    } else {
        // If no more questions, show the score and review
        showReview();
    }
}

// Function to show review after quiz
function showReview() {
    let resultHTML = `<h2>Your Score: ${score} / 5 </h2><hr><h3>Review:</h3>`;

    userAnswers.forEach((item, index) => {
        resultHTML += `
            <p><strong>Question:</strong> ${item.question}</p>
            <p><strong>Your Answer:</strong> ${item.answer}</p>
            <p><strong>Correct Answer:</strong> ${item.correctAnswer}</p>
            <p><strong>Status:</strong> ${item.answer === item.correctAnswer ? 'Correct' : 'Incorrect'}</p>
            <hr>
        `;
    });

   
    resultHTML += `<a href="c.html" class="btn">Retake Quiz</a>&nbsp;&nbsp;<a href="index.html" class="btn">Home</a>`;

document.getElementById('quiz-container').innerHTML = resultHTML;
}
function retakeQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    shuffleQuestions(quizData); // Shuffle the questions again
    loadQuestion();  // Reload the first question
}

// Load the first question when the page loads
loadQuestion();

