const rows = 22;
const cols = 22;

const grid = [];


fillGrid(rows, cols, grid);
$('.grid').html(render(grid));

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
