document.addEventListener('DOMContentLoaded', function(){ //Espera a que el contenido del DOM este completamente cargado
    // Manejo del formulario de registro
    const formularioRegistro = document.getElementById('formularioRegistro');
    const mensajeRegistro = document.getElementById('mensajeRegistro')

    if(formularioRegistro){
        formularioRegistro.addEventListener('submit', function(e){
            e.preventDefault();


            const nombreUsuario = document.getElementById('nombreUsuario').value;
            const contrasena = document.getElementById('contrasena').value;

            if(nombreUsuario && contrasena){
                localStorage.setItem('nombreUsuario',  nombreUsuario);
                localStorage.setItem('contrasena', contrasena);

                mensajeRegistro.style.color = 'green'
                mensajeRegistro.textContent = '¡Registro exitoso!!'
            } else{
                mensajeRegistro.style.color = 'red'
                mensajeRegistro.textContent = '¡Error! Debes llenar todos los campos'
            }
        })
    };

    // ------------------------------------------------------------------------------------

    const formularioLogin = document.getElementById('formularioLogin');
    const mensajeLogin = document.getElementById('mensajeLogin')

    if(formularioLogin){
        formularioLogin.addEventListener('submit', function(e){
            e.preventDefault();


            const usuarioLogin = document.getElementById('usuarioLogin').value;
            const contrasenaLogin = document.getElementById('contrasenaLogin').value;

            const nombreUsuarioAlmacenado = localStorage.getItem('nombreUsuario');
            const contrasenaAlmacenada = localStorage.getItem('contrasena')

            if(usuarioLogin === nombreUsuarioAlmacenado && contrasenaLogin === contrasenaAlmacenada){

                mensajeLogin.style.color = 'green'
                mensajeLogin.textContent = '¡Inicio de sesión!!'
            } else{
                mensajeLogin.style.color = 'red'
                mensajeLogin.textContent = '¡Error! Nombre de usuario o contraseña incorrectos.'
            }
        })
    };

});