/** TODO
 * The system receives two params x and y.
 * Implement the logic when z equal to sum of x and y in case both of them less than 10 or multiplication in case of greater or equal than 10
 * Task 1 - if else
 * Task 2 - ternary operator
 */
//  {
//   const x = 3;
//         y = 7;
//         z = x * y;

let x = 3;
let y = 7;
z = x + y;
console.log(x < 10 && y < 10 ? z : 'Wrong');

  if (x * y >= 10) {
    console.log(z);
  } else {
    console.log('Wrong');
  }

// {
//     const x = 3;
//     const y = 7;
// }