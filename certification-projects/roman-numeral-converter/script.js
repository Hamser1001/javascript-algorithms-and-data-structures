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


const convertNumeralToRoman = (input) => {
    
    const result = [];
    numeralToRoman.forEach((array) => {
        while (input >= array[0]) {
            result.push(array[1]);
            input -= array[0];
        }
    });
    console.log(result);
    return result.join('');
}

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

convertBtn.addEventListener("click", () => {
    msgContainer.style.display = 'flex';
    if (!inputChecker(numberInput.value)) return;
    // console.log(convertNumeralToRoman(numberInput.value));
    output.innerText = convertNumeralToRoman(numberInput.value);
    numberInput.value = "";
});