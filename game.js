// Declaring btns
let green_btn = document.getElementById('green')
let red_btn = document.getElementById('red')
let yellow_btn = document.getElementById('yellow')
let blue_btn = document.getElementById('blue')

// creating audio
let audio = document.createElement('audio')

// Applying audio for each btn color
green_btn.addEventListener('click', function() {
    audio.src = './sounds/green.mp3'
    audio.play()
})

red_btn.addEventListener('click', function() {
    audio.src = './sounds/red.mp3'
    audio.play()
})

yellow_btn.addEventListener('click', function() {
    audio.src = './sounds/yellow.mp3'
    audio.play()
})

blue_btn.addEventListener('click', function() {
    audio.src = './sounds/blue.mp3'
    audio.play()
})

let win = true
let colors = ['green', 'red', 'yellow', 'blue']
let sequence = []

function generateRandomSequence() {
    let color = colors[Math.floor(Math.random() * colors.length)]
    sequence.push(color)
    console.log(color)
}

