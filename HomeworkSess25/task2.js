const pokemon = [
  { name: "Pikachu", CP: 320 },
  { name: "Charizard", CP: 900 },
  { name: "Bulbasaur", CP: 450 },
  { name: "Blastoise", CP: 1200 },
];

const strongPokemon = pokemon.filter((p) => p.CP >= 500);

console.log(strongPokemon);
