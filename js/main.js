'use strict';

var rows = 40;
var cols = 40;

var grid = [];

fillGrid(rows, cols, grid);

function fillGrid(height, width, gridArr) {
  for (var i = 0; i < rows; i++) {
    gridArr.push([]);
    for (var j = 0; j < cols; j++) {
      gridArr[i].push(' ');
    }
  }
}