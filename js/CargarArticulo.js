function AgregarArticulo(){
    var Grupo=document.querySelector("#Area");
    var area=Grupo.options[Grupo.selectedIndex].text;
    switch (area) 
    {
        case "Portada":
            var html='';
            
            var elementos=document.getElementsByClassName("I_General");

            var num=elementos.length+1;
            
            var titulo= document.querySelector("#Titulo").value;
            var contenido=document.querySelector("#Descripcion").value;

            var elemento4 = document.querySelector("#Contenido_2");

            var elemento4_titulo=elemento4.querySelector("b").textContent;
            var elemento4_imagen=elemento4.querySelector("img").src;

            html='<div class="col-lg-3 mt-2 item I_General"><h6><b>' + elemento4_titulo + '</b></h6></a><img class="img-fluid img-n" src="' + elemento4_imagen + '"></div>'  ;  

            var Items=document.querySelector("#Items");
                Items.innerHTML=html+Items.innerHTML;

            var elemento3 = document.querySelector("#Contenido_1");

            var elemento3_titulo=elemento3.querySelector("b").textContent;
            var elemento3_imagen=elemento3.querySelector("img").src;

            html='<h6 class="I_General"><b>' + elemento3_titulo + '</b></h6><img class="img-fluid img-3" src="'+ elemento3_imagen + '">';

            elemento4.innerHTML=html;

            var elemento2 = document.querySelector("#Principal");

            var elemento2_titulo=elemento2.querySelector("h2").textContent;
            var elemento2_imagen=elemento2.querySelector("img").src;

            html='<h6 class="I_General"><b>' + elemento2_titulo + '</b></h6><img class="img-fluid img-3" src="'+ elemento2_imagen + '">';

            elemento3.innerHTML=html;

            // Se carga nuevo Articulo sin Imagen debido a las restricciones de seguridad de navegadores
            html='<h2 class="I_General"><b>' + titulo + '</b></h2><h5>' + contenido + '</h5><img class="img-fluid img-3" src="imagen/sinimagen.png">';

            elemento2.innerHTML=html;

            var seccion=document.querySelector("#C_General");
            seccion.textContent="Cantidad de Articulos: " + num;

            break;
        case "Nacional":
            var html='';
            var elementos=document.getElementsByClassName("I_Nacional");

            var num=elementos.length+1;

            var titulo= document.querySelector("#Titulo").value;
            var contenido=document.querySelector("#Descripcion").value;

            // Se carga nuevo Articulo sin Imagen debido a las restricciones de seguridad de navegadores
            html='<div class="col-lg-4 mt-2 item I_Nacional"><h6><b>' + titulo + '</b></h6></a><img class="img-fluid img-n" src="imagen/sinimagen.png"></div>'  ;  

            var Items=document.querySelector("#Nacional");
                Items.innerHTML=html+Items.innerHTML;

            var seccion=document.querySelector("#C_Nacional");
            seccion.textContent="Cantidad de Articulos: " + num;

            break;
        case "Internacional":
            var html='';
            var elementos=document.getElementsByClassName("I_Internacional");

            var num=elementos.length+1;

            var titulo= document.querySelector("#Titulo").value;
            var contenido=document.querySelector("#Descripcion").value;

            // Se carga nuevo Articulo sin Imagen debido a las restricciones de seguridad de navegadores
            html='<div class="col-lg-4 mt-2 item I_Internacional"><h6><b>' + titulo + '</b></h6></a><img class="img-fluid img-n" src="imagen/sinimagen.png"></div>'  ;  

            var Items=document.querySelector("#Internacional");
                Items.innerHTML=html+Items.innerHTML;

            var seccion=document.querySelector("#C_Internacional");
            seccion.textContent="Cantidad de Articulos: " + num;

            break;

            break;
    }

    document.querySelector("#Titulo").value="";
    document.querySelector("#Descripcion").value="";

    var tnum=0;
    var elementos=document.getElementsByClassName("I_General");

    tnum+=elementos.length;

    elementos=document.getElementsByClassName("I_Nacional");

    tnum+=elementos.length;

    elementos=document.getElementsByClassName("I_Internacional");

    tnum+=elementos.length;

    var tseccion=document.querySelector("#C_Total");
    tseccion.textContent="Cantidad de Articulos: " + tnum;
}