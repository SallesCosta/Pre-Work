import './style.css'
import './main2.js'

// quando usamos o getElementsByTagName ou Id.. ou Name, temos uma HTMLCollection
// HTML Collection => ela é 'viva'... conforme eu adiciono novas tags <div>.. o console muda a quantidade
// se ele muda a quantidade ele é exatamente o contrário do princípio da IMUTABILIDADE... nao recomendado hj em dia
// evita efeitos colaterais

// const a = document.getElementsByTagName('div')
// console.log(a.length)  //ver no console  HTMLCollection

// const div = document.createElement('div')
// document.body.appendChild(div)
// console.log('a:', a.length)


// quando usamos o querySelectorAll, temos uma NodeList
// const a = document.querySelectorAll('div')    //temos uma div
// console.log('a: ', a.length)

// const div = document.createElement('div')     //criamos uma nova div
// document.body.appendChild(div)

// const b = document.querySelectorAll('div')    //b é a soma de todas as divs
// console.log('b: ', b.length)

//no console vai aparecer
// a: 1
// b: 2

const app = document.querySelector('[data-js="app"]')
console.log(app)
