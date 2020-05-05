/**
 * return an array of characters names
 * @param {Array} chars
 * @return {Array} - char names
 */
function getCharactersNames(chars) {
    let arr = [];
    for (let char of chars) {
        arr.push(char.name);
    }
    return arr;
}

/**
 * print (console.log) names of all characters
 * @param {Array} chars
 */
function printCharacterNames(chars) {
    for (let char of chars) {
        console.log(char.name);
    }
}

/**
 * return an array of non-human characters
 * @param {Array} chars
 * @return {Array} - non human characters
 */
function getNonHumanCharacters(chars) {
    return chars.filter(char => (char.species !== "Human"));
}

/**
 * return info about character named 'Jerry Smith'
 * @param {Array} chars
 * @return {Object} - Jerry object
 */
function getJerryInfo(chars) {
    return chars.find((char) => {
        return char.name === 'Jerry Smith';
    });
}

/**
 * check if all characters are human. return true if all, false if not
 * @param {Array} chars
 * @return {boolean}
 */
function isAllHuman(chars) {
    for (let i = 0; i < chars.length; i++) {
        if (chars[i].species.toLowerCase() !== 'human') {
            return false;
        }
    }
}

/**
 * check if there are any Fish-Person characters. return true if any, false if not
 * @param {Array} chars
 * @return {boolean}
 */
function isAnyFishPerson(chars) {
    for (let i = 0; i < chars.length; i++) {
        if (chars[i].type === 'Fish-Person') {
            return true;
        }
    }
}

/**
 * 1. Write a method to find an index of minimal item from an array;
 * @param {Array} arr
 * @return {number} - minimum element index
 */
function minItem(arr) {
    let minElement = arr[0];
    let minIndex = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < minElement) {
            minIndex = i;
            minElement = arr[i];
        }
    }
    return minIndex;
}

module.exports = {
    getCharactersNames,
    printCharacterNames,
    getNonHumanCharacters,
    getJerryInfo,
    isAllHuman,
    isAnyFishPerson,
    minItem
};
