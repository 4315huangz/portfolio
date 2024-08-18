//--------------------header and footer----------------------
function loadHTML(selector, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => document.querySelector(selector).innerHTML = data)
        .catch(error => console.error("Error loading HTML: ", error));
}
document.addEventListener("DOMContentLoaded", function () {
    loadHTML("#header", "header.html");
    loadHTML("#footer", "footer.html");
});

//--------------------resume---------------------------------
document.addEventListener('DOMContentLoaded', function () {
    const textElement = document.getElementById('typing-text');
    const text = textElement.textContent;
    textElement.textContent = '';
    let index = 0;

    function type() {
        if (index < text.length) {
            textElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100);
        }
    }
    type();
});

//--------------------pet---------------------------------
document.getElementById("scrollButton").addEventListener("click", function () {
    document.getElementById("about").scrollIntoView({ behavior: 'smooth' });
});

//--------------------message---------------------------------
const scriptURL = "https://script.google.com/macros/s/AKfycbxbdjSwQmeu8LLWuTg8PVD5PZB0sAvKsCTu5NgxNTJPvhe_o1_I0K0uZ2kifT_xW4kO/exec";
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successfully!";
            setTimeout(function() {
                msg.innerHTML = "";
            }, 5000)
            form.reset();
        })
        .catch(error => console.error('Error!', error.message));
})