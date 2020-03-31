/**
 * Write the function that will calculate the amount of discount
 * considering the redemption amount
 * Rules are the following:
 * - 0    - 350:  0%
 * - 351  - 1350: 15%
 * - 1351 - 2700: 30%
 * - 2701 - 6500: 45%
 * @param {number} redemption amount (0 - 9999)
 * @returns {number} discount in percent
 */

function calculateDiscount(redemption) {
  let discount = 0;
if (redemption >0 && redemption <= 350) {
  discount = 0;
  console.log(discount);
}
if (redemption >351 && redemption <= 1350) {
  discount = 15;
  console.log(discount);
}
if (redemption >1351 && redemption <= 2700) {
  discount = 30;
  console.log(discount);
}
if (redemption >2701 && redemption <= 6500) {
  discount = 45;
  console.log(discount);
}

  return discount;
}
calculateDiscount(1400);

/** TODO
 * implement factorial algorithm using for, while, do..while operators
 */
// const i = 10; //10! = 3628800

var inputNumber = 10;
var total = 1;

for (i = 0; i < inputNumber; i++){
    total = total * (inputNumber - i);
}

console.log(inputNumber + '! = ' + total);

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

/**
 * return concatenated string from an array of substring
 */
{
  const substr = ["I", " love", " JS"];
  const a = "I";
  const b = "Love";
  const c = "JS";
  let result = a + " " + b + " " + c;
  console.log(result);
}


/**
 * calculate a total of income of certain person
 */
{
  const personIncomes = {
    salary: 1985,
    rent: -600,
    interestOnDeposit: 250,
    otherExpences: -300
  };
  
  let total = 0;
  for (let key in personIncomes) {
    total += personIncomes[key];
  }
  console.log(total);
}

module.exports = calculateDiscount;
