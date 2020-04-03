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

var i = 0;
while (i < inputNumber){
    total = total * (inputNumber - i);
    i ++;
}
console.log(inputNumber + '! =' + total);

var i = 0;
do {
    total = total * (inputNumber - i);
    i ++;
}
while (i < inputNumber);
console.log(inputNumber + '! =' + total);