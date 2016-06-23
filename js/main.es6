const rows = 40;
const cols = 40;

const grid = [];


fillGrid(rows, cols, grid);

function fillGrid(height, width, gridArr) {
  for (let i = 0; i < rows; i++) {
    gridArr.push([]);
    for (let j = 0; j < cols; j++) {
      gridArr[i].push(' ');
    }
  }
}
