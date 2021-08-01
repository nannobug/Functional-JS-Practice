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