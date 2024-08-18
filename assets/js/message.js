//--------------------message---------------------------------
document.addEventListener('DOMContentLoaded', function() {
    const scriptURL = "https://script.google.com/macros/s/AKfycbxbdjSwQmeu8LLWuTg8PVD5PZB0sAvKsCTu5NgxNTJPvhe_o1_I0K0uZ2kifT_xW4kO/exec";
    const form = document.getElementById('contact-form');
    const msg = document.getElementById("msg");

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const scriptURL = "https://script.google.com/macros/s/AKfycbxbdjSwQmeu8LLWuTg8PVD5PZB0sAvKsCTu5NgxNTJPvhe_o1_I0K0uZ2kifT_xW4kO/exec";
            fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                .then(response => response.json())
                .then(data => {
                    if (data.result === 'success') {
                        msg.innerHTML = "Message sent successfully!";
                        setTimeout(() => msg.innerHTML = "", 5000);
                        form.reset();
                    } else {
                        msg.innerHTML = "Failed to send message.";
                    }
                })
                .catch(error => console.error('Error!', error.message));
        });
    } else {
        console.error('Form not found');
    }
})