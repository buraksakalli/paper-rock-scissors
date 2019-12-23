let moveElement = document.querySelector('.move');
let resultElement = document.querySelector('.span-result');
let computerElement = document.querySelector('.span-computer');
let winElement = document.querySelector('.win-result');
let defeatElement = document.querySelector('.defeat-result');
let drawElement = document.querySelector('.draw-result');
let resetButton = document.querySelector('.reset');
let rockElement = document.querySelector('#rock');
let paperElement = document.querySelector('#paper');
let scissorsElement = document.querySelector('#scissors');

let win = 0, draw = 0, defeat = 0;

moveElement.addEventListener('click', (e) => {
  resetButton.disabled = false;
  let player = e.target.getAttribute('data-key'); // Getting move of player
  let computer = computerMove(); // Getting move of computer
  if (player == computer) result(null, computer, player);
  if (player == 'rock' && computer == 'paper') result('computer', computer, player);
  if (player == 'rock' && computer == 'scissors') result('player', computer, player);
  if (player == 'paper' && computer == 'scissors') result('computer', computer, player);
  if (player == 'paper' && computer == 'rock') result('player', computer, player);
  if (player == 'scissors' && computer == 'rock') result('computer', computer, player);
  if (player == 'scissors' && computer == 'paper') result('player', computer, player);
});

computerMove = () => {
  const moveArray = ['paper', 'rock', 'scissors'];
  let computer = moveArray[Math.floor(Math.random() * moveArray.length)];
  return computer;
}

result = (winner, computer, player) => {
  if (winner == 'player') {
    win += 1;
    resultElement.innerText = 'You Won!';
    resultElement.classList = "span-result result-win";
    winElement.innerText = win;

    changeColor(player, 'win');
  }
  if (winner == 'computer') {
    defeat += 1;
    resultElement.innerText = 'You Lost!';
    resultElement.classList = "span-result result-defeat";
    defeatElement.innerText = defeat;

    changeColor(player, 'lost');
  }
  if (winner == null) {
    resultElement.innerText = 'Draw';
    resultElement.classList = "span-result result-draw";
    draw += 1;
    drawElement.innerText = draw;

    changeColor(player, 'draw');
  }
  computerElement.innerText = 'Computer chose ' + computer;
}

resetButton.addEventListener('click', (e) => {
  win = 0; draw = 0; defeat = 0;
  initial();
});

changeColor = (player, status) => {
  initialImage();
  if (status == 'win') {
    if (player == 'rock') {
      rockElement.src = './src/win/rock.png';
    } if (player == 'paper') {
      paperElement.src = './src/win/paper.png';
    } if (player == 'scissors') {
      scissorsElement.src = './src/win/scissors.png';
    }
  }
  if (status == 'draw') {
    if (player == 'rock') {
      rockElement.src = './src/draw/rock.png';
    } if (player == 'paper') {
      paperElement.src = './src/draw/paper.png';
    } if (player == 'scissors') {
      scissorsElement.src = './src/draw/scissors.png';
    }
  }
  if (status == 'lost') {
    if (player == 'rock') {
      rockElement.src = './src/lost/rock.png';
    } if (player == 'paper') {
      paperElement.src = './src/lost/paper.png';
    } if (player == 'scissors') {
      scissorsElement.src = './src/lost/scissors.png';
    }
  }
}

initialImage = () => {
  scissorsElement.src = "./src/scissors.png";
  paperElement.src = "./src/paper.png";
  rockElement.src = "./src/rock.png";
}

initial = () => {
  winElement.innerText = 0;
  defeatElement.innerText = 0;
  drawElement.innerText = 0;
  resetButton.disabled = true;
  resultElement.innerText = "";
  computerElement.innerText = "";
  resultElement.classList = "span-result";
  initialImage();
}

initial();
initialImage();