function mueveReloj(){
    momentoActual = new Date()
    dia=momentoActual.getDate();
    mes=momentoActual.getMonth();
    año=momentoActual.getFullYear();
    hora = momentoActual.getHours()
    minuto = momentoActual.getMinutes()
    segundo = momentoActual.getSeconds()

    horaImprimible = dia+" / "+mes+" / "+año+" : "+ hora + " : " + minuto + " : " + segundo

    document.form_reloj.reloj.value = horaImprimible

    setTimeout("mueveReloj()",1000)
}