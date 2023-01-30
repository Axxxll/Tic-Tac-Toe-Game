"use strict";
let circleTurn = false;
let gameIsRuning = false;
const X_CLASS = "x";
const CIRCLE_CLASS = "circle";
const cells = document.querySelectorAll("[data-cell]");
const board = document.getElementById("board");
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
    cells.forEach(cell => {
        cell.addEventListener("click", () => { addMarker(cell); }, { once: true });
    });
    addHoverEffect();
}
function renderGame() {
    if (checkForWin()) {
        console.log("someone has won!");
    }
    else {
        switchTurn();
        addHoverEffect();
    }
}
function checkForWin() {
    return winingCombinations.some(element => {
        return element.every(index => {
            return cells[index].classList.contains(X_CLASS || CIRCLE_CLASS);
        });
    });
}
function addMarker(cell) {
    const currentTurn = circleTurn ? CIRCLE_CLASS : X_CLASS;
    cell.classList.add(currentTurn);
    renderGame();
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
