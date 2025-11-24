// Part 1: Questions Data + Logic Pathway.

const questions = [
  {
    question: "What is your name?",
    options: ["Paras", "Rohan", "Deepak", "Rahul"],
    correct: 0,
  },

  {
    question: "Capital of India?",
    options: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
    correct: 1,
  },

  {
    question: "Which planet is called blue planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    correct: 0,
  },
];


// Part 2: Start index

let currentIndex = 0;


// PART 3: showQuestion() Function

function showQuestion() {

  const q = questions[currentIndex];

  document.getElementById("question").textContent = q.question;

  const options = document.querySelectorAll('.option');

  options.forEach((opt,i) => {
    
    opt.innerHTML = `<span>${String.fromCharCode(65 + i)}</span> ${q.options[i]}`;

    opt.style.background = "#0b095e";

    opt.style.pointerEvents = 'auto';
  });

}



// PART 4: checkAnswer() Function

function checkAnswer(selectIndex) {
  
  const q = questions[currentIndex];

  const options = document.querySelectorAll('.option');

  options.forEach(opt => opt.style.pointerEvents = "none");

  if(selectIndex === q.correct) {
    options[selectIndex].style.background = 'green';
  } else {
    options[selectIndex].style.background = 'red';
    options[q.correct].style.background = 'green';
  }

  setTimeout(nextQuestion,1000);
}



// PART 5: nextQuestion()

function nextQuestion() {
  currentIndex++;

  if (currentIndex < questions.length) {
    showQuestion();
  } else {
    alert("Game Over");
  }
}



// PART 6: Event listeners for options

const optionButtons = document.querySelectorAll('.option');

optionButtons.forEach((btn, index) => {
  btn.addEventListener('click', () => checkAnswer(index));
});


// Start the quiz
showQuestion();
