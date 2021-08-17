import './style.css'

const app = document.querySelector('[data-js="app"]').innerHTML = `
<h1>B. Academy</h1>
<p>Boas vindas à semana de pré-work para o Bootcamp em React.js 😁</p>
`

const showHide = document.querySelector('[data-js="link"]')

showHide.addEventListener('click', ()=>{
  document.querySelector('[data-js="app"]').style.setProperty("display", "none")
})
