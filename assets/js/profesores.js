// Lista de profesores simulada
const profesores = [
    {
        nombre: "Ing. Jose Martinez",
        especialidad: "Ingeniero en desarrollo de software",
        telefono: "818-246-78-97",
        email: "joseMartinez@gmail.com",
        foto: "img/jose.jpg"
    },
    {
        nombre: "Ing. Maria Vazquez",
        especialidad: "Ingeniera en sistemas computacionales",
        telefono: "818-635-63-23",
        email: "mariaVazquez@gmail.com",
        foto: "img/maria.jpg"
    },
    {
        nombre: "Ing. Juan Molina",
        especialidad: "Ingeniero en redes y telecomunicaciones",
        telefono: "818-634-42-24",
        email: "juanMolina@gmail.com",
        foto: "img/juan.jpg"
    }
];

// Crear el contenedor dinámicamente si no existe
document.addEventListener("DOMContentLoaded", () => {
    if (!document.getElementById("lista-profesores")) {
        const main = document.createElement("div");
        main.id = "lista-profesores";
        document.body.appendChild(main);
    }
    mostrarProfesores(profesores);
});

// Función para mostrar los profesores en la lista
function mostrarProfesores(lista) {
    const contenedor = document.getElementById("lista-profesores");
    contenedor.innerHTML = ""; // Limpiar la lista antes de actualizar

    lista.forEach((profesor, index) => {
        const profesorElemento = document.createElement("div");
        profesorElemento.classList.add("profesor");

        profesorElemento.innerHTML = `
            <img src="${profesor.foto}" alt="${profesor.nombre}">
            <div class="info">
                <h3>${profesor.nombre}</h3>
                <p>${profesor.especialidad}</p>
                <p>${profesor.telefono}</p>
                <p>${profesor.email}</p>
            </div>
            <div class="acciones">
                <button class="ver-mas" data-index="${index}">Ver más</button>
                <button class="descargar" data-index="${index}">Descargar</button>
                <button class="eliminar" data-index="${index}">Eliminar</button>
            </div>
        `;
        contenedor.appendChild(profesorElemento);
    });

    agregarEventosBotones();
}

// Función para agregar eventos a los botones
function agregarEventosBotones() {
    document.querySelectorAll(".ver-mas").forEach((boton) => {
        boton.addEventListener("click", (e) => {
            const index = e.target.dataset.index;
            alert(`Más información sobre: ${profesores[index].nombre}`);
        });
    });

    document.querySelectorAll(".descargar").forEach((boton) => {
        boton.addEventListener("click", (e) => {
            const index = e.target.dataset.index;
            alert(`Descargando CV de: ${profesores[index].nombre}`);
        });
    });

    document.querySelectorAll(".eliminar").forEach((boton) => {
        boton.addEventListener("click", (e) => {
            const index = e.target.dataset.index;
            eliminarProfesor(index);
        });
    });
}

// Función para eliminar un profesor de la lista
function eliminarProfesor(index) {
    profesores.splice(index, 1);
    mostrarProfesores(profesores);
}

// Función para agregar un profesor nuevo
document.getElementById("agregar-profesor").addEventListener("click", function () {
    let nombre = prompt("Nombre del profesor:");
    let especialidad = prompt("Especialidad:");
    let telefono = prompt("Teléfono:");
    let email = prompt("Email:");
    let foto = "img/default.jpg"; // Imagen por defecto

    if (!nombre || !especialidad || !telefono || !email) {
        alert("Todos los campos son obligatorios.");
        return;
    }

    profesores.push({ nombre, especialidad, telefono, email, foto });
    mostrarProfesores(profesores);
});

// Función para filtrar profesores por búsqueda
document.getElementById("buscar-profesor").addEventListener("input", function () {
    const valor = this.value.toLowerCase();
    const filtrados = profesores.filter(profesor =>
        profesor.nombre.toLowerCase().includes(valor) ||
        profesor.especialidad.toLowerCase().includes(valor) ||
        profesor.email.toLowerCase().includes(valor)
    );

    mostrarProfesores(filtrados);
});
