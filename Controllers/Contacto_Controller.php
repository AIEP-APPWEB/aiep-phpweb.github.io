<?php

class ContactoController {
    private $nombre;
    private $email;
    private $mensaje;
    public function enviarMensaje() {
        require_once 'Models/ContactoModel.php';
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            
            $nombre = $_POST['nombreUsuario'];
            $email = $_POST['correoE'];
            $mensaje = $_POST['Mensaje'];
            
            $Contacto=new Contacto($nombre,$email,$mensaje);

            $Contacto->ImprimirMensaje();

            require_once("Controllers/home.php");
        }
    }
}

?>