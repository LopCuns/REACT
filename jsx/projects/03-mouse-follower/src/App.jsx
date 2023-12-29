import './App.css'
import { useEffect } from 'react'

function App() {
  useEffect(()=>{
    console.log('Efecto')
  },[])
  return (
    <h1>Proyecto con useEffect</h1>
  )
}

export default App
