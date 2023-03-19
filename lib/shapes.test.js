const { Triangle, Circle, Square } = require('./shapes');

// Creating a test to verify the shape is a triangle 
describe('Triangle', () => {
 it('If triangle is selected, a triangle should be returned.', () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="blue" />`);
 });
});

describe('Circle', () => {
 it('If circle is selected, a circle should be returned.', () => {
    const shape = new Circle();
    shape.setColor("blue");
    expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="75" fill="blue" />`);
 });
});

describe('Square', () => {
 it('If square is selected, a square should be returned.', () => {
    const shape = new Square();
    shape.setColor("blue");
    expect(shape.render()).toEqual(`<rect x="10" y="10" width="200" height="200" fill="blue"/>`);
 });
});