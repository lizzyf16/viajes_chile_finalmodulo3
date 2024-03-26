// activa tooltips

const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

// evento click para mostrar alert de boton #sendContact

$(document).ready(function () {
    $("#sendForm").click(function () {
        alert("El correo fue enviado exitosamente...");
    });
});