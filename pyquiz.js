const quizData = [
    { question: "Which of the following is the correct way to declare a variable in Python?", options: ["x = 10", "int x = 10", "10 = x", "x : 10"], answer: "x = 10" },
    { question: "Which data type is used to store a decimal value in Python?", options: ["int", "float", "string", "list"], answer: "float" },
    { question: "How do you create a function in Python?", options: ["function func()", "def func():", "def function func():", "function() { }"], answer: "def func():" },
    { question: "Which of the following is used to indicate a block of code in Python?", options: ["{}", "[]", "()", "Indentation"], answer: "Indentation" },
    { question: "What will be the output of `print(2**3)` in Python?", options: ["8", "6", "5", "Error"], answer: "8" },
    { question: "Which of the following is used to handle exceptions in Python?", options: ["try-catch", "try-except", "throw-catch", "exception-catch"], answer: "try-except" },
    { question: "What does `len()` function return in Python?", options: ["Size of object", "Length of object", "Sum of object", "Type of object"], answer: "Length of object" },
    { question: "Which of the following will create a list in Python?", options: ["list = (1, 2, 3)", "list = [1, 2, 3]", "list = {1, 2, 3}", "list = (1; 2; 3)"], answer: "list = [1, 2, 3]" },
    { question: "Which of the following is the correct way to define a class in Python?", options: ["class MyClass", "def MyClass", "MyClass():", "class MyClass():",], answer: "class MyClass():" },
    { question: "How do you add an item to a list in Python?", options: ["list.append(item)", "list.add(item)", "list.push(item)", "list.insert(item)"], answer: "list.append(item)" },
    { question: "What is the output of `print('Hello' + 'World')` in Python?", options: ["Hello World", "HelloWorld", "Error", "WorldHello"], answer: "HelloWorld" },
    { question: "How do you start a for loop in Python?", options: ["for i in range(x):", "for i = 0 to x:", "for i in (x):", "for i:x"], answer: "for i in range(x):" },
    { question: "What is the correct syntax to import a module in Python?", options: ["import module", "import(module)", "from module import", "require module"], answer: "import module" },
    { question: "Which of the following is a valid variable name in Python?", options: ["1variable", "_variable", "variable-name", "variable@name"], answer: "_variable" },
    { question: "What will be the output of `print(type(3.14))` in Python?", options: ["int", "float", "str", "None"], answer: "float" },
    { question: "Which of the following is used to comment a single line in Python?", options: ["/* comment */", "// comment", "# comment", "<!-- comment -->"], answer: "# comment" },
    { question: "Which of the following is not a valid data type in Python?", options: ["str", "int", "float", "number"], answer: "number" },
    { question: "What is the purpose of `self` in Python class methods?", options: ["It refers to the instance of the class", "It is a reserved keyword", "It is used to refer to the class", "It initializes the class"], answer: "It refers to the instance of the class" },
    { question: "Which of the following will return `True`?", options: ["5 == 5", "5 != 5", "5 > 5", "5 <= 5"], answer: "5 == 5" },
    { question: "What is the output of `print([1, 2] + [3, 4])` in Python?", options: ["[1, 2, 3, 4]", "[1, 2] [3, 4]", "Error", "[3, 4, 1, 2]"], answer: "[1, 2, 3, 4]" },
    { question: "Which of the following is used to sort a list in Python?", options: ["sort()", "sorted()", "order()", "arrange()"], answer: "sort()" },
    { question: "Which method can be used to remove an item from a list by value in Python?", options: ["remove()", "pop()", "del()", "clear()"], answer: "remove()" },
    { question: "Which of the following is the correct way to create a dictionary in Python?", options: ["dict = {1: 'a', 2: 'b'}", "dict = ['a', 'b']", "dict = (1, 'a', 2, 'b')", "dict = {1, 2, 'a', 'b'}"], answer: "dict = {1: 'a', 2: 'b'}" },
    { question: "Which method is used to find the index of an element in a list in Python?", options: ["index()", "find()", "getIndex()", "locate()"], answer: "index()" },
    { question: "What is the output of `print('Python'.lower())` in Python?", options: ["python", "PYTHON", "Python", "Error"], answer: "python" },
    { question: "How do you delete a dictionary item in Python?", options: ["del dict[key]", "dict.remove(key)", "dict.delete(key)", "del dict.key"], answer: "del dict[key]" },
    { question: "What is the purpose of the `break` statement in Python?", options: ["To exit a loop", "To skip the current iteration", "To stop a function", "None of the above"], answer: "To exit a loop" },
    { question: "Which of the following can be used to open a file in Python?", options: ["open()", "file.open()", "openfile()", "file()"], answer: "open()" },
    { question: "What will be the output of `print(3 + '4')` in Python?", options: ["34", "7", "Error", "None"], answer: "Error" },
    { question: "Which of the following is used for multi-line comments in Python?", options: ["// comment", "/* comment */", "# comment", "''' comment '''"], answer: "''' comment '''" }
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

   
    resultHTML += `<a href="python.html" class="btn">Retake Quiz</a>&nbsp;&nbsp;<a href="index.html" class="btn">Home</a>`;

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

