class Shape {
    constructor(text, bkgColor, fontColor) {
    this.text = text;
    this.bkgColor = bkgColor;
    this.fontColor = fontColor;
    }
createShape () {
    return `
    <svg version="1.1" width="500" 
    height="500" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="white" />
    ${this.render()}
    <text x="145" y="100" font-size="100" text-anchor="middle" dominant-baseline="central" fill=${this.fontColor}>${this.text}</text>
    </svg>
    `
    }
    setColor(inputColor) {
        return this.bkgColor = inputColor;
      }
};

class Triangle extends Shape {
    constructor(text, bkgColor, fontColor) {
    super(text, bkgColor, fontColor)
    }
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${bkgColor}"/>`
    }
}

class Circle extends Shape {
    constructor(text, bkgColor, fontColor) {
    super(text, bkgColor, fontColor)
    }
    render() {
        return `<circle cx="150" cy="100" r="75" fill="${bkgColor}"/>`
    }
}

class Square extends Shape {
    constructor(text, bkgColor, fontColor) {
    super(text, bkgColor, fontColor)
    }
    render() {
        return `<rect x="10" y="10" width="200" height="200" fill="${bkgColor}"/>`
    }
}


module.exports = {Triangle, Circle, Square}