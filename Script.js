document.addEventListener("DOMContentLoaded", () => {

    // Referencias del DOM
    const formLogin = document.getElementById("form-login");
    const inputUsuario = document.getElementById("usuario");
    const inputPassword = document.getElementById("password");
    const mensajeError = document.getElementById("mensaje-error");
    
    const vistaLogin = document.getElementById("vista-login");
    const vistaDashboard = document.getElementById("vista-dashboard");
    const btnLogout = document.getElementById("btn-logout");

    const modalCertificado = document.getElementById("modal-certificado");
    const btnAbrirModal = document.getElementById("btn-abrir-modal");
    const btnCerrarModal = document.getElementById("btn-cerrar-modal");
    const btnCancelarModal = document.getElementById("btn-cancelar-modal");
    const formModal = document.getElementById("form-modal");

    // Login Estudiantil System Plus
    formLogin.addEventListener("submit", (e) => {
        e.preventDefault();

        const usuarioVal = inputUsuario.value.trim();
        const passVal = inputPassword.value.trim();

        // Validación simple 
        if (usuarioVal === "2026" && passVal === "1234") {
            mensajeError.classList.add("oculto");
            vistaLogin.classList.add("oculto");
            vistaDashboard.classList.remove("oculto");
        } else {
            mensajeError.classList.remove("oculto");
        }
    });

    // Cierre de Sesión
    btnLogout.addEventListener("click", () => {
        vistaDashboard.classList.add("oculto");
        vistaLogin.classList.remove("oculto");
        inputPassword.value = "";
        mensajeError.classList.add("oculto");
    });

    // Control de Modal de Certificados
    btnAbrirModal.addEventListener("click", () => modalCertificado.classList.remove("oculto"));
    
    const cerrarModal = () => modalCertificado.classList.add("oculto");
    btnCerrarModal.addEventListener("click", cerrarModal);
    btnCancelarModal.addEventListener("click", cerrarModal);

    formModal.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("✅ Solicitud de certificado enviada a Secretaría de System Plus.");
        cerrarModal();
    });

});