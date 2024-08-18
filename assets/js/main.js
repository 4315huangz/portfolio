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

