
export const Square = ({ children, updateBoard, index }) => {
  function handleClick(){
    updateBoard(index)
  }
  return (
    <div
    className="app-boardCell"
    onClick={handleClick}
    >
      { children }
    </div>
  )
}