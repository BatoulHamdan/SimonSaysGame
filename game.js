// Declaring buttons
let green_btn = document.getElementById('green')
let red_btn = document.getElementById('red')
let yellow_btn = document.getElementById('yellow')
let blue_btn = document.getElementById('blue')

// Declaring level title
let level_title = document.getElementById('level-title')

// Creating audio
let audio = document.createElement('audio')

// Declaring game variables
let win = true
let colors = ['green', 'red', 'yellow', 'blue']
let sequence = []
let level = 0

let i = 0
let clicked = []

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
        setTimeout(() => {
            console.log('Game Starts')
            sequence.push(color)
            generateRandomSequence()
        }, 500)
    }
    else {
        clicked.push(color)
        i += 1
    }
}

// function to restart game
function restart() {
    i = 0
    level = 0
    clicked = []
    sequence = []
    level_title.innerText = 'Press Any Key to Start'
}

// function to generate random sequence and apply level
function generateRandomSequence() {
    let color = colors[Math.floor(Math.random() * colors.length)]
    sequence.push(color)
    console.log(color)
    applySequence()
    setTimeout(() => {
        while(clicked.length < sequence.length) {
            checkColor(clicked[i])
        }
    }, 100)
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
            applyHighlight(sequence[i])
            if (i === colors.length - 1) {
                level += 1;
            }
        }, i*1000)
    }
}

function checkColor(color) {
    if(color === sequence[i]) {
        level += 1
        level_title.innerText = 'Level ' + level
        generateRandomSequence()
    }

    else {
        setTimeout(() => {
            alert("You lose")
            restart()
        }, 500)
    }
}

