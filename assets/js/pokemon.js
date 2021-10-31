class Pokemon {
   constructor ({name, id, types, height, weight, abilities, sprites}) 
   {
      this._name = name
      this._id = id
      this._types = types
      this._height = height
      this._weight = weight
      this._abilities = abilities
      this._sprites = sprites
   }

   get name() {
      return this._capitalize(this._name)
   }

   get id() {
      return this._id
   }

   get types() {
      return this._typesFormat(this._types)
   }

   get height() {
      return `${this._height/10}m`
   }

   get weight() {
      return `${this._weight/10}Kg`
   }

   get abilities() {
      return this._abilitiesFormat(this._abilities)
   }

   get image() {
      return this._sprites.front_default
   }

   _capitalize(value){
      return `${value.charAt(0).toUpperCase()}${value.slice(1)}`
   }

   _abilitiesFormat(abilities) {
      return abilities.map(item => ` ${this._capitalize(item.ability.name)}`)
   }

   _typesFormat(types){
      return types.map(item => ` ${this._capitalize(item.type.name)}` )
   }
}