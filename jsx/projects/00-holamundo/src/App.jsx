import { TwitterCard } from "./TwitterCard"

// Podemos renderizar las listas en componentes usando javascript
const userList = [
  {
    userName: 'midudev',
    name: 'Miguel Angel Durán',
    isFollowing: true
  },
  {
    userName: 'DorianDesings',
    name: 'Dorian',
    isFollowing: true
  }
]

// Las props de un componente se pasan como atributos HTML, pero deben estar en camel case, no se pueden usar guiones en JS
export function App(){
  // También se pueden pasar funciones como props, pues en JS son objetos de primera clase
  const  format = (username) => `@${username}`
  // También se pueden pasar elementos como props
  const fancyNickName = <span style={{'backgroundColor':'yellow','color':'black'}}>JJ</span>
  // CUALQUIER TIPO DE DATO DE JAVASCRIPT PUEDE SER PASADO COMO PROP
  // Como buena práctica las props deben ser inmutables,es decir, no modificadas.
  // Con la prop especial children puedes acceder a los hijos de tu componente,en este ejemplo pasamos un span con el name
  // Las props también se pueden pasar en forma de objeto, aunque esto no es muy recomendable
  const propsInObject = { formatUserName: format,userName : 'jlopcun',fancyNickName:fancyNickName }
  // Usamos el rest operator en el componente
  return (
    <section className="App">
      <TwitterCard  formatUserName={format} userName="LopCuns" fancyNickname={fancyNickName} initialisFollowing={true}>
          <span>Lopcunsdev</span>
      </TwitterCard>
      <TwitterCard  { ...propsInObject }>
          <span>Jlopcuns</span>
      </TwitterCard>
      {
        userList.map(({userName, name, isFollowing}) => {
          return (
            <TwitterCard formatUserName={format} userName={userName} initialisFollowing={isFollowing} key={userName}>
              <span>{ name }</span>
            </TwitterCard>
          )
        })
      }
    </section>
  )
}