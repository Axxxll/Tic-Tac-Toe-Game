"use strict";
let circleTurn;
const X_CLASS = "x";
const CIRCLE_CLASS = "circle";
const cells = document.querySelectorAll("[data-cell]");
const board = document.getElementById("board");
const endGameDiv = document.getElementById("endgameMessage");
const endGameMsgTxt = document.getElementById("data-endgame-message-text");
const restartBtn = document.getElementById("restartBtn");
const winingCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
startGame();
function startGame() {
    circleTurn = false;
    cells.forEach(cell => {
        cell.addEventListener("click", () => { addMarker(cell); }, { once: true });
    });
    addHoverEffect();
}
restartBtn === null || restartBtn === void 0 ? void 0 : restartBtn.addEventListener('click', restartGame);
function restartGame() {
    endGameMsgTxt.innerText = "";
    endGameDiv === null || endGameDiv === void 0 ? void 0 : endGameDiv.classList.remove("show");
    cells.forEach(cell => {
        cell.classList.remove(X_CLASS);
        cell.classList.remove(CIRCLE_CLASS);
        cell.removeEventListener("click", () => { });
    });
    startGame();
}
function renderGame(currentTurn) {
    if (checkForWin(currentTurn)) {
        endGame(false);
    }
    else if (CheckForDraw()) {
        endGame(true);
    }
    else {
        switchTurn();
        addHoverEffect();
    }
}
function checkForWin(currentTurn) {
    return winingCombinations.some(element => {
        return element.every(index => {
            return cells[index].classList.contains(currentTurn);
        });
    });
}
function CheckForDraw() {
    let gameIsADraw = false;
    for (let i = 0; i < cells.length; i++) {
        if (cells[i].classList.value === "cell") {
            gameIsADraw = false;
            break;
        }
        else {
            gameIsADraw = true;
        }
    }
    return gameIsADraw;
}
function addMarker(cell) {
    let currentTurn = "";
    if (circleTurn) {
        currentTurn = CIRCLE_CLASS;
    }
    else {
        currentTurn = X_CLASS;
    }
    if (cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS)) {
        return;
    }
    else {
        console.log("A marker was added");
        cell.classList.add(currentTurn);
    }
    renderGame(currentTurn);
}
function switchTurn() {
    circleTurn = !circleTurn;
}
function addHoverEffect() {
    board === null || board === void 0 ? void 0 : board.classList.remove(X_CLASS);
    board === null || board === void 0 ? void 0 : board.classList.remove(CIRCLE_CLASS);
    if (circleTurn) {
        board === null || board === void 0 ? void 0 : board.classList.add(CIRCLE_CLASS);
    }
    else {
        board === null || board === void 0 ? void 0 : board.classList.add(X_CLASS);
    }
}
function endGame(IsDraw) {
    endGameDiv === null || endGameDiv === void 0 ? void 0 : endGameDiv.classList.add("show");
    if (!IsDraw) {
        endGameMsgTxt.innerText = `${circleTurn ? "Circle's" : "X's"} wins!`;
    }
    else {
        endGameMsgTxt.innerText = "It is a draw!";
    }
}
