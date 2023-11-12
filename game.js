// Declaring buttons
let green_btn = document.getElementById('green')
let red_btn = document.getElementById('red')
let yellow_btn = document.getElementById('yellow')
let blue_btn = document.getElementById('blue')

// Creating audio
let audio = document.createElement('audio')

// Declaring game variables
let win = true
let colors = ['green', 'red', 'yellow', 'blue']
let sequence = []
let level = 0

// Applying audio for each btn color
green_btn.addEventListener('click', () => playSound('green'))
red_btn.addEventListener('click', () => playSound('red'))
yellow_btn.addEventListener('click', () => playSound('yellow'))
blue_btn.addEventListener('click', () => playSound('blue'))

// function to play sound when clicking on button 
function playSound(color) {
    audio.src = './sounds/' + color + '.mp3'
    audio.play()
    applyHighlight(color)
    if(sequence.length === 0) {
        sequence.push(color)
        gameStart()
    }
}

// function to start the game
function gameStart() {
    while(win) {
        if(!checkColor()) {
            win = false
            level = 0
            sequence = []
            break
        }
        else {
            level += 1
            generateRandomSequence()
        }
    }
}

function generateRandomSequence() {
    let color = colors[Math.floor(Math.random() * colors.length)]
    sequence.push(color)
    console.log(color)
    applySequence()
}

// function to click button automatically
function applyHighlight(color) {
    let btn = document.getElementById(color)
    btn.classList.add('pressed')
    setTimeout(() => {
        btn.classList.remove('pressed')
    }, 100)
}

// function to apply random sequence 
function applySequence() {
    for(let i=0; i<colors.length; i++) {
        setTimeout(() => {
            playSound(sequence[i])
            btn.click()
            applyHighlight(sequence[i])
            if (i === colors.length - 1) {
                level += 1;
            }
        }, i*1000)
    }
}

function checkColor(color) {
    for(let i=0; i<sequence.length; i++) {
        if(color === sequence[i]) {
            return true
        
        }
        else {
            alert('Wrong color')
            audio.src = './sounds/wrong.mp3'
            audio.play()
            return false
        }
    }   
}

