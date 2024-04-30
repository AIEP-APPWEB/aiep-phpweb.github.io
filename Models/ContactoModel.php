<?php
    class Contacto {
        private $nombreU='';
        private $correoU='';
        private $mensajeU='';
        function __construct($nombre, $email, $mensaje) {
            $this->$nombreU = $nombre;
            $this->$correoU = $correo;
            $this->$mensajeU = $mensaje;
            echo('Mensaje Recibido');
        }
        function ImprimirMensaje(){
            echo($this->$mensajeU . '<br>');
            echo('Mensaje Enviado');
        }
    }
?>