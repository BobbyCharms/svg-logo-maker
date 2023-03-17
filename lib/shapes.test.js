// Creating a test to verify the shape is a triangle 
describe('Triangle'), () => {
 it('If triangle is selected, a triangle should be returned.'), () => {
    const shape = new Triangle();
    expect(shape.render()).toEqual(`<polygon points="150,0 300,200 10,200" />`);
 }
}