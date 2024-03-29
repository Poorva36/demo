/* Let's build a simple poll app!
A poll has a question, an array of options from which
people can choose, and an array with the number of
replies for each option. This data is stored in the
starter object below.-

Here are your tasks:
1. Create a method called 'registerNewAnswer' on the
'poll' object. The method does 2 things:
1.1. Display a prompt window for the user to input
the number of the selected option. The prompt
should look like this:
What is your favourite programming language?
0: JavaScript
1: Python
2: Rust
3: C++
(Write option number)
 1.2. Based on the input number, update the answers
array. For example, if the option is 3, increase
the value AT POSITION 3 of the array by 1. Make
sure to check if the input is a number and if the
number makes sense (e.g answer 52 wouldn't make
sense, right?)
2. Call this method whenever the user clicks the
"Answer poll" button.

3. Create a method 'displayResults' which displays
the poll results. The method takes a string as an
input (called 'type' as an argument), which can be either 'string'
or 'array'. If type is 'array', simply display the
results array as it is, using console.log(). This
should be the default option. If type is 'string',
display a string like "Poll results are 1, 2, 4, 1".

4. Run the 'displayResults' method at the end of each
'registerNewAnswer' method call.

BONUS: Use the 'displayResults' method to display the
2 arrays in the test data. Use both the 'array' and
the 'string' option. Do NOT put the arrays in the
poll object! So what shoud the this keyword look like
in this situation?
BONUS TEST DATA 1: [0, 2, 3]
BONUS TEST DATA 2: [1, 3, 2, 0, 1]
*/

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section
  answers: new Array(4).fill(0),
  // answers is a blank array, & has 4 values, initialised with 0

  registerNewAnswer() {
    // join used here for join the index elements by putting something between them
    // -------------------GET ANSWER----------
    const answer = Number(
      prompt(
        `${this.question}\n ${this.options.join("\n")} \n (write option number)`
      )
    );
    // console.log(answer);
    //------------------REGISTER ANSWER--------------
    typeof answer === "number" &&
      answer < this.answers.length && this.answers[answer]++;
    // this.answers.[answer]++ --- yeh track record krra hai,kiski value konsaq answer select huya hai user ke dwara
    // [0 ,0,0,1]
    // console.log(this.answers[answer]++);
    // console.log(this.answers);
    this.displayResult()
    
  },

  displayResult(type = 'array'){
    if(type === 'array'){
      console.log(this.answers)
    }
    else if(type === 'string'){
      console.log(`poll result are ${this.answers.join(', ')}` )
    }
  }
};
console.log(poll.answers);

// poll.registerNewAnswer();
//  array pura pdna h, map set, for each,flat, flat map,numbers , date, timers,

document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll)) 

poll.displayResult.call({answers: [0, 2, 3]}, 'string')
poll.displayResult.call(poll, 'string')








