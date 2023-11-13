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
let i = 0

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
        console.log('Game Starts')
        sequence.push(color)
        console.log(color)
        setTimeout(() => {
            nextLevel()
        }, 1000)
    }
    else {
        clicked.push(color)
        checkColor()
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

// function to restart game
function restart() {
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
        }, i*1000)
    }
}

function checkColor() {
    if(clicked[clicked.length - 1] !== sequence[clicked.length - 1]) {
        alert('You Lose')
        restart()
    }
    if (clicked.length !== sequence.length) {
        setTimeout(() => {
            nextLevel()
        }, 1000*sequence.length)
        
    }
}

function nextLevel() {
    setTimeout(() => {
        generateRandomSequence()
        level += 1
        level_title.innerText = 'Level ' + level
        clicked = []
    }, 1000*sequence.length)
}