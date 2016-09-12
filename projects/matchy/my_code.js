var monkey = {};

monkey.species = "Monkey";
monkey["name"] = "Mr.Bananas";
monkey.noises = [];

monkey['noises'].unshift("Oooh ooo"); 
monkey['noises'].push("Aahh"); 
monkey['noises'].push("Eeehh"); 

// console.log(monkey);
// console.log(monkey['noises'].length);
// console.log(monkey.noises[monkey['noises'].length - 1]);
// console.log(monkey.noises);

var animals = [];

var duck = { species: 'Duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] };
var elephant = { species: 'Elephant', name: 'Trunky', noises: ['brrrr', 'whaaa', 'wonnkk'] };
var lion = { species: 'Lion', name: 'Mufasa', noises: ['roar', 'growl', 'moann'] };

animals.push(monkey);
animals.push(duck);
animals.push(elephant);
animals.push(lion);

// Using an Array as a list of Friends
var friends = [];

// Function creates a random number between two numbers
function randNum(min, max) {
<<<<<<< HEAD
  return Math.floor(Math.random() * (max - min + 1) + min);
=======
  return Math.floor(Math.random() * (max - min) + min);
>>>>>>> dffa6bf1be9695855b226a1b7c4c8b9ea4d7fa2f
}

// Assigns random number between 0 and (Animals Array length)
var n = randNum(0, animals.length - 1);

// Adds a random animal's name to Friends Array
friends.push(animals[n].name);

// Crates a key/value pair 'friends', with random friend
monkey.friends = friends;

// Search for Animal, returns object if exists
function search(name) {
    
    var allAnimals = [];    // Create an empty list of allAnimals, in case of any changes outside function prior/after
    for (var x in animals) {
        allAnimals.push((animals[x].name).toLowerCase());  //Make all lowerCase to prevent errors/duplicates
    }

    let index = allAnimals.indexOf(name.toLowerCase());
    if (index !== -1) {
        return animals[index];
    } else {
        return null;
    }
}

// Edits an existing animal's properties
function edit(name, object) {
    
    for (var x in animals) {             // Loops through key/values in 'animals' object
        if (name === animals[x].name) {  //  If name equals the name property of the animal
            animals[x] = object;         // Assigns new property to existing animal
        }
    }
}

// Removes animal from the Array 'animals'
function remove(name) {
    
    for (var i = 0; i < animals.length; i++) {     // Create a for loop, ends at length of animals array
        let index = animals[i].name.indexOf(name);  // Create index, compare name of animals[i].name
        if (index !== -1) {         // If name exists, then proceed...
            animals.splice(i, 1);   // Splice from animals array at index point
        }
    }
}


// Creates animal if no animal with same name exists
function create(object) {
    
    var allAnimals = [];
    for (var x in animals) {
        allAnimals.push((animals[x].name).toLowerCase());
    }

    if (object.name.length > 0 && object.species.length > 0) {
        let index = allAnimals.indexOf((object.name).toLowerCase());
        if (index === -1) {
            animals.push(object);
        }
    }
}

