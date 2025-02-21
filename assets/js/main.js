document.addEventListener("DOMContentLoaded", () => {
    console.log("Página cargada correctamente");

    // Navegación activa
    const links = document.querySelectorAll("nav ul li a");
    links.forEach(link => {
        link.addEventListener("click", () => {
            links.forEach(l => l.classList.remove("active"));
            link.classList.add("active");
        });
    });

    // Botón 'Conócenos'
    const btnConocenos = document.querySelector(".btn");
    if (btnConocenos) {
        btnConocenos.addEventListener("click", (e) => {
            e.preventDefault();
            window.location.href = "nosotros.html";
        });
    }

    // Modo oscuro/claro
    const themeToggle = document.createElement("button");
    themeToggle.textContent = "Modo Oscuro";
    document.body.appendChild(themeToggle);
    
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
        themeToggle.textContent = document.body.classList.contains("dark-theme") ? "Modo Claro" : "Modo Oscuro";
    });

    // Formulario de inicio de sesión
    const loginForm = document.createElement("form");
    loginForm.innerHTML = `
        <h2>Iniciar Sesión</h2>
        <input type="text" id="username" placeholder="Usuario" required>
        <input type="password" id="password" placeholder="Contraseña" required>
        <button type="submit">Ingresar</button>
        <p id="error-msg" style="color: red; display: none;">Usuario o contraseña incorrectos</p>
    `;
    document.body.appendChild(loginForm);
    
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        if (username !== "admin" || password !== "1234") {
            document.getElementById("error-msg").style.display = "block";
        } else {
            alert("Inicio de sesión exitoso");
        }
    });

    // Sección para agregar y eliminar tarjetas
    const cardSection = document.createElement("div");
    cardSection.innerHTML = `
        <h2>Tarjetas Personalizadas</h2>
        <button id="add-card">Agregar Tarjeta</button>
        <div id="cards-container"></div>
    `;
    document.body.appendChild(cardSection);
    
    const addCardBtn = document.getElementById("add-card");
    const cardsContainer = document.getElementById("cards-container");
    
    addCardBtn.addEventListener("click", () => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <p>Tarjeta personalizada</p>
            <button class="delete-card">Eliminar</button>
        `;
        cardsContainer.appendChild(card);
        
        card.querySelector(".delete-card").addEventListener("click", () => {
            cardsContainer.removeChild(card);
        });
    });
});
