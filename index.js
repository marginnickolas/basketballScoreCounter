let homeScore = 0
let guestScore = 0
let guest = document.getElementById("guest-score")
let home = document.getElementById("home-score")

function add1Home() {
    homeScore += 1
    score()
}
function add2Home() {
    homeScore += 2
    score()
}
function add3Home()  {
    homeScore += 3
    score()
}
function add1Guest() {
    guestScore += 1
    score()
}
function add2Guest() {
    guestScore += 2
    score()
}
function add3Guest() {
    guestScore += 3
    score()
}

function reset() {
    homeScore = 0
    guestScore = 0
    score()
}

function score() {
    guest.textContent = guestScore
    home.textContent = homeScore
}