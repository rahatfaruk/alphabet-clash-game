const playBtn = document.getElementById('play-btn')
const playAgainBtn = document.getElementById('play-again')
const homeSectEl = document.getElementById('home-sect')
const playSectEl = document.getElementById('play-sect')
const resultSectEl = document.getElementById('result-sect')
const letterEl = document.getElementById('letter')
const lifeEl = document.getElementById('life')
const scoreEl = document.getElementById('score')
const finalScoreEl = document.getElementById('final-score')
const allKeyEls = document.querySelectorAll('kbd')

// ## init variables
let score, life

// ## functions
function generateRandomChar() {
  const alphabets = 'abcdefghijklmnopqrstuvwxyz'
  // generate random num
  const randNum = Math.floor(Math.random() * alphabets.length) + 1
  // get char using that num as index
  const randChar = alphabets[randNum]
  return randChar
}

function hightlightKey(char) {
  // hightlight the char in display-keyboard
  for (const keyEl of allKeyEls) {
    if (keyEl.textContent.toLowerCase() === char) {
      keyEl.classList.add('active')
    } else {
      keyEl.classList.remove('active')
    }
  }
}

function generateCharNdHighlightKey() {
  const randChar = generateRandomChar()
  letterEl.textContent = randChar
  hightlightKey(randChar)
  return randChar
}

function setActiveSection(sectionEl) {
  // hide all section
  homeSectEl.classList.add('hidden')
  playSectEl.classList.add('hidden')
  resultSectEl.classList.add('hidden')

  // show target section
  sectionEl.classList.remove('hidden')
}

// continue game
function continueGame() {
  setActiveSection(playSectEl)

  // reset life & score content
  score = 0
  life = 3
  lifeEl.textContent = life
  scoreEl.textContent = score

  let char = generateCharNdHighlightKey()

  function checkKeyNdDecide(e) {
    if (e.key === char) {
      score += 1
      scoreEl.textContent = score
      
      char = generateCharNdHighlightKey() 
      console.log('keyup:', char);
    } else {
      life -= 1
      lifeEl.textContent = life

      if (life === 0) {
        window.removeEventListener('keyup', checkKeyNdDecide)
        setActiveSection(resultSectEl)
        finalScoreEl.textContent = score
      }
    }
  }

  window.addEventListener('keyup', checkKeyNdDecide)

}

// start game
playBtn.addEventListener('click', continueGame)

// handle all keyboard events
window.addEventListener('keyup', function(e) {
  if (e.key === 'Enter' && !homeSectEl.classList.contains('hidden')) {
    continueGame()
  } else if (e.key === 'Enter' && !resultSectEl.classList.contains('hidden')) {
    continueGame()
  }
})

// play again
playAgainBtn.addEventListener('click', continueGame)