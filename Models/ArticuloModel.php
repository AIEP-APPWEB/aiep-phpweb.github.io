<?php
class Articulo {
    private $Titulo;
    private $Categoria;
    private $Contenido;
    private $Imagen;
    private $Link;
    private $Tipo;
    function __construct($TituloE, $CategoriaE, $ContenidoE, $ImagenE, $TipoE) {
        $this->$Titulo = $TituloE;
        $this->$Categoria = $CategoriaE;
        $this->$Contenido = $ContenidoE;
        $this->$Imagen = $ImagenE;
        $this->$Tipo = $TipoE;
    }
}
?>