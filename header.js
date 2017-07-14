(function() {
  var header = document.querySelector('header');
  var container = document.querySelectorAll('.container-fluid')[1];
  var height = container.offsetHeight;
  window.addEventListener('scroll', function() {
    var offset = window.pageYOffset;
    if (offset > height) {
      header.className = 'scrolled';
    } else {
      header.className = '';
    }
  })
}());
