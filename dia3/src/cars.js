function c(x) {
  console.log(x)
}

function $(x) {
  return document.querySelector(`[data-js='${x}']`)
}

const form = $('cars-form')
const table = $('table')

const getFormElement = (event) => (elementName) => {
  return event.target.elements[elementName]
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const getElement = getFormElement(e)
  const image = getElement('image')
  const brandModel = getElement('brand-model')
  const year = getElement('year')
  const plate = getElement('plate')
  const color = getElement('color')

  const elements = ['image', 'brand-model', 'year', 'plate', 'color']

  const tr = document.createElement('tr')
  elements.forEach(element =>{
    const td = document.createElement('td')
    td.textContent = element.value
    tr.appendChild(td )
  })
  table.appendChild(tr)
})






// fetch('http://example.com/movies.json')
//   .then(response => response.json())
//   .then(data => console.log(data));

// fetch()










