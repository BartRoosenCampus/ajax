"use strict";

const form = {
    name: document.getElementById('name'),
    send: document.getElementById('send'),
};

form.send.addEventListener('click', () => {
    const formData = {naam: form.name.value};
    const data = JSON.stringify(formData);
    ajaxIt(data);
});

function ajaxIt(data) {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "backend.php", true); // Specify the method and PHP script URL
    xhr.setRequestHeader("Content-Type", "application/json"); // Set the content type to JSON

    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                console.log(xhr.responseText);
            } else {
                console.error("Request failed with status:", xhr.status);
            }
        }
    };

    xhr.send(data);

    xhr.onload = function () {
        location.reload();
    }
}
