export function WinnerModal({ winner,closeModalFunction }){
  if (winner === null) return
  const winnerText = winner === false
  ?'Empate'
  :`Ha ganado`  
  return (
        <section className='app-modalWinner'>
          <h2 className='app-modalWinnerHeading'>{ winnerText }</h2>
            {winner !== false && (
              <p className="app-modalWinnerTurn">
                 <span>{winner}</span>
              </p>
            )}
          <button className="app-restart" onClick={closeModalFunction}>Empezar de nuevo</button>
        </section>
      )
}