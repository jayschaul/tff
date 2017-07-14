(function() {
  var containers = document.querySelectorAll('.container-fluid');
  for (var i = 0; i < containers.length; i++) {
    var container = containers[i];
    container.style.height = window.innerHeight + 'px';
  }


  var images = [];
  for (var i = 1; i <= 6; i++) {
    var image = new Image()
    image.src = 'images/freelancer-' + i + '.jpg';
    images.push(image);
    console.log(drawPoint(100, i, 6));
  }

  function drawPoint(r, currentPoint, totalPoints) {
    var theta = ((Math.PI * 2) / totalPoints);
    var angle = (theta * currentPoint);

    var x = (100 * Math.cos(angle));
    var y = (100 * Math.sin(angle));

    return {x: x, y: y}
  }

}());

