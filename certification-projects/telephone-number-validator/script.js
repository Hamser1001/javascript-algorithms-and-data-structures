/*
1 555-555-5555
1 (555) 555-5555
1(555)555-5555
1 555 555 5555
5555555555
555-555-5555
(555)555-5555
*/

const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const result = document.getElementById("results-div");

const regex = /1?\s*(\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}/;

checkBtn.addEventListener("click", () => {
    if (userInput.value == "") {
        alert("Please provide a phone number");
    }

    if (regex.test(userInput.value)) {
        result.innerText = "Valid US number: " + userInput.value;
    } else {
        result.innerText = "Invalid US number: " + userInput.value;
    }
    console.log(userInput.value);
    // result.innerText = userInput.value;
})

clearBtn.addEventListener("click", () => {
    userInput.value = "";
    result.innerText = "";
})