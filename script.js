
fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
  .then(res => res.json())
  .then(data => renderRestaurants(data))

function renderRestaurants(restaurantes) {
  const container = document.querySelector('.restaurants')

  restaurantes.forEach(r => {
    container.innerHTML += `
      <div class="restaurant-card">
        <img src="${r.capa}" />
        <h3>${r.titulo}</h3>
        <p>${r.descricao}</p>
        <button class="buy-btn" data-id="${r.id}">Comprar</button>
      </div>
    `
  })

  bindButtons(restaurantes)
}

function bindButtons(data) {
  document.querySelectorAll('.buy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = data.find(r => r.id == btn.dataset.id)
      openModal(item)
    })
  })
}

function openModal(item) {
  document.querySelector('.modal-content').innerHTML = `
    <img src="${item.capa}" />
    <h2>${item.titulo}</h2>
    <p>${item.descricao}</p>
    <button>Adicionar ao carrinho</button>
  `

  document.querySelector('.modal-overlay').classList.add('active')
}

document.querySelector('.close-modal').addEventListener('click', () => {
  document.querySelector('.modal-overlay').classList.remove('active')
})
