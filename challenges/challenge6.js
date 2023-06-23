/* Array Methods Practice
I
// Coding Challenge #6

Julia and Kate are still studying dogs, and this time
they are studying if dogs are eating too much or too
little.

Eating too much means the dog's current food portion
is larger than the recommended portion, and eating
too little is the opposite.

Eating an okay amount means the dog's current food
portion is within a range 10% above and 10% below the
recommended portion (see hint).

HINT 2: Being within a range 10% above and below the
recommended portion means: current> (recommended * 0.
90) && current < (recommended *1.10). Basically, the
current portion should be between 90% and 110% of the
recommended portion.

1. Loop over the array containing dog objects, and
for each dog, calculate the recommended food portion
and add it to the object as a new property. Do NOT
create a new array, simply loop over the array.
Forumla: recommendedFood = weight ** 0.75 * 28. (The
result is in grams of food, and the weight needs to
be in kg) */

/*2. Find Sarah's dog and log to the console whether
it's eating too much or too little. HINT: Some dogs
have multiple owners, so you first need to find Sarah
in the owners array, and so this one is a bit tricky
(on purpose) */

// 1)
const dogs = [
  {
    weight: 22,
    curFood: 250,
    owners: ["Alice", "Bob"],
  },

  {
    weight: 8,
    curFood: 200,
    owners: ["Matilda"],
  },

  {
    weight: 13,
    curFood: 275,
    owners: ["Sarah", "John"],
  },
];

dogs.forEach(function (food) {
  food.recommendedFood = Math.trunc(food.weight ** 0.75 * 28);
});

console.log(dogs);

//find() - always take function inside it. but not includes().

// 2)
// let sD  ;
//  dogs.forEach(function(saraDogs){
//    if( saraDogs.owners.includes('Sarah')){
//     sD = saraDogs
//    }

// })
// console.log(sD);

const saraDog = dogs.find((findDog) => findDog.owners.includes("Sarah"));
console.log(saraDog);
// if(saraDog.curFood > saraDog.recommendedFood){
//     console.log('dog is eating too much');
// }
// else{
//     console.log('dog is eating too little');
// }

// console.log(saraDog.curFood>saraDog.recommendedFood ? 'dog eating too much ' : 'dog eating to little')
console.log(
  `Sarah's dog is eating too ${
    saraDog.curFood > saraDog.recommendedFood ? "much" : "little"
  } `
);

/* 3. Create an array containing all owners of dogs who
eat too much ('ownersEatTooMuch') and an array with
all owners of dogs who eat too little
llaunann n+Taal i+++7a1 */

const ownersEatTooMuch = dogs
  .filter((tooMuch) => tooMuch.curFood > tooMuch.recommendedFood)
  .flatMap((dog) => dog.owners);
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter((tooLittle) => tooLittle.curFood < tooLittle.recommendedFood)
  .flatMap((dog) => dog.owners);
console.log(ownersEatTooLittle);

// ----------------------------------------------------------------------------------------

/*'ownersEat TooLittly).
4. Log a string to the console for each array created
in 3., like this: "Matilda and Alice and Bob's dogs
eat too much!" and "Sarah and John and Michael's dogs
eat too little!" */

console.log(`${ownersEatTooMuch.join(" and ")} dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(" and ")} dogs eat too little!`);

/*5. Log to the console whether there is any dog eating
EXACTLY the amount of food that is recommended (just
true or false) */

// const equal = dogs.filter( dog => dog.recommendedFood===dog.curFood)
// console.log(equal);
const equal = dogs.some((value) => value.curFood === value.recommendedFood);
console.log(equal);

/* 6. Log to the console whether there is any dog eating
an OKAY amount of food (just true or false)*/

const okayFood = dogs.some(
  (food) =>
    food.curFood >= (10 / 100) * food.recommendedFood &&
    food.curFood <= (10 / 100) * food.recommendedFood
);
console.log(okayFood);

/* 7. Create an array containing the dogs that are
eating an OKAY amount of food (try to reuse the
condition used in 6.) */

/*8. Create a shallow copy of the dogs array and sort
it by recommended food portion in an ascending order
(keep in mind that the portions inside the array's
object)*/

// const asec = dogs.recommendedFood.sort((a,b) => a-b)
// console.log(asec);
console.log([dogs.recommendedFood]);




/*HINT 1: Use many different tools to solve these
challenges, you can use the summary lecture to choose
between them


TEST DATA:
const dogs = [
{ weight: 22, curFood: 250, owners: ['Alice',
'Bob'] },

{ weight: 8, curFood: 200, owners: ['Matilda'] },

{ weight: 13, curFood: 275, owners: ['Sarah',
'John'] },

 TEST DATA:
const dogs = [
{ weight: 22, curFood: 250, owners: ['Alice',
'Bob'] }, I
{ weight: 8, curFood: 200, owners: Matilda'] },
{ weight: 13, curFood: 275, owners: ['Sarah',
'John'] },
{ weight: 32, curFood: 340, owners: ['Michael'] }
];
GOOD LUCK
*/
