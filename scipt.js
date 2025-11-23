// All questions here
const questions = [
  {
    question: "What is your name?",
    options: ["Paras", "Rohan", "Deepak", "Rahul"],
    correct: 0
  },
  {
    question: "Capital of India?",
    options: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
    correct: 1
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Venus", "Jupiter"],
    correct: 1
  }
];

// Track current question
let currentIndex = 0;

// Show the question on screen
function showQuestion() {
  const q = questions[currentIndex];

  // Set question text
  document.getElementById("question").textContent = q.question;

  // Set options text
  const options = document.querySelectorAll(".option");
  options.forEach((opt, i) => {
    opt.innerHTML = `<span>${String.fromCharCode(65 + i)}</span> ${q.options[i]}`;
    opt.style.background = "#0b095e"; // reset background
    opt.style.pointerEvents = "auto"; // clickable again
  });
}

// When user clicks an option
function checkAnswer(selectedIndex) {
  const q = questions[currentIndex];
  const options = document.querySelectorAll(".option");

  // Disable clicking more than once
  options.forEach(opt => opt.style.pointerEvents = "none");

  // Correct answer
  if (selectedIndex === q.correct) {
    options[selectedIndex].style.background = "green";
  } 
  // Wrong answer
  else {
    options[selectedIndex].style.background = "red";
    options[q.correct].style.background = "green";
  }

  // Move to next question after 1 second
  setTimeout(nextQuestion, 1000);
}

// Go to next question
function nextQuestion() {
  currentIndex++;

  if (currentIndex < questions.length) {
    showQuestion();
  } else {
    alert("Game Over! You completed all questions.");
  }
}

// Add click events to every option button
const optionButtons = document.querySelectorAll(".option");

optionButtons.forEach((btn, index) => {
  btn.addEventListener("click", () => checkAnswer(index));
});

// Start game first time
showQuestion();
