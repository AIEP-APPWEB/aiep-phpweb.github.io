<?php

class RegistroController {
    private $nombre;
    private $password;
    private $email;
    public function RegistrarUsuario() {
        require_once 'Models/UsuarioModel.php';
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            
            $nombre = $_POST['nombreU'];
            $password = $_POST['pass'];
            $email = $_POST['correo'];
            
            $Usuario=new Usuario($nombre,$password,$email);

            //require_once("Controllers/home.php");
        }
    }
}
    
?>