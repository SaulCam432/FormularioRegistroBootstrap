function incluirUsuario(){
    /*
    -En el body
    -En el elemento submit
    -Donde se encuentre el formulario especificado por su id con #
    -cuando ocurra se evalia e evento
    */
    $("body").on("submit", "#formLogin", function(event){
        //Prevenir que se ejecute sin la condicion 
        event.preventDefault();
        //Verificar que los datos son validos
        if ($("#formLogin").valid()) {
            //barra

            //peticiones ajax
            $.ajax({
                type: "POST",
                url: "backend/registrarUsuarios.php?option=incluirUsuario",
                dataType: "json",
                data: $(this).serialize(),
                sucess: function(respuesta){
                    //ocultar barra
                    if (respuesta.error == 1) {
                        //mensaje
                        //el email es invalido
                        alert("el email es invalido");
                    }
                    if (respuesta.error == 2) {
                        //mensaje
                        //el password sea invalido
                        alert("el password sea invalido");
                    }
                    if (respuesta.error == 3) {
                        //mensaje
                        //el email ya existe
                        alert("ya existe el email");
                    }
                    if (respuesta.exito == 1) {
                        //mensaje
                        //la cuenta fue creada
                        alert("La cuenta fue creada");
                        //limpiar formulario
                        document.querySelector("#nombre").value="";
                        document.querySelector("#ap").value="";
                        document.querySelector("#am").value="";
                        document.querySelector("#edad").value="";
                        document.querySelector("#tel").value="";
                        document.querySelector("#email").value="";
                        document.querySelector("#psw").value="";
                        

                        //tiempo de espera
                        setTimeout(function(){
                            //redirigir a otra ventana
                            window.location.href="gracias.php";
                        }, 5000);
                        
                    }

                }
            })
        }
    })
}