//--------------------header and footer----------------------
function loadHTML(selector, file) {
    fetch(file)
    .then(response => response.text())
    .then(data => document.querySelector(selector).innerHTML = data)
    .catch(error => console.error("Error loading HTML: ", error));
}
document.addEventListener("DOMContentLoaded", function() {
    loadHTML("#header", "header.html");
    loadHTML("#footer", "footer.html");
});

//--------------------resume---------------------------------
document.addEventListener('DOMContentLoaded', function() {
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
document.getElementById("scrollButton").addEventListener("click", function() {
    document.getElementById("about").scrollIntoView({ behavior: 'smooth' });
});

//--------------------message---------------------------------
const spreedsheetURL = "https://script.google.com/macros/s/AKfycbx6WqH-y4zYd5f_XOQyPHu2pVTgKJZHDfkMz_wNhwHBf8O_pZc_Cs3t49MXFLHi6DMx/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", e => {
    e.preventDefault(); 
    console.log("Form submission started.")
    fetch(spreedsheetURL, { method: "POST", body: new FormData(form)})
    .then(response => {
        console.log("Form submission response:", response);
        msg.innerHTML = "Message sent successfully!"
        setTimeout(function(){
            msg.innerHTML = ""
        }, 5000)
        form.reset()
    })
    .catch(error => {
        console.error("Error!", error.message);
    });
})