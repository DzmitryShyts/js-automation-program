/**
 * write function that adds two numbers
 *
 */
function add(a, b) {
    return a + b;
}
console.log(add(2,5));

/**
 * write function that return first and last name of given object
 * properties firstName and lastName
 * {
 *    firstName: "John"
 *    lastName: "Dou"
 * }
 */
function getFullName(object) {

    return object.firstName + " " + object.lastName;
}
console.log(getFullName(object = {
    firstName: "John",
    lastName: "Dou"    
}));

/**
 * write fuction that checks is number is odd
 * true if odd, false if even
 */
function isOdd(n) {
    return (n & 1) ? true : false;

}
console.log(isOdd(3));

/**
 * write function that return shortest of words in given array
 * e.g ["one", "two", "three"] should return one
 */
function getShortest(wordArray) {
    let tempWord = wordArray[0];
    let tempLength = tempWord.length;
    for (let shortestWord of wordArray) {
        if (tempLength>shortestWord.length) {
            tempLength = shortestWord.length;
            tempWord = shortestWord;
        }
    }
    return tempWord;
}
getShortest(["one", "two", "three", "x"]);

/**
 * write function that returns word google with given numbers of "o" symbols
 * e.g getGoogle(5) should return "gooooogle"
 */

function getGoogle(n) {
    return ('g'+ ('o'.repeat(n)) + 'gle');
    
}
console.log(getGoogle(6));

/**
 * write function that returns object based on given information (params may be null)
 * getUser("John", "Dou", 42) should return
 * {
 *    firstName: "John"
 *    lastName: "Dou"
 *    age: 42
 * }
 */
function getUser(firstName = null, lastName = null, age = null) {
    object =  {
        firstName: firstName,
        lastName: lastName,
        age: age
    };
    return object;
}
console.log(getUser("John", "Dou", 42));

/**
 * write function that calculates total path traveled.
 * path represended as array of objects with field distance and direction
 * e.g [{direction: "Kiyv - Minsk", distance: 567}, {direction: "Kiyv - Paris", distance: 2402}]
 */

function getTotalPath(path) {
    var totalPath = 0;
    for (let travel of path) {
        totalPath = totalPath + travel.distance;
    }
    return totalPath;
}

getTotalPath([
    { direction: "Kiyv - Minsk", distance: 567 },
    { direction: "Kiyv - Paris", distance: 2402 },
    { direction: "Paris - London", distance: 466 }
]);

module.exports = {
    add,
    getFullName,
    isOdd,
    getShortest,
    getGoogle,
    getUser,
    getTotalPath,
};