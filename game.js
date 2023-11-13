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
let colors = ['green', 'red', 'yellow', 'blue']
let sequence = []
let level = 0

let clicked = []

let applyingSequence = false

// Applying audio for each btn color
green_btn.addEventListener('click', () => playSound('green'))
red_btn.addEventListener('click', () => playSound('red'))
yellow_btn.addEventListener('click', () => playSound('yellow'))
blue_btn.addEventListener('click', () => playSound('blue'))

// function to play sound when clicking on button 
function playSound(color) {
    if(applyingSequence === false) {
        audio.src = './sounds/' + color + '.mp3'
        audio.play()
        applyHighlight(color)
        if(sequence.length === 0) {
            sequence.push(color)
            setTimeout(() => {
                nextLevel()
            }, sequence.length*1000)
        }
        else {
            clicked.push(color)
            checkColor()
        }
    }
}

// function to click button automatically
function applyHighlight(color) {
    let btn = document.getElementById(color)
    btn.classList.add('pressed')
    setTimeout(() => {
        btn.classList.remove('pressed')
    }, 100)
}

// function to apply red background
function applyRedBackground() {
    let container = document.body
    container.classList.add('game-over')
    setTimeout(() => {
        container.classList.remove('game-over')
    }, 1000)
}

// function to restart game
function restart() {
    applyingSequence = false
    level = 0
    clicked.length = 0
    sequence.length = 0
    level_title.innerText = 'Press Any Key to Start'
}

// function to generate random sequence and apply level
function generateRandomSequence() {
    applyingSequence = true
    let color = colors[Math.floor(Math.random() * colors.length)]
    sequence.push(color)
    setTimeout(() => {
        applySequence()
    }, 1000)
}

// function to apply random sequence 
function applySequence() {
    for(let i=0; i<sequence.length; i++) {
        setTimeout(() => {
            audio.src = './sounds/' + sequence[i] + '.mp3'
            audio.play()
            applyHighlight(sequence[i])

            if(i === sequence.length-1) {
                applyingSequence = false
            }
        }, i*1000)
    }
}

function checkColor() {
    if(clicked[clicked.length - 1] !== sequence[clicked.length - 1]) {
        audio.src = './sounds/wrong.mp3'
        audio.play()
        applyRedBackground()
        setTimeout(() => {
            restart()
        }, 1000)
    }
    else if (clicked.length === sequence.length) {
        setTimeout(() => {
            nextLevel()
        }, 100) 
    }
}

function nextLevel() {
    setTimeout(() => {
        generateRandomSequence()
        level += 1
        level_title.innerText = 'Level ' + level
        clicked = []
    }, 100)
}