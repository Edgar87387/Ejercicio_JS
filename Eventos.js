const loginForm = document.getElementById("loginForm");
const loginError = document.getElementById("loginError");
const forgotPassword = document.getElementById("forgotPassword");
const passwordModal = document.getElementById("passwordModal");
const closeModal = document.getElementById("closeModal");
const resetButton = document.getElementById("resetButton");
const resetEmail = document.getElementById("resetEmail");
const resetMessage = document.getElementById("resetMessage");
const usuarioCorrecto = "usuario@gmail.com";
const passwordCorrecta = "123456";

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const usuario = document.getElementById("usuario").value;
    const password = document.getElementById("password").value;

    if (usuario === usuarioCorrecto && password === passwordCorrecta) {

        loginError.classList.remove("show");
        alert("Inicio de sesión correcto");

    } else {

        loginError.classList.add("show");

    }

});

forgotPassword.addEventListener("click", function(event) {

    event.preventDefault();
    passwordModal.classList.add("show");

});

closeModal.addEventListener("click", function() {

    passwordModal.classList.remove("show");

});

resetButton.addEventListener("click", function() {

    const email = resetEmail.value;
    if (email === "") {
        resetMessage.style.color = "red";
        resetMessage.textContent =
            "Escribe tu correo electrónico.";
        return;
    }

    resetMessage.style.color = "green";
    resetMessage.textContent =
        "Se ha enviado un enlace para restablecer tu contraseña.";

});