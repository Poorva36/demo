// expresion function , andar hai, function returning function(hof)
/* closure is the closed over variable enviroment of execution context, in which a function was
 created even after that execution context is gone */
/* closer gives a function, ability to access to all the varaibles of its parent function,
 even after that parent function has returned. The function keeps a refrence to its outer scope
 which preserves the scope chain throughout the time. */
/* A closure make sure that a function dosent loose connection to variables that exeisted at
 the functions birth place */

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};
const booker = secureBooking();
booker();
booker();
booker();
/* question : every time when booker call, it execute the returning function and it increment the value why? 
it is not loop after all */

/* answer: this hapeens because of closure, coz closure makes a function remember its all the varaibles
that existed and the function birthplace */

/* any function always has access to the variable enviroment of the execution context in 
which the function was created. Now in the case of booker() , function was created, 
it was born in the execution context of secure booking so therefore the booker function will 
get access to this variable enviroment which contain the passenger count varaible and this 
is how the function is able to read manipulate the passenger count varaible and so thats connection is called
closure */
