var items =  [];
var elem = document.getElementById('roll-bar');

function shape1() {
  return document.getElementById('shape1').cloneNode(true);
}

function shape2() {
  return document.getElementById('shape2').cloneNode(true);
}

function shape3() {
  return document.getElementById('shape3').cloneNode(true);
}

function shape4() {
  return document.getElementById('shape4').cloneNode(true);
}

function shape5() {
  return document.getElementById('shape5').cloneNode(true);
}

function shape6() {
  return document.getElementById('shape6').cloneNode(true);
}

var i = 0;
var items = [shape1(), shape2(), shape3(), shape4(), shape5(), shape6()];
function appendShape() {
  var item = items[i % items.length].cloneNode(true);
  item.style.right = '-300px';
  elem.appendChild(item);
  setTimeout(function() {
    item.className += ' roll-baby';
  }, 100);
  i++
}

setInterval(function() {
  appendShape()
}, 2800);
