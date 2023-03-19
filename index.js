const fs = require('fs');
const inquirer = require('inquirer')
const {Triangle, Circle, Square} = require('./lib/shapes');

const colorsOptions =
    ["blue", "black", "white", "maroon", "red", "purple", "green", "yellow", "navy",]

const questions = [
    {
        type: "list",
        message: "Would you like a Triangle, Square, or Circle logo?",
        name: "shape",
        choices: ["Triangle", "Circle", "Square"],
        default: "Triangle"
    },
    {
        type: "input",
        message: "What color would you like for your logo?",
        name: "bkgColor",
        validate: function(input) {
            if (colorsOptions.includes(input.toLowerCase())) {
                return true
            } else {
                return " Please select from blue, black, white, ,maroon, red, purple, green, yellow, or navy."
            }
        }
    },
    {
        type: "list",
        message: "What color would you like your font?",
        name: "fontColor",
        choices: ["Black", "White"],
        default: "Black"
    },
    {
        type: "input",
        message: "Please type in 3 characters (max) for your logo.",
        name: "text",
        validate: function(input) {
            if (input.length < 4 && input.length > 0) {
                return true
            } else {
                return "Your logo can only be between 1-3 characters."
            }
        }
    },
]

const makeFile = function(fileName, data) {
    fs.writeFile(fileName, data, "utf8", (err) => err ? console.log(err) : console.log("You've created a logo.svg file." ));
}

function generateLogo(answers) {
    shape = `${answers.shape}`
    bkgColor = `${answers.bkgColor}`
    fontColor = `${answers.fontColor}`
    text = `${answers.text}`
    let logo;
        if (shape === "Triangle") {
            logo = new Triangle(text, bkgColor, fontColor)
        } else if (shape === "Circle") {
            logo = new Circle(text, bkgColor, fontColor)
        } else {
            logo = new Square(text, bkgColor, fontColor)
        }
    return logo.createShape();
}

inquirer    
    .prompt([...questions])
    .then((answers) => {
        const logo = generateLogo(answers)
        makeFile("logo.svg", logo)
    });