let getPokemonListUrl = "https://pokeapi.co/api/v2/pokemon?limit=12?random=true";

function getPokemonList() {
  fetch(getPokemonListUrl)
    .then((x) => x.json())
    .then((pokemons) => {
      // console.dir(pokemons.results);

      pokemons.results.forEach((pokemon) => {
        fetch(pokemon.url)
          .then((x) => x.json())
          .then((pokemon) => {
            console.dir(pokemon);

            let abs = pokemon.types;
            let types = [];
            abs.forEach(el => {
              console.dir(el.type.name);
              types += ' ' + el.type.name;
            });

            const out = document.querySelector("#cards"); // seleccionar el body y guardar-lo en una variable
            const temp = document.getElementById("template"); // seleccionar el template i guardar-lo en una variable
            const clonedTemplate = temp.content.cloneNode(true); // clonar el template

            let card = clonedTemplate.querySelector(".pokemon__item");
            let randomImgDefault = clonedTemplate.querySelector(".pokemon__image--front_default");
            let randomName = clonedTemplate.querySelector(".pokemon__name");
            let randomImgDefaultback = clonedTemplate.querySelector(".pokemon__image--back_default");
            let randomImgFrontshiny = clonedTemplate.querySelector(".pokemon__image--front_shiny");
            let randomType = clonedTemplate.querySelector(".pokemon__tipus--result");
            let randomAttack = clonedTemplate.querySelector(".pokemon__atac--result");
            let randomDefending = clonedTemplate.querySelector(".pokemon__defensa--result");

            card.setAttribute("id", pokemon.id); 
            randomName.textContent = pokemon.name;
            // randomImgDefault.setAttribute("src", pokemon.sprites.other.dream_world.front_default);
            randomImgDefault.setAttribute("src", pokemon.sprites.other.dream_world.front_default);
            randomImgDefaultback.setAttribute("src", pokemon.sprites.back_default);
            randomImgFrontshiny.setAttribute("src", pokemon.sprites.front_shiny);
            randomType.textContent = types;
            randomAttack.textContent = pokemon.stats[1].base_stat;
            randomDefending.textContent = pokemon.stats[2].base_stat;
            

            out.appendChild(clonedTemplate); // afegeix el clon amb tota la informació al section id="cards"

          });
      });
  });
}

getPokemonList();

setTimeout(function(){
  var cards = document.querySelectorAll(".card__wrapper");
    cards.forEach((card) => {
      card.addEventListener("click", function () {  
      card.classList.toggle("is-flipped");
    });
  });
}, 1000);


