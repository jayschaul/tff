(function() {
  var points = [
    {x: -3400, y: -4},
    {x: 700, y: 3000},
    {x: 4000, y: 43},
    {x: -800, y: -3234},
    {x: -800, y: 2400},
    {x: 300, y: 4000},
    {x: 2000, y: -2000}
  ];
  var zIndex = 1000;
  var interval = 1200;
  var initialScale = 0.05;
  var finalScale = 10;
  var opacityDuration = 2;

  var pointIndex = Math.floor(Math.random() * (points.length + 1));

  var box = document.getElementById('top');

  var sources = [];
  for (var i = 1; i <= 6; i++) {
    sources.push('images/freelancer-' + i + '.jpg');
  }

  var imageIndex = Math.floor(Math.random() * (sources.length + 1));

  function loadImages(srcs, cb) {
    var loaded = 0;
    var images = [];
    srcs.forEach(function(src) {
      var image = new Image();
      image.onload = function() {
        loaded += 1
        if (loaded == srcs.length) { cb(images) };
      };
      image.src = src;
      images.push(image);
    });
  }

  function animateImage(img, points) {
    var x = points[1].x - points[0].x;
    var y = points[1].y - points[0].y;
    var duration = Math.floor(Math.random() * 200) + 400;
    setTimeout(function() {
      img.style.transform ='scale('+finalScale+') translate3d('+x+'px, '+y+'px, 0px)';
      img.style.transition = 'filter 1s linear, transform ' + duration + 's linear, opacity '+opacityDuration+'s linear';
      img.style.filter = 'blur(0px)';
      img.style.opacity = 1;
    }, 100);
    setTimeout(function() {
      img.remove();
    }, duration * 100);
  }

  function drawImage(i, image) {
    var points = generatePoints(i)
    var img = generateImage(i, image, points[0]);
    img.style.transform = 'scale('+initialScale+')';
    box.appendChild(img);

    animateImage(img, points);
  };

  function generateImage(i, image, point) {
    var img = document.createElement('img');
    img.className = 'point';
    img.src = image.src;
    img.style.width = image.width + 'px';
    img.style.zIndex = zIndex - i;
    img.style.height = image.height + 'px';
    img.style.marginTop = point.y - (image.height / 2) + 'px';
    img.style.marginLeft = point.x - (image.width / 2) + 'px';
    return img;
  }

  function generatePoints() {
    var totalPoints = Math.floor(Math.random() * 6) + 6;
    var currPoint = Math.floor(Math.random() * 6) + 6;
    var radius = Math.floor(Math.random() * 20) + 100;
    var startPoint = {x: 0, y: 0};
    var endPoint = points[pointIndex % points.length];
    pointIndex++;

    return [startPoint, endPoint];
  }

  var i = 0;
  function runIt(images) {
    var doIt = function(idx) {
      var index = imageIndex % images.length;
      var image = images[index];
      drawImage(idx, image);
      imageIndex++;
      i++;
    }

    setInterval(function() {
      doIt(i)
    }, interval);
    doIt(i);
  }

  loadImages(sources, function(images) {
    runIt(images);
  });

}());

