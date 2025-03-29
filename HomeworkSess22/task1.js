function compareAttack(pokemon1, attack1, pokemon2, attack2) {
  console.log(pokemon1, attack1, pokemon2, attack2);
  if (attack1 > attack2) {
    console.log(`${pokemon1} is stronger`);
  } else if (attack2 > attack1) {
    console.log(`${pokemon2} is stronger`);
  } else {
    console.log(`${pokemon1} and ${pokemon2} Power are equal `);
  }
}

compareAttack("Pikachu", 85, "Charizard", 84);
