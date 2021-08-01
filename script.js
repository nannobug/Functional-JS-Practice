// _.forEach
// 1. Refactor the following imperative code to be //    declarative by using the forEach() native //       array method instead of a for loop:
var sumImperative = function(array) {
  var result = 0;
  for (var i = 0; i < array.length; i++) {
    result = result + array[i];
  }
  return result;
};

var sumDeclarative = function(array) {
  // your code here
  var result = 0;
  array.forEach(function(item) {
    result += item; 
  });
  return result;
};

console.log(sumDeclarative([1,2,3]));

// 2 Refactor the following imperative code to be declarative by using the forEach() native array method instead of a for loop:
var maxNumImperative = function(array) {
  var max = array[0];
  for (var i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
};

var maxNumDeclarative = function(array) {
  // your code here
  var max = array[0];
  array.forEach(function(item) {
    max = Math.max(max, item);
  });
  return max;
};

console.log(maxNumDeclarative([9, 0, 10, -2]));

// 3 Write a function called min that find the smallest number in an array of numbers and returns it.

var min = function(array) {
  // your code here
  var minItem = array[0];
  array.forEach(function(item) {
    minItem = Math.min(item, minItem);
  });
  return minItem;
};

console.log(min([100, 54, 73, 8, 12, 3])); // => 3

// 4 Write a function called printNames that takes an array of names and console.logs them:

var printNames = function(names) {
  // your code here
  names.forEach(function(name) {
    console.log(name);
  });
};

printNames(['Tom', 'Jerry', 'Arnold', 'Casper']);

// map
// 1 Write a function that takes an array of numbers and returns a new array with each number squared:
var squared = function(numbers) {
  // your code here
  return numbers.map(function(number) {
    return number ** 2;
  })
};

console.log(squared([1, 2, 3, 4, 5])); // => [1, 4, 9, 16, 25]

// 2 Write a function that takes an array of words that are singular and returns an array of the same words pluralized:

var pluralize = function(words) {
  return words.map(function(word) {
    return word + 's';
  });
};

console.log(pluralize(['dog', 'cat', 'worm', 'kyle'])); // => ['dogs', 'cats', 'worms', 'kyles']

// 3 Write a function that takes an array of artist/song objects and returns an array of strings that name the song and say who it is performed by:

var songs = [
  { song: 'Phenom', artist: 'Alex Mali' },
  { song: 'Too Deep', artist: 'dvsn' },
  { song: 'Firefly', artist: 'Mura Masa' }
];

var songsBy = function(songs) {
  // your code here
  return songs.map(function(song) {
    return song.song + 'by ' + song.artist;
  })
};

console.log(songsBy(songs)); // => ['Phenom by Alex Mali', 'Too Deep by dvsn', 'Firefly by Mura Masa']

// 4 Write a function that takes an array of user objects and returns an array of just the users' first names:

var users = [
  { firstName: 'Homer', lastName: 'Simpson' },
  { firstName: 'Marge', lastName: 'Simpson' },
  { firstName: 'Bart', lastName: 'Simpson' },
  { firstName: 'Lisa', lastName: 'Simpson' },
  { firstName: 'Maggie', lastName: 'Simpson' }
];

var firstNames = function(users) {
  // your code here
  return users.map(function(user) {
    return user['firstName'];
  })
};

console.log(firstNames(users)); // => ['Homer', 'Marge', 'Bart', 'Lisa', 'Maggie']

// 5 Write a function that takes an array of user objects and returns an array with just the users' full names:

var users = [
  { firstName: 'Homer', lastName: 'Simpson' },
  { firstName: 'Marge', lastName: 'Simpson' },
  { firstName: 'Bart', lastName: 'Simpson' },
  { firstName: 'Lisa', lastName: 'Simpson' },
  { firstName: 'Maggie', lastName: 'Simpson' }
];

var fullNames = function(users) {
  // your code here
  return users.map(function(user) {
    return user.firstName + ' ' + user.lastName;
  })
};

console.log(fullNames(users)); // => ['Homer Simpson', 'Marge Simpson', 'Bart Simpson', 'Lisa Simpson', 'Maggie Simpson']

// 6 Write a function that takes an array of user objects and returns an array of objects with just the users' full names:

var users = [
  { firstName: 'Homer', lastName: 'Simpson' },
  { firstName: 'Marge', lastName: 'Simpson' },
  { firstName: 'Bart', lastName: 'Simpson' },
  { firstName: 'Lisa', lastName: 'Simpson' },
  { firstName: 'Maggie', lastName: 'Simpson' }
];

var fullNameObjects = function(users) {
  // your code here
  return users.map(function(user) {
    var fullNameObj = {};
    fullNameObj.fullName = user.firstName + ' ' + user.lastName;
    return fullNameObj;
  })
};

console.log(fullNameObjects(users)); // => [{ fullName: 'Homer Simpson' }, { fullName: 'Marge Simpson' }, { fullName: 'Bart Simpson' }, { fullName: 'Lisa Simpson' }, { fullName: 'Maggie Simpson' }]

// 7 Write a function that takes an array of arrays that contain product information, and returns an array of objects with appropriate keys:

var products =  [
  ['Dark Chocolate Crunchies', 4.11, 3],
  ['Peppermint Poppers', 0.88, 1],
  ['Banana Bunches', 2.33, 2]
]

var toObject = function(products) {
  // your code here
  return products.map(function(product) { 
    var resultObject = {};
    resultObject.name = product[0];
    resultObject.price = product[1];
    resultObject.quantity = product[2];
    return resultObject;
  })
};

console.log(toObject(products)); // => [
//   { name: 'Dark Chocolate Crunchies', price: 4.11, quantity: 3 },
//   { name: 'Peppermint Poppers', price: 0.88, quantity: 1 },
//   { name: 'Banana Bunches', price: 2.33, quantity: 2 }
// ]

// 6 Solution - improved readability
var toObject2 = function(products) {
  return products.map(function(product) {
    return {
      'name': product[0],
      'price': product[1],
      'quantity': product[2]
    };
  });
};
console.log(toObject2(products));

// filter

// 1 Write a function that takes an array of numbers and returns an array of all numbers less than 10:

var lessThanTen = function(numbers) {
  // your code here
  return numbers.filter(function(number) {
    return number < 10;
  });
};

console.log(lessThanTen([1, 5, 12, 18, 94, 3, 16])); // => [1, 5, 3]

// 2 Write a function that takes an array of numbers and returns an array of just the even numbers:
var onlyEvens = function(numbers) {
  // your code here
  return numbers.filter(function(number) {
    return number % 2 === 0;
  });
};

console.log(onlyEvens([25, 16, 12, 99, 8, 37])); // => [16, 12, 8]


// 3 Write a function that takes an array of strings and returns an array of just the words that have an odd number of characters:

var onlyOddWords = function(words) {
  // your code here
  return words.filter(function(word) {
    return word.length % 2 === 1;
  })
};

console.log(onlyOddWords(['hello', 'my', 'name', 'is', 'alexa'])); // => ['hello', 'alexa']


// 4 Write a function that takes an array of words and returns an array of just the words that are pluralized (end with 's'):

var onlyPlural = function(words) {
  // your code here
  return words.filter(function(word) {
    return word[word.length - 1].toLowerCase() === 's'
  })
};

console.log(onlyPlural(['dogs', 'cat', 'humans', 'kyle'])); // => ['dogs', 'humans']


//5 Write a function that takes an array of characters and returns an array of just the characters that are superheroes:

var characters = [
  { character: 'Superman', hero: true },
  { character: 'Sinestro', hero: false },
  { character: 'Wonder Woman', hero: true },
  { character: 'Lex Luthor', hero: false },
  { character: 'Green Lantern', hero: true }
]

var isHero = function(chars) {
  // your code here
  return chars.filter(function(char) {
    return char.hero;
  })
};

// _.reduce

// 1 Write a function that takes an array of numbers and returns the sum of all the numbers:

var sum = function(numbers) {
  // your code here
  return numbers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
  })
};

console.log(sum([2, 4, 6])); // => 12

// 2 Write a function that takes an array of numbers and returns the product of all the numbers:

var product = function(numbers) {
  // your code here
  return numbers.reduce(function(accumulator, currentValue) {
    return accumulator * currentValue;
  })
};

console.log(product([2, 4, 6])); // => 48

// 3 Write a function that takes an array of words and returns a sentence (single string) with all the element strings concatenated together:

var stringConcat = function(strings) {
  // your code here
  return strings.reduce(function(accumulator, currentValue) {
    return accumulator + ' ' + currentValue;
  });
};

console.log(stringConcat(['Hello', 'my', 'name', 'is', 'Alexandra'])); // => 'Hello my name is Alexandra'

// 4 Write a function that takes an array of users and returns an object with keys that are the users' names and values that are their email addresses:

var users = [
  { fullName: 'George Washington', email: 'george@us.gov' },
  { fullName: 'John Adams', email: 'john@us.gov' },
  { fullName: 'Thomas Jefferson', email: 'thomas@us.gov' },
  { fullName: 'James Madison', email: 'james@us.gov' }
]

var createEmailObject = function(users) {
  // your code
 var accumulator = {};
  return users.reduce(function(accumulator, currentValue) {
    accumulator[currentValue.fullName] = currentValue.email;
    return accumulator;
  }, {});
};

console.log(createEmailObject(users)); // => {
//   'George Washington': 'george@us.gov',
//   'John Adams': 'john@us.gov',
//   'Thomas Jefferson': 'thomas@us.gov',
//   'James Madison': 'james@us.gov'
// }

