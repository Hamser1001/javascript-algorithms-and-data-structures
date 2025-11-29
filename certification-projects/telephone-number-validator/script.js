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

checkBtn.addEventListener("click", () => {
    if (userInput.value === "") {
        alert("Please provide a phone number");
    }
    console.log(userInput.value);
    result.innerText = userInput.value;
})

clearBtn.addEventListener("click", () => {
    userInput.value = "";
    result.innerText = "";
})