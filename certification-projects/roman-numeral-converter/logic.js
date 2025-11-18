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
    }
    if (parseInt(input) <= -1) {
        output.innerText = "Please enter a number greater than or equal to 1";
        return false;
    }
    if (parseInt(input) > 3999) {
        output.innerText = "Please enter a number less than or equal to 3999";
        return false;
    }
    return true;
}


const convertNumeralToRoman = (input) => {
    let result = [];
    let remaining = input;
    // if numeralToRoman not sorted you can use sort method
    // const sorted = [...numeralToRoman].sort((a, b) => b[0] - a[0]);

    for (let [value, roman] of numeralToRoman) {
        // to see value and roman each time
        // console.log(`value: ${value}, roman: ${roman}, remaining: ${remaining}`)
        while (remaining >= value) {
            // console.log(`Here the value should change, value: ${value}, roman: ${roman}, remaining: ${remaining}`);
            result.push(roman);
            remaining -= value;
        }
    }

    return result.join('');
};

convertBtn.addEventListener("click", () => {
    showUI();
});

const showUI = () => {
    msgContainer.style.display = 'flex';
    if (!inputChecker(numberInput.value)) {
        output.style.border = "1px solid rgba(250, 67, 67, 0.61)";
        output.style.color = "rgb(255, 23, 23)";
        output.style.background = "rgb(255, 225, 225)";
        numberInput.value = "";
        return;
    };
    output.style.border = "1px solid rgba(30, 107, 11, 0.61)";
    output.style.color = "rgba(32, 117, 11, 0.61)";
    output.style.background = "rgba(228, 255, 225, 1)";
    output.innerText = convertNumeralToRoman(Number(numberInput.value));
    numberInput.value = "";
}

numberInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        showUI();
    }
});