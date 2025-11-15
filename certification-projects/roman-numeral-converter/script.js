const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");
const msgContainer = document.getElementById("error-message");

const numeralToRoman = {
    0: "Null",
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M"
};

const inputChecker = (input) => {
    if (input === "") {
        output.innerText = "Please enter a valid number";
    } else if (parseInt(input) <= -1) {
        output.innerText = "Please enter a number greater than or equal to 1";
    } else if (parseInt(input) > 4000) {
        output.innerText = "Please enter a number less than or equal to 3999";
    }
}

const convertNumeralToRoman = () => { }

convertBtn.addEventListener("click", () => {
    msgContainer.style.display = 'flex';
    inputChecker(numberInput.value);

});