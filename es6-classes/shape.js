/* exported Shape */

class Shape {
  constructor(area, perimeter) {
    this.area = area;
    this.perimeter = perimeter;
  }

  describe() {
    return "The shape's area is " + this.area + " and it's perimeter is " + this.perimeter + '.';
  }
}

const square = new Shape(4, 8);
console.log('value of square.describe:', square.describe());
