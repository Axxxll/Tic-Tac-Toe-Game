let circleTurn: boolean = true
const X_CLASS: string = "x"
const CIRCLE_CLASS: string = "circle"

const cells = document.querySelectorAll("[data-cell]")
const board = document.getElementById("board")
const endGameDiv = document.getElementById("endgameMessage")
const endGameMsgTxt = document.getElementById("data-endgame-message-text")
const restartBtn = document.getElementById("restartBtn")

const winingCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

startGame()

function startGame(): void {
    circleTurn = !circleTurn
    cells.forEach(cell => {
        // @ts-nocheck
        cell.addEventListener('click', addMarker, { once: true })
    })
    addHoverEffect()
}

restartBtn?.addEventListener('click', restartGame)



function restartGame() {
    endGameMsgTxt!.innerText = ""
    endGameDiv?.classList.remove("show");
    cells.forEach(cell => {
        cell.classList.remove(X_CLASS)
        cell.classList.remove(CIRCLE_CLASS)
        cell.removeEventListener("click", addMarker)
    })
    startGame()
}

function renderGame(currentTurn: string): void {
    if (checkForWin(currentTurn)) {
        endGame(false)
    }
    else if (CheckForDraw()) {
        endGame(true)
    }
    else {
        switchTurn()
        addHoverEffect()
    }
}

function checkForWin(currentTurn: string): boolean {
    return winingCombinations.some(element => {
        return element.every(index => {
            return cells[index].classList.contains(currentTurn)
        })
    })
}

function CheckForDraw(): boolean {
    let gameIsADraw: boolean = false
    for (let i = 0; i < cells.length; i++) {
        if (cells[i].classList.value === "cell") {
            gameIsADraw = false
            break
        }
        else {
            gameIsADraw = true
        }
    }
    return gameIsADraw
}

function addMarker(element: any): void {
    const cell = element.srcElement
    let currentTurn: string = circleTurn ? CIRCLE_CLASS : X_CLASS
    cell.classList.add(currentTurn)
    renderGame(currentTurn)
}

function switchTurn(): void {
    circleTurn = !circleTurn
}

function addHoverEffect(): void {
    board?.classList.remove(X_CLASS)
    board?.classList.remove(CIRCLE_CLASS)
    if (circleTurn) {
        board?.classList.add(CIRCLE_CLASS)
    } else {
        board?.classList.add(X_CLASS)
    }
}

function endGame(IsDraw: boolean): void {
    endGameDiv?.classList.add("show");
    if (!IsDraw) {
        endGameMsgTxt!.innerText = `${circleTurn ? "Circle get's the squre" : "X marks the spot"}!`
    }
    else {
        endGameMsgTxt!.innerText = "It is a draw!"
    }
}