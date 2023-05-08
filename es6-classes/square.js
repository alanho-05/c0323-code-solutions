/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Square */

class Square extends Shape {
  constructor(width) {
    super(width * width, width * 4);
    this.width = width;
  }

  describe() {
    return super.describe() + " Square's width is " + this.width + '.';
  }
}

const squareTest = new Square(3);
console.log('description of square:', squareTest.describe());
