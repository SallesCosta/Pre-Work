import './style.css'

let name = "Eduardo"

function render({ title, description }) {

  document.querySelector('#app').innerHTML = `
  <h1>Hello ${title}</h1>
  ${description ? `<p>${description}</p>` : ""}
  `
}
const link = document.querySelector('[data-js="link"]')
link.addEventListener('click', (e) => {
  e.preventDefault()
  render({ title: 'Eduardo' })
})

render({ title: 'Vite', description: 'vite é veloz' })

// Higher Order Functions => é uma função extraordinaria
// pode retornar uma function por argumento e pode fornecer outra função


const arr = [1, 2, 3]




// Tipos Primitivos
// String
// Number
// Boolean
// null
// undefined
// Symbol
// BigInt


// Tipos de Objeto
// arrays
// objetos
// regex
// Date
// functions

console.log(

)
