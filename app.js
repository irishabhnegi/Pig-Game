console.log('hello');
const parentC = document.querySelector('.container')
const dice = document.querySelector('.dice')

const currentScorePlayer_1 = document.querySelector('.score-1')
const currentScorePlayer_2 = document.querySelector('.score-2')

const player1_mainScore = document.querySelector('.player-1_score')
const player2_mainScore = document.querySelector('.player-2_score')

const newGameBtn = document.querySelector('.new-game')
const rollDiceBtn = document.querySelector('.roll-dice');
const holdBtn = document.querySelector('.hold')


const section1 = document.querySelector('.section1')
const section2 = document.querySelector('.section2')

let player = currentScorePlayer_1
let playerCur = Number(player.innerHTML);

rollDiceBtn.addEventListener('click', () => {

    let randomNum = Math.trunc(Math.random() * 6 + 1)

    if (randomNum) {

        let markup = `<img src="./dice-${randomNum}.png" alt="img"></img>`
        dice.insertAdjacentHTML('beforeend', markup)

    }

    if (randomNum === 1) {

        playerCur = 0;
        player.innerHTML = 0

        if (player === currentScorePlayer_2) {
            player = currentScorePlayer_1;
            section1.style.backgroundColor = "rgba(226, 226, 226, 0.4)"
            section2.style.backgroundColor = "rgba(210, 210, 210, 0.3)"
        } else {
            player = currentScorePlayer_2;
            section1.style.backgroundColor = "rgba(210, 210, 210, 0.3)"
            section2.style.backgroundColor = "rgba(226, 226, 226, 0.4)"
        }

    } else {

        playerCur += randomNum;
        player.innerHTML = playerCur;

    }
})


holdBtn.addEventListener('click', () => {

    if (player === currentScorePlayer_1) {
        let numP1 = Number(player1_mainScore.innerHTML)
        if (numP1 > 100) {
            dice.remove()
            let markup = `<h2 class="win">PLAYER 1 WIN</h2>`;
            parentC.insertAdjacentHTML('beforeend', markup)
            player1_mainScore.innerHTML = 0
        } else {
            player1_mainScore.innerHTML = numP1 + playerCur
        }

    }
    if (player === currentScorePlayer_2) {
        let numP2 = Number(player2_mainScore.innerHTML)
        if (numP2 > 100) {
            dice.remove()
            let markup = `<h2 class="win">PLAYER 2 WIN</h2>`;
            parentC.insertAdjacentHTML('beforeend', markup)
            player2_mainScore.innerHTML = 0
        } else {

            player2_mainScore.innerHTML = numP2 + playerCur
        }
    }
    playerCur = 0;
    player.innerHTML = 0
    if (player === currentScorePlayer_2) {
        player = currentScorePlayer_1
        section1.style.backgroundColor = "rgba(226, 226, 226, 0.4)"
        section2.style.backgroundColor = "rgba(210, 210, 210, 0.3)"

    } else {
        player = currentScorePlayer_2;
        section1.style.backgroundColor = "rgba(210, 210, 210, 0.3)"
        section2.style.backgroundColor = "rgba(226, 226, 226, 0.4)"
    }
})

newGameBtn.addEventListener('click', () => {
    playerCur = 0;
    player.innerHTML = 0;
    player1_mainScore.innerHTML = 0;
    player2_mainScore.innerHTML = 0;
    currentScorePlayer_1.innerHTML = 0;
    currentScorePlayer_2.innerHTML = 0;
})