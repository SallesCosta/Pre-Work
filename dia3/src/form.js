function c(x) {
  console.log(x)
}

function $(x) {
  return document.querySelector(`[data-js='${x}']`)
}

function $$(x) {
  return document.querySelectorAll(`[data-js='${x}']`)
}



// // Exercício 1
// const inputName = $('username')
// const dontChang = ['da', 'das', 'de', 'do', 'dos']
// inputName.addEventListener('input', (e) => {
//   const valueAsArray = e.target.value.split(' ')
//   c(valueAsArray)
//   e.target.value = valueAsArray.map((word) => {
//     return dontChang.includes(word.toLowerCase())
//     ? word.toLowerCase()
//     : fixCase(word)
//   }).join(' ')
// })
// function fixCase(word) {
//   return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
// }

// Exercício 2
// const form = document.querySelector('[data-js="form"]')
const form = $('form')
const select = document.createElement('select')
const colors = ['#6B7280', '#EF4444', '#F59E0B', '#10B981', '#3B82F6', '#6366F1', '#8B5CF6', '#EC4899']

// const colorsContainer = $('div')
// colorsContainer.style.display = 'flex'

colors.forEach(color => {
  const option = document.createElement('option')
  option.value=color
  option.textConten = color
  select.appendChild(option)
})

// select.addEventListener('change', (e)=>{
//   colorsContainer.innerHTML = ''
//   Array.from(e.target.selectedOptions).map(option =>{
//     const div = document.createElement('div')
//     div.style.width = '100px'
//     div.style.height = '100px'
//     div.style.backgroundColor = option.value
//     colorsContainer.appendChild(div)
//   })
// })

select.setAttribute('multiple', '')
form.appendChild(select)
c(select)



// Exercício 3

// console.log (inputName)
// console.log(e.target.value)
//   const txt =  e.target.value = e.target.value.toLowerCase()   //lega
//   const txt2 = txt[0].toUpperCase()
//   console.log(txt, txt2)
// let toLowerCase = e.target.value.toLowerCase()

// const abc = "eduardo salles da costa"

// function capitalizeFirst(str) {
// const subst = str.toLowerCase().replace(/(?:^|\s)\S/g, function(a) {
//   return a.toUpperCase();
// })
// return subst
// }

// console.log(capitalizeFirst(abc))

// console.log([...e.target.selectedOptions].map(el => el.value))


// const app = document.querySelector('[data-js="app"]')

// const select = document.querySelector('[data-js="select"]')
// select.addEventListener('change', (e) => {
//   [...e.target.selectedOptions].map(el => {
//     const div = document.createElement('div')
//     const id = el.id
//     div.innerHTML = `<div style="width: 100px;height: 100px; background-color: ${id};"></div>`
//     app.appendChild(div)
//   })
// })














