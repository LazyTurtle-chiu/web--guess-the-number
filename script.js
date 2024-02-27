


let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
// shows the secret number
// document.querySelector('.number').textContent = secretNumber;
//function for displays message
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// When enter key is clicked
document.querySelector('.input').addEventListener('keypress', e => {
  if (e.key == 'Enter') document.querySelector('.btn').click();
});
// guess button
function guess() {
  let userGuess = document.querySelector('.input').value;
  // When there is no input
  if (!userGuess) {
    displayMessage('No number!');
  }
  //When there is output
  else {
    // When the number exceed the bracket
    if (userGuess < 1 || userGuess > 20) {
      displayMessage('Please enter a number from 1 to 20 only');
    }
    // When the number is within the bracket
    else {
      // When the number is correct
      if (score > 1) {
        if (userGuess == secretNumber) {
          displayMessage(' YOU WIN!');
          document.querySelector('.number').textContent = secretNumber;
          document.querySelector('.restart').style.display = 'block';
          document.querySelector('.guess').style.display = 'none';
          document.querySelector('body').style.background = 'green';
          document.querySelector('.message').style.color = 'black';
          if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
          }
        } else if (userGuess > secretNumber) {
          displayMessage('⬆️Too high!');
          document.querySelector('.message').style.color = 'green';
          score--;
          document.querySelector('.score').textContent = score;
        } else {
          displayMessage('⬇️Too low!');
          document.querySelector('.message').style.color = 'red';
          score--;
          document.querySelector('.score').textContent = score;
        }
      }
      // When the number is incorrect
      // When the score is 0
      else {
        displayMessage('YOU LOST!');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.score').textContent = 0;
        document.querySelector('.restart').style.display = 'block';
        document.querySelector('.guess').style.display = 'none';
        document.querySelector('body').style.background = 'red';
        document.querySelector('.message').style.color = 'black';
      }
    }
  }
}

// restart button
function restart() {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  document.querySelector('.restart').style.display = 'none';
  document.querySelector('.guess').style.display = 'block';
  document.querySelector('body').style.background =
    'linear-gradient(to right, #7f53ac, #657ced)';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.input').value = '';
}
