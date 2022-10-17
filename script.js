let inputTextArea = document.getElementById("input-textarea");
let characCount = document.getElementById("charac-count");
let wordCount = document.getElementById("word-count");

inputTextArea.addEventListener("input", () => {
    // Counts Numbers of Character
    characCount.textContent = inputTextArea.value.length;
    // Remove whiteSpaces From both sides of a string
    let txt = inputTextArea.value.trim();

    wordCount.textContent = txt.split(/\s+/).filter((item) => item).length;
});