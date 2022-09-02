<<<<<<< HEAD
const { kitties } = require("./datasets/kitties");
const { puppers } = require("./datasets/puppers");
const { mods } = require("./datasets/mods");
const { cakes } = require("./datasets/cakes");
const { classrooms } = require("./datasets/classrooms");
const { breweries } = require("./datasets/breweries");
const { nationalParks } = require("./datasets/nationalParks");
const { weather } = require("./datasets/weather");
const { clubs } = require("./datasets/clubs");
const { instructors, cohorts } = require("./datasets/turing");
const { bosses, sidekicks } = require("./datasets/bosses");
const { constellations, stars } = require("./datasets/astronomy");
const { weapons, characters } = require("./datasets/ultima");
const { dinosaurs, humans, movies } = require("./datasets/dinosaurs");
const { books } = require("./datasets/books");
=======
const { kitties } = require('./datasets/kitties');
const { puppers } = require('./datasets/puppers');
const { mods } = require('./datasets/mods');
const { cakes } = require('./datasets/cakes');
const { classrooms } = require('./datasets/classrooms');
const { breweries } = require('./datasets/breweries');
const { nationalParks } = require('./datasets/nationalParks');
const { weather } = require('./datasets/weather');
const { boardGames } = require('./datasets/boardGames');
const { instructors, cohorts } = require('./datasets/turing');
const { bosses, sidekicks } = require('./datasets/bosses');
const { constellations, stars } = require('./datasets/astronomy');
const { weapons, characters } = require('./datasets/ultima');
const { dinosaurs, humans, movies } = require('./datasets/dinosaurs');

>>>>>>> 51894690c118c9e48a929301df8dbdb6f3c9018a


// SINGLE DATASETS
// =================================================================

// DATASET: kitties from ./datasets/kitties
const kittyPrompts = {
  orangePetNames(animalData) {
    // Return an array of just the names of kitties who are orange e.g.
    // ['Tiger', 'Snickers']
    const orangeKats = animalData
      .filter((animal) => animal.color === "orange")
      .map((animal) => animal.name);
    return orangeKats;

    // Annotation:
    // We are starting with an array of objects
    // we want to iterate through the array and search for all cats whose color is orange
    // when we have sucessfully filtered and found all orange cats we want to map the names of those cats
  },

  sortByAge(animalData) {
    // Sort the kitties by their age

    const catAges = animalData.sort((a, b) => b.age - a.age);
    return catAges;

    // Annotation:
    // iterate through the kitties array, create an array of all the kitties ages
    // sort the array so that the oldest cat object is first and the youngest is last
    // return all cat objects sorted
  },

  growUp(animalData) {
    // Return an array of kitties who have all grown up by 2 years e.g.
    // [{
    //   name: 'Felicia',
    //   age: 4,
    //   color: 'grey'
    // },
    // {
    //   name: 'Tiger',
    //   age: 7,
    //   color: 'orange'
    // },
    // ...etc]
    const oldCats = animalData.map((animal) => ({
      name: animal.name,
      age: animal.age + 2,
      color: animal.color,
    }));
    return oldCats;
    // Annotation:
    // iterate through the kitties array, create an array of all the kitties ages
    // sort the array so that the oldest cat object is first and the youngest is last
    // return all cat objects sorted
    // map the returned array, adding 2 to each cats age
  },
};

// PLEASE READ-----------------------
// Currently, your functions are probably using the `kitties` global import variable.
// refactor the above functions using arguments and parameters so that
// they can perform the same utility
// for the kitties or puppers datasets, depending on what arguments you send through.

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: clubs from ./datasets/clubs
const clubPrompts = {
  membersBelongingToClubs(clubs) {
    // Your function should access the clubs data through a parameter (it is being passed as an argument in the test file)
    // Create an object whose keys are the names of people, and whose values are
    // arrays that include the names of the clubs that person is a part of. e.g.
    // {
    //   Louisa: ['Drama', 'Art'],
    //   Pam: ['Drama', 'Art', 'Chess'],
    //   ...etc
    // }

    return clubs.reduce((acc, currentClub) => {
      currentClub.members.forEach(member => {
        !acc[member] ? (acc[member] = [currentClub.club])
          : acc[member].push(currentClub.club);
      });
      return acc;
    }, {});


    // const match = clubs.reduce((acc, currentClub) => {
    //   currentClub.members.forEach(member => {
    //     if(!acc[member]){
    //       acc[member] = [currentClub.club]
    //     } else {
    //       acc[member].push(currentClub.club)
    //     }
    //   })
    //   return acc
    // }, {})
    // return match

    // Annotation:
    // We are starting with an array of objects
    // we want to return an object with multiple
    // key value pairs.  The keys should be a name
    // and the corresponding values should be the
    // clubs that the key(name) is associated with
  },
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: mods from ./datasets/mods
const modPrompts = {
  studentsPerMod() {
    // Return an array of objects where the keys are mod (the number of the module)
    // and studentsPerInstructor (how many students per instructor there are for that mod) e.g.
    // [
    //   { mod: 1, studentsPerInstructor: 9 },
    //   { mod: 2, studentsPerInstructor: 11 },
    //   { mod: 3, studentsPerInstructor: 10 },
    //   { mod: 4, studentsPerInstructor: 8 }
    // ]

    const studentsPer = mods.reduce((acc, mod) => {
      let obj = {
        mod: mod.mod,
        studentsPerInstructor: mod.students / mod.instructors,
      };
      if (!acc.includes(obj)) {
        acc.push(obj);
      }
      return acc;
    }, []);
    return studentsPer;

    // const studentPer = mods.map(mod => {
    //   return {
    //     mod: mod.mod,
    //     studentsPerInstructor: mod.students / mod.instructors
    //   }
    // })
    // return studentPer;

    // Annotation:
    // Iterate over the array of objects, return the mod
    // and students per instructor as an object
    // return each of the mods in 1 array
  },
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: cakes from ./datasets/cakes
const cakePrompts = {
  stockPerCake() {
    // Return an array of objects that include just the flavor of the cake and how
    // much of that cake is in stock e.g.
    // [
    //    { flavor: 'dark chocolate', inStock: 15 },
    //    { flavor: 'yellow', inStock: 14 },
    //    ..etc
    // ]

    const flavorReturn = cakes.map((cake) => {
      return { flavor: cake.cakeFlavor, inStock: cake.inStock };
    });
    return flavorReturn;

    // Annotation:
    // cakes is an array of objects, we want to return a single array
    // with multiple objects(cake flavors: instock: # in stock)
    // thinking of a map of each object, return the object for each object
    // that we want to iterate over
  },

  onlyInStock() {
    // Return an array of only the cakes that are in stock
    // e.g.
    // [
    //   {
    //   cakeFlavor: 'dark chocolate',
    //   filling: null,
    //   frosting: 'dark chocolate ganache',
    //   toppings: ['dutch process cocoa', 'toasted sugar', 'smoked sea salt'],
    //   inStock: 15
    // },
    // {
    //   cakeFlavor: 'yellow',
    //   filling: 'citrus glaze',
    //   frosting: 'chantilly cream',
    //   toppings: ['berries', 'edible flowers'],
    //   inStock: 14
    // },
    // ..etc
    // ]

    const inStockCakes = cakes.filter((cake) => cake.inStock > 0);
    return inStockCakes;

    // Annotation:
    // iterate over each cake object and return only the cakes that are instock
    // this means we will want to use an iterator that can return an array of a different
    // size, map is out of the question, filter or forEach could be good use here
  },

  totalInventory() {
    // Return the total amount of cakes in stock e.g.
    // 59
    const total = cakes.reduce((acc, cake) => {
      acc += cake.inStock;
      return acc;
    }, 0);
    return total;

    // Annotation:
    // we want to iterate over each of the cakes and return the in stock cake
    // total number value.  Because we know that we want to return a number
    // a good iterator to use would be reduce
  },

  allToppings() {
    // Return an array of all unique toppings (no duplicates) needed to bake
    // every cake in the dataset e.g.
    // ['dutch process cocoa', 'toasted sugar', 'smoked sea salt', 'berries', ..etc]
    const topps = cakes
      .flatMap((cake) => cake.toppings)
      .reduce((acc, topping) => {
        if (!acc.includes(topping)) {
          acc.push(topping);
        }
        return acc;
      }, []);
    return topps;

    // const topps = cakes
    //     .flatMap(cake => cake.toppings)
    // const noDupes = [...new Set(topps)]
    //   return noDupes

    // Annotation:
    // here we need to iterate over each of the cakes and return all the toppings
    // from the cake- we then need to iterate over that new array to remove any
    // duplicates from the array and return that value
  },

  groceryList() {
    // I need to make a grocery list. Please give me an object where the keys are
    // each topping, and the values are the amount of that topping I need to buy e.g.
    // {
    //    'dutch process cocoa': 1,
    //    'toasted sugar': 3,
    //    'smoked sea salt': 3,
    //    'berries': 2,
    //    ...etc
    // }

    const list = cakes
      .flatMap((cake) => cake.toppings)
      .reduce((acc, topping) => {
        if (!acc[topping]) {
          acc[topping] = 1;
        } else {
          acc[topping] += 1;
        }
        return acc;
      }, {});
    return list;

    // Annotation:
    // we want to iterate over each of the toppings, if there are duplicates of a topping
    // it needs to increment up in the returned string. In the object that is returned, we
    // are assigning the key and value based on the number of times the topping appears in
    // the object
    // if the topping isnt in the array, then add it- and set its value to 1
    // if the topping is in the array, then increment the value on that specific topping +=
  },
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: classrooms from ./datasets/classrooms
const classPrompts = {
  feClassrooms() {
    // Create an array of just the front-end classrooms. e.g.
    // [
    //   { roomLetter: 'A', program: 'FE', capacity: 32 },
    //   { roomLetter: 'C', program: 'FE', capacity: 27 },
    //   { roomLetter: 'E', program: 'FE', capacity: 22 },
    //   { roomLetter: 'G', program: 'FE', capacity: 29 }
    // ]

    const findFe = classrooms.filter((classroom) => classroom.program === "FE");
    return findFe;

    // Annotation:
    // return a single array with just FE classes from the classrooms array
    // classrooms is an array that has multiple objects
    // filter through the classrooms for just the fe rooms
    // then map over the filtered array and return objects
  },

  totalCapacities() {
    // Create an object where the keys are 'feCapacity' and 'beCapacity',
    // and the values are the total capacity for all classrooms in each program e.g.
    // {
    //   feCapacity: 110,
    //   beCapacity: 96
    // }
    // let capacities = classrooms.reduce(
    //   (acc, classroom) => {
    //     if (classroom.program === "FE") {
    //       acc.feCapacity += classroom.capacity;
    //     } else {
    //       acc.beCapacity += classroom.capacity;
    //     }
    //     return acc;
    //   },
    //   {
    //     feCapacity: 0,
    //     beCapacity: 0,
    //   }
    // );
    // return capacities;

    let keyObj = {
      feCapacity: 0,
      beCapacity: 0
    }
    const seperatePrograms = classrooms.forEach((classroom) => {
      if (classroom.program === 'FE') {
        keyObj.feCapacity += classroom.capacity
      } else {
        keyObj.beCapacity += classroom.capacity
      }
    })
      return keyObj

    // Annotation:
    // iterate through the array of classes and check to see if the program is FE or BE
    // based on their program, add the capacity to the matching program
  },

  sortByCapacity() {
    // Return the array of classrooms sorted by their capacity (least capacity to greatest)

    const sortedClasses = classrooms.sort((a, b) => a.capacity - b.capacity);
    return sortedClasses;

    // Annotation:
    // iterate over all the classrooms and return a sorted array of the  classrooms
    // from smallest classrooms to largest
  },
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: books from './datasets/books

const bookPrompts = {
  removeViolence() {
    // Your function should access the books data through a parameter (it is being passed as an argument in the test file)
    // return an array of all book titles that are not horror or true crime. Eg:

    //  ['1984', 'The Great Gatsby', 'Lord of the Flies', 'Harry Potter and the Sorcerer\'s Stone',
    //   'The Hitchhiker\'s Guide to the Galaxy', 'Flowers for Algernon', 'Slaughterhouse-Five',
    //   'The Handmaid\'s Tale', 'The Metamorphosis', 'Brave New World', 'Life of Pi',
    //   'The Curious Incident of the Dog in the Night - Time', 'The Bell Jar',
    //   'Catch-22', 'Treasure Island']
    const noViolence = books
      .filter((book) => book.genre !== "Horror" && book.genre !== "True Crime")
      .map((book) => book.title);
    return noViolence;

    // Annotation:
    // iterate over the array of books- check for all books that the
    // genre is not horror or true crime
    // return all of the book names in a single array
  },
  getNewBooks() {
    // return an array of objects containing all books that were
    // published in the 90's and 00's. Inlucde the title and the year Eg:

    // [{ title: 'Harry Potter and the Sorcerer\'s Stone', year: 1997 },
    //  { title: 'Life of Pi', year: 2001 },
    //  { title: 'The Curious Incident of the Dog in the Night-Time', year: 2003 }]

    const findNewBooks = books
      .filter((book) => book.published >= 1990)
      .map((book) => {
        return {
          title: book.title,
          year: book.published,
        };
      });
    return findNewBooks;

    // Annotation:
<<<<<<< HEAD
    // iterate over the book objects and check for all books that are published in
    // 1990 or newer
    // return an object for each of those new books in a single array
  },
=======
    // Write your annotation here as a comment
  },

  getBooksByYear(books, year) {
    // return an array of objects containing all books that were
    // published after the specified year without the author or genre data. 
    // The published property should be changed to year for the returned books.
    // e.g. given 1990, return

    // [{ title: 'Harry Potter and the Sorcerer\'s Stone', year: 1997 },
    //  { title: 'Life of Pi', year: 2001 },
    //  { title: 'The Curious Incident of the Dog in the Night-Time', year: 2003 }]

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  }

>>>>>>> 51894690c118c9e48a929301df8dbdb6f3c9018a
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: weather from './datasets/weather

const weatherPrompts = {
  getAverageTemps() {
    // return an array of all the average temperatures. Eg:
    // [ 40, 40, 44.5, 43.5, 57, 35, 65.5, 62, 14, 46.5 ]

    const averageTemps = weather.map(
      (location) => (location.temperature.high + location.temperature.low) / 2
    );
    return averageTemps;

    // Annotation:
    // iterate over each location in the data set and return the average temperature for the city
    // the returned value should be an array with each individual temp
  },

  findSunnySpots() {
    // Return an array of sentences of the locations that are sunny
    // and mostly sunny. Include the location and weather type. Eg:
    // [ 'Atlanta, Georgia is sunny.',
    // 'New Orleans, Louisiana is sunny.',
    // 'Raleigh, North Carolina is mostly sunny.' ]

    // const sunnyLocations = weather
    //     .filter(location => location.type.includes('sunny'))
    //     .map(city => `${city.location} is ${city.type}.`)
    //     return sunnyLocations
    // Annotation:
    // Write your annotation here as a comment
    // starting with an array of objects, we want to return an array of cities that are sunny
    // we want our return to be in an array with an interpolated string

    const sunnyLocations = weather.reduce((acc, city) => {
      let text = `${city.location} is ${city.type}.`;
      if (city.type.includes("sunny")) {
        acc.push(text);
      }
      return acc;
    }, []);
    return sunnyLocations;
    // Annotation:
    // We can also solve this problem by using a reduce
    // you need to establish a variable for a dynamic string
    // if the city location includes sunny then push this dynamic string
    // into the initital value array
  },

  findHighestHumidity() {
    // Return the location with the highest humidity. Eg:
    // {
    //   location: 'Portland, Oregon',
    //   type: 'cloudy',
    //   humidity: 84,
    //   temperature: { high: 49, low: 38 }
    // }
    // const mostHumidCity = weather.sort((a, b) => b.humidity - a.humidity)
    //   return mostHumidCity[0]
    // Annotation:
    // we want to return the city object where the humidity is the highest
    // start by trying to sort all the objects in the array by the humimdity
    // return the city object at index 0

    const highestHumidity = weather.reduce((acc, city) => {
      if (city.humidity > acc.humidity) {
        acc = city;
      } else {
        return acc;
      }
      return acc;
    });
    return highestHumidity;
  },
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: nationalParks from ./datasets/nationalParks

const nationalParksPrompts = {
  getParkVisitList() {
    /// Return an object containing the names of which parks I need to visit
    // and the ones I have already visited eg:
    // {
    //   parksToVisit: ["Yellowstone", "Glacier", "Everglades"],
    //   parksVisited: ["Rocky Mountain", "Acadia", "Zion"]
    //}
    result = { parksToVisit: [], parksVisited: [] };
    nationalParks.forEach((park) => {
      if (park.visited) {
        result.parksVisited.push(park.name);
      } else {
        result.parksToVisit.push(park.name);
      }
    });
    return result;

    // Annotation:
    // iterate through the array of objects
    // if you havent visited one location push it into the parksTovisit array
    // if you have visited one of the locations, push it into the parks visited array
  },

  getParkInEachState() {
    // Return an array of objects where the key is the state and the value is its National Park
    // eg: [ { Colorado: 'Rocky Mountain' },
    // { Wyoming: 'Yellowstone' },
    // { Montana: 'Glacier' },
    // { Maine: 'Acadia' },
    // { Utah: 'Zion' },
    // { Florida: 'Everglades' } ]

    // const parkGuide = nationalParks.map(park => {
    //   return { [park.location]: park.name }
    //  })
    // return parkGuide;

    const parkGuide = nationalParks.reduce((acc, park) => {
      let obj = { [park.location]: park.name };
      if (!acc[park]) {
        acc.push(obj);
      }
      return acc;
    }, []);
    return parkGuide;

    // Annotation:
    // Write your annotation here as a comment
    // we want to return a single array where the length is the same length as the number of parks
    // in the array each return needs to be its own interpolated object with the location as a key
    // and the park name as the value
  },

  getParkActivities() {
    // Return an array of all the activities I can do
    // in a National Park. Make sure to exclude duplicates. eg:
    // [ 'hiking',
    //   'shoeshoing',
    //   'camping',
    //   'fishing',
    //   'boating',
    //   'watching wildlife',
    //   'cross-country skiing',
    //   'swimming',
    //   'bird watching',
    //   'canyoneering',
    //   'backpacking',
    //   'rock climbing' ]

    // const noDupes = nationalParks
    //     .flatMap(park => park.activities)
    //     .reduce((acc, activity) => {
    //       if(!acc.includes(activity)) {
    //         acc.push(activity)
    //       }
    //       return acc
    //     }, [])
    //   return noDupes

    // Annotation:
    // iterate over each object in the national parks array
    // we are looking to return all activities from every National park
    // once we have the array of all of activities we want to reduce down the array
    // and remove all the duplicate values

    const allActivities = nationalParks.flatMap((park) => park.activities);
    const noDupes = [...new Set()];
    return noDupes;
  },
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: breweries from ./datasets/breweries
const breweryPrompts = {
  getBeerCount() {
    // Return the total beer count of all beers for every brewery e.g.
    // 40

    const beersNumber = breweries
        .flatMap(brewery => brewery.beers)
        return beersNumber.length

    // Annotation:
    // iterate through the array of objects, return a value that is the length
    // of the number of beers in the array
    // go to the brewery.beers and map each beer - since there are multiple
    // brewery objects- we can use a flatMap and combine everything in one array
    // we can then return the length of the new array that contains each beer object

    // Annotation:
    // we can also solve this problem by using a reduce
    // we start by iterating over each brewery object, and checking the brewery.beers.length
    // we will add the breweries.beers.length to the acc, and return the acc
    // the initial value of the acc will be 0 since we are adding a length(number)

    const beerNumber = breweries.reduce((acc, brewery) => {
      acc += brewery.beers.length;
      return acc;
    }, 0);
    return beerNumber;
  },

  getBreweryBeerCount() {
    // Return an array of objects where each object has the name of a brewery
    // and the count of the beers that brewery has e.g.
    // [
    //  { name: 'Little Machine Brew', beerCount: 12 },
    //  { name: 'Ratio Beerworks', beerCount: 5},
    // ...etc.
    // ]

    // const breweryList = breweries
    //     .reduce((acc, brewery) => {
    //       let object = {name: brewery.name, beerCount: brewery.beers.length}
    //       if(!acc[object]) {
    //         acc.push(object)
    //       }
    //       return acc
    //       }, [])
    //       return breweryList

    // Annotation:
    // start with an array of objects, we want to return an array of objects
    // the objects returned in the array should have a name and a beer count, the beer count should be
    // equal to the brewery.beers.length
    // if the accumulator does not include the current object, then push it into the array

    const breweryList = breweries.flatMap((brewery) => {
      return {
        name: brewery.name,
        beerCount: brewery.beers.length,
      };
    });
    return breweryList;
    // Annotation:
    // flatMap through all the objects in the array-
    // for each of the breweries, return an object with the brewery name and the brewery beercount
    // by using flatmap you will have returned all the individual objects into a single array rather than 5 arrays
  },

  getSingleBreweryBeerCount(breweryName) {
    // Return a number that is the count of beers that the specified
    // brewery has e.g.
    // given 'Ratio Beerworks', return 5


    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  findHighestAbvBeer() {
    // Return the beer which has the highest ABV of all beers
    // e.g.
    // { name: 'Barrel Aged Nature\'s Sweater', type: 'Barley Wine', abv: 10.9, ibu: 40 }

    const highestABV = breweries
      .flatMap((brewery) => brewery.beers)
      .sort((a, b) => b.abv - a.abv);
    return highestABV[0];
  },
  // Annotation:
  // look to iterate over the the breweries
  // we can flatmap over the multiple objects and get a list of all beers like we have used before
  // we can then sort the list from highest abv to lowest abv
  // the highest abv should be at the position 0
  // return highest ABV[0]
};

<<<<<<< HEAD
=======

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: weather from './datasets/boardGames

const boardGamePrompts = {
  listGames(type) {
    // Return an array of just the names of the games within a specified type. 
    // e.g. given an argument of "strategy", return
    // ["Chess", "Catan", "Checkers", "Pandemic", "Battle Ship", "Azul", "Ticket to Ride"]

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  listGamesAlphabetically(type) {
    // Return an array of just the names of the games within a specified 
    // type, sorted alphabetically. 
    // e.g. given an argument of "childrens", return
    // ["Candy Land", "Connect Four", "Operation", "Trouble"]

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  findHighestRatedGamesByType(type) {
    // Return an object which is the highest rated game within the specified type.
    // e.g. given the argument of 'party', return
    // { name: 'Codenames', rating: 7.4, maxPlayers: 8 },

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  averageScoreByType(type) {
    // Return the average score for the specified type.
    // e.g. given the argument of "strategy", return 7
    // note: do not worry about rounding your result.

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  averageScoreByTypeAndPlayers(type, maximumPlayers) {
    // Return the average score of any games that match the specified type
    // and maximum number of players.
    // e.g. given the arguments of "strategy" and 2, return 6.16666666667
    // note: do not worry about rounding your result.

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  }
};






>>>>>>> 51894690c118c9e48a929301df8dbdb6f3c9018a
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DOUBLE DATASETS
// =================================================================

// DATASET: instructors, cohorts from ./datasets/turing
const turingPrompts = {
  studentsForEachInstructor() {
    // Return an array of instructors where each instructor is an object
    // with a name and the count of students in their module. e.g.
    // [
    //  { name: 'Pam', studentCount: 21 },
    //  { name: 'Robbie', studentCount: 18 }
    // ]

    const studentsPer = instructors.map((instructor) => {
      return {
        name: instructor.name,
        studentCount: cohorts.find(
          (cohort) => cohort.module === instructor.module
        ).studentCount,
      };
    });
    return studentsPer;

    // Annotation:
    // in this data set we have multiple arrays of objects we will need to
    // look at the first array of instructors(instructors mod)- and then
    // compair the first name and module to the corresponding object
    // in the cohort array.  we are looking to return an array with multiple
    // objects
  },

  studentsPerInstructor() {
    // Return an object of how many students per teacher there are in each cohort e.g.
    // {
    // cohort1806: 9,
    // cohort1804: 10.5
    // }
    // Annotation:
    // return a single object with the number of students per instructor for each of the 4 cohorts
  },

  modulesPerTeacher() {
    // Return an object where each key is an instructor name and each value is
    // an array of the modules they can teach based on their skills. e.g.:
    // {
    //     Pam: [2, 4],
    //     Brittany: [2, 4],
    //     Nathaniel: [2, 4],
    //     Robbie: [4],
    //     Leta: [2, 4],
    //     Travis: [1, 2, 3, 4],
    //     Louisa: [1, 2, 3, 4],
    //     Christie: [1, 2, 3, 4],
    //     Will: [1, 2, 3, 4]
    //   }
    /* CODE GOES HERE */
    // Annotation:
    // Write your annotation here as a comment
  },

  curriculumPerTeacher() {
    // Return an object where each key is a curriculum topic and each value is
    // an array of instructors who teach that topic e.g.:
    // {
    //   html: [ 'Travis', 'Louisa' ],
    //   css: [ 'Travis', 'Louisa' ],
    //   javascript: [ 'Travis', 'Louisa', 'Christie', 'Will' ],
    //   recursion: [ 'Pam', 'Leta' ]
    // }
    /* CODE GOES HERE */
    // Annotation:
    // Write your annotation here as a comment
  },
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: bosses, sidekicks from ./datasets/bosses
const bossPrompts = {
  bossLoyalty() {
    // Create an array of objects that each have the name of the boss and the sum
    // loyalty of all their sidekicks. e.g.:
    // [
    //   { bossName: 'Jafar', sidekickLoyalty: 3 },
    //   { bossName: 'Ursula', sidekickLoyalty: 20 },
    //   { bossName: 'Scar', sidekickLoyalty: 16 }
    // ]
    /* CODE GOES HERE */
    // Annotation:
    // Write your annotation here as a comment
  },
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: constellations, stars } from ./datasets/astronomy
const astronomyPrompts = {
  starsInConstellations() {
    // Return an array of all the star objects that appear in any of the constellations
    // listed in the constellations object e.g.
    // [
    //   { name: 'Rigel',
    //     visualMagnitude: 0.13,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 860,
    //     color: 'blue' },
    //   { name: 'Betelgeuse',
    //     visualMagnitude: 0.5,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 640,
    //     color: 'red' },
    //   {
    //     name: 'Achernar',
    //     visualMagnitude: 0.46,
    //     constellation: 'The Plow',
    //     lightYearsFromEarth: 140,
    //     color: 'blue'
    //   },
    //   {
    //     name: 'Hadar',
    //     visualMagnitude: 0.61,
    //     constellation: 'The Little Dipper',
    //     lightYearsFromEarth: 350,
    //     color: 'blue'
    //   }
    // ]
    // const result = Object.keys(constellations).forEach(key => console.log(constellations[key]))
    // let keys = Object.keys(constellations)
    // const result = stars.forEach(star => keys.filter(key => constellations[key].names.includes(star.constellation)))

    const filterStars = stars.filter(location => location.constellation === 'Orion')
    return filterStars

    // const result = keys.forEach(key => stars.filter(star => constellations[key].names.includes(star.constellation)))
    // const result = stars.filter(star => keys.forEach(key => console.log(constellations[key])))
    // console.log(result)

    // iterate over the stars array and check to see if the star constellation equals the constellation key
    // check to find object keys so that we can iterate over the object? or since we know there are only 3 
    // keys can we just check the value and see if it === the constelation keys
    // Annotation:
    // Write your annotation here as a comment
  },

  starsByColor() {
    // Return an object with keys of the different colors of the stars,
    // whose values are arrays containing the star objects that match e.g.
    // {
    //   blue: [{obj}, {obj}, {obj}, {obj}, {obj}],
    //   white: [{obj}, {obj}],
    //   yellow: [{obj}, {obj}],
    //   orange: [{obj}],
    //   red: [{obj}]
    // }
    /* CODE GOES HERE */
    // Annotation:
    // Write your annotation here as a comment
  },

  constellationsStarsExistIn() {
    // Sort the stars by brightness and return an array of the star's constellation names
    // Brightest Stars are indicated by visualMagnitude - the lower the number, the brighter the star
    // e.g.
    //  [ "Canis Major",
    //    "Carina",
    //    "Boötes",
    //    "Auriga",
    //    "Orion",
    //    "Lyra",
    //    "Canis Minor",
    //    "The Plow",
    //    "Orion",
    //    "The Little Dipper" ]
    /* CODE GOES HERE */
    // Annotation:
    // Write your annotation here as a comment
  },
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: charaters, weapons from ./datasets/ultima
const ultimaPrompts = {
  totalDamage() {
    // Return the sum of the amount of damage for all the weapons that our characters can use
    // Answer => 113
    /* CODE GOES HERE */
    // Annotation:
    // Write your annotation here as a comment
  },

  charactersByTotal() {
    // Return the sum damage and total range for each character as an object.
    // ex: [ { Avatar: { damage: 27, range: 24 }, { Iolo: {...}, ...}
    /* CODE GOES HERE */
    // Annotation:
    // Write your annotation here as a comment
  },
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: dinosaurs, humans, movies from ./datasets/dinosaurs
const dinosaurPrompts = {
  countAwesomeDinosaurs() {
    // Return an object where each key is a movie title and each value is the
    // number of awesome dinosaurs in that movie. e.g.:
    // {
    //   'Jurassic Park': 5,
    //   'The Lost World: Jurassic Park': 8,
    //   'Jurassic Park III': 9,
    //   'Jurassic World': 11,
    //   'Jurassic World: Fallen Kingdom': 18
    // }
    /* CODE GOES HERE */
    // Annotation:
    // Write your annotation here as a comment
  },

  averageAgePerMovie() {
    /* Return an object where each key is a movie director's name and each value is
        an object whose key is a movie's title and whose value is the average age
        of the cast on the release year of that movie.
      e.g.:
      {
        'Steven Spielberg':
          {
            'Jurassic Park': 34,
            'The Lost World: Jurassic Park': 37
          },
        'Joe Johnston':
          {
            'Jurassic Park III': 44
          },
        'Colin Trevorrow':
          {
            'Jurassic World': 56
           },
        'J. A. Bayona':
          {
            'Jurassic World: Fallen Kingdom': 59
          }
      }
    */
    /* CODE GOES HERE */
    // Annotation:
    // Write your annotation here as a comment
  },

  uncastActors() {
    /*
    Return an array of objects that contain the names of humans who have not been cast in a Jurassic Park movie (yet), their nationality, and their imdbStarMeterRating. The object in the array should be sorted alphabetically by nationality.
    e.g.
      [{
        name: 'Justin Duncan',
        nationality: 'Alien',
        imdbStarMeterRating: 0
      },
      {
        name: 'Karin Ohman',
        nationality: 'Chinese',
        imdbStarMeterRating: 0
      },
      {
        name: 'Tom Wilhoit',
        nationality: 'Kiwi',
        imdbStarMeterRating: 1
      }, 
        name: 'Jeo D',
        nationality: 'Martian',
        imdbStarMeterRating: 0
      }]
    */
    /* CODE GOES HERE */
    // Annotation:
    // Write your annotation here as a comment
  },

  actorsAgesInMovies() {
    /*
    Return an array of objects for each human and the age(s) they were in the movie(s) they were cast in, as an array of age(s). Only include humans who were cast in at least one movie.
    e.g.
    [ { name: 'Sam Neill', ages: [ 46, 54 ] },
      { name: 'Laura Dern', ages: [ 26, 34 ] },
      { name: 'Jeff Goldblum', ages: [ 41, 45, 63, 66 ] },
      { name: 'Richard Attenborough', ages: [ 70, 74, 92, 95 ] },
      { name: 'Ariana Richards', ages: [ 14, 18 ] },
      { name: 'Joseph Mazello', ages: [ 10, 14 ] },
      { name: 'BD Wong', ages: [ 33, 55, 58 ] },
      { name: 'Chris Pratt', ages: [ 36, 39 ] },
      { name: 'Bryce Dallas Howard', ages: [ 34, 37 ] } ]
    */
    /* CODE GOES HERE */
    // Annotation:
    // Write your annotation here as a comment
  },
};

module.exports = {
  breweryPrompts,
  turingPrompts,
  clubPrompts,
  bossPrompts,
  classPrompts,
  modPrompts,
  kittyPrompts,
  cakePrompts,
  astronomyPrompts,
  ultimaPrompts,
  nationalParksPrompts,
  weatherPrompts,
  bookPrompts,
  dinosaurPrompts,
<<<<<<< HEAD
=======
  boardGamePrompts,
>>>>>>> 51894690c118c9e48a929301df8dbdb6f3c9018a
};
