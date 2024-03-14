const wrapper = document.querySelector('.wrapper');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconoCerrar = document.querySelector('.icon-close');
const enlaceRecuperar = document.querySelector('.recuperar-link');
const enlaceRegistro = document.querySelector('.register-link');
const enlaceInicioSesion = document.querySelector('.login-link');
const enlaceInicioSesionRecuperar = document.querySelector('.login-link-recuperar'); // Nuevo

btnPopup.onclick = () => {
    wrapper.classList.add('popup-active');
};

iconoCerrar.onclick = () => {
    wrapper.classList.remove('popup-active');
    wrapper.classList.remove('active');
};

enlaceRecuperar.onclick = () => {
    wrapper.querySelector('.login').style.display = 'none';
    wrapper.querySelector('.register').style.display = 'none';
    wrapper.querySelector('.recuperar').style.display = 'block';
};

enlaceRegistro.onclick = () => {
    wrapper.querySelector('.login').style.display = 'none';
    wrapper.querySelector('.register').style.display = 'block';
    wrapper.querySelector('.recuperar').style.display = 'none';
};

enlaceInicioSesion.onclick = () => {
    wrapper.querySelector('.login').style.display = 'block';
    wrapper.querySelector('.register').style.display = 'none';
    wrapper.querySelector('.recuperar').style.display = 'none';
};

// Función para mostrar el formulario de inicio de sesión y ocultar el formulario de recuperación de contraseña
enlaceInicioSesionRecuperar.onclick = () => {
    // Muestra el formulario de inicio de sesión
    wrapper.querySelector('.login').style.display = 'block';
    // Oculta el formulario de recuperación de contraseña
    wrapper.querySelector('.recuperar').style.display = 'none';
};

// Evento click para el botón "Iniciar sesión" desde el botón btnLogin-popup
btnPopup.onclick = () => {
    wrapper.classList.add('popup-active');
    // Mostrar el formulario de inicio de sesión y ocultar los demás
    wrapper.querySelector('.login').style.display = 'block';
    wrapper.querySelector('.register').style.display = 'none';
    wrapper.querySelector('.recuperar').style.display = 'none';
};
