const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");
const msgContainer = document.getElementById("error-message");

const numeralToRoman = [
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
    } else if (parseInt(input) < 0) {
        output.innerText = "Please enter a number greater than or equal to 1";
        return false;
    } else if (parseInt(input) > 4000) {
        output.innerText = "Please enter a number less than or equal to 3999";
        return false;
    }
    return true;
}

const convertNumeralToRoman = (input) => {
    let inputNumber = parseInt(input);
    let result = "";

    for (const [number, roman] of numeralToRoman) {
        if (inputNumber === number) {
            // console.log(roman);
            result += roman
        }
    }
    return result;
}

convertBtn.addEventListener("click", () => {
    msgContainer.style.display = 'flex';
    if (!inputChecker(numberInput.value)) return;
    // console.log(convertNumeralToRoman(numberInput.value));
    output.innerText = convertNumeralToRoman(numberInput.value);
    numberInput.value = "";
});





// const convertNumeralToRoman = (input) => {
//     const convertedNumber = [];
//     const numberAsArray = input.split("");

//     const numberalAsArray = numberAsArray.map((digit, index) => {
//         const zeros = numberAsArray.length - index - 1;
//         return digit + '0'.repeat(zeros);
//     })
//     // Print the return array by map on 
//     console.log(numberalAsArray);
//     outer:
//     for (let i = 0; i < numberalAsArray.length; i++) {
//         console.log(numberalAsArray[i]);
//         inner:
//         for (let j = 0; j < numeralToRoman.length; j++) {
//             if (parseInt(numberalAsArray[i]) == numeralToRoman[j][0]) {
//                 convertedNumber.push(numeralToRoman[j][1]);
//             } 
//             else {
//                 convertedNumber.push("Number");
//                 break inner;
//             }
//         }
//     }

//     // console.log(numberalAsArray);

//     console.log(convertedNumber);
//     const result = convertedNumber.join('');
//     // console.log(result);

//     return result;
// }