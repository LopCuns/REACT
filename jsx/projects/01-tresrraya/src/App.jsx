import './App.css'
import { useState } from 'react'
import { Square } from './Square'
import { WinnerModal } from './WinnerModal'
import { TURNS } from './constants'
import * as lc from './localStorage'
import confetti from 'canvas-confetti'


function App() {
  const [board,setBoardRaw] = useState(lc.getSavedBoard() || Array(9).fill(null))
  const [turn,setTurnRaw] = useState(lc.getSavedTurn() || TURNS.X)
  // null es que no hay ganador, false es que hay un empate
  const [winner,setWinner] = useState(null)

  // Editamos las funciones setBoard y setTurn para que se guarden los cambios en el localStorage y asi no perder la partida
  const setBoard = (newBoard) => {
    setBoardRaw(newBoard)
    lc.saveBoard(newBoard)
  }
  const setTurn = (newTurn) => {
    setTurnRaw(newTurn)
    lc.saveTurn(newTurn)
  }

  function restart(){
    // reiniciar el juego
    setWinner(null)
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
  }

  function checkWinning(board){
    // Otener las casillas de las combinaciones ganadoras
    const winningCells = [
      board.slice(0,3),
      board.slice(3,6),
      board.slice(6),
      [board[0],board[3],board[6]],
      [board[1],board[4],board[7]],
      [board[2],board[5],board[8]],
      [board[0],board[4],board[8]],
      [board[2],board[4],board[6]]
    ]
    // Comprobar si alguna de las combinaciones ganadoras está completa
    const winningCombination = winningCells.find(comb => comb.every(cell => comb[0] !== null && cell === comb[0]))
    // Devolver el valor ganador
    return winningCombination ? winningCombination[0] : null
  }

  function updateBoard(idx){
    // El localStorage es para que no se borre la partida al actualizar o salir del navegador
    // Crear el nuevo turnno y el nuevo tablero
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    const newBoard = [...board]
    // Si ya hay un valor en la casilla, no actualizar el tablero
    if (board[idx] || winner) return
    // Hacer las modificaciones en el tablero
    newBoard[idx] = turn === TURNS.X?TURNS.X:TURNS.O
    // Cambiar el tablero
    setBoard(newBoard)
    // Comprobar si alguien ha ganado la partida
    const winValue = checkWinning(newBoard)
    if (winValue){
      confetti()
      setWinner(winValue)
      return
    }
    // Si ha ocurrido un empate,poner el winner en false
    if (newBoard.every(cell => cell !== null)){
      setWinner(false)
      return
    }
    // Cambiar de turno
    return setTurn(newTurn)
  }
  return (
    <main className="app">
      <button className="app-restart" onClick={restart}>Empezar de nuevo</button>
      <h1 className="app-title">Tres en raya</h1>
      <section className="app-board">
        { board.map((cell,idx) => {
          return (
            <Square 
            key={idx}
            index={idx}
            updateBoard={updateBoard}
            >
              <span className="app-boardCellContent">{cell}</span>
            </Square>
          )
        }) }
      </section>
      <section className="app-turn">
        <div
          className={`app-isTurn ${turn === TURNS.X?'its':''}`}
        >
          <span className='app-isTurnContent'>{TURNS.X}</span>
        </div>
        <div
          className={`app-isTurn ${turn === TURNS.O?'its':''}`}
        >
          <span className='app-isTurnContent'>{TURNS.O}</span>
        </div>
      </section>
        <WinnerModal
          winner={winner}
          closeModalFunction={restart}
        ></WinnerModal>
    </main>
  )
}

export default App
