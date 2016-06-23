'use strict';

var rows = 22;
var cols = 22;

var grid = [];

fillGrid(rows, cols, grid);
$('.grid').html(render(grid));
$('.row:nth-child(11) .box:nth-child(11)').html('O');

changeDir();

var snake = {
  position: [11, 11],
  direction: 'r',

  current: [[11, 11]]
};

// fills the grid with space strings
function fillGrid(height, width, gridArr) {
  for (var i = 0; i < rows; i++) {
    gridArr.push([]);
    for (var j = 0; j < cols; j++) {
      gridArr[i].push(' ');
    }
  }
}

// renders the grid on the screen
function render(gridArr) {
  var html = '';

  for (var i = 0; i < gridArr.length; i++) {
    html += '<section class="row">';
    for (var j = 0; j < gridArr[i].length; j++) {
      html += '<div class="box"></div>';
    }
    html += '</section>';
  }
  return html;
}

// listen for keypress and change direction
function changeDir() {
  $(document).keydown(function (e) {
    switch (e.which) {
      case 37:
        // left
        snake.direction = 'l';
        console.log(snake.direction);
        break;

      case 38:
        // up
        snake.direction = 'u';
        console.log(snake.direction);
        break;

      case 39:
        // right
        snake.direction = 'r';
        console.log(snake.direction);
        break;

      case 40:
        // down
        snake.direction = 'd';
        console.log(snake.direction);
        break;

      default:
        return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
  });
}