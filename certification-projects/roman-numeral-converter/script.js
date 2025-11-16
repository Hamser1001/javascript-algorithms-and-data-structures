const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");
const msgContainer = document.getElementById("error-message");

const numeralToRoman = [
    [0, ""],
    [1, "I"],
    [4, "IV"],
    [5, "V"],
    [9, "IX"],
    [10, "X"],
    [40, "XL"],
    [50, "L"],
    [90, "XC"],
    [100, "C"],
    [400, "CD"],
    [500, "D"],
    [900, "CM"],
    [1000, "M"]
];

const inputChecker = (input) => {
    if (input === "") {
        output.innerText = "Please enter a valid number";
        return false;
    } else if (parseInt(input) <= -1) {
        output.innerText = "Please enter a number greater than or equal to 1";
        return false;
    } else if (parseInt(input) > 4000) {
        output.innerText = "Please enter a number less than or equal to 3999";
        return false;
    }
    return true;
}

const convertNumeralToRoman = (input) => {
    const convertedNumber = [];
    const numberAsArray = input.split("");

    const numberalAsArray = numberAsArray.map((digit, index) => {
        const zeros = numberAsArray.length - index - 1;
        return digit + '0'.repeat(zeros);
    })
    // Print the retuern array by map on 
    console.log(numberalAsArray);

    // for (let number of numberalAsArray) {
    //     console.log(number);
    //     for (let roman of numeralToRoman) {
    //         if (number == roman[1]) {
    //             convertedNumber.push(roman[0]);
    //         }
    //         console.log(number);


    //     }
    // }
    // console.log(convertedNumber);

    return input;
}

convertBtn.addEventListener("click", () => {
    msgContainer.style.display = 'flex';
    if (!inputChecker(numberInput.value)) return;
    // console.log(convertNumeralToRoman(numberInput.value));
    output.innerText = convertNumeralToRoman(numberInput.value);
    numberInput.value = "";
});