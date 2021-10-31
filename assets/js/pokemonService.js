class PokemonService {
   constructor() {
      this._baseUrl = 'https://pokeapi.co/api/v2/pokemon'
   }

   getPokemon(name) {
      return fetch(`${this._baseUrl}/${name}`)
      .then(response => response.json())
      .then(data => data)
   }

   getList() {
      return fetch(`${this._baseUrl}?limit=898`)
      .then(response => response.json())
      .then(data => data)
   }
}
