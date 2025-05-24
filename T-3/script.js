
// Quiz Data
const quiz = [
  { question: "What is the capital of France?", options: ["Paris", "London", "Rome"], answer: "Paris" },
  { question: "2 + 2 equals?", options: ["3", "4", "5"], answer: "4" },
  { question: "Which language runs in a browser?", options: ["Python", "C++", "JavaScript"], answer: "JavaScript" }
];

let current = 0;
let score = 0;

function loadQuestion() {
  const q = quiz[current];
  document.getElementById("question").textContent = q.question;
  document.getElementById("options").innerHTML = q.options.map(option =>
    `<button onclick="checkAnswer('${option}')">${option}</button>`
  ).join("");
}

function checkAnswer(selected) {
  if (selected === quiz[current].answer) {
    score++;
  }
  current++;
  if (current < quiz.length) {
    loadQuestion();
  } else {
    document.getElementById("quiz-container").innerHTML =
      `<h2>Quiz Completed!</h2><p>Your score: ${score}/${quiz.length}</p>`;
  }
}

// Load the first question
loadQuestion();

// Joke API
function loadJoke() {
  fetch("https://api.chucknorris.io/jokes/random")
    .then(response => response.json())
    .then(data => {
      document.getElementById("joke").textContent = data.value;
    })
    .catch(() => {
      document.getElementById("joke").textContent = "Failed to load joke.";
    });
}
