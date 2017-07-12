(function() {
  var containers = document.querySelectorAll('.container-fluid');
  for (var i = 0; i < containers.length; i++) {
    var container = containers[i];
    console.log(container);
    container.style.height = window.innerHeight + 'px';
  }
}());

