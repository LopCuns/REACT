const BOARD = '-board'
const TURN = '-turn'

export const saveBoard = (board) => {
  localStorage.setItem(BOARD,JSON.stringify(board))
}

export const saveTurn = (turn) => {
  localStorage.setItem(TURN,turn)
}

export const getSavedBoard = () => JSON.parse(localStorage.getItem(BOARD))
export const getSavedTurn = () => localStorage.getItem(TURN)