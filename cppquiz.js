const quizData = [
    { question: "Which of the following is the correct syntax to define a function in C++?", options: ["function_name(param1, param2)", "return_type function_name(param1, param2)", "function_name(param1, param2): return_type", "void function_name(param1, param2)"], answer: "return_type function_name(param1, param2)" },
    { question: "What is the default access specifier for members of a class in C++?", options: ["public", "private", "protected", "None of the above"], answer: "private" },
    { question: "Which operator is used to allocate memory dynamically in C++?", options: ["malloc()", "free()", "new", "delete"], answer: "new" },
    { question: "What is the correct way to declare a pointer to a class object in C++?", options: ["class* obj;", "class obj*;", "pointer class obj;", "class obj[];"], answer: "class* obj;" },
    { question: "Which of the following is not a type of polymorphism in C++?", options: ["Function Overloading", "Operator Overloading", "Dynamic Binding", "Function Overriding"], answer: "Dynamic Binding" },
    { question: "Which function is used to get the length of a string in C++?", options: ["strlength()", "strlen()", "stringlength()", "size()"], answer: "strlen()" },
    { question: "Which of the following is used to prevent the modification of a class member in C++?", options: ["public", "private", "const", "protected"], answer: "const" },
    { question: "Which of the following is the correct syntax for a constructor in C++?", options: ["ClassName()", "Constructor ClassName()", "void ClassName()", "ClassName : constructor()"], answer: "ClassName()" },
    { question: "Which keyword is used to declare an abstract class in C++?", options: ["abstract", "virtual", "pure", "None of the above"], answer: "None of the above" },
    { question: "What is the purpose of the `virtual` keyword in C++?", options: ["To define virtual functions", "To define constructor", "To define static members", "To define friend functions"], answer: "To define virtual functions" },
    { question: "Which of the following is used for input/output operations in C++?", options: ["cin", "cout", "cin and cout", "None of the above"], answer: "cin and cout" },
    { question: "Which function is used to copy one string to another in C++?", options: ["strcopy()", "stringcopy()", "strcpy()", "copystr()"], answer: "strcpy()" },
    { question: "Which of the following is used to release memory allocated dynamically in C++?", options: ["delete", "free()", "new", "dealloc()"], answer: "delete" },
    { question: "What is the output of `cout << sizeof(int);` in C++?", options: ["2", "4", "8", "Depends on the system"], answer: "Depends on the system" },
    { question: "Which of the following is a valid way to initialize a C++ array?", options: ["int arr[5] = {1, 2, 3, 4, 5};", "int arr = {1, 2, 3, 4, 5};", "int arr[5](1, 2, 3, 4, 5);", "None of the above"], answer: "int arr[5] = {1, 2, 3, 4, 5};" },
    { question: "Which of the following is the correct syntax for a destructor in C++?", options: ["~ClassName()", "void ClassName()", "ClassName::~", "void ~ClassName()"], answer: "~ClassName()" },
    { question: "Which keyword is used to inherit a class in C++?", options: ["extend", "inherit", "implements", "public"], answer: "public" },
    { question: "Which of the following is a feature of object-oriented programming in C++?", options: ["Encapsulation", "Polymorphism", "Inheritance", "All of the above"], answer: "All of the above" },
    { question: "Which of the following methods can be used to handle exceptions in C++?", options: ["try-catch block", "if-else block", "throw-catch block", "catch-throw block"], answer: "try-catch block" },
    { question: "Which of the following is a correct statement in C++?", options: ["int *ptr;", "int ptr*;", "pointer int ptr;", "int* ptr*;"], answer: "int *ptr;" },
    { question: "What is the purpose of the `this` pointer in C++?", options: ["It refers to the current instance of the class", "It refers to the previous instance of the class", "It points to the class object", "It is used to access private members"], answer: "It refers to the current instance of the class" },
    { question: "What is the output of `cout << 10 / 3;` in C++?", options: ["3", "3.33", "Error", "1"], answer: "3" },
    { question: "Which header file is needed for file handling operations in C++?", options: ["<fstream>", "<iostream>", "<fstream.h>", "<stdio.h>"], answer: "<fstream>" },
    { question: "Which of the following is a correct way to define a reference variable in C++?", options: ["int &x = y;", "int x& = y;", "int &x;", "int reference x = y;"], answer: "int &x = y;" },
    { question: "Which of the following is the correct syntax for an inline function in C++?", options: ["inline function_name()", "function_name inline()", "inline function_name() { }", "inline() function_name() { }"], answer: "inline function_name() { }" },
    { question: "What is the output of `cout << 1 << 2 << 3;` in C++?", options: ["1 2 3", "123", "Error", "None of the above"], answer: "123" },
    { question: "Which of the following is true for C++ templates?", options: ["They allow functions to be defined for specific data types", "They allow classes to be defined for specific data types", "They allow code to be written generically", "All of the above"], answer: "All of the above" },
    { question: "Which of the following is used to declare a constant in C++?", options: ["#define", "const", "constant", "None of the above"], answer: "const" },
    { question: "Which operator is used to access members of a class object through a pointer in C++?", options: [".", "->", ":", "&"], answer: "->" }
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
    if (currentQuestionIndex < 10) {
        loadQuestion();
    } else {
        // If no more questions, show the score and review
        showReview();
    }
}

// Function to show review after quiz
function showReview() {
    let resultHTML = `<h2>Your Score: ${score} / 10 </h2><hr><h3>Review:</h3>`;

    userAnswers.forEach((item, index) => {
        resultHTML += `
            <p><strong>Question:</strong> ${item.question}</p>
            <p><strong>Your Answer:</strong> ${item.answer}</p>
            <p><strong>Correct Answer:</strong> ${item.correctAnswer}</p>
            <p><strong>Status:</strong> ${item.answer === item.correctAnswer ? 'Correct' : 'Incorrect'}</p>
            <hr>
        `;
    });

   
    resultHTML += `<a href="cpp.html" class="btn">Retake Quiz</a>&nbsp;&nbsp;<a href="index.html" class="btn">Home</a>`;
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

