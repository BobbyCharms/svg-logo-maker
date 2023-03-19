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
    <text x="250" y="250" font-size="75" text-anchor="middle" dominant-baseline="central" fill="${this.fontColor}">${this.text}</text>
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
        return `<polygon points="0, 250 500, 500 500, 0" fill="${this.bkgColor}"/>`
    }
}

class Circle extends Shape {
    constructor(text, bkgColor, fontColor) {
    super(text, bkgColor, fontColor)
    }
    render() {
        return `<circle cx="250" cy="250" r="250" fill="${this.bkgColor}"/>`
    }
}

class Square extends Shape {
    constructor(text, bkgColor, fontColor) {
    super(text, bkgColor, fontColor)
    }
    render() {
        return `<rect x="0" y="0" width="500" height="500" fill="${this.bkgColor}"/>`
    }
}


module.exports = {Triangle, Circle, Square}