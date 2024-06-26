const pokemon = require('./data.js')
const game = {
    party: [],
    gyms: [
        { location: "Pewter City", completed: false, difficulty: 1 },
        { location: "Cerulean City", completed: false, difficulty: 2 },
        { location: "Vermilion City", completed: false, difficulty: 3 },
        { location: "Celadon City", completed: false, difficulty: 4 },
        { location: "Fuchsia City", completed: false, difficulty: 5 },
        { location: "Saffron City", completed: false, difficulty: 6 },
        { location: "Cinnabar Island", completed: false, difficulty: 7 },
        { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
        { name: "potion", quantity: 4 },
        { name: "pokeball", quantity: 8 },
        { name: "rare candy", quantity: 99 },
    ],
}

/*
Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?


Solve Exercise 3 here:
*/

game.difficulty = 'Hard';

/*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?


Solve Exercise 4 here:
*/

for (let entry of pokemon) {
    if (entry.starter === true && entry.type === 'fire')
        game.party.push(entry);
}

/*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?


Solve Exercise 5 here:
*/

for (let entry of pokemon) {
    if (entry.starter === false && entry.type === 'water' && entry.hp > 100)
        game.party.push(entry);

    if (entry.starter === false && entry.type === 'electric' && entry.hp < 30)
        game.party.push(entry);
    
    if (entry.starter === false && entry.type === 'rock' && entry.hp === 40)
        game.party.push(entry);
}

/*
Exercise 6
1. Arrange the Pokémon in `game.party` by their HP. The one with the highest HP should come first.
2. You'll need to use the `.sort()` method. How does the compare function work in sorting numbers?


Solve Exercise 6 here:
*/

game.party.sort((a, b) => {
    return b.hp - a.hp;
})

/*
Exercise 7
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.


Solve Exercise 7 here:
*/

// // First attempt at exercise
// for (let easyGyms of game.gyms) {
//     if (easyGyms.difficulty < 3)
//         easyGyms.completed = true;
// }

// Changed to method of game obj
game.completeGymByDiff = (diff) => {
  for (let gym of game.gyms) {
    if (gym.completed === false && gym.difficulty < diff)
        gym.completed = true;
  }
}

game.completeGymByDiff(3);

/*
Exercise 8
1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
2. How would you replace the current starter Pokémon in your party with its evolved form?

Hint: 
  - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
  - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
  - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
  - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu

More Hints: The existing starter Pokemon will be *replaced* in your party with the Pokemon it evolved into. Remember that you're working with an array of objects - what array method is ideal for replacing one element with another? 

Solve Exercise 8 here:
*/

game.party.splice(2, 1, pokemon[4])

/*
Exercise 9
1. Print the name of each Pokémon in your party.
2. Consider using a loop or an array method to access each Pokémon's name.

Solve Exercise 9 here:
*/

const printPartyNames = () => {
  let partyNames = []
  for (let i = 0; i < game.party.length; i++) {
      partyNames.push(game.party[i].name)
  }
  console.log('Current Party: \n' + partyNames.join(', '));
}

printPartyNames();

/*
Exercise 10
1. Can you print out all the starter Pokémon from the `pokemon` array?
2. Think about how you can identify a starter Pokémon and then log their names.


Solve Exercise 10 here:
*/

let starterPokemon = []
for (let entry of pokemon) {
  if (entry.starter === true)
      starterPokemon.push(entry.name);
}
console.log('Starter Pokemon: \n' + starterPokemon.join(', '));

/*
Exercise 11
1. Add a method called `catchPokemon` to the `game` object. This method should:
  - Accept an object as a parameter called `pokemonObj`
  - Add the `pokemonObj` to the `game.party` array.
  - not return anything

After writing this method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.

Solve Exercise 11 here:
*/

game.catchPokemon = pokemonObj => {
  game.party.push(pokemonObj);
}

game.catchPokemon(pokemon[146]);
// printPartyNames();

/*
Exercise 12
1. Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify it so that it also decreases the number of pokeballs in your inventory each time you catch a Pokémon.
2. How will you find and update the quantity of pokeballs in the `game.items` array?

Tips:
For this exercise, it's okay to have a negative number of pokeballs.
After updating the method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.
Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 12 here:
*/

game.catchPokemon = pokemonObj => {
  game.party.push(pokemonObj);
  for (let item of game.items) {
    if (item.name === 'pokeball')
      item.quantity--;
  }
}

game.catchPokemon(pokemon[62]);
// printPartyNames();
console.log(game.items[1].name + ': ' + game.items[1].quantity);

/*
Exercise 13
1. Similar to Exercise 7, now complete gyms with a difficulty below 6. How will you approach this?
 (change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 13 here:
*/

// // First attempt at exercise, changed to method of game obj
// for (let mediumGyms of game.gyms) {
//   if (mediumGyms.completed === false && mediumGyms.difficulty < 6)
//       mediumGyms.completed = true;
// }

// Using method of game created on line 95
game.completeGymByDiff(6);

/*
Exercise 14
1. Create a `gymStatus` method in `game` to tally completed and incomplete gyms.
2. How will you iterate through the `gyms` array and update the tally? Remember to log the final tally.

This method should:
  - Not accept any arguments.
  - Initially create a constant `gymTally`, which is an object that has two 
    properties: `completed` and `incomplete`, both of which are initially set to 0.
  - Iterate through the objects in the `game.gyms` array and update the 
    properties on `gymTally` as follows: 
    - `completed` should count how many gyms in the array have a value of `true` 
      for their `completed` property. 
    - `incomplete` should count how many gyms in the array have a value of 
      `false` for their `completed` property.
  - Log the value of `gymTally`.
  - The method should not return anything.

For example, if five gym objects have a value of `true` on their `completed` property and three gym objects have a value of `false` on their `completed` property, the logged value would be: `{ completed: 5, incomplete: 3 }`.

Solve Exercise 14 here:
*/

game.gymStatus = () => {
  const gymTally = {
    completed: 0,
    incomplete: 0,
  }
  for (let gym of game.gyms) {
    if (gym.completed === true)
      gymTally.completed ++;
    else
      gymTally.incomplete ++;
  }
  console.log('>> Gym Status <<\n' + `Completed: ${gymTally.completed}\nIncomplete: ${gymTally.incomplete}`);
}

game.gymStatus();

/*
Exercise 15
1. Add a `partyCount` method to `game` that counts the number of Pokémon in your party.

This method should:
  - Not accept any arguments.
  - Count the number of Pokemon in the party.
  - return the found number of Pokemon in the party.

Solve Exercise 15 here:
*/

game.partyCount = () => {
  let count = 0;
  for (let poke of game.party) {
    count++;
  }
  return count;
}

console.log('There are currently ' + game.partyCount() + ' pokemon in your party.');

/*
Exercise 16
1. Now, complete gyms with a difficulty below 8. Reflect on how this is similar to or different from the previous gym exercises.
(change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 16 here:
*/

game.completeGymByDiff(8);
// game.gymStatus();

/*
Exercise 17
1. Log the entire `game` object to the console. Take a moment to review the changes you've made throughout the exercises.


Solve Exercise 17 here:
*/

console.log(game);

// >> LEVEL UP << //
/*
Exercise 18
Add a new property to the `game` object called `collection` and initialize its value to an empty array.

Copy the `catchPokemon` method you wrote in Exercise Twelve and paste it below. Modify it so that:
  - Ensure that no more than six Pokemon can be in the party at any time. 
    Excess Pokemon should be placed in the `game.collection` array.
  - It's up to you how to distribute Pokemon in a situation where more than six 
    would be placed into the `game.party` array.

Again, for this exercise, it's okay to have a negative number of pokeballs.

After updating the method, use it by calling it and passing in a pokemon object of your choice from the `pokemon` data to catch it.

Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 18 here:
*/

game.collection = [];

game.catchPokemon = pokemonObj => {
  console.log(`You caught ${pokemonObj.name} successfully!`);
  if (game.partyCount() === 6) {
    game.collection.push(pokemonObj);
    console.log(`${pokemonObj.name} was sent to Bill's PC.`);
  }
  else {
    game.party.push(pokemonObj);
  }
  
  for (let item of game.items) {
    if (item.name === 'pokeball')
      item.quantity--;
  }
}

game.catchPokemon(pokemon[65]);
// console.log(game.items);
// console.log(game);

/*
Exercise 19
Copy the `catchPokemon` method that you just wrote above, and paste it below. The time has come to make it so that we cannot catch a Pokemon when we do not have any pokeballs to catch it with. 

Modify the method so that if there are no pokeballs a message will be displayed that there are not enough pokeballs to catch the desired Pokemon.

Also, ensure that the Pokemon isn't added to the `game.party` or the `game.collection`.

Solve Exercise 19 here:
*/

game.items[1].quantity = 0;

game.catchPokemon = pokemonObj => {
  if (game.items[1].quantity > 1) {
    game.items[1].quantity--;
    console.log(`You caught ${pokemonObj.name} successfully!`);
    if (game.partyCount() === 6) {
      game.collection.push(pokemonObj);
      console.log(`${pokemonObj.name} was sent to Bill's PC.`);
    }
    else
      game.party.push(pokemonObj);
  }
  else
    console.log(`There are not enough pokeballs to catch ${pokemonObj.name}.`);
}

game.catchPokemon(pokemon[76]);
// console.log(game.items);
// console.log(game);

/*
Exercise 20
Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify is so that you can just pass in the name of a Pokemon instead of an entire object, and the method will look up the Pokemon from the data set for you.

The string passed in should be allowed to be any case (for example, if the string 'PiKacHU' is passed to the function, it should match to 'Pikachu' in the data set). 

If there is not a match, then return a string noting that the selected Pokemon does not exist. Ensure you do not decrement the pokeball count if an invalid Pokemon name is passed in, and also ensure that the Pokemon isn't added to the `game.party` or the `game.collection`.

Solve Exercise 20 here:
*/

game.items[1].quantity = 1;

game.catchPokemon = pokemonName => {
  let caughtPokemon;
  let foundPokemon = false;
  let nameInput = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1).toLowerCase();

  for (let entry of pokemon) {
    if (entry.name === nameInput) {
      caughtPokemon = entry;
      foundPokemon = true;
    }
  }

  if (foundPokemon === false) {
    console.log(`Selected pokemon (${nameInput}) does not exist.`);
  }
  else if (game.items[1].quantity > 0) {
    game.items[1].quantity--;
    console.log(`You caught ${caughtPokemon.name} successfully!`);
    if (game.partyCount() === 6) {
      game.collection.push(caughtPokemon);
      console.log(`${caughtPokemon.name} was sent to Bill's PC.`);
    }
    else
      game.party.push(caughtPokemon);
  }
  else
    console.log(`There are not enough pokeballs to catch ${caughtPokemon.name}.`);
}

game.catchPokemon('seAdRa');
// console.log(game.items);
// console.log(game);

/*
Exercise 21
Dynamically construct an object with the existing `pokemon` data sorted by the different pokemon types. The object will have this structure:

{
  grass: [
    { number: 1, name: 'Bulbasaur', type: 'grass', hp: 45, starter: true },
    { number: 2, name: 'Ivysaur', type: 'grass', hp: 60, starter: false },
    { number: 3, name: 'Venusaur', type: 'grass', hp: 80, starter: false },
    * more grass type Pokemon objects...
  ],
  fire: [
    { number: 4, name: 'Charmander', type: 'fire', hp: 39, starter: true },
    * more fire type Pokemon objects...
  ],
  water: [
    * water type Pokemon objects...
  ],
  * etc... until there is an array for every Pokemon type!
}

Log the object when it's constructed.

Solve Exercise 21 here:
*/

const pokemonSortedByType = {
  // Method added to count how many pokemon have been sorted to each type and display result
  typeCount() {
    console.log('>> This is the amount of pokemon in each sorted type <<');
    for (key in pokemonSortedByType) {
      if (Array.isArray(pokemonSortedByType[key])) {
        let category = key.charAt(0).toUpperCase() + key.slice(1);
        let count = 0;
        for (entry in pokemonSortedByType[key])
          count++;

        console.log(`${category}: ${count}`);
      }
    }
  }
};

for (let entry of pokemon) {
  if (`${entry.type}` in pokemonSortedByType)
    pokemonSortedByType[entry.type].push(entry);
  else {
    pokemonSortedByType[entry.type] = [];
    pokemonSortedByType[entry.type].push(entry);
  }
}

// // Testing method to determine how many pokemon are in each type
// pokemonSortedByType.typeCount();

console.log(pokemonSortedByType);



// >> GAME TEST AT END <<
console.log(game);
console.dir(pokemon, { maxArrayLength: null })
