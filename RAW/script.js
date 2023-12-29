// Importar REACT
import React from 'https://esm.sh/react@18.2.0'
// Importar REACT DOM
import ReactDom from 'https://esm.sh/react-dom@18.2.0/client'

// Obtener un elemento del DOM al que ligar nuestro contenido de react
const appDomElement = document.getElementById('app')
// Anclar el root, la raiz de nuestro ReactDom al elemento (parecido al shadowRoot de los customElement)
const root = ReactDom.createRoot(appDomElement)
// Creamos algunos elementos con react
const button1 = React.createElement('button',{ 'data-id':1 },'react!!')
const button2 = React.createElement('button',{ 'data-id':2 },'react!!')
const button3 = React.createElement('button',{ 'data-id':3 },'react!!')
// Creamos un fragmento para agrupar todos estos elementos
const fragment = React.createElement(React.Fragment,null,[button1,button2,button3])
// Renderizar en la raíz el fragmento agrupador
root.render(fragment)