const pokemonSection = document.getElementById('pokemon-section')
console.log(pokemonSection)

fetch('https://pokeapi.co/api/v2/pokemon?limit=800&offset=0').then(response =>
  response.json().then(data => {
    let pokemons = data.results
    pokemons.forEach(pokemon => {
      fetch(pokemon.url)
        .then(res => res.json())
        .then(pokemonData => {
          let img = document.createElement('img')
          let li = document.createElement('li')

          img.src = pokemonData.sprites.other.dream_world.front_default
          li.textContent = pokemon.name

          pokemonSection.appendChild(li)
          pokemonSection.appendChild(img)
        })
    })
  })
)

console.log('Hello World')
