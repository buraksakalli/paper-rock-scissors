let moveElement = document.querySelector('.move');
let resultElement = document.querySelector('.span-result');
let computerElement = document.querySelector('.span-computer');
let winElement = document.querySelector('.win-result');
let defeatElement = document.querySelector('.defeat-result');
let drawElement = document.querySelector('.draw-result');
let resetButton = document.querySelector('.reset');

let win = 0, draw = 0, defeat = 0;

moveElement.addEventListener('click', (e) => {
  resetButton.disabled = false;
  let player = e.target.getAttribute('data-key'); // Getting move of player
  console.log(player);
  let computer = computerMove(); // Getting move of computer
  console.log(computer);
  if (player == computer) result(null, computer);
  if (player == 'rock' && computer == 'paper') result('computer', computer);
  if (player == 'rock' && computer == 'scissors') result('player', computer);
  if (player == 'paper' && computer == 'scissors') result('computer', computer);
  if (player == 'paper' && computer == 'rock') result('player', computer);
  if (player == 'scissors' && computer == 'rock') result('computer', computer);
  if (player == 'scissors' && computer == 'paper') result('player', computer);
});

computerMove = () => {
  const moveArray = ['paper', 'rock', 'scissors'];
  let computer = moveArray[Math.floor(Math.random() * moveArray.length)];
  return computer;
}

result = (winner, computer) => {
  if (winner == 'player') {
    win += 1;
    resultElement.innerText = 'You Won!';
    resultElement.classList = "span-result result-win";
    winElement.innerText = win;
  }
  if (winner == 'computer') {
    defeat += 1;
    resultElement.innerText = 'You Lost!';
    resultElement.classList = "span-result result-defeat";
    defeatElement.innerText = defeat;
  }
  if (winner == null) {
    resultElement.innerText = 'Draw';
    resultElement.classList = "span-result result-draw";
    draw += 1;
    drawElement.innerText = draw;
  }
  computerElement.innerText = 'Computer chose ' + computer;
}

resetButton.addEventListener('click', (e) => {
  win = 0; draw = 0; defeat = 0;
  initial();
});

initial = () => {
  winElement.innerText = 0;
  defeatElement.innerText = 0;
  drawElement.innerText = 0;
  resetButton.disabled = true;
}

initial();