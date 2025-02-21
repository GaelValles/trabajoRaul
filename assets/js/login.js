document.addEventListener("DOMContentLoaded", () => {
    console.log("Página de login cargada correctamente");

    const loginForm = document.getElementById("login-form");
    const errorMsg = document.getElementById("error-msg");

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        
        if (username !== "admin" || password !== "1234") {
            errorMsg.style.display = "block";
        } else {
            alert("Inicio de sesión exitoso");
            window.location.href = "index.html"; // Redirigir al inicio
        }
    });
});
