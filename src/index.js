function fetchPokemonById(pokemonId) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
    .then(res=>res.json())
}

fetchPokemonById(10).then(pokemon=>{
    document.body.textContent = pokemon.name
})

/* <div class="card">
  <div class="card-img-top">
    <img src="" alt="">
  </div>
  <div class="card-body">
    <h2 class="card-title">Ім'я: </h2>
    <p class="card-text">Вага: </p>
    <p class="card-text">Зріст: </p>

    <p class="card-text"><b>Вміння</b></p>
    <ul class="list-group"></ul>   
      <li class="list-group-item"></li>    
    </ul>
  </div>
</div> */