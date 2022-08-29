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
                url: "",
                dataType: "json",
                data: $(this).serialize(),
                sucess: function(respuesta){
                    //ocultar barra
                    if (respuesta.error == 1) {
                        //mensaje
                        //el email ya existe
                        alert("el email ya existe");
                    }
                    if (respuesta.error == 2) {
                        //mensaje
                        //el password sea invalido
                        alert("el password sea invalido");
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