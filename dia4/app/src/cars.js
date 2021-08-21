function c(x) { console.log(x) } function $(x) { return document.querySelector(`[data-js='${x}']`) }

 const url = 'http://localhost:3333/cars'
const form = $('cars-form')
const table = $('table')

const getFormElement = (event) => (elementName) => {
  return event.target.elements[elementName]
}

const elementsTypes = {
  image: createImage,
  text: createText,
  color: createColor
}

function createImage(value) {
  const td = document.createElement('td')
  const img = document.createElement('img')
  img.src = value
  img.width = 100
  td.appendChild(img)
  return td
}

function createText(value) {
  const td = document.createElement('td')
  td.textContent = value
  return td
}

function createColor(value) {
  const td = document.createElement('td')
  const div = document.createElement('div')
  div.style.width = '100px'
  div.style.height = '100px'
  div.style.background = value
  td.appendChild(div)
  return td

}


form.addEventListener('submit', (e) => {
  e.preventDefault()
  const getElement = getFormElement(e)

  const elements = [
    { type: 'image', value: getElement('image').value },
    { type: 'text', value: getElement('brand-model').value },
    { type: 'text', value: getElement('year').value },
    { type: 'text', value: getElement('plate').value },
    { type: 'color', value: getElement('color').value }
  ]

  const tr = document.createElement('tr')
  elements.forEach(element => {
    const td = elementsTypes[element.type](element.value)
    tr.appendChild(td)
  })
  table.appendChild(tr)

  e.target.reset()
  image.focus()
})

function createTableRow(){
  const tr = document.createElement('tr')
}

async function main () {
    const result = await fetch(url)
    .then(r => r.json())
    .catch(e => ({ error: true, message: e.message}))
    
    if(result.error) {
      c('Erro ao buscar carro:', result.message)
      return
    }
}

result.forEach(car => {
  car.image
  car.bradModel
  car.year
  car.plate
  car.color
})

main()








  