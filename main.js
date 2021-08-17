import './style.css'
import './main2'

//HTML Collection => ela é 'viva'... 
const a = document.getElementsByTagName('div')
console.log(a)  //ver no console  HTMLCollection

const div = document.createElement('div')
document.body.appendChild(div)
console.log('a:', a.length)


