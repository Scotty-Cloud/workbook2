function distance(x1, y1, x2, y2) {
  var dx = x1 - x2;

  var dy = y1 - y2;

  return Math.sqrt(dx * dx + dy * dy);
}

var distance = distance(10, 20, 30, 40);

console.log(distance.toFixed(2));
