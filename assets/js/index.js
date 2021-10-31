const input = document.getElementById('input');
const list = document.getElementById('list-options');



function setValues(pokemon) {
   const pokeName = document.getElementById('pokeName');
   const pokeImage = document.getElementById('pokeImage');
   const pokeId = document.getElementById('pokeId');
   const pokeTypes = document.getElementById('pokeTypes');
   const pokeHeight = document.getElementById('pokeHeight');
   const pokeWeight = document.getElementById('pokeWeight');
   const pokeAbilities = document.getElementById('pokeAbilities');

   pokeName.innerHTML = pokemon ? pokemon.name : '-'
   pokeImage.setAttribute('src', pokemon ? pokemon.image : 'https://via.placeholder.com/150x150');
   pokeId.innerHTML = pokemon ? pokemon.id : '-'
   pokeTypes.innerHTML = pokemon ? pokemon.types : '-'
   pokeHeight.innerHTML = pokemon ? pokemon.height : '-'
   pokeWeight.innerHTML = pokemon ? pokemon.weight : '-'
   pokeAbilities.innerHTML = pokemon ? pokemon.abilities : '-'
}


function getValues(value) {
   const service = new PokemonService();

   service.getPokemon(value).then(function(response) {
      const {name, id, types, height, weight, abilities, sprites} = response;
     
      const pokemon = new Pokemon (
         {name, id, types, height, weight, abilities, sprites} 
      )
      setValues(pokemon)
   })

}


function setOptions(options) {

   options.map(item => {
      let listOption = document.createElement('option');
      let optionText = document.createTextNode(item.name);
      listOption.appendChild(optionText);

      console.log(listOption);
      list.appendChild(listOption);
   })
}


function loadOptions() {
   const service = new PokemonService()

   service.getList().then(response => {
      const { results } = response
      /*setOptions(results)*/
      console.log(results)

      setOptions(results)
   })
}


input.addEventListener('change', function(event) {
   const value = event.target.value
   value ? getValues(value) : setValues()
});

loadOptions();

