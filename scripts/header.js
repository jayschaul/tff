(function() {
  var header = document.querySelector('header');
  var fader = document.getElementById('fader-barely-know-her');
  var container = document.querySelectorAll('.container-fluid')[1];
  var height = container.offsetHeight - 100;
  window.addEventListener('scroll', function() {
    var offset = window.pageYOffset;
    if (offset > height) {
      header.className = 'scrolled';
    } else {
      header.className = '';
    }

    fader.style.opacity = (0.7 + (offset / height * 0.3));
  })
}());
