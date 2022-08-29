<?php
//coneccion a la base de datos
$conn = mysqli_connect("localhost","root","","formulariobotstrap");

$option = $_GET['option'];

if ($option === "incluirUsuario") {
    $nombre = $_POST['nombre'];
    $apellidoPaterno = $_POST['ap'];
    $apellidoMaterno = $_POST['am'];
    $edad = $_POST['edad'];
    $telefono = $_POST['tel'];
    $email = $_POST['email'];
    $psw = $_POST['psw'];


    //Formatos de email y password
    $validarEmail = preg_match('/^[^0-9][a-zA-Z0-9]+([.][a-zA-Z0-9_]+)*[@][a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*)[.][a-zA-Z]{2,4}$/', $email);
    $validarPsw = preg_match("#.*^(?=.{8,20})(?=.*[a-z]).*$#", $psw);

    if ($validarEmail == 0) {
        $data = array('error'=>'1');
        die(json_encode($data));
    }

    if ($validarPsw == 0) {
        $data = array('error'=>'2');
        die(json_encode($data));
    }

    //$psw = encriptar
    
    //Ejecucion de un SQL para insertar datos
    $sql = "INSERT INTO usuarios (idUsuario, nombre, apellidoPaterno, apellidoMaterno, edad, telefono, email, psw, rol) VALUES (NULL, '$nombre', '$apellidoPaterno', '$apellidoMaterno', '$edad', '$telefono', '$email', '$psw', 'usuario')";
    
    if (mysqli_query($conn, $sql)) {
        $data = array('exito'=> '1');
        
        //enviar un email al usuario
        mysqli_close($conn);
        die(json_encode($data));
        
    }else{
        $data = array('error'=>'3');
        die(json_encode($data));
    }

}