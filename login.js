document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('loginForm');
    var errorMessage = document.getElementById('error-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting normally

        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        if (username === "deca24" && password === "LTdecaontop") {
            // Successful login
            errorMessage.style.display = "none";
            window.location.href = "member.html";
        } else {
            // Failed login
            errorMessage.style.display = "block";
        }
    });
});