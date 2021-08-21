import './style.css'
import { get, post, del } from "./http"

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

function createImage(data) {
  const td = document.createElement('td')
  const img = document.createElement('img')
  img.src = data.src
  img.alt = data.alt
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

form.addEventListener('submit', async (e) => {
  e.preventDefault()
  const getElement = getFormElement(e)

  const data = {   // esses são os dados que vem da api 
    image: getElement('image').value,
    brandModel: getElement('brand-model').value,
    year: getElement('year').value,
    plate: getElement('plate').value,
    color: getElement('color').value
  }
 
  const result = await post(url, data)

  if (result.error) {
    c('deu erro na hora de cadastrar', result.message)
    return
  }
  const noContent = document.querySelector('[data-js="no-content"]')
  table.removeChild(noContent) 
  createTableRow(data)

  e.target.reset()
  image.focus()
})

function createTableRow(data) {
  const elements = [
    { type: 'image', value: { src: data.img, alt: data.bradModel } },
    { type: 'text', value: data.bradModel },
    { type: 'text', value: data.year },
    { type: 'text', value: data.plate },
    { type: 'color', value: data.color }
  ]

  const tr = document.createElement('tr')
  tr.dataset.plate = data.plate

  elements.forEach(element => {
    const td = elementsTypes[element.type](element.value)
    tr.appendChild(td)
  })

  
  const button = document.createElement('button')
  button.textContent = 'Excluir'
  button.dataset.plate = data.plate
  
  button.document.addEventListener('click', handleDelete)
  tr.appendChild(button)
  table.appendChild(tr)
}

async function handleDelete(e) {
  const button = e.target
  const plate = button.dataset.plate

    const result = await del(url, { plate })
 
  if (result.error) {
    console.log('erro ao deletar', result.elements)
    return
  }

  const tr = document.querySelector(`tr[data-plate="${plate} "]`)
  table.removeChild(tr)
  button.removeElementListener('click', handleDelete)
  const allTrs = document.querySelector('tr')
  if (!allTrs) {
    createTableRow()
  }
}

function createNoCarRow() {
  const tr = document.createElement('tr')
  const td = document.createElement('td')
  const thsLength = document.querySelectorAll('table th').length
  td.setAttribute('colspan', thsLength)
  td.textContent = 'Nenhum carro encontrado'


  tr.dataset.js = 'no-content'  // tr.setAttribute('data-js', 'no-content') //dataset.xx é a mesma coisa que setAttribute 
  tr.appendChild(td)
  table.appendChild(tr)
}

async function main() {
  const result = await get(url)

  if (result.error) {
    c('Erro ao buscar carro:', result.message)
    return
  }

  if (result.length === 0) {
    createNoCarRow()
    return
  }

  result.forEach(createTableRow)
}

main()








