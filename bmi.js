const prompt = require('prompt-sync')();

let weight = parseFloat(prompt("Enter your weight in kilograms: "));
let height = prompt(("Enter your height in meters: "));

let bmi = weight / (height * height);

function isNormalWeight(bmi) {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
        return "Normal weight";
    } else if (bmi >= 25 && bmi < 30) {
        return "Overweight";
    } else {
        return "Obese";
    }
}

console.log("Your BMI is: " + bmi + " - " + isNormalWeight(bmi));