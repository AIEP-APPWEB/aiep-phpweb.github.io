<?php
    
include 'Controllers/Contacto_Controller.php';
include 'Controllers/Registro_Controller.php';

if(isset($_GET['action'])) {
    $action = $_GET['action'];
} else {
    require_once("Controllers/home.php");
}

$contactoController = new ContactoController();
$UsuarioController = new RegistroController();

switch ($action) {
    case 'enviarMensaje':
        $contactoController->enviarMensaje();
        break;
    case 'RegistrarUsuario':
        $UsuarioController->RegistrarUsuario();
        break;
    default:
        require_once("Controllers/home.php");
        break;
}

?>
