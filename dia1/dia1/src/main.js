import './style.css'
//// #Base
const app = document.querySelector('[data-js="app"]')
app.innerHTML = `
<h1>B. Academy</h1>
<p>Boas vindas à semana de pré-work para o Bootcamp em React.js 😁</p>
`

//// Minha Solução
// const link = document.querySelector('[data-js="link"]')
// link.addEventListener('click', () => {
//   const a = document.querySelector('[data-js="app"]')
//   if (a.classList.contains('hide')) {
//     link.innerHTML = `<h3>Esconder</h3>`
//     a.classList.remove('hide')
//   } else {
//     link.innerHTML = `<h3>Mostrar</h3>
//     <br>
//     <br>
//     <br>
//     <br>
//     <br>
//     <br>
//     <a href="https://github.com/SallesCosta" target="_blank" class="button">
//     <span><i class="fa fa-github" aria-hidden="true"></i> Github</span></a>
//     <p>uma estrelinha pra um dev que está começando???</p>
//     <p>valeu!!!</p>`
//     a.classList.add('hide')
//   }
// }, false)

//// Solucao 1 do professor
// const link = document.querySelector('[data-js="link"]')
// link.addEventListener('click', (e) => {
//   e.preventDefault()
//   // console.log(app)  //esse console esta OK
//   const display = app.style.display
//   app.style.display = display === 'none' ? 'block' : 'none'
// })



//// Solução 2 do professor
//  const link = document.querySelector('[data-js="link"]')
// link.addEventListener('click', (e) => {
//   e.preventDefault()
//   app.classList.toggle('hide')
//   e.target.textConten = e.target.textConten === 'Esconder'
//   ? 'Exibir'
//   : 'Esconder'
// })
//esse toggle (alternador) fará o seguinte: se houver a classe 'hide' ele vai remover..
//e se nao houver ele vai adicionar a classe 'hide'






































