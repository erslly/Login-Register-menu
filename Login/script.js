document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");
    const loginLink = document.getElementById("login-link");
    const registerLink = document.getElementById("register-link");

    loginLink.addEventListener("click", function (event) {
        event.preventDefault();
        loginForm.classList.remove("hidden");
        registerForm.classList.add("hidden");
    });

    registerLink.addEventListener("click", function (event) {
        event.preventDefault();
        loginForm.classList.add("hidden");
        registerForm.classList.remove("hidden");
    });
});
