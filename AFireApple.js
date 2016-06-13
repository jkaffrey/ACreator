'use strict';

//length = 2n - 1
function createA(n) {

  var output = '';

  if (n % 2 !== 0) {
    n = (n - 1);
  }

  if (n < 4) {
    return output;
  }

  for (var i = 0; i < n + 1; i++) {

    var empty = new Array(2*n - 1).join(' ').split(' ');
    var As = new Array(i + 1).join('A');

    for (var j = 0; j < i + 1; j++) {
      var center = Math.floor(empty.length / 2);
      for (var adex = 0; adex < As.length; adex++) {

        empty[center - adex] = 'A';
      }
    }

    if (i !== (n/2) + 1) {
      for (var fA = empty.indexOf('A') + 1; fA < empty.lastIndexOf('A'); fA++) {

        empty[fA] = ' ';
      }
    }

    output += empty.join(' ') + '\n';
  }

  return output;
}

var aTests = [4, 5, 8, 12, 16, 24];

for (var i = 0; i < aTests.length; i++) {

  console.log(createA(aTests[i]));
  console.log(new Array(10).join('-'));
}
//console.log(createA(12));
