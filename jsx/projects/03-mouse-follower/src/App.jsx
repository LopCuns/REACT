import './App.css'
import { useEffect,useState } from 'react'
import { clamp } from './utils/clamp'

const  MouseFollower = () => {
  const [enabled,setEnabled] = useState(false)
  const [position,setPosition] = useState({ x:0,y:0 })
  // USEEFFECT : https://es.react.dev/reference/react/useEffect
  // Permite ejecutar código arbitrario cuando unos estados/variables (DEPENDENCIAS) cambian
  // useEffect recibe dos parámetros
  // UNA FUNCIÓN que se ejecuta cuando cambien las DEPENDENCIAS
  // un arreglo de DEPENDENCIAS, o estados a los que React escuchará
  useEffect(()=>{
    // En el primer renderizado se ejecuta sólo la función de configuración
    // Después de cada rederizado con dependencias cambiadas,rimero se ejecuta la función 
    //de limpieza con los valores antiguos y despues la función de configuración
    // Función para mover el cursor
    function handleMove(e){
      const { clientX,clientY } = e
      // clamp para evitar que el componente se salga de la pantalla
      setPosition({x: clamp(0,clientX,window.innerWidth), y: clamp(0,clientY,window.innerHeight)})
    }
    // Activar el seguimiento sólo si hemos activado la opción
    if (enabled) window.addEventListener('pointermove',handleMove)
    // La función del return se ejecutará cuando 
    // El componente desaparezca
    // Cambia la dependencia
    return () =>  window.removeEventListener('pointermove',handleMove)
  },[enabled])
  return (
    <>
      <button
      onClick={() => setEnabled(!enabled)}
      >{enabled ? "Desactivar" : "Activar"} puntero
      </button>
    <div className='app-pointer' 
    style={{
      transform:`translate(${position.x}px,${position.y}px)`,
      visibility:`${enabled?'visible':'hidden'}`,
    }}></div>
    </>
  )

}

function App() {
  return (
    <main>
        <h1>Proyecto con useEffect</h1>
        <MouseFollower ></MouseFollower>
    </main>
  )
}

export default App
