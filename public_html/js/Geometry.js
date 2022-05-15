// License: GPL. For details, see LICENSE file.
var epsilon = 1e-8;
function pointInsidePolygon(Point, polygon) {
  let x = Point.x;
  let y = Point.y;
  for (let i = 0; i < polygon.length; i++) {
    let p1 = polygon[i];
    let p2 = polygon[(i + 1) % polygon.length];
    let p3 = polygon[(i + 2) % polygon.length];
    let sign1 = Math.sign(x - p2.x);
    let isSeparatingEdge = true;
    if (Math.abs(p1.x - p2.x) < epsilon) {
      var sign2 = Math.sign(p3.x - p2.x);
      if (sign1 * sign2 > epsilon) {
        isSeparatingEdge = false;
      }
    } else {
      let m, c;
      m = (p2.y - p1.y) / (p2.x - p1.x);
      c = (p1.y * (p2.x - p1.x) - p1.x * (p2.y - p1.y)) / (p2.x - p1.x);
      let sign1 = p3.y - m * p3.x - c;
      let sign2 = y - m * x - c;
      if (sign2 * sign1 > 0) {
        isSeparatingEdge = false;
      }
    }
    if (isSeparatingEdge) {
      return false;
    }
  }
  return true;
}

