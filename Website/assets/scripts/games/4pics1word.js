
const imageLoc = "../../assets/images/Main/games/4pics1word/"

// import {what} from '../../images/Main/games/4pics1word/'

const words = [
  { images: [`automotive-1.png`, `automotive-2.png`, `automotive-3.png`, `automotive-4.png`], hint: "Automotive is the  best", answer: 'automotive' },
  { images: [`automation-1.png`, `automation-2.png`, `automation-3.png`, `automation-4.png`], hint: "Automation is the  best", answer: 'automation' },
  { images: [`carpentry-1.png`, `carpentry-2.png`, `carpentry-3.png`, `carpentry-4.png`], hint: "carpentry is the  best",  answer: 'carpentry' },
  { images: [`cooling-1.png`, `cooling-2.png`, `cooling-3.png`, `cooling-4.png`], hint: "cooling is the  best", answer: 'cooling' },
  // { images: ['driving-1.png', 'driving-2.png', 'driving-3.png', 'driving-4.png'], hint: "driving is the  best", answer: 'driving' },
  // { images: ['electrification-1.png', 'electrification-2.png', 'electrification-3.png', 'electrification-4.png'], hint: "electrification is the  best",  answer: 'electrification' },
  // { images: ['electromechanics-1.png', 'electromechanics-2.png', 'electromechanics-3.png', 'electromechanics-4.png'], hint: "electromechanics is the  best",  answer: 'electromechanics' },
  // { images: ['finishing-1.png', 'finishing-2.png', 'finishing-3.png', 'finishing-4.png'], hint: "finishing is the  best",   answer: 'finishing' },
  // { images: ['machining-1.png', 'machining-2.png', 'machining-3.png', 'machining-4.png'], hint: "machining is the  best",   answer: 'machining' },
  // { images: ['masonry-1.png', 'masonry-2.png', 'masonry-3.png', 'masonry-4.png'], hint: "masonry is the  best",   answer:  'masonry' },
  // { images: ['mechanics-1.png', 'mechanics-2.png', 'mechanics-3.png', 'mechanics-4.png'], hint: "mechanics is the  best",  answer: 'mechanics' },
  // { images: ['mechatronics-1.png', 'mechatronics-2.png', 'mechatronics-3.png', 'mechatronics-4.png'], hint: "mechatronics is the  best",   answer: 'mechatronics' },
  // { images: ['painting-1.png', 'painting-2.png', 'painting-3.png', 'painting-4.png'], hint: "painting is the  best",   answer: 'painting' },
  // { images: ['plumbing-1.png', 'plumbing-2.png', 'plumbing-3.png', 'plumbing-4.png'], hint: "plumbing is the  best",   answer: 'plumbing' },
  // { images: ['tiling-1.png', 'tiling-2.png', 'tiling-3.png', 'tiling-4.png'], hint: "tiling is the  best",   answer: 'tiling' },
  // { images: ['welding-1.png', 'welding-2.png', 'welding-3.png', 'welding-4.png'], hint: "welding is the  best",   answer: 'welding' },
];



// Random image
function randomWords(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
randomWords(words);

// Get DOM elements
const imagesContainer = document.querySelector('.images');
const userInput = document.getElementById('userInput');
const checkButton = document.getElementById('checkButton');
const result = document.getElementById('result');
const scoreDisplay = document.getElementById('score');
const contFooter = document.querySelector('.cont-footer');
const hintcont = document.querySelector('.hint');
const questionCont = document.getElementById('questions');
const resultCont = document.querySelector('.cont-head');
const tryContainer = document.querySelector('.result-cont');

// Create Element for appending
const tryAgain = document.createElement('div');
const imgdoneCont = document.createElement('div');
const imgDone = document.createElement('img');
const totalScore = document.createElement('div');
const textElement = document.createElement('span');

let currentWordIndex = 0;
let score = 0;
let questionsCount = 0;
let attempt = 3;


// load Img
function loadImage() {
  const word = words[currentWordIndex];
  imagesContainer.innerHTML = '';
  hintcont.style.display = 'none';
  textElement.innerHTML = '';
  contFooter.style.display = 'none';
  questionCont.style.display = 'block';
  tryAgain.style.display = 'none';

  const loadingElement = document.createElement('div');
  loadingElement.classList.add('loading-class');
  loadingElement.textContent = 'Loading...';
  imagesContainer.appendChild(loadingElement);

  if (score !== words.length) {
    setTimeout(() => {
      imagesContainer.removeChild(loadingElement);
      contFooter.style.display = 'block';
      result.textContent = '';

      const imgElements = word.images.map(image => `<img src="${imageLoc}${image}">`).join('');
      imagesContainer.innerHTML = imgElements;
 

      textElement.classList.add('hint-text');
      textElement.innerHTML = word.hint;
      hintcont.style.display = 'flex';
      hintcont.appendChild(textElement);

      questionsCount++;
      questionCont.textContent = `Test: ${questionsCount} / ${words.length}`;
    }, 2000);
  }
}





// Check Answer
function checkGuess() {
  const word = words[currentWordIndex];
  const userGuess = userInput.value.toLowerCase().trim();

  if (userGuess === word.answer) {
    result.textContent = 'Correct! Next word:';
    result.style.color = 'white';
    score++;
    scoreDisplay.textContent = `Score: ${score}`;
    currentWordIndex = (currentWordIndex + 1) % words.length;
    loadImage();
    userInput.style.border = '';
    userInput.value = '';

    if (score === words.length) {
      completedTest();
    }
  } else if (userGuess === '') {
    result.style.color = 'red';
    result.textContent = 'Please Enter your Answer!';
    userInput.style.border = '2px solid red';
    attempt--;
  } else if (userGuess !== word.answer) {
    result.style.color = 'red';
    result.textContent = 'Incorrect. Try again.';
    userInput.style.border = '2px solid red';
    userInput.value = '';
    attempt--;
  }

  attempts();
}

// Attemps
function attempts() {
  if (attempt === 0) {
    imagesContainer.innerHTML = '';
    hintcont.style.display = 'none';
    scoreDisplay.style.display = 'none';
    contFooter.style.display = 'none';
    questionCont.style.display = 'none';
    resultCont.style.display = 'block';
    totalScore.style.display = 'block';
    result.textContent = 'Better Luck Next Time!';
    result.style.color = 'white';
    totalScore.classList.add('totalScore');
    totalScore.innerHTML = `Total Score: ${score} / ${words.length}`;
    resultCont.appendChild(totalScore);
    totalScore.style.color = 'red';
    setupRestartButton();
  }

}

// Complete Test
function completedTest() {
  imagesContainer.innerHTML = '';
  hintcont.style.display = 'none';
  scoreDisplay.style.display = 'none';
  contFooter.style.display = 'none';
  tryAgain.style.display = 'flex';
  imgdoneCont.style.display = 'block';
  totalScore.style.display = 'block';

  if (score === words.length) {
    imgdoneCont.classList.add('img-done-cont');
    imgDone.classList.add('img-done');

    imgDone.src = 'img/icon-check.png';
    resultCont.style.display = 'block';
    imgdoneCont.appendChild(imgDone);
    resultCont.appendChild(imgdoneCont);

    result.textContent = 'Congratulations! You completed questions!';
    questionCont.innerHTML = '';
    result.style.color = '#ffffffbe';

    totalScore.classList.add('totalScore');
    totalScore.innerHTML = `Total Score: ${score} / ${words.length}`;
    resultCont.appendChild(totalScore);

    if (score >= 3) {
      totalScore.style.color = 'white';
    } else if (score >= 5) {
      totalScore.style.color = 'yellow';
    }
  }
  setupRestartButton();
}

// Restart function
function restartGame() {
  currentWordIndex = 0;
  score = 0;
  questionsCount = 0;
  attempt = 3;

  imgdoneCont.style.display = 'none';
  totalScore.style.display = 'none';
  resultCont.style.display = 'flex';
  scoreDisplay.style.display = 'block';
  scoreDisplay.textContent = `Score: ${score}`;

  loadImage();
}
// Restart Button
function setupRestartButton() {
  tryAgain.classList.add('try-again');
  userInput.style.border = 'none';
  tryContainer.style.display = 'block';
  tryAgain.style.display = 'flex';
  tryAgain.innerHTML = `<button class='restart'><i class="fa-solid fa-rotate-left"></i></button>`;
  tryContainer.appendChild(tryAgain);
  tryAgain.addEventListener('click', restartGame);
}

loadImage();
checkButton.addEventListener('click', checkGuess);