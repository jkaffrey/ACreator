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

    for (var j = 0; j < i + 1; j++) {
      var center = Math.floor(empty.length / 2);
      for (var adex = 0; adex < i; adex++) {

        empty[center - adex] = 'A';
      }
    }

    if (i !== (n/2) + 1) {
      empty.forEach(function(ele, index) {
        if (index > empty.indexOf('A') && index < empty.lastIndexOf('A')) {
          empty[index] = ' ';
        }
      });
    }

    output += empty.join(' ') + '\n';
  }

  return output.replace(/\n\s*$/, '');
}

for (var i = 0; i < 50; i++) {

  console.log(createA(i));
  console.log(new Array(10).join('-'));
}
//console.log(createA(12));
