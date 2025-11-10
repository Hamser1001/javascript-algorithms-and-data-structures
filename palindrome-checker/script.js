const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");


const cleanText = (text) => {
    const regex = /[^a-zA-Z0-9]/g;
    const cleanedText = text.replace(regex, '');
    return cleanedText
}


const reverseFunction = (text) => {
    const reversedText = text.toLowerCase().split("").reverse().join("");
    return reversedText;
}


checkBtn.addEventListener("click", () => {
    const cleanedtext = cleanText(textInput.value).toLowerCase().split("").join("")
    const text = reverseFunction(cleanedtext);
    if (cleanedtext == "") {
        alert("Please input a value")
    } else if (cleanedtext == text) {
        result.innerText = `${textInput.value} is a Palindrome`;
    } else {
        result.innerText = `${textInput.value} is not a Palindrome`;
    }
});
