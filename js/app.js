const text = "I'm Alice Esi Dawson."; // The text to type
const typingElement = document.getElementById("typing");

let index = 0;
let typingSpeed = 150; // Speed of typing
let delayBeforeRestart = 2000; // Pause before restarting

function typeEffect() {
    if (index < text.length) {
        typingElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, typingSpeed); // Continue typing
    } else {
        setTimeout(resetTyping, delayBeforeRestart); // Wait before restarting
    }
}

function resetTyping() {
    typingElement.innerHTML = ""; // Clear the text
    index = 0; // Reset the index
    typeEffect(); // Restart typing effect
}

typeEffect(); // Start the typing effect
