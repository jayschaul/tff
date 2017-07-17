(function() {
  var containers = document.querySelectorAll('#top');
  for (var i = 0; i < containers.length; i++) {
    var container = containers[i];
    container.style.height = window.innerHeight + 'px';
  }

  var $ctas = $('.cta');
  var $join = $('#join');
  $(document).ready(function() {
    $ctas.bind('click', function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $join.offset().top }, 500);
    });
  });
}());
