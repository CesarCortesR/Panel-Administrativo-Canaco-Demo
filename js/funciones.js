
// General

function soloLetras() {
  if (event.keyCode < 48 || event.keyCode < 58) {
      event.returnValue = false;
  }
}

function imgError(image) {
    image.style.display = "none";
}

function videoError(video) {
    video.style.display = "none";
}

///////////   SIEM   //////////

function validar_siem() {

// Formulario

  var nombre_foto = document.getElementById("nombre_foto");
  var titulo_siem = document.getElementById("titulo_siem");
  var descripcion_siem = document.getElementById("descripcion_siem");
  var web_siem = document.getElementById("web_siem");
  var cierto = true;

  if (nombre_foto.value == '') {
    document.getElementById("nombre_foto").style.borderColor = "#f44336";
    cierto = false;
  }else{
    document.getElementById("nombre_foto").style.borderColor = "#d2d6de";
  }

  if (titulo_siem.value == '') {
    document.getElementById("titulo_siem").style.borderColor = "#f44336";
    cierto = false;
  }else{
    document.getElementById("titulo_siem").style.borderColor = "#d2d6de";
  }

  if (descripcion_siem.value == '') {
    document.getElementById("descripcion_siem").style.borderColor = "#f44336";
    cierto = false;
  }else{
    document.getElementById("descripcion_siem").style.borderColor = "#d2d6de";
  }

  if (web_siem.value == '') {
    document.getElementById("web_siem").style.borderColor = "#f44336";
    cierto = false;
  }else{
    document.getElementById("web_siem").style.borderColor = "#d2d6de";
  }

  if (cierto) {
		cierto = false;
    $('#actualizar_siem').modal('show');
	}else{
		return;
	}

}

// Modal
function confirmar_formulario_siem() {
  document.getElementById("formulario_siem").submit();
}


//////////   ACERCA   //////////

// FORMULARIO

function validar_acerca() {

  var nombre_foto_acerca = document.getElementById("nombre_foto_acerca");
  var que_es_acerca = document.getElementById("acerca_que_es");
  var mision_acerca = document.getElementById("acerca_mision");
  var vision_acerca = document.getElementById("acerca_vision");
  var ubicacion_acerca = document.getElementById("acerca_ubicacion");
  var latitud_acerca = document.getElementById("acerca_latitud");
  var longitud_acerca = document.getElementById("acerca_longitud");
  var correo_principal_acerca = document.getElementById("acerca_correo_principal");
  var telefono_principal_acerca = document.getElementById("acerca_telefono_principal");
  var horario_acerca = document.getElementById("acerca_horario");
  var cierto = true;

  if (nombre_foto_acerca.value == '') {
    document.getElementById("nombre_foto_acerca").style.borderColor = "#f44336";
    cierto = false;
  }else{
    document.getElementById("nombre_foto_acerca").style.borderColor = "#d2d6de";
  }

  if (que_es_acerca.value == '') {
      document.getElementById("acerca_que_es").style.borderColor = "#f44336";
      cierto = false;
  }else{
    document.getElementById("acerca_que_es").style.borderColor = "#d2d6de";
  }

  if (mision_acerca.value == '') {
    document.getElementById("acerca_mision").style.borderColor = "#f44336";
    cierto = false;
  }else{
    document.getElementById("acerca_mision").style.borderColor = "#d2d6de";
  }

  if (vision_acerca.value == '') {
    document.getElementById("acerca_vision").style.borderColor = "#f44336";
    cierto = false;
  }else{
    document.getElementById("acerca_vision").style.borderColor = "#d2d6de";
  }

  if (ubicacion_acerca.value == '') {
    document.getElementById("acerca_ubicacion").style.borderColor = "#f44336";
    cierto = false;
  }else{
    document.getElementById("acerca_ubicacion").style.borderColor = "#d2d6de";
  }

  if (latitud_acerca.value == '') {
    document.getElementById("acerca_latitud").style.borderColor = "#f44336";
    cierto = false;
  }else{
    document.getElementById("acerca_latitud").style.borderColor = "#d2d6de";
  }

  if (longitud_acerca.value == '') {
    document.getElementById("acerca_longitud").style.borderColor = "#f44336";
    cierto = false;
  }else{
    document.getElementById("acerca_longitud").style.borderColor = "#d2d6de";
  }

  if (correo_principal_acerca.value == '') {
    document.getElementById("acerca_correo_principal").style.borderColor = "#f44336";
    cierto = false;
  }else{
    document.getElementById("acerca_correo_principal").style.borderColor = "#d2d6de";
  }

  if (telefono_principal_acerca.value == '') {
    document.getElementById("acerca_telefono_principal").style.borderColor = "#f44336";
    cierto = false;
  }else{
    document.getElementById("acerca_telefono_principal").style.borderColor = "#d2d6de";
  }

  if (horario_acerca.value == '') {
    document.getElementById("acerca_horario").style.borderColor = "#f44336";
    cierto = false;
  }else{
    document.getElementById("acerca_horario").style.borderColor = "#d2d6de";
  }

  if (cierto) {
		cierto = false;
    $('#actualizar_acerca').modal('show');
	}else{
		return;
	}

}

// Modal Actualizar Acerca
function confirmar_formulario_acerca() {
  document.getElementById("formulario_acerca").submit();
}


//////////   CONVENIO   //////////

// FORMULARIO

function validar_convenio() {

  var convenio_nombre_institucion = document.getElementById("modal_nombre_institucion");
  var convenio_descripcion_institucion = document.getElementById("modal_descripcion_institucion");
  var convenio_imagen_institucion = document.getElementById("modal_imagen_institucion");
  var cierto = true;

  if (convenio_nombre_institucion.value == '') {
    document.getElementById("modal_nombre_institucion").style.borderColor = "#f44336";
    cierto = false;
  }else{
    document.getElementById("modal_nombre_institucion").style.borderColor = "#d2d6de";
  }

  if (convenio_descripcion_institucion.value == '') {
    document.getElementById("modal_descripcion_institucion").style.borderColor = "#f44336";
    cierto = false;
  }else{
    document.getElementById("modal_descripcion_institucion").style.borderColor = "#d2d6de";
  }

  if (convenio_imagen_institucion.value == '') {
    document.getElementById("modal_imagen_institucion").style.borderColor = "#f44336";
    cierto = false;
  }else{
    document.getElementById("modal_imagen_institucion").style.borderColor = "#d2d6de";
  }

  if (cierto) {
		cierto = false;
    document.getElementById("formulario_convenios").submit();
	}else{
		return;
	}

}

function borrar_convenio() {
    document.getElementById("formulario_eliminar_convenio").submit();
}

function enviar_id_convenios(x){
  document.getElementById('id_convenio').value = x;
}

function enviar_id_actualizar_convenios(id, nombre, descripcion, foto){
  document.getElementById('id_convenio_actualizar').value = id;
  document.getElementById('modal_actualizar_nombre_institucion').value = nombre;
  document.getElementById('modal_actualizar_descripcion_institucion').value = descripcion;
  document.getElementById('modal_actualizar_imagen_institucion').value = foto;
}

// ACTUALIZAR CONVENIO

function actualizar_convenio() {
    var modal_actualizar_nombre_institucion = document.getElementById("modal_actualizar_nombre_institucion");
    var modal_actualizar_descripcion_institucion = document.getElementById("modal_actualizar_descripcion_institucion");
    var modal_actualizar_imagen_institucion = document.getElementById("modal_actualizar_imagen_institucion");
    var cierto = true;

    if (modal_actualizar_nombre_institucion.value == '') {
      document.getElementById("modal_actualizar_nombre_institucion").style.borderColor = "#f44336";
      cierto = false;
    }else{
      document.getElementById("modal_actualizar_nombre_institucion").style.borderColor = "#d2d6de";
    }

    if (modal_actualizar_descripcion_institucion.value == '') {
      document.getElementById("modal_actualizar_descripcion_institucion").style.borderColor = "#f44336";
      cierto = false;
    }else{
      document.getElementById("modal_actualizar_descripcion_institucion").style.borderColor = "#d2d6de";
    }

    if (modal_actualizar_imagen_institucion.value == '') {
      document.getElementById("modal_actualizar_imagen_institucion").style.borderColor = "#f44336";
      cierto = false;
    }else{
      document.getElementById("modal_actualizar_imagen_institucion").style.borderColor = "#d2d6de";
    }

    if (cierto) {
  		cierto = false;
      document.getElementById("formulario_actualizar_convenio").submit();
  	}else{
  		return;
  	}
}



//////////   AFILIACION   //////////

// FORMULARIO

function validar_afiliacion() {

    var titulo_afiliacion = document.getElementById("afiliacion_titulo");
    var descripcion_afiliacion = document.getElementById("afiliacion_descripcion");
    var web_afiliacion = document.getElementById("afiliacion_web");
    var cierto = true;

    if (titulo_afiliacion.value == '') {
      document.getElementById("afiliacion_titulo").style.borderColor = "#f44336";
      cierto = false;
    }else{
      document.getElementById("afiliacion_titulo").style.borderColor = "#d2d6de";
    }

    if (descripcion_afiliacion.value == '') {
      document.getElementById("afiliacion_descripcion").style.borderColor = "#f44336";
      cierto = false;
    }else{
      document.getElementById("afiliacion_descripcion").style.borderColor = "#d2d6de";
    }

    if (web_afiliacion.value == '') {
      document.getElementById("afiliacion_web").style.borderColor = "#f44336";
      cierto = false;
    }else{
      document.getElementById("afiliacion_web").style.borderColor = "#d2d6de";
    }

    if (cierto) {
  		cierto = false;
      $('#actualizar_afiliacion').modal('show');
  	}else{
  		return;
  	}

}

// Modal Actualizar Formulario Afiliacion
function confirmar_formulario_afiliacion() {
  document.getElementById("formulario_afiliacion").submit();
}

// Modal Borrar Beneficio
function confirmar_borrar_beneficio() {
  document.getElementById("formulario_eliminar_beneficio").submit();
}

// Modal Borrar Beneficio
function confirmar_borrar_requisito() {
  document.getElementById("formulario_eliminar_requisito").submit();
}

function agregar_beneficio() {
  var beneficio_afiliacion = document.getElementById("afiliacion_beneficio");
  var cierto = true;

  if (beneficio_afiliacion.value == '') {
    document.getElementById("afiliacion_beneficio").style.borderColor = "#f44336";
    cierto = false;
  }else{
    document.getElementById("afiliacion_beneficio").style.borderColor = "#d2d6de";
  }

  if (cierto) {
    cierto = false;
    document.getElementById("formulario_beneficios").submit();
  }else{
    return;
  }

}

function agregar_requisito() {
  var afiliacion_requisito = document.getElementById("afiliacion_requisito");
  var cierto = true;

  if (afiliacion_requisito.value == '') {
    document.getElementById("afiliacion_requisito").style.borderColor = "#f44336";
    cierto = false;
  }else{
    document.getElementById("afiliacion_requisito").style.borderColor = "#d2d6de";
  }

  if (cierto) {
    cierto = false;
    document.getElementById("formulario_requisitos").submit();
  }else{
    return;
  }
}

function enviar_id_beneficio(x){
  document.getElementById('id_beneficio').value = x;
}

function enviar_id_requisito(y){
  document.getElementById('id_requisito').value = y;
}



//////////   SERVICIOS CANACO   //////////

// Formulario

function validar_servicio() {

  var modal_nombre_servicio = document.getElementById("modal_nombre_servicio");
  var modal_descripcion_servicio = document.getElementById("modal_descripcion_servicio");
  var modal_link_servicio = document.getElementById("modal_link_servicio");
  var cierto = true;

  if (modal_nombre_servicio.value == '') {
    document.getElementById("modal_nombre_servicio").style.borderColor = "#f44336";
    cierto = false;
  }else{
    document.getElementById("modal_nombre_servicio").style.borderColor = "#d2d6de";
  }

  if (modal_descripcion_servicio.value == '') {
    document.getElementById("modal_descripcion_servicio").style.borderColor = "#f44336";
    cierto = false;
  }else{
    document.getElementById("modal_descripcion_servicio").style.borderColor = "#d2d6de";
  }

  if (modal_link_servicio.value == '') {
    document.getElementById("modal_link_servicio").style.borderColor = "#f44336";
    cierto = false;
  }else{
    document.getElementById("modal_link_servicio").style.borderColor = "#d2d6de";
  }

  if (cierto) {
    cierto = false;
    document.getElementById("formulario_servicio").submit();
  }else{
    return;
  }
}

// Modal Borrar Servicio Canaco
function confirmar_borrar_servicio() {
    document.getElementById("formulario_eliminar_servicio").submit();
}

// Modal Actualizar Servicio Canaco
function confirmar_actualizar_servicio() {
    document.getElementById("formulario_actualizar_servicio").submit();
}

function enviar_id_servicios_canaco(x){
  document.getElementById('id_sevicio').value = x;
}

function enviar_id_actualizar_servicios_canaco(id, nombre, descripcion, link){
  document.getElementById('id_convenio_actualizar').value = id;
  document.getElementById('modal_actualizar_nombre_servicio').value = nombre;
  document.getElementById('modal_actualizar_descripcion_servicio').value = descripcion;
  document.getElementById('modal_actualizar_link_servicio').value = link;
}


//////////   TURISMO EVENTOS   //////////

// Formulario

function validar_evento() {

  var nombre_foto_evento = document.getElementById("nombre_foto_evento");
  var nombre_evento = document.getElementById("nombre_evento");
  var descripcion_evento = document.getElementById("descripcion_evento");
  var fecha_evento = document.getElementById("fecha_evento");
  var hora_evento = document.getElementById("hora_evento");
  var lugar_evento = document.getElementById("lugar_evento");
  var municipio_evento = document.getElementById("municipio_evento").selectedIndex;
  var latitud_evento = document.getElementById("latitud_evento");
  var longitud_evento = document.getElementById("longitud_evento");
  var costo_evento = document.getElementById("costo_evento");
  var cierto = true;

  if (nombre_foto_evento.value == '') {
    document.getElementById("nombre_foto_evento").style.borderColor = "#f44336";
    cierto = false;
  }else{
    document.getElementById("nombre_foto_evento").style.borderColor = "#d2d6de";
  }

  if (nombre_evento.value == '') {
    document.getElementById("nombre_evento").style.borderColor = "#f44336";
    cierto = false;
  }else{
    document.getElementById("nombre_evento").style.borderColor = "#d2d6de";
  }

  if (descripcion_evento.value == '') {
    document.getElementById("descripcion_evento").style.borderColor = "#f44336";
    cierto = false;
  }else{
    document.getElementById("descripcion_evento").style.borderColor = "#d2d6de";
  }

  if (fecha_evento.value == '') {
    document.getElementById("fecha_evento").style.borderColor = "#f44336";
    cierto = false;
  }else{
    document.getElementById("fecha_evento").style.borderColor = "#d2d6de";
  }

  if (hora_evento.value == '') {
    document.getElementById("hora_evento").style.borderColor = "#f44336";
    cierto = false;
  }else{
    document.getElementById("hora_evento").style.borderColor = "#d2d6de";
  }

  if (lugar_evento.value == '') {
    document.getElementById("lugar_evento").style.borderColor = "#f44336";
    cierto = false;
  }else{
    document.getElementById("lugar_evento").style.borderColor = "#d2d6de";
  }

  if (municipio_evento == 0) {
    document.getElementById("municipio_evento").style.borderColor = "#f44336";
    cierto = false;
  }else{
    document.getElementById("municipio_evento").style.borderColor = "#d2d6de";
  }

  if (latitud_evento.value == '') {
    document.getElementById("latitud_evento").style.borderColor = "#f44336";
    cierto = false;
  }else{
    document.getElementById("latitud_evento").style.borderColor = "#d2d6de";
  }

  if (longitud_evento.value == '') {
    document.getElementById("longitud_evento").style.borderColor = "#f44336";
    cierto = false;
  }else{
    document.getElementById("longitud_evento").style.borderColor = "#d2d6de";
  }

  if (costo_evento.value == '') {
    document.getElementById("costo_evento").style.borderColor = "#f44336";
    cierto = false;
  }else{
    document.getElementById("costo_evento").style.borderColor = "#d2d6de";
  }

  if (cierto) {
    cierto = false;
    $('#confirmar_agregar_evento').modal('show');
  }else{
    return;
  }

}

// Modal Agregar Evento
function confirmar_agregar_evento() {
    document.getElementById("formulario_turismo_eventos").submit();
}

// Modal Borrar Evento
function confirmar_borrar_evento() {
    document.getElementById("formulario_eliminar_evento").submit();
}

function enviar_id_evento(x){
  document.getElementById('id_evento').value = x;
}

function pasar_id_evento(y) {
  document.getElementById('recibe_id').value = y;
  document.getElementById('formulario_enviar_id_actualizar_evento').submit();
}

// Formulario Actualizar Evento

function validar_actualizar_evento() {

  var actualizar_nombre_foto_evento = document.getElementById("actualizar_nombre_foto_evento");
  var actualizar_nombre_evento = document.getElementById("actualizar_nombre_evento");
  var actualizar_descripcion_evento = document.getElementById("actualizar_descripcion_evento");
  var actualizar_fecha_evento = document.getElementById("actualizar_fecha_evento");
  var actualizar_hora_evento = document.getElementById("actualizar_hora_evento");
  var actualizar_lugar_evento = document.getElementById("actualizar_lugar_evento");
  var actualizar_municipio_evento = document.getElementById("actualizar_municipio_evento").selectedIndex;
  var actualizar_latitud_evento = document.getElementById("actualizar_latitud_evento");
  var actualizar_longitud_evento = document.getElementById("actualizar_longitud_evento");
  var actualizar_costo_evento = document.getElementById("actualizar_costo_evento");
  var cierto = true;

  if (actualizar_nombre_foto_evento.value == '') {
    document.getElementById("actualizar_nombre_foto_evento").style.borderColor = "#f44336";
    cierto = false;
  }else{
    document.getElementById("actualizar_nombre_foto_evento").style.borderColor = "#d2d6de";
  }

  if (actualizar_nombre_evento.value == '') {
    document.getElementById("actualizar_nombre_evento").style.borderColor = "#f44336";
    cierto = false;
  }else{
    document.getElementById("actualizar_nombre_evento").style.borderColor = "#d2d6de";
  }

  if (actualizar_descripcion_evento.value == '') {
    document.getElementById("actualizar_descripcion_evento").style.borderColor = "#f44336";
    cierto = false;
  }else{
    document.getElementById("actualizar_descripcion_evento").style.borderColor = "#d2d6de";
  }

  if (actualizar_fecha_evento.value == '') {
    document.getElementById("actualizar_fecha_evento").style.borderColor = "#f44336";
    cierto = false;
  }else{
    document.getElementById("actualizar_fecha_evento").style.borderColor = "#d2d6de";
  }

  if (actualizar_hora_evento.value == '') {
    document.getElementById("actualizar_hora_evento").style.borderColor = "#f44336";
    cierto = false;
  }else{
    document.getElementById("actualizar_hora_evento").style.borderColor = "#d2d6de";
  }

  if (actualizar_lugar_evento.value == '') {
    document.getElementById("actualizar_lugar_evento").style.borderColor = "#f44336";
    cierto = false;
  }else{
    document.getElementById("actualizar_lugar_evento").style.borderColor = "#d2d6de";
  }

  if (actualizar_municipio_evento.value == '') {
    document.getElementById("actualizar_municipio_evento").style.borderColor = "#f44336";
    cierto = false;
  }else{
    document.getElementById("actualizar_municipio_evento").style.borderColor = "#d2d6de";
  }

  if (actualizar_latitud_evento.value == '') {
    document.getElementById("actualizar_latitud_evento").style.borderColor = "#f44336";
    cierto = false;
  }else{
    document.getElementById("actualizar_latitud_evento").style.borderColor = "#d2d6de";
  }

  if (actualizar_longitud_evento.value == '') {
    document.getElementById("actualizar_longitud_evento").style.borderColor = "#f44336";
    cierto = false;
  }else{
    document.getElementById("actualizar_longitud_evento").style.borderColor = "#d2d6de";
  }

  if (actualizar_costo_evento.value == '') {
    document.getElementById("actualizar_costo_evento").style.borderColor = "#f44336";
    cierto = false;
  }else{
    document.getElementById("actualizar_costo_evento").style.borderColor = "#d2d6de";
  }

  if (cierto) {
    cierto = false;
    $('#confirmar_actualizar_evento').modal('show');
  }else{
    return;
  }
}

function confirmar_actualizar_evento() {
    document.getElementById("formulario_actualizar_turismo_eventos").submit();
}


//////////   NOTICIA   //////////

// Formulario

function validar_noticia() {

  var imagen_noticia = document.getElementById("nombre_foto_noticia");
  var titulo_noticia = document.getElementById("titulo_noticia");
  var fecha_noticia = document.getElementById("fecha_noticia");
  var municipio_noticia = document.getElementById("municipio_noticia").selectedIndex;
  var descripcion_noticia = document.getElementById("descripcion_noticia");
  var url_web_noticia = document.getElementById("url_web_noticia");
  var cierto = true;

  if (imagen_noticia.value == '') {
    document.getElementById("nombre_foto_noticia").style.borderColor = "#f44336";
  }else{
    document.getElementById("nombre_foto_noticia").style.borderColor = "#d2d6de";
  }

  if (titulo_noticia.value == '') {
    document.getElementById("titulo_noticia").style.borderColor = "#f44336";
    cierto = false;
  }else{
    document.getElementById("titulo_noticia").style.borderColor = "#d2d6de";
  }

  if (fecha_noticia.value == '') {
    document.getElementById("fecha_noticia").style.borderColor = "#f44336";
    cierto = false;
  }else{
    document.getElementById("fecha_noticia").style.borderColor = "#d2d6de";
  }

  if (municipio_noticia == 0) {
    document.getElementById("municipio_noticia").style.borderColor = "#f44336";
    cierto = false;
  }else{
    document.getElementById("municipio_noticia").style.borderColor = "#d2d6de";
  }

  if (descripcion_noticia.value == '') {
    document.getElementById("descripcion_noticia").style.borderColor = "#f44336";
    cierto = false;
  }else{
    document.getElementById("descripcion_noticia").style.borderColor = "#d2d6de";
  }

  if (url_web_noticia.value == '') {
    document.getElementById("url_web_noticia").style.borderColor = "#f44336";
    cierto = false;
  }else{
    document.getElementById("url_web_noticia").style.borderColor = "#d2d6de";
  }

  if (cierto) {
    cierto = false;
    $('#agregar_noticia').modal('show');
  }else{
    return;
  }

}

function confirmar_agregar_noticia() {
    document.getElementById("formulario_noticias_agregar").submit();
}

function confirmar_borrar_noticia() {
    document.getElementById("formulario_eliminar_noticia").submit();
}

function enviar_id_noticia(x){
  document.getElementById('id_noticia').value = x;
}

function pasar_id_noticia(y) {
  document.getElementById('recibe_id_noticia').value = y;
  document.getElementById('formulario_enviar_id_actualizar_noticia').submit();
}


// Formulario Actualizar

function validar_actualizar_noticia() {

  var actualizar_titulo_noticia = document.getElementById("actualizar_titulo_noticia");
  var actualizar_fecha_noticia = document.getElementById("actualizar_fecha_noticia");
  var actualizar_municipio_noticia = document.getElementById("actualizar_municipio_noticia").selectedIndex;
  var actualizar_descripcion_noticia = document.getElementById("actualizar_descripcion_noticia");
  var actualizar_url_web_noticia = document.getElementById("actualizar_url_web_noticia");
  var cierto = true;

  if (actualizar_titulo_noticia.value == '') {
    document.getElementById("actualizar_titulo_noticia").style.borderColor = "#f44336";
    cierto = false;
  }else{
    document.getElementById("actualizar_titulo_noticia").style.borderColor = "#d2d6de";
  }

  if (actualizar_fecha_noticia.value == '') {
    document.getElementById("actualizar_fecha_noticia").style.borderColor = "#f44336";
    cierto = false;
  }else{
    document.getElementById("actualizar_fecha_noticia").style.borderColor = "#d2d6de";
  }

  if (actualizar_municipio_noticia.value == '') {
    document.getElementById("actualizar_municipio_noticia").style.borderColor = "#f44336";
    cierto = false;
  }else{
    document.getElementById("actualizar_municipio_noticia").style.borderColor = "#d2d6de";
  }

  if (actualizar_descripcion_noticia.value == '') {
    document.getElementById("actualizar_descripcion_noticia").style.borderColor = "#f44336";
    cierto = false;
  }else{
    document.getElementById("actualizar_descripcion_noticia").style.borderColor = "#d2d6de";
  }

  if (actualizar_url_web_noticia.value == '') {
    document.getElementById("actualizar_url_web_noticia").style.borderColor = "#f44336";
    cierto = false;
  }else{
    document.getElementById("actualizar_url_web_noticia").style.borderColor = "#d2d6de";
  }

  if (cierto) {
    cierto = false;
    $('#actualizar_noticia').modal('show');
  }else{
    return;
  }

}

function confirmar_actualizar_noticia() {
    document.getElementById("formulario_noticias_actualizar").submit();
}


//////////   TURISMO LUGARES   //////////

// Formulario

function validar_lugar() {
    var nombre_foto_lugar = document.getElementById("nombre_foto_lugar");
    var nombre_lugar = document.getElementById("nombre_lugar");
    var tipo_lugar = document.getElementById("tipo_lugar");
    var municipio_lugar = document.getElementById("municipio_lugar").selectedIndex;
    var sinopsis_lugar = document.getElementById("sinopsis_lugar");
    var ubicacion_lugar = document.getElementById("ubicacion_lugar");
    var descripcion_lugar = document.getElementById("descripcion_lugar");
    var latitud_lugar = document.getElementById("latitud_lugar");
    var longitud_lugar = document.getElementById("longitud_lugar");
    var cierto = true;

    if (nombre_foto_lugar.value == '') {
      document.getElementById("nombre_foto_lugar").style.borderColor = "#f44336";
      cierto = false;
    }else{
      document.getElementById("nombre_foto_lugar").style.borderColor = "#d2d6de";
    }

    if (nombre_lugar.value == '') {
      document.getElementById("nombre_lugar").style.borderColor = "#f44336";
      cierto = false;
    }else{
      document.getElementById("nombre_lugar").style.borderColor = "#d2d6de";
    }

    if (tipo_lugar.value == '') {
      document.getElementById("tipo_lugar").style.borderColor = "#f44336";
      cierto = false;
    }else{
      document.getElementById("tipo_lugar").style.borderColor = "#d2d6de";
    }

    if (municipio_lugar == 0) {
      document.getElementById("municipio_lugar").style.borderColor = "#f44336";
      cierto = false;
    }else{
      document.getElementById("municipio_lugar").style.borderColor = "#d2d6de";
    }

    if (sinopsis_lugar.value == '') {
      document.getElementById("sinopsis_lugar").style.borderColor = "#f44336";
      cierto = false;
    }else{
      document.getElementById("sinopsis_lugar").style.borderColor = "#d2d6de";
    }

    if (ubicacion_lugar.value == '') {
      document.getElementById("ubicacion_lugar").style.borderColor = "#f44336";
      cierto = false;
    }else{
      document.getElementById("ubicacion_lugar").style.borderColor = "#d2d6de";
    }

    if (descripcion_lugar.value == '') {
      document.getElementById("descripcion_lugar").style.borderColor = "#f44336";
      cierto = false;
    }else{
      document.getElementById("descripcion_lugar").style.borderColor = "#d2d6de";
    }

    if (latitud_lugar.value == '') {
      document.getElementById("latitud_lugar").style.borderColor = "#f44336";
      cierto = false;
    }else{
      document.getElementById("latitud_lugar").style.borderColor = "#d2d6de";
    }
    if (longitud_lugar.value == '') {
      document.getElementById("longitud_lugar").style.borderColor = "#f44336";
      cierto = false;
    }else{
      document.getElementById("longitud_lugar").style.borderColor = "#d2d6de";
    }

    if (cierto) {
      cierto = false;
      $('#confirmar_agregar_lugar').modal('show');
    }else{
      return;
    }
}

function validar_actualizar_lugar() {

    var actualizar_nombre_foto_lugar = document.getElementById("actualizar_nombre_foto_lugar");
    var actualizar_nombre_lugar = document.getElementById("actualizar_nombre_lugar");
    var actualizar_tipo_lugar = document.getElementById("actualizar_tipo_lugar");
    var actualizar_municipio_lugar = document.getElementById("actualizar_municipio_lugar");
    var actualizar_descripcion_lugar = document.getElementById("actualizar_descripcion_lugar");
    var actualizar_ubicacion_lugar = document.getElementById("actualizar_ubicacion_lugar");
    var actualizar_latitud_lugar = document.getElementById("actualizar_latitud_lugar");
    var actualizar_longitud_lugar = document.getElementById("actualizar_longitud_lugar");
    var cierto = true;

    if (actualizar_nombre_foto_lugar.value == '') {
      document.getElementById("actualizar_nombre_foto_lugar").style.borderColor = "#f44336";
      cierto = false;
    }else{
      document.getElementById("actualizar_nombre_foto_lugar").style.borderColor = "#d2d6de";
    }

    if (actualizar_nombre_lugar.value == '') {
      document.getElementById("actualizar_nombre_lugar").style.borderColor = "#f44336";
      cierto = false;
    }else{
      document.getElementById("actualizar_nombre_lugar").style.borderColor = "#d2d6de";
    }

    if (actualizar_tipo_lugar.value == '') {
      document.getElementById("actualizar_tipo_lugar").style.borderColor = "#f44336";
      cierto = false;
    }else{
      document.getElementById("actualizar_tipo_lugar").style.borderColor = "#d2d6de";
    }

    if (actualizar_municipio_lugar.value == '') {
      document.getElementById("actualizar_municipio_lugar").style.borderColor = "#f44336";
      cierto = false;
    }else{
      document.getElementById("actualizar_municipio_lugar").style.borderColor = "#d2d6de";
    }

    if (actualizar_descripcion_lugar.value == '') {
      document.getElementById("actualizar_descripcion_lugar").style.borderColor = "#f44336";
      cierto = false;
    }else{
      document.getElementById("actualizar_descripcion_lugar").style.borderColor = "#d2d6de";
    }

    if (actualizar_ubicacion_lugar.value == '') {
      document.getElementById("actualizar_ubicacion_lugar").style.borderColor = "#f44336";
      cierto = false;
    }else{
      document.getElementById("actualizar_ubicacion_lugar").style.borderColor = "#d2d6de";
    }

    if (actualizar_latitud_lugar.value == '') {
      document.getElementById("actualizar_latitud_lugar").style.borderColor = "#f44336";
      cierto = false;
    }else{
      document.getElementById("actualizar_latitud_lugar").style.borderColor = "#d2d6de";
    }

    if (actualizar_longitud_lugar.value == '') {
      document.getElementById("actualizar_longitud_lugar").style.borderColor = "#f44336";
      cierto = false;
    }else{
      document.getElementById("actualizar_longitud_lugar").style.borderColor = "#d2d6de";
    }

    if (cierto) {
      cierto = false;
      $('#confirmar_actualizar_lugar').modal('show');
    }else{
      return;
    }
}

// Modal Agregar Lugar

function confirmar_agregar_lugar() {
    document.getElementById("formulario_turismo_lugar").submit();
}

function modificar_lugar(x) {
  document.getElementById('recibe_id_lugar').value = x;
  document.getElementById("formulario_enviar_id_actualizar_lugar").submit();
}

// Modal Actualizar Lugar

function confirmar_actualizar_lugar() {
  document.getElementById("formulario_actualizar_turismo_lugar").submit();
}

function eliminar_lugar(y) {
  document.getElementById('id_lugar').value = y;
}

// Modal Borrar Lugar

function confirmar_eliminar_lugar() {
  document.getElementById('formulario_eliminar_lugar').submit();
}

// Borrar Foto Galeria Lugar

function enviar_id_galeria_lugar(x){
  document.getElementById('id_foto_galeria').value = x;
  document.getElementById('formulario_eliminar_foto_galeria').submit();
}

// Modal Ver Imagen Galeria Lugar

function enviar_id_galeria_modal_turismo_lugar(p) {
  var img_modal_lugar = document.getElementById('img_modal_lugar');
  img_modal_lugar.setAttribute("src",p);
}
// Agregar Foto Galeria

function actualizar_galeria() {

  var input_galeria = document.getElementById('nombre_imagen_galeria');

  if(input_galeria.value == ''){
    document.getElementById('nombre_imagen_galeria').style.borderColor = "#f44336";
  }else {
    document.getElementById("nombre_imagen_galeria").style.borderColor = "#d2d6de";
    document.getElementById('formulario_actualizar_turismo_lugar').submit();
  }

}


//////////   TURISMO EVENTOS   //////////

// Formulario

function validar_evento() {

  var nombre_foto_evento = document.getElementById("nombre_foto_evento");
  var nombre_evento = document.getElementById("nombre_evento");
  var descripcion_evento = document.getElementById("descripcion_evento");
  var fecha_evento = document.getElementById("fecha_evento");
  var hora_evento = document.getElementById("hora_evento");
  var lugar_evento = document.getElementById("lugar_evento");
  var municipio_evento = document.getElementById("municipio_evento").selectedIndex;
  var latitud_evento = document.getElementById("latitud_evento");
  var longitud_evento = document.getElementById("longitud_evento");
  var costo_evento = document.getElementById("costo_evento");
  var cierto = true;

  if (nombre_foto_evento.value == '') {
    document.getElementById("nombre_foto_evento").style.borderColor = "#f44336";
    cierto = false;
  }else{
    document.getElementById("nombre_foto_evento").style.borderColor = "#d2d6de";
  }

  if (nombre_evento.value == '') {
    document.getElementById("nombre_evento").style.borderColor = "#f44336";
    cierto = false;
  }else{
    document.getElementById("nombre_evento").style.borderColor = "#d2d6de";
  }

  if (descripcion_evento.value == '') {
    document.getElementById("descripcion_evento").style.borderColor = "#f44336";
    cierto = false;
  }else{
    document.getElementById("descripcion_evento").style.borderColor = "#d2d6de";
  }

  if (fecha_evento.value == '') {
    document.getElementById("fecha_evento").style.borderColor = "#f44336";
    cierto = false;
  }else{
    document.getElementById("fecha_evento").style.borderColor = "#d2d6de";
  }

  if (hora_evento.value == '') {
    document.getElementById("hora_evento").style.borderColor = "#f44336";
    cierto = false;
  }else{
    document.getElementById("hora_evento").style.borderColor = "#d2d6de";
  }

  if (lugar_evento.value == '') {
    document.getElementById("lugar_evento").style.borderColor = "#f44336";
    cierto = false;
  }else{
    document.getElementById("lugar_evento").style.borderColor = "#d2d6de";
  }

  if (municipio_evento == 0) {
    document.getElementById("municipio_evento").style.borderColor = "#f44336";
    cierto = false;
  }else{
    document.getElementById("municipio_evento").style.borderColor = "#d2d6de";
  }

  if (latitud_evento.value == '') {
    document.getElementById("latitud_evento").style.borderColor = "#f44336";
    cierto = false;
  }else{
    document.getElementById("latitud_evento").style.borderColor = "#d2d6de";
  }

  if (longitud_evento.value == '') {
    document.getElementById("longitud_evento").style.borderColor = "#f44336";
    cierto = false;
  }else{
    document.getElementById("longitud_evento").style.borderColor = "#d2d6de";
  }

  if (costo_evento.value == '') {
    document.getElementById("costo_evento").style.borderColor = "#f44336";
    cierto = false;
  }else{
    document.getElementById("costo_evento").style.borderColor = "#d2d6de";
  }

  if (cierto) {
    cierto = false;
    $('#confirmar_agregar_evento').modal('show');
  }else{
    return;
  }

}

// Modal Agregar Evento
function confirmar_agregar_evento() {
  document.getElementById("formulario_turismo_evento").submit();
}


//////////   COMERCIO Y SERVICIOS - CATEGORIAS   //////////

// Formulario

function enviar_id(z, icono, publicaciones, nombre, precio, reservacion, rating ) {
  document.getElementById('id_categoria_modificar').value = z;
  document.getElementById('ruta_icono_categoria_actualizar').value = icono;
  document.getElementById('nombre_categoria_modificar').value = nombre;

  if(publicaciones > 9){
    document.getElementById('publicaciones_activas_modificar').value = publicaciones;
    document.getElementById('publicaciones_activas_modificar').style.marginLeft = "0px";
    document.getElementById('publicaciones_activas_modificar').style.width = "18px";
  }else{
    document.getElementById('publicaciones_activas_modificar').value = publicaciones;
    document.getElementById('publicaciones_activas_modificar').style.marginLeft = "0px";
    document.getElementById('publicaciones_activas_modificar').style.width = "11px";
  }

  if(precio == "A"){
    document.getElementById('check_precio_modificar').setAttribute('checked','');
  }

  if(precio == "I"){
    document.getElementById('check_precio_modificar').removeAttribute('checked','');
  }

  if(reservacion == "A"){
    document.getElementById('check_reservacion_modificar').setAttribute('checked','');
  }

  if(reservacion == "I"){
    document.getElementById('check_reservacion_modificar').removeAttribute('checked','');
  }

  if(rating == "A"){
    document.getElementById('check_rating_modificar').setAttribute('checked','');
  }

  if(rating == "I"){
    document.getElementById('check_rating_modificar').removeAttribute('checked','');
  }

}

function resetear_formulario() {
  document.getElementById("formulario_comercios_servicios_categoria_actualizar").reset();
}

function pasar_id(id, publicaciones) {
  document.getElementById('id_categoria_inactivo').value = id;

  if(publicaciones > 9){
    document.getElementById('publicaciones_activas').value = publicaciones;
    document.getElementById('publicaciones_activas').style.marginLeft = "0px";
    document.getElementById('publicaciones_activas').style.width = "18px";
  }else{
    document.getElementById('publicaciones_activas').value = publicaciones;
    document.getElementById('publicaciones_activas').style.marginLeft = "0px";
    document.getElementById('publicaciones_activas').style.width = "11px";
  }
}

function restaurar_id(x, publicaciones) {
  document.getElementById('id_categoria_restaurar').value = x;

  if(publicaciones > 9){
    document.getElementById('publicaciones_activas_restaurar').value = publicaciones;
    document.getElementById('publicaciones_activas_restaurar').style.marginLeft = "0px";
    document.getElementById('publicaciones_activas_restaurar').style.width = "18px";
  }else{
    document.getElementById('publicaciones_activas_restaurar').value = publicaciones;
    document.getElementById('publicaciones_activas_restaurar').style.marginLeft = "0px";
    document.getElementById('publicaciones_activas_restaurar').style.width = "11px";
  }
}

function confirmar_inactivo_id() {
  document.getElementById('formulario_inactivo_categoria').submit();
}

function confirmar_restaurar_id() {
  document.getElementById('formulario_comercios_servicios_categoria_restaurar').submit();
}

function pre_modificar_categoria() {
  $("#pre_modificar_categoria").modal('hide');
  $("#modificar_categoria").modal('show');
}

function pre_eliminar_categoria() {
  $("#pre_eliminar_categoria").modal('hide');
  $("#eliminar_categoria").modal('show');
}

function ocultar_activas_mostrar_inactivas() {
  $("#btn_inactivas").hide();
  $("#titulo_activas").hide();
  $("#tabla_activas").hide();
  $("#btn_activas").show();
  $("#tabla_inactivas").show();
  $("#titulo_inactivas").show();
}

function ocultar_inactivas_mostrar_activas() {
  $("#btn_inactivas").show();
  $("#titulo_activas").show();
  $("#tabla_activas").show();
  $("#btn_activas").hide();
  $("#tabla_inactivas").hide();
  $("#titulo_inactivas").hide();
}


//////////   COMERCIO Y SERVICIOS   //////////

// Formulario

function validar_comercio_servicio() {
  var categoria_comercio_servicio = document.getElementById("ID_COMERCIO_CATEGORIA").selectedIndex;
  var nombre_foto_comercio_servicio = document.getElementById("nombre_foto_comercio_servicio");
  var nombre_comercio_servicio = document.getElementById("nombre_comercio_servicio");
  var tipo_comercio_servicio = document.getElementById("tipo_comercio_servicio");
  var descripcion_comercio_servicio = document.getElementById("descripcion_comercio_servicio");
  var telefono_principal_comercio_servicio = document.getElementById("telefono_principal_comercio_servicio");
  var correo_electronico_comercio_servicio = document.getElementById("correo_electronico_comercio_servicio");
  var pagina_web_comercio_servicio = document.getElementById("pagina_web_comercio_servicio");
  var servicio_domicilio_comercio_servicio = document.getElementById("servicio_domicilio_comercio_servicio");
  var direccion_comercio_servicio = document.getElementById("direccion_comercio_servicio");
  var municipio_comercio_servicio = document.getElementById("municipio_comercio_servicio").selectedIndex;
  var cierto = true;

  if (categoria_comercio_servicio == 0) {
    document.getElementById("ID_COMERCIO_CATEGORIA").style.borderColor = "#f44336";
    cierto = false;
  }else{
    document.getElementById("ID_COMERCIO_CATEGORIA").style.borderColor = "#d2d6de";
  }

  if (nombre_foto_comercio_servicio.value == '') {
    document.getElementById("nombre_foto_comercio_servicio").style.borderColor = "#f44336";
    cierto = false;
  }else{
    document.getElementById("nombre_foto_comercio_servicio").style.borderColor = "#d2d6de";
  }

  if (nombre_comercio_servicio.value == '') {
    document.getElementById("nombre_comercio_servicio").style.borderColor = "#f44336";
    cierto = false;
  }else{
    document.getElementById("nombre_comercio_servicio").style.borderColor = "#d2d6de";
  }

  if (tipo_comercio_servicio.value == '') {
    document.getElementById("tipo_comercio_servicio").style.borderColor = "#f44336";
    cierto = false;
  }else{
    document.getElementById("tipo_comercio_servicio").style.borderColor = "#d2d6de";
  }

  if (descripcion_comercio_servicio.value == '') {
    document.getElementById("descripcion_comercio_servicio").style.borderColor = "#f44336";
    cierto = false;
  }else{
    document.getElementById("descripcion_comercio_servicio").style.borderColor = "#d2d6de";
  }

  if (telefono_principal_comercio_servicio.value == '') {
    document.getElementById("telefono_principal_comercio_servicio").style.borderColor = "#f44336";
    cierto = false;
  }else{
    document.getElementById("telefono_principal_comercio_servicio").style.borderColor = "#d2d6de";
  }

  if (correo_electronico_comercio_servicio.value == '') {
    document.getElementById("correo_electronico_comercio_servicio").style.borderColor = "#f44336";
    cierto = false;
  }else{
    document.getElementById("correo_electronico_comercio_servicio").style.borderColor = "#d2d6de";
  }

  if (pagina_web_comercio_servicio.value == '') {
    document.getElementById("pagina_web_comercio_servicio").style.borderColor = "#f44336";
    cierto = false;
  }else{
    document.getElementById("pagina_web_comercio_servicio").style.borderColor = "#d2d6de";
  }

  if (servicio_domicilio_comercio_servicio.value == '') {
    document.getElementById("servicio_domicilio_comercio_servicio").style.borderColor = "#f44336";
    cierto = false;
  }else{
    document.getElementById("servicio_domicilio_comercio_servicio").style.borderColor = "#d2d6de";
  }

  if (direccion_comercio_servicio.value == '') {
    document.getElementById("direccion_comercio_servicio").style.borderColor = "#f44336";
    cierto = false;
  }else{
    document.getElementById("direccion_comercio_servicio").style.borderColor = "#d2d6de";
  }

  if (municipio_comercio_servicio  == 0) {
    document.getElementById("municipio_comercio_servicio").style.borderColor = "#f44336";
    cierto = false;
  }else{
    document.getElementById("municipio_comercio_servicio").style.borderColor = "#d2d6de";
  }

  if (cierto) {
    cierto = false;
    document.getElementById('formulario_agregar_comercio_servicio').submit();
  }else{
    return;
  }
}

function pasar_id_input() {
  var id_categoria = document.getElementById("ID_COMERCIO_CATEGORIA").value;
  document.getElementById('id_categoria').value = id_categoria;
}

// Actualizar Comercio o Servicio

function validar_comercio_servicio_actualizar() {

  var actualizar_nombre_foto_comercio_servicio = document.getElementById("actualizar_nombre_foto_comercio_servicio");
  var actualizar_nombre_comercio_servicio = document.getElementById("actualizar_nombre_comercio_servicio");
  var actualizar_tipo_comercio_servicio = document.getElementById("actualizar_tipo_comercio_servicio");
  var actualizar_descripcion_comercio_servicio = document.getElementById("actualizar_descripcion_comercio_servicio");
  var actualizar_telefono_principal_comercio_servicio = document.getElementById("actualizar_telefono_principal_comercio_servicio");
  var actualizar_pagina_web_comercio_servicio = document.getElementById("actualizar_pagina_web_comercio_servicio");
  var actualizar_servicio_domicilio_comercio_servicio = document.getElementById("actualizar_servicio_domicilio_comercio_servicio");
  var actualizar_latitud_comercio_servicio = document.getElementById("actualizar_latitud_comercio_servicio");
  var actualizar_longitud_comercio_servicio = document.getElementById("actualizar_longitud_comercio_servicio");
  var actualizar_direccion_comercio_servicio = document.getElementById("actualizar_direccion_comercio_servicio");
  var cierto = true;

  if (actualizar_nombre_foto_comercio_servicio.value == '') {
    document.getElementById("actualizar_nombre_foto_comercio_servicio").style.borderColor = "#f44336";
    cierto = false;
  }else{
    document.getElementById("actualizar_nombre_foto_comercio_servicio").style.borderColor = "#d2d6de";
  }

  if (actualizar_nombre_foto_comercio_servicio.value == '') {
    document.getElementById("actualizar_nombre_foto_comercio_servicio").style.borderColor = "#f44336";
    cierto = false;
  }else{
    document.getElementById("actualizar_nombre_foto_comercio_servicio").style.borderColor = "#d2d6de";
  }

  if (actualizar_tipo_comercio_servicio.value == '') {
    document.getElementById("actualizar_tipo_comercio_servicio").style.borderColor = "#f44336";
    cierto = false;
  }else{
    document.getElementById("actualizar_tipo_comercio_servicio").style.borderColor = "#d2d6de";
  }

  if (actualizar_descripcion_comercio_servicio.value == '') {
    document.getElementById("actualizar_descripcion_comercio_servicio").style.borderColor = "#f44336";
    cierto = false;
  }else{
    document.getElementById("actualizar_descripcion_comercio_servicio").style.borderColor = "#d2d6de";
  }

  if (actualizar_telefono_principal_comercio_servicio.value == '') {
    document.getElementById("actualizar_telefono_principal_comercio_servicio").style.borderColor = "#f44336";
    cierto = false;
  }else{
    document.getElementById("actualizar_telefono_principal_comercio_servicio").style.borderColor = "#d2d6de";
  }

  if (actualizar_pagina_web_comercio_servicio.value == '') {
    document.getElementById("actualizar_pagina_web_comercio_servicio").style.borderColor = "#f44336";
    cierto = false;
  }else{
    document.getElementById("actualizar_pagina_web_comercio_servicio").style.borderColor = "#d2d6de";
  }

  if (actualizar_servicio_domicilio_comercio_servicio.value == '') {
    document.getElementById("actualizar_servicio_domicilio_comercio_servicio").style.borderColor = "#f44336";
    cierto = false;
  }else{
    document.getElementById("actualizar_servicio_domicilio_comercio_servicio").style.borderColor = "#d2d6de";
  }

  if (actualizar_latitud_comercio_servicio.value == '') {
    document.getElementById("actualizar_latitud_comercio_servicio").style.borderColor = "#f44336";
    cierto = false;
  }else{
    document.getElementById("actualizar_latitud_comercio_servicio").style.borderColor = "#d2d6de";
  }

  if (actualizar_longitud_comercio_servicio.value == '') {
    document.getElementById("actualizar_longitud_comercio_servicio").style.borderColor = "#f44336";
    cierto = false;
  }else{
    document.getElementById("actualizar_longitud_comercio_servicio").style.borderColor = "#d2d6de";
  }

  if (actualizar_direccion_comercio_servicio.value == '') {
    document.getElementById("actualizar_direccion_comercio_servicio").style.borderColor = "#f44336";
    cierto = false;
  }else{
    document.getElementById("actualizar_direccion_comercio_servicio").style.borderColor = "#d2d6de";
  }

  if (cierto) {
    cierto = false;
    document.getElementById("formulario_actualziar_comercio_servicio").submit();
  }else{
    return;
  }

}

function pasar_id_input_actualizar() {
  var id_categoria = document.getElementById("actualizar_ID_COMERCIO_CATEGORIA").value;
  document.getElementById('id_categoria_actualizar').value = id_categoria;
}

function actualizar_comercio_servicio_galeria() {
  var nombre_imagen_comercio_servicio_galeria = document.getElementById('nombre_imagen_comercio_servicio_galeria');

  if(nombre_imagen_comercio_servicio_galeria.value == ''){
    document.getElementById('nombre_imagen_comercio_servicio_galeria').style.borderColor = "#f44336";
  }else {
    document.getElementById("nombre_imagen_comercio_servicio_galeria").style.borderColor = "#d2d6de";
    document.getElementById("formulario_actualziar_comercio_servicio").submit();
  }

}

function lunes() {
  var check_lunes = document.getElementById('check_lunes');
  var lunes_am = document.getElementById('lunes_am');
  var lunes_pm = document.getElementById('lunes_pm');
  var check_lunes_24 = document.getElementById('check_lunes_24');
  var promocion_lunes = document.getElementById('promocion_lunes');

  if (check_lunes.checked == true) {
    check_lunes_24.checked = false;
    lunes_am.removeAttribute('readonly','false');
    lunes_pm.removeAttribute('readonly','false');
    lunes_am.style.pointerEvents = "auto";
    lunes_pm.style.pointerEvents = "auto";
    document.getElementById('check_lunes_24').disabled = false;
    promocion_lunes.removeAttribute('readonly','false');
  }else{
    check_lunes_24.checked = false;
    lunes_am.setAttribute('readonly','false');
    lunes_pm.setAttribute('readonly','false');
    lunes_am.style.pointerEvents = "none";
    lunes_pm.style.pointerEvents = "none";
    document.getElementById('check_lunes_24').disabled = true;
    promocion_lunes.setAttribute('readonly','false');
    document.getElementById('promocion_lunes').value  = '';
  }
}

function lunes_24() {
  var lunes_am = document.getElementById('lunes_am');
  var lunes_pm = document.getElementById('lunes_pm');
  var check_lunes_24 = document.getElementById('check_lunes_24');

  if (check_lunes_24.checked == true){
    lunes_am.setAttribute('readonly','');
    lunes_pm.setAttribute('readonly','');
    lunes_am.style.pointerEvents = "none";
    lunes_pm.style.pointerEvents = "none";
  }else{
    lunes_am.removeAttribute('readonly','');
    lunes_pm.removeAttribute('readonly','');
    lunes_am.style.pointerEvents = "auto";
    lunes_pm.style.pointerEvents = "auto";
  }
}

// Martes

function martes() {
  var check_martes = document.getElementById('check_martes');
  var martes_am = document.getElementById('martes_am');
  var martes_pm = document.getElementById('martes_pm');
  var check_martes_24 = document.getElementById('check_martes_24');
  var promocion_martes = document.getElementById('promocion_martes');

  if (check_martes.checked == true) {
    check_martes_24.checked = false;
    martes_am.removeAttribute('readonly','false');
    martes_pm.removeAttribute('readonly','false');
    martes_am.style.pointerEvents = "auto";
    martes_pm.style.pointerEvents = "auto";
    document.getElementById('check_martes_24').disabled = false;
    promocion_martes.removeAttribute('readonly','false');
  }else{
    check_martes_24.checked = false;
    martes_am.setAttribute('readonly','false');
    martes_pm.setAttribute('readonly','false');
    martes_am.style.pointerEvents = "none";
    martes_pm.style.pointerEvents = "none";
    document.getElementById('check_martes_24').disabled = true;
    promocion_martes.setAttribute('readonly','false');
    document.getElementById('promocion_martes').value  = '';
  }
}

function martes_24() {
  var martes_am = document.getElementById('martes_am');
  var martes_pm = document.getElementById('martes_pm');
  var check_martes_24 = document.getElementById('check_martes_24');

  if (check_martes_24.checked == true){
    martes_am.setAttribute('readonly','');
    martes_pm.setAttribute('readonly','');
    martes_am.style.pointerEvents = "none";
    martes_pm.style.pointerEvents = "none";
  }else{
    martes_am.removeAttribute('readonly','');
    martes_pm.removeAttribute('readonly','');
    martes_am.style.pointerEvents = "auto";
    martes_pm.style.pointerEvents = "auto";
  }
}

function miercoles() {
  var check_miercoles = document.getElementById('check_miercoles');
  var miercoles_am = document.getElementById('miercoles_am');
  var miercoles_pm = document.getElementById('miercoles_pm');
  var check_miercoles_24 = document.getElementById('check_miercoles_24');
  var promocion_miercoles = document.getElementById('promocion_miercoles');

  if (check_miercoles.checked == true) {
    check_miercoles_24.checked = false;
    miercoles_am.removeAttribute('readonly','false');
    miercoles_pm.removeAttribute('readonly','false');
    miercoles_am.style.pointerEvents = "auto";
    miercoles_pm.style.pointerEvents = "auto";
    document.getElementById('check_miercoles_24').disabled = false;
    promocion_miercoles.removeAttribute('readonly','false');
  }else{
    check_miercoles_24.checked = false;
    miercoles_am.setAttribute('readonly','false');
    miercoles_pm.setAttribute('readonly','false');
    miercoles_am.style.pointerEvents = "none";
    miercoles_pm.style.pointerEvents = "none";
    document.getElementById('check_miercoles_24').disabled = true;
    promocion_miercoles.setAttribute('readonly','false');
    document.getElementById('promocion_miercoles').value  = '';
  }
}

function miercoles_24() {
  var miercoles_am = document.getElementById('miercoles_am');
  var miercoles_pm = document.getElementById('miercoles_pm');
  var check_miercoles_24 = document.getElementById('check_miercoles_24');

  if (check_miercoles_24.checked == true){
    miercoles_am.setAttribute('readonly','');
    miercoles_pm.setAttribute('readonly','');
    miercoles_am.style.pointerEvents = "none";
    miercoles_pm.style.pointerEvents = "none";
  }else{
    miercoles_am.removeAttribute('readonly','');
    miercoles_pm.removeAttribute('readonly','');
    miercoles_am.style.pointerEvents = "auto";
    miercoles_pm.style.pointerEvents = "auto";
  }
}

function jueves() {
  var check_jueves = document.getElementById('check_jueves');
  var jueves_am = document.getElementById('jueves_am');
  var jueves_pm = document.getElementById('jueves_pm');
  var check_jueves_24 = document.getElementById('check_jueves_24');
  var promocion_jueves = document.getElementById('promocion_jueves');

  if (check_jueves.checked == true) {
    check_jueves_24.checked = false;
    jueves_am.removeAttribute('readonly','false');
    jueves_pm.removeAttribute('readonly','false');
    jueves_am.style.pointerEvents = "auto";
    jueves_pm.style.pointerEvents = "auto";
    document.getElementById('check_jueves_24').disabled = false;
    promocion_jueves.removeAttribute('readonly','false');
  }else{
    check_jueves_24.checked = false;
    jueves_am.setAttribute('readonly','false');
    jueves_pm.setAttribute('readonly','false');
    jueves_am.style.pointerEvents = "none";
    jueves_pm.style.pointerEvents = "none";
    document.getElementById('check_jueves_24').disabled = true;
    promocion_jueves.setAttribute('readonly','false');
    document.getElementById('promocion_jueves').value  = '';
  }
}

function jueves_24() {
  var jueves_am = document.getElementById('jueves_am');
  var jueves_pm = document.getElementById('jueves_pm');
  var check_jueves_24 = document.getElementById('check_jueves_24');

  if (check_jueves_24.checked == true){
    jueves_am.setAttribute('readonly','');
    jueves_pm.setAttribute('readonly','');
    jueves_am.style.pointerEvents = "none";
    jueves_pm.style.pointerEvents = "none";
  }else{
    jueves_am.removeAttribute('readonly','');
    jueves_pm.removeAttribute('readonly','');
    jueves_am.style.pointerEvents = "auto";
    jueves_pm.style.pointerEvents = "auto";
  }
}

function viernes() {
  var check_viernes = document.getElementById('check_viernes');
  var viernes_am = document.getElementById('viernes_am');
  var viernes_pm = document.getElementById('viernes_pm');
  var check_viernes_24 = document.getElementById('check_viernes_24');
  var promocion_viernes = document.getElementById('promocion_viernes');

  if (check_viernes.checked == true) {
    check_viernes_24.checked = false;
    viernes_am.removeAttribute('readonly','false');
    viernes_pm.removeAttribute('readonly','false');
    viernes_am.style.pointerEvents = "auto";
    viernes_pm.style.pointerEvents = "auto";
    document.getElementById('check_viernes_24').disabled = false;
    promocion_viernes.removeAttribute('readonly','false');
  }else{
    check_viernes_24.checked = false;
    viernes_am.setAttribute('readonly','false');
    viernes_pm.setAttribute('readonly','false');
    viernes_am.style.pointerEvents = "none";
    viernes_pm.style.pointerEvents = "none";
    document.getElementById('check_viernes_24').disabled = true;
    promocion_viernes.setAttribute('readonly','false');
    document.getElementById('promocion_viernes').value  = '';
  }
}

function viernes_24() {
  var viernes_am = document.getElementById('viernes_am');
  var viernes_pm = document.getElementById('viernes_pm');
  var check_viernes_24 = document.getElementById('check_viernes_24');

  if (check_viernes_24.checked == true){
    viernes_am.setAttribute('readonly','');
    viernes_pm.setAttribute('readonly','');
    viernes_am.style.pointerEvents = "none";
    viernes_pm.style.pointerEvents = "none";
  }else{
    viernes_am.removeAttribute('readonly','');
    viernes_pm.removeAttribute('readonly','');
    viernes_am.style.pointerEvents = "auto";
    viernes_pm.style.pointerEvents = "auto";
  }
}

function sabado() {
  var check_sabado = document.getElementById('check_sabado');
  var sabado_am = document.getElementById('sabado_am');
  var sabado_pm = document.getElementById('sabado_pm');
  var check_sabado_24 = document.getElementById('check_sabado_24');
  var promocion_sabado = document.getElementById('promocion_sabado');

  if (check_sabado.checked == true) {
    check_sabado_24.checked = false;
    sabado_am.style.pointerEvents = "auto";
    sabado_pm.style.pointerEvents = "auto";
    sabado_am.removeAttribute('readonly','false');
    sabado_pm.removeAttribute('readonly','false');
    document.getElementById('check_sabado_24').disabled = false;
    promocion_sabado.removeAttribute('readonly','false');
  }else{
    check_sabado_24.checked = false;
    sabado_am.setAttribute('readonly','false');
    sabado_pm.setAttribute('readonly','false');
    sabado_am.style.pointerEvents = "none";
    sabado_pm.style.pointerEvents = "none";
    document.getElementById('check_sabado_24').disabled = true;
    promocion_sabado.setAttribute('readonly','false');
    document.getElementById('promocion_sabado').value  = '';
  }
}

function sabado_24() {
  var sabado_am = document.getElementById('sabado_am');
  var sabado_pm = document.getElementById('sabado_pm');
  var check_sabado_24 = document.getElementById('check_sabado_24');

  if (check_sabado_24.checked == true){
    sabado_am.style.pointerEvents = "none";
    sabado_pm.style.pointerEvents = "none";
    sabado_am.setAttribute('readonly','');
    sabado_pm.setAttribute('readonly','');
  }else{
    sabado_am.style.pointerEvents = "auto";
    sabado_pm.style.pointerEvents = "auto";
    sabado_am.removeAttribute('readonly','');
    sabado_pm.removeAttribute('readonly','');
  }
}

function domingo() {
  var check_domingo = document.getElementById('check_domingo');
  var domingo_am = document.getElementById('domingo_am');
  var domingo_pm = document.getElementById('domingo_pm');
  var check_domingo_24 = document.getElementById('check_domingo_24');
  var promocion_domingo = document.getElementById('promocion_domingo');

  if (check_domingo.checked == true) {
    check_domingo_24.checked = false;
    domingo_am.removeAttribute('readonly','false');
    domingo_pm.removeAttribute('readonly','false');
    domingo_am.style.pointerEvents = "auto";
    domingo_pm.style.pointerEvents = "auto";
    document.getElementById('check_domingo_24').disabled = false;
    promocion_domingo.removeAttribute('readonly','false');
  }else{
    check_domingo_24.checked = false;
    domingo_am.setAttribute('readonly','false');
    domingo_pm.setAttribute('readonly','false');
    domingo_am.style.pointerEvents = "none";
    domingo_pm.style.pointerEvents = "none";
    document.getElementById('check_domingo_24').disabled = true;
    promocion_domingo.setAttribute('readonly','false');
    document.getElementById('promocion_domingo').value  = '';
  }
}

function domingo_24() {
  var domingo_am = document.getElementById('domingo_am');
  var domingo_pm = document.getElementById('domingo_pm');
  var check_domingo_24 = document.getElementById('check_domingo_24');

  if (check_domingo_24.checked == true){
    domingo_am.setAttribute('readonly','');
    domingo_pm.setAttribute('readonly','');
    domingo_am.style.pointerEvents = "none";
    domingo_pm.style.pointerEvents = "none";
  }else{
    domingo_am.removeAttribute('readonly','');
    domingo_pm.removeAttribute('readonly','');
    domingo_am.style.pointerEvents = "auto";
    domingo_pm.style.pointerEvents = "auto";
  }
}

// Modal Imagen

function enviar_id_galeria_modal_comercio_servicio(x) {
  var img_modal_comercio_servicio = document.getElementById('img_modal_comercio_servicio');
  img_modal_comercio_servicio.setAttribute("src",x);
}

// Eliminar Imagen Galeria

function enviar_id_galeria_comercio_servicio(q){
  document.getElementById('id_foto_galeria_comercio_servicio').value = q;
  document.getElementById('eliminar_foto_galeria_comercio_servicios').submit();
}

function modificar_comercio_servicio(y) {
  document.getElementById('enviar_id_comercio_servicio').value = y;
  document.getElementById('formulario_actualizar_comercio_servicio').submit();
}

// Eliminar Comercio y Servicios

function inactivo_comercio_servicio_id(x) {
  document.getElementById('id_comercio_servicio_inactivo').value = x;
}

function restaurar_comercio_servicio_id(id) {
  document.getElementById('id_comercio_servicio_restaurar').value = id;
}
/*
function pre_eliminar_comercio_servicio() {
  $("#pre_eliminar_comercio_servicio").modal('hide');
  $("#eliminar_comercio_servicio").modal('show');
}*/

function confirmar_inactivo_comercios_servicios_id() {
  document.getElementById('formulario_inactivo_comercios_servicios').submit();
}

function confirmar_restaurar_comercio_servicio_id() {
  document.getElementById('formulario_comercios_servicios_restaurar').submit();
}

function ocultar_comercios_servicios_activos_mostrar_inactivos() {
  $("#activas").hide();
  $("#inactivas").show();
  $("#boton_comercios_servicio_inactivos").hide();
  $("#tabla_comercios_servicio_inactivos").hide();
  $("#tabla_comercios_servicios_activos").hide();
  $("#boton_comercios_servicio_activos").show();
  $("#tabla_comercios_servicio_activos").show();
  $("#tabla_comercios_servicios_inactivos").show();
}

function ocultar_comercios_servicios_inactivas_mostrar_activas() {
  $("#inactivas").hide();
  $("#activas").show()
  $("#boton_comercios_servicio_inactivos").show();
  $("#tabla_comercios_servicio_inactivos").show();
  $("#tabla_comercios_servicios_activos").show();
  $("#boton_comercios_servicio_activos").hide();
  $("#tabla_comercios_servicio_activos").hide();
  $("#tabla_comercios_servicios_inactivos").hide();
}
