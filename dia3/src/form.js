const inputName = document.querySelector('[data-js="username"]')
const dontChang = ['da', 'das', 'de', 'do', 'dos']
inputName.addEventListener('input', (e) => {
  const valueAsArray = e.target.value.split(' ')
  console.log(valueAsArray)
  e.target.value = valueAsArray.map((word) => {
    return dontChang.includes(word.toLowerCase())
    ? word.toLowerCase()
    : fixCase(word)
  }).join(' ')
})
function fixCase(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
}
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

// const mcolor = document.querySelector('[data-js="mcolor"]')
// mcolor.addEventListener('change', (e) => {
//   [...e.target.selectedOptions].map(el => {
//     const div = document.createElement('div')
//     const id = el.id
//     div.innerHTML = `<div style="width: 100px;height: 100px; background-color: ${id};"></div>`
//     app.appendChild(div)
//   })
// })

