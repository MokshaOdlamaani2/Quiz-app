const quizData = [
    { question: "Which of the following is the correct way to declare a variable in Java?", options: ["int x = 10;", "x int = 10;", "int = 10;", "x : int = 10;"], answer: "int x = 10;" },
    { question: "Which data type is used to store a decimal value in Java?", options: ["int", "float", "double", "char"], answer: "double" },
    { question: "How do you create a method in Java?", options: ["method myMethod()", "def myMethod()", "void myMethod()", "function myMethod()"], answer: "void myMethod()" },
    { question: "Which of the following is used to indicate a block of code in Java?", options: ["{}", "[]", "()", "Indentation"], answer: "{}" },
    { question: "What will be the output of `System.out.println(2*3);` in Java?", options: ["6", "23", "Error", "None"], answer: "6" },
    { question: "Which of the following is used to handle exceptions in Java?", options: ["try-catch", "try-except", "throw-catch", "catch-throw"], answer: "try-catch" },
    { question: "Which method is used to find the length of a string in Java?", options: ["length()", "getLength()", "size()", "length"], answer: "length()" },
    { question: "How do you create an array in Java?", options: ["int[] arr = {1, 2, 3};", "int arr[] = {1, 2, 3};", "arr = new int[3] {1, 2, 3};", "int arr = new int{1, 2, 3};"], answer: "int arr[] = {1, 2, 3};" },
    { question: "Which of the following is the correct syntax to declare a class in Java?", options: ["class MyClass", "class MyClass {}", "class MyClass() {}", "class MyClass {}"], answer: "class MyClass {}" },
    { question: "Which keyword is used to create a class in Java?", options: ["new", "class", "create", "object"], answer: "class" },
    { question: "Which of the following is used to create an object in Java?", options: ["new MyClass()", "MyClass obj = MyClass();", "MyClass obj;", "MyClass obj = new ();"], answer: "new MyClass()" },
    { question: "What is the default value of a boolean variable in Java?", options: ["true", "false", "0", "null"], answer: "false" },
    { question: "What is the result of `5 == 5` in Java?", options: ["true", "false", "1", "0"], answer: "true" },
    { question: "Which of the following will compile without errors?", options: ["int x = 10;", "int x = '10';", "int x = true;", "int x = 10.5;"], answer: "int x = 10;" },
    { question: "What is the correct way to declare a constant in Java?", options: ["const int MAX = 100;", "final int MAX = 100;", "int MAX = 100;", "constant int MAX = 100;"], answer: "final int MAX = 100;" },
    { question: "What is the output of `System.out.println('A' + 1);` in Java?", options: ["65", "A1", "66", "Error"], answer: "66" },
    { question: "Which method is used to convert a string to an integer in Java?", options: ["parseInt()", "toInt()", "convertInt()", "int()"], answer: "parseInt()" },
    { question: "Which of the following is true about inheritance in Java?", options: ["A class can inherit from multiple classes", "A class can inherit from one class", "A class cannot inherit from any class", "None of the above"], answer: "A class can inherit from one class" },
    { question: "What is the purpose of the `super` keyword in Java?", options: ["To call a method from a superclass", "To create an object", "To declare a constructor", "None of the above"], answer: "To call a method from a superclass" },
    { question: "What is the output of `System.out.println(10 % 3);` in Java?", options: ["1", "3", "10", "0"], answer: "1" },
    { question: "What is the purpose of the `this` keyword in Java?", options: ["It refers to the current object", "It refers to the class", "It is used for inheritance", "None of the above"], answer: "It refers to the current object" },
    { question: "Which of the following is a valid loop in Java?", options: ["while(true){}", "for i = 0 to 10{}", "repeat until(i < 10){}", "loop(10){}"], answer: "while(true){}" },
    { question: "Which method is used to remove an element from an ArrayList in Java?", options: ["remove()", "delete()", "pop()", "clear()"], answer: "remove()" },
    { question: "What is the result of `System.out.println(10 / 4);` in Java?", options: ["2", "2.5", "3", "Error"], answer: "2" },
    { question: "Which of the following is a valid access modifier in Java?", options: ["private", "protected", "public", "All of the above"], answer: "All of the above" },
    { question: "Which method is used to convert an integer to a string in Java?", options: ["toString()", "parseString()", "convertToString()", "String.valueOf()"], answer: "String.valueOf()" },
    { question: "Which of the following is used to compare two strings in Java?", options: ["==", "equals()", "compareTo()", "stringCompare()"], answer: "equals()" },
    { question: "What does the `final` keyword do in Java?", options: ["It makes a variable immutable", "It indicates that a method cannot be overridden", "It indicates that a class cannot be subclassed", "All of the above"], answer: "All of the above" },
    { question: "Which of the following is not a valid Java primitive type?", options: ["int", "char", "boolean", "String"], answer: "String" },
    { question: "What is the output of `System.out.println(5 + 3 * 2);` in Java?", options: ["16", "11", "10", "Error"], answer: "11" },
    { question: "What is the main method signature in Java?", options: ["public static void main(String[] args)", "public void main(String args[])", "static public void main(String args)", "void main(String args[])"], answer: "public static void main(String[] args)" }
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

   
    resultHTML += `<a href="java.html" class="btn">Retake Quiz</a>&nbsp;&nbsp;<a href="index.html" class="btn">Home</a>`;

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

