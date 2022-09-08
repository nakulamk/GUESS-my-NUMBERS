'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!!';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 19;
// document.querySelector('.score').textContent = 3;

// document.querySelector('.guess').value = 55;
// console.log(document.querySelector('.guess').value);
// // when input feild need to get the actual valves we use value porperty
// document.querySelector('.check').addEventListener('click', function () {
//   console.log(document.querySelector('.guess').value);
//   // document.querySelector('.guess').value = 55;
// });
// for eventlistener we are just passing the parameter like click and
// function only :fumction is also a expression so

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;
let score = 20;

// document.querySelector('.number').textContent=score;
// document.querySelector('.number').textContent = secretNumber;

const displaymessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess, typeof guess);

  //when there is no input
  if (!guess) {
    // console.log('no number entered');
    // document.querySelector('.message').textContent = 'NO Number';
    // callling the displaymessage function
    displaymessage('NO Number');
  }
  // when the input is correct
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  // when the input is greater
  else if (guess > secretNumber) {
    if (score >= 1) {
      document.querySelector('.message').textContent = 'Too High';
      score = score - 1;
      // score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the Game';
    }
  }
  // when the input is lower
  else if (guess < secretNumber) {
    if (score >= 1) {
      document.querySelector('.message').textContent = 'Too Low';
      score = score - 1;
      // score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the Game';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  // empty valve is the absence of the string
});
