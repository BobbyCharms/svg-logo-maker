const { Triangle, Circle, Square } = require('./shapes');

// Creating a test to verify the shape is a triangle 
describe('Triangle', () => {
 it('If triangle is selected, a triangle should be returned.', () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual(`<polygon points=\"0, 250 500, 500 500, 0\" fill=\"blue\"/>`);
 });
});

describe('Circle', () => {
 it('If circle is selected, a circle should be returned.', () => {
    const shape = new Circle();
    shape.setColor("blue");
    expect(shape.render()).toEqual(`<circle cx=\"250\" cy=\"250\" r=\"250\" fill=\"blue\"/>`);
 });
});

describe('Square', () => {
 it('If square is selected, a square should be returned.', () => {
    const shape = new Square();
    shape.setColor("blue");
    expect(shape.render()).toEqual(`<rect x=\"0\" y=\"0\" width=\"500\" height=\"500\" fill=\"blue\"/>`);
 });
});