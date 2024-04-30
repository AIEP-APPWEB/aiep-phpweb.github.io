<?php
class Usuario {
    private $nombreUsuario;
    private $correoE;
    private $contrasena;
    private $suscripcion;
    function __construct($nombre,$password,$email) {
        $this->$nombreUsuario = $nombre;
        $this->$correoE = $email;
        $this->$contrasena = $password;
        $this->$suscripcion="Estandar";
        echo("Registro Exitoso");
    }
}
?>