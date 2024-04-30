async function CargarArticulos(){
    /// Carga Inicial

    var archivo = await fetch("Datos/Portada.json");
    var datajson=await archivo.json();   

    // Identificamos en el Selector del codigo Html para posicionar la inyeccion del Codigo
    var tabla=document.querySelector("#Portada");
    var html='';
    var html2='';
    var num=0;
    var tnum=0;
    // Iteramos los datos del .json
    for(var i in datajson)
    {
        num+=1;
        // Completamos el codigo html estructurando el codigo como string insertando los datos del .json
        if (i=1){
            html='<h2 class="I_General"><b>' + datajson[i-1].Titulo + '</b></h2><h5>' + datajson[i-1].Contenido + '</h5><img class="img-fluid img-1" src="'+ datajson[i-1].Imagen + '">'
            tabla=document.querySelector("#Principal")
            tabla.innerHTML=html;
        }
        if (i=2){
            html='<h6 class="I_General"><b>' + datajson[i-1].Contenido + '</b></h6><img class="img-fluid img-2" src="'+ datajson[i-1].Imagen + '">'
            tabla=document.querySelector("#Contenido_1")
            tabla.innerHTML=html;
        }
        if (i=3){
            html='<h6 class="I_General"><b>' + datajson[i-1].Contenido + '</b></h6><img class="img-fluid img-3" src="'+ datajson[i-1].Imagen + '">'
            tabla=document.querySelector("#Contenido_2")
            tabla.innerHTML=html;
        }
        
        if (num>3){
            html2+='<div class="col-lg-3 mt-2 item I_General"><a href="'+ datajson[num-1].Link +'"><h6><b>' + datajson[num-1].Titulo + '</b></h6></a><img class="img-fluid img-n" src="' + datajson[num-1].Imagen + '"></div>'    
        }
    }
    var Items=document.querySelector("#Items");
        Items.innerHTML=html2;

    // Creamos un nuevo Elemento y identificamos la seccion para insertar la cantidad de Articulos
    var seccion=document.querySelector("#inicio");
    var numero=document.createElement("div");
    numero.textContent="Cantidad de Articulos: " + num;
    numero.classList="Cant mt-2";
    // Marcamos el nuevo elemto con un id para modificarlo mas tarde
    numero.setAttribute("id", "C_General");
    tnum+=num;
    // Insertamos el nuevo codigo .html al pie de la seccion contenedora de la tabla con la cantidad de los articulos
    seccion.appendChild(numero);

    // Cargamos Seccion Nacional

    archivo = await fetch("Datos/Nacional.json");
    datajson=await archivo.json();   
    html='';
    num=0;

    for(var i in datajson)
    {
        num+=1;
        // Completamos el codigo html estructurando el codigo como string insertando los datos del .json
        
        html+='<div class="col-lg-4 mt-2 item I_Nacional"><a href="'+ datajson[i].Link +'"><h6><b>' + datajson[i].Titulo + '</b></h6></a><img class="img-fluid img-n" src="' + datajson[i].Imagen + '"></div>'    
        
    }

    Items=document.querySelector("#Nacional")
    Items.innerHTML=html;

    seccion=document.querySelector("#Nacionales");
    numero=document.createElement("div");
    numero.textContent="Cantidad de Articulos: " + num;
    numero.classList="Cant mt-2";
    // Marcamos el nuevo elemto con un id para modificarlo mas tarde
    numero.setAttribute("id", "C_Nacional");
    tnum+=num;
    // Insertamos el nuevo codigo .html al pie de la seccion contenedora de la tabla con la cantidad de los articulos
    seccion.appendChild(numero);
    
    // Cargamos Seccion Internacional

    archivo = await fetch("Datos/Internacional.json");
    datajson=await archivo.json();   
    html='';
    num=0;

    for(var i in datajson)
    {
        num+=1;
        // Completamos el codigo html estructurando el codigo como string insertando los datos del .json
        
        html+='<div class="col-lg-4 mt-2 item I_Internacional"><a href="'+ datajson[i].Link +'"><h6><b>' + datajson[i].Titulo + '</b></h6></a><img class="img-fluid img-n" src="' + datajson[i].Imagen + '"></div>'    
    
    }

    Items=document.querySelector("#Internacional")
    Items.innerHTML=html;

    seccion=document.querySelector("#Internacionales");
    numero=document.createElement("div");
    numero.textContent="Cantidad de Articulos: " + num;
    numero.classList="Cant mt-2";
    // Marcamos el nuevo elemto con un id para modificarlo mas tarde
    numero.setAttribute("id", "C_Internacional");
    tnum+=num;
    // Insertamos el nuevo codigo .html al pie de la seccion contenedora de la tabla con la cantidad de los articulos
    seccion.appendChild(numero);


    seccion=document.querySelector("#Pie");
    numero=document.createElement("h5");
    numero.textContent="Cantidad de Articulos: " + tnum;
    numero.setAttribute("id", "C_Total");   

    seccion.appendChild(numero);

}