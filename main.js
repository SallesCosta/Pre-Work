// import './style.css'
// import './main2.js'

//// quando usamos o getElementsByTagName ou Id.. ou Name, temos uma HTMLCollection
//// HTML Collection => ela é 'viva'... conforme eu adiciono novas tags <div>.. o console muda a quantidade
//// se ele muda a quantidade ele é exatamente o contrário do princípio da IMUTABILIDADE... nao recomendado hj em dia
//// evita efeitos colaterais

// const a = document.getElementsByTagName('div')
// console.log(a.length)  //ver no console  HTMLCollection

// const div = document.createElement('div')
// document.body.appendChild(div)
// console.log('a:', a.length)


// //quando usamos o querySelectorAll, temos uma NodeList
// const a = document.querySelectorAll('div')    //temos uma div
// console.log('a: ', a.length)

// const div = document.createElement('div')     //criamos uma nova div
// document.body.appendChild(div)

// const b = document.querySelectorAll('div')    //b é a soma de todas as divs
// console.log('b: ', b.length)

//// no console vai aparecer
// a: 1
// b: 2

// const app = document.querySelector('[data-js="app"]')
// const link = document.querySelector('[data-js="link"]')
// const button = document.querySelector('[data-js="button"]')

// link.addEventListener('click', (event)=>{
//   event.preventDefault()
//   alert(link)
//   console.log('clicou S this', event.currentTarget)
// }, false) //este false que é o terceiro argumento pode ser omitido pois hoje ele é falso por padrão. O evento vai se "propagar de dentro pra fora "
// // é uma lazy fuction... ela só funfa quando o comando dela é executado.. neste caso.. quando ela é clicada

// // essa é a mesma função da de cima.. poré com o this. Para que o 'this' funcione.. nao pode ser arrowFunction
// link.addEventListener('click', function(event){
//   event.preventDefault()
//   event.stopPropagation()////caso eu queira clicar no button mas que a função do link nao execute
// console.log('clicou com this', this)
// }, false)

// button.addEventListener('click',()=>{
//   alert(button)
// },false)

////se quiser inverter a ordem de propagação dos eventos.. é só colocar true no link

//----------------------------------------------------------------------------------------------

////Anotacoes do dia 2

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

