const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");
const msgContainer = document.getElementById("error-message");

const numeralToRoman = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"]
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

// const convertNumeralToRoman = (input) => {
//     const convertedNumber = [];
//     const numberAsArray = input.split("");

//     const numberalAsArray = numberAsArray.map((digit, index) => {
//         const zeros = numberAsArray.length - index - 1;
//         return digit + '0'.repeat(zeros);
//     });

//     for (let i = 0; i < numberalAsArray.length; i++) {
//         for (const [number, roman] of numeralToRoman) {
//             if (numberalAsArray) {

//             }
//         }

//     }
//     // Print the retuern array by map on 
//     console.log(numberalAsArray);
//     for (let i = 0; i < numberalAsArray.length; i++) {
//         // console.log(numberalAsArray[i]);
//         // inner:
//         for (const [number, roman] of numeralToRoman) {
//             if (numberalAsArray[i] == number) {
//                 console.log(roman);
//                 convertedNumber.push(roman);
//             }

//         }
//     }

//     console.log(convertedNumber);

//     // return convertedNumber.join('');
// }

const convertNumeralToRoman = (input) => {
    let result = [];
    let remaining = input;
    // if numeralToRoman not sorted you can use sort method
    // const sorted = [...numeralToRoman].sort((a, b) => b[0] - a[0]);

    for (let [value, roman] of numeralToRoman) {
        // to see value and roman each time
        console.log(`value: ${value}, roman: ${roman}, remaining: ${remaining}`)
        while (remaining >= value) {
            console.log(`Roman: ${roman}`)
            result.push(roman);
            remaining -= value;
        }
    }
    output.style.border = "1px solid rgba(104, 250, 67, 0.61)";
    output.style.color = "rgba(48, 175, 16, 0.61)";
    output.style.background = "rgba(228, 255, 225, 1)";
    return result.join('');
};

convertBtn.addEventListener("click", () => {
    msgContainer.style.display = 'flex';
    if (!inputChecker(numberInput.value)) return;
    // console.log(convertNumeralToRoman(numberInput.value));
    output.innerText = convertNumeralToRoman(numberInput.value);
    numberInput.value = "";
});