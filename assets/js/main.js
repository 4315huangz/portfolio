document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.getElementById('typing-text');
    const text = textElement.textContent;
    textElement.textContent = ''; // Clear the text content initially
    let index = 0;

    function type() {
        if (index < text.length) {
            textElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100); // Adjust typing speed (milliseconds)
        }
    }

    type();
});
