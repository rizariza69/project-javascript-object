'use strict'

console.log({
  name: 'Alpha',
  age: 100,
  superPower: true
})
console.log({
  name: 'Alpha',
  age: 100,
  superPower: true
})

const hero = {
  name: 'Alpha',
  age: 100,
  superPower: true
}

console.log(hero)
console.log(hero['name'])
console.log(hero.age)
console.log(hero.superPower)

// alert(hero)
// alert(hero['name'])
// alert(hero.age)
// alert(hero.superPower)

let student = {
  name: ['dudu', 'cip'],
  age: [15, 17],
  score: [70, 50]
}

for (var i = 0; i <= student; i++) {}
console.log(student.name[0] + " " + student.age[0] + ' ' + student.score[0]);
console.log(student.name[1] + " " + student.age[1] + ' ' + student.score[1]);

console.log(student);
console.log(student['name']);
console.log(student.age);
console.log(student['score']);