// starting variables
const rows = 22;
const cols = 22;
const grid = [];

const snake = {
  position: [11, 11],
  direction: 'r',

  current: [[11, 11]],
};

// set up beginning state
fillGrid(rows, cols, grid);
$('.grid').html(render(grid));
$('.row:nth-child(11) .box:nth-child(11)').html('O');

// change direction and move the snake
changeDir();
loop();

// fills the grid with space strings
function fillGrid(height, width, gridArr) {
  for (let i = 0; i < rows; i++) {
    gridArr.push([]);
    for (let j = 0; j < cols; j++) {
      gridArr[i].push(' ');
    }
  }
}


// renders the grid on the screen
function render(gridArr) {
  let html = '';

  for (let i = 0; i < gridArr.length; i++) {
    html += '<section class="row">';
    for (let j = 0; j < gridArr[i].length; j++) {
      html += '<div class="box"></div>';
    }
    html += '</section>';
  }
  return html;
}

// listen for keypress and change direction
function changeDir() {
  $(document).keydown(function(e) {
    switch (e.which) {
      case 37: // left
        snake.direction = 'l';
        console.log(snake.direction);
        break;

      case 38: // up
        snake.direction = 'u';
        console.log(snake.direction);
        break;

      case 39: // right
        snake.direction = 'r';
        console.log(snake.direction);
        break;

      case 40: // down
        snake.direction = 'd';
        console.log(snake.direction);
        break;

      default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
  });
}

// check which direction and then turn the snake to go that way
function move(direction, position) {
  const x = position[1];
  const y = position[0];

  if (checkLoss(x,y)) {
    position[0] = 11;
    position[1] = 11;
  }

  switch (direction) {
    case 'r':
      moveRight(x, y, position);
      break;
    case 'l':
      moveLeft(x, y, position);
      break;
    case 'u':
      moveUp(x, y, position);
      break;
    case 'd':
      moveDown(x, y, position);
      break;
    default:
      break;
  }
}

function moveRight(x, y, pos) {
  $(`.row:nth-child(${y}) .box:nth-child(${x})`).html(' ');
  x += 1;
  $(`.row:nth-child(${y}) .box:nth-child(${x})`).html('O');
  pos[1] = pos[1] + 1;
}

function moveLeft(x, y, pos) {
  $(`.row:nth-child(${y}) .box:nth-child(${x})`).html(' ');
  x -= 1;
  $(`.row:nth-child(${y}) .box:nth-child(${x})`).html('O');
  pos[1] = pos[1] - 1;
}

function moveUp(x, y, pos) {
  $(`.row:nth-child(${y}) .box:nth-child(${x})`).html(' ');
  y -= 1;
  $(`.row:nth-child(${y}) .box:nth-child(${x})`).html('O');
  pos[0] = pos[0] - 1;
}

function moveDown(x, y, pos) {
  $(`.row:nth-child(${y}) .box:nth-child(${x})`).html(' ');
  y += 1;
  $(`.row:nth-child(${y}) .box:nth-child(${x})`).html('O');
  pos[0] = pos[0] + 1;
}

function loop() {
  setTimeout(function() {
    move(snake.direction, snake.position);
    setTimeout(loop(), 300);
  }, 300);
}

function checkLoss(x, y) {
  return !(x >= 0 &&
         x <= 22 &&
         y >= 0 &&
         y <= 22);
}
