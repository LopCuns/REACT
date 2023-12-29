import { useState } from 'react'
import './TwitterCard.css'
// Los react hooks nos permiten dotar de mayor interactividad a nuestros componentes
// El hook useState nos permite crear un estado para el componente,es decir, que si toma un valores se 
// comporte de una manera y si toma otro se comporte de otra


// Las props se pasan como parámetros nombrados
// Entre llaves {} se ponen expresiones, es decir, valores que son evaluados (como por ejemplo en el botón de seguir ;línea 16)
export function TwitterCard({ children,formatUserName,userName,fancyNickname,initialisFollowing }){
  // useState toma un valor de input(el valor inicial) y devuelve dos outputs : el valor y la función para cambiarlo
  const [isFollowing,setIsFollowing] = useState(initialisFollowing)
  const followText = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClassName = "tw-followCard-button" + (isFollowing ? ' is-following' : '')

  // Las funciones de cambio de estado se colocan en los elementos del componente tal y como se hacía antiguamente en HTML
  function handleClick(){
    setIsFollowing(!isFollowing)
  }


  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
          <img src={ `https://unavatar.io/${userName}` } alt="avatar" className="tw-followCard-avatar" />
        <div className="tw-followCard-info">
            <strong>{children}</strong>
            <span className="tw-followCard-infoUserName">{formatUserName(userName)}</span>
            {fancyNickname}
        </div>
      </header>
      <aside>
        <button className={ buttonClassName } onClick={ handleClick }>
          <span className="tw-followCard-button-text">{ followText }</span>
          <span className='tw-followCard-button-stopFollowText'>Dejar de seguir</span>
        </button>
      </aside>
    </article>
  )
}