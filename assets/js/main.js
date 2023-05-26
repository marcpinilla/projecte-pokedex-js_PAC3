let pokemonWrapper;
const pokemonList = 200;

window.onload = inicio;

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function inicio() {
  pokemonWrapper = document.getElementById("pokemon__list");
  // window.addEventListener("click",printPokemonList);
  printPokemonList();
}

function printPokemonList(){
  pokemonWrapper.innerHTML = "";
  getPokemonList(getRandom(1,pokemonList));
  getPokemonList(getRandom(1,pokemonList));
  getPokemonList(getRandom(1,pokemonList));
  getPokemonList(getRandom(1,pokemonList));
  getPokemonList(getRandom(1,pokemonList));
  getPokemonList(getRandom(1,pokemonList));
  getPokemonList(getRandom(1,pokemonList));
  getPokemonList(getRandom(1,pokemonList));
  getPokemonList(getRandom(1,pokemonList));
  getPokemonList(getRandom(1,pokemonList));
  getPokemonList(getRandom(1,pokemonList));
  getPokemonList(getRandom(1,pokemonList));
}

function getPokemonList(id){
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  .then(x => x.json())
  .then(function(pokemon){
    // console.dir(data);

    let abs = pokemon.types;
    let types = [];
    abs.forEach(el => {
      // console.dir(el.type.name);
      types += '' + el.type.name;
    });

    let randomid = pokemon.id;
    let randomImgDefault = pokemon.sprites.other.dream_world.front_default;
    let randomName = pokemon.name;
    let randomImgDefaultback = pokemon.sprites.back_default;
    let randomImgFrontshiny = pokemon.sprites.front_shiny;
    let randomType = types;
    let randomAttack = pokemon.stats[1].base_stat;
    let randomDefending = pokemon.stats[2].base_stat;

    if(randomid && randomImgDefault && randomName && randomImgDefaultback && randomImgFrontshiny && randomType && randomAttack && randomDefending)
    {
        pokemonItem(randomid, randomImgDefault, randomName, randomImgDefaultback, randomImgFrontshiny, randomType, randomAttack, randomDefending);
    }
  });
}

function pokemonItem(randomid, randomImgDefault, randomName, randomImgDefaultback, randomImgFrontshiny, randomType, randomAttack, randomDefending) {
  let template = `<article id="${randomid}" class="pokemon__item card">
  <div class="card__wrapper">
      <div class="card__face card__face--front bg">
          <figure>
              <img class="pokemon__image--front_default" src="${randomImgDefault}" alt="">
              <figcaption class="text-center">
                  <h3 class="pokemon__name">${randomName}</h3>
              </figcaption>
          </figure>
      </div>
      <div class="card__face card__face--back bg">
          <div class="pokemon__more__image">
              <figure>
                  <img class="pokemon__image--back_default" src="${randomImgDefaultback}" alt="">
              </figure>
              <figure>
                  <img class="pokemon__image--front_shiny" src="${randomImgFrontshiny}" alt="">
              </figure>
          </div>
          <div class="pokemon__info text-center">
              <p class="pokemon__type">
                  Tipus <br>
                  <span class="pokemon__tipus--result fw-700">${randomType}</span>
              </p>
              <p class="pokemon__atac">
                  Atac <br>
                  <span class="pokemon__atac--result fw-700">${randomAttack}</span>
              </p>
              <p class="pokemon__defensa">
                  Defensa <br>
                  <span class="pokemon__defensa--result fw-700">${randomDefending}</span>
              </p>
          </div>
      </div>
  </div>`;
  pokemonWrapper.innerHTML += template;
}

setTimeout(function(){
  var cards = document.querySelectorAll(".card__wrapper");
    cards.forEach((card) => {
      card.addEventListener("click", function () {  
      card.classList.toggle("is-flipped");
    });
  });
}, 1000);