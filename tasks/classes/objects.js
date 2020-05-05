/**
 * create object person with firstName and lastName properties
 * implement method getFullName that returns full name
 */
const person = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName: function() {
        return this.firstName + ' ' + this.lastName;
    }
};
console.log(person.getFullName());
//put you object here

/**
 * create object student that has property grade and method getGrade
 * set person as prototype of student
 */
const student = {
    grade: '2',
    getGrade: function() {
        return this.grade;
    }
};
Object.setPrototypeOf(student, person);
console.log(student.getGrade());
//put you object here

/**
 * create new instance of student using Object.create
 */
const student2 = Object.create(student);
console.log(student2);
//put you object here

module.exports = {
    person,
    student,
    student2
};
