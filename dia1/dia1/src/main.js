import './style.css'

const app = document.querySelector('[data-js="app"]').innerHTML = `
<h1>B. Academy</h1>
<p>Boas vindas à semana de pré-work para o Bootcamp em React.js 😁</p>
`
const link = document.querySelector('[data-js="link"]')

link.addEventListener('click', ()=>{
  const a = document.querySelector('[data-js="app"]')
  if(a.classList.contains('hide')){
    link.innerHTML = `<h3>Esconder</h3>`
    a.classList.remove('hide')
  }else{
    link.innerHTML = `<h3>Mostrar</h3>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <a href="https://github.com/SallesCosta" target="_blank" class="button">
    <span><i class="fa fa-github" aria-hidden="true"></i> Github</span></a>
      <p>uma estrelinha pra um dev que está começando???</p>
      <p>valeu!!!</p>`
    a.classList.add('hide')
  }
}, false)

