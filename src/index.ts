let circleTurn: boolean = false
let gameIsRuning: boolean = false
const X_CLASS: string = "x"
const CIRCLE_CLASS: string = "circle"

const cells = document.querySelectorAll("[data-cell]")
const board = document.getElementById("board")
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
    cells.forEach(cell => {
        cell.addEventListener("click", () => { addMarker(cell) }, { once: true })
    })
    addHoverEffect()
}

function renderGame(): void {
    if (checkForWin()) {
        console.log("someone has won!")
    }
    else {
        switchTurn()
        addHoverEffect()
    }
    // See if the game has ended. Either a draw or a win
    // See who's turn it is
    // Add a mark to the selected cell
    // Switch turns
}

function checkForWin(): boolean {
    return winingCombinations.some(element => {
        return element.every(index => {
           return cells[index].classList.contains(X_CLASS || CIRCLE_CLASS)
        })
    })
}

function addMarker(cell: Element): void {
    const currentTurn = circleTurn ? CIRCLE_CLASS : X_CLASS
    cell.classList.add(currentTurn)
    renderGame()
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