<?php

// Acentos y simbolos

header('Content-Type: text/html; charset=utf-8');

// Conexion

include ('conexion.php');

// Fecha actual

date_default_timezone_set('America/Mexico_City');
$dias = array("Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sábado");
$meses = array("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto",
"Septiembre","Octubre","Noviembre","Diciembre");
$fecha = $dias[date('w')]." ".date('d')." de ".$meses[date('n')-1]. " del ".date('Y') ;

// Variables del Formulario Acerca

$acerca_descripcion = $_POST['acerca_que_es'];
$acerca_descripcion = addslashes($acerca_descripcion);
$acerca_mision = $_POST['acerca_mision'];
$acerca_mision = addslashes($acerca_mision);
$acerca_vision = $_POST['acerca_vision'];
$acerca_vision = addslashes($acerca_vision);
$acerca_ubicacion = $_POST['acerca_ubicacion'];
$acerca_ubicacion = addslashes($acerca_ubicacion);
$acerca_latitud = $_POST['acerca_latitud'];
$acerca_latitud = addslashes($acerca_latitud);
$acerca_longitud = $_POST['acerca_longitud'];
$acerca_longitud = addslashes($acerca_longitud);
$acerca_correo_principal = $_POST['acerca_correo_principal'];
$acerca_correo_principal = addslashes($acerca_correo_principal);
$acerca_correo_secundario = $_POST['acerca_correo_secundario'];
$acerca_correo_secundario = addslashes($acerca_correo_secundario);
$acerca_telefono_principal = $_POST['acerca_telefono_principal'];
$acerca_telefono_principal = addslashes($acerca_telefono_principal);
$acerca_telefono_secundario = $_POST['acerca_telefono_secundario'];
$acerca_telefono_secundario = addslashes($acerca_telefono_secundario);
$acerca_horario = $_POST['acerca_horario'];
$acerca_horario = addslashes($acerca_horario);
$acerca_fecha = $fecha;

// Configuracion para la imagen

$nombreimg = $_FILES['acerca_imagen']['name'];
$archivo = $_FILES['acerca_imagen']['tmp_name'];
$ruta = "acerca_canaco_img";
$ruta = $ruta."/".$nombreimg;

// Configuracion de la ruta en caso de que exista

$hosting_url = "http://localhost/Panel%20Administrativo%20Canaco%20Final/img/";
$url_foto = $_POST['nombre_foto_acerca'];
$nueva_ruta = $hosting_url . $ruta;

// Configuración para subir el archivo al hosting

$ruta_mover_archivo = "../img/acerca_canaco_img";
$ruta_mover_archivo = $ruta_mover_archivo . "/" . $nombreimg;

// Actualizar Formulario Acerca

$actualizar_informacion = "UPDATE ACERCA_CANACO SET DESCRIPCION = '$acerca_descripcion',
MISION = '$acerca_mision', VISION = '$acerca_vision', UBICACION = '$acerca_ubicacion',
LATITUD = '$acerca_latitud', LONGITUD = '$acerca_longitud',
CORREO_PRINCIPAL = '$acerca_correo_principal', CORREO_SECUNDARIO = '$acerca_correo_secundario',
TELEFONO_PRINCIPAL = '$acerca_telefono_principal', TELEFONO_SECUNDARIO = '$acerca_telefono_secundario',
HORARIO = '$acerca_horario', FECHA_MODIFICACION = '$acerca_fecha' WHERE ID_ACERCA_CANACO = 1";

// Consulta para ver si existe la ruta de la imagen de Acerca

$consulta_url = "SELECT FOTO FROM ACERCA_CANACO WHERE ID_ACERCA_CANACO = 1 ";
$resultado_consulta_url = mysqli_query($conexion, $consulta_url);

// Actualizar la ruta en caso de que sea igual la ruta de la base y la del input

$actualizar_url = "UPDATE ACERCA_CANACO SET FOTO = '$url_foto' WHERE ID_ACERCA_CANACO = 1 ";

// Actualizar la ruta en caso de que sea deiferente la ruta de la base y la del input

$actualizar_url_v2 = "UPDATE ACERCA_CANACO SET FOTO = '$nueva_ruta' WHERE ID_ACERCA_CANACO = 1 ";

// Actualizar el Formulario y la Imagen

if (mysqli_query($conexion, $actualizar_informacion)) {
    if ($resultado = mysqli_fetch_array($resultado_consulta_url)) {
      if ($url_foto == $resultado['FOTO']) {
        mysqli_query($conexion, $actualizar_url);
        header("Location: ../acerca.php");
      }else{
        mysqli_query($conexion, $actualizar_url_v2);
        move_uploaded_file($archivo,$ruta_mover_archivo);
        header("Location: ../acerca.php");
      }
    }
}else{
  echo "Error en " . $actualizar_informacion . mysqli_error($conexion);
  die(mysqli_errno($conexion)) . mysqli_error($conexion);
}



// Variables de Whatsapp

$acerca_url_redes_sociales_whatsapp = $_POST['acerca_url_redes_sociales_whatsapp'];
$acerca_url_redes_sociales_whatsapp = addslashes($acerca_url_redes_sociales_whatsapp);

if ($acerca_url_redes_sociales_whatsapp == '') {
  $estado_url_whatsapp = 'I';
}else{
  $estado_url_whatsapp = 'A';
}

// Actualizar Whatsapp

$actualizar_whatsapp = "UPDATE REDES_SOCIALES_CANACO SET URL = '$acerca_url_redes_sociales_whatsapp',
ESTADO_URL = '$estado_url_whatsapp' WHERE ID_REDES_SOCIALES_CANACO = 1 ";

// Actualizar Formulario de Whatsapp

if (mysqli_query($conexion,$actualizar_whatsapp)) {
  header("Location: ../acerca.php");
}else{
  echo "Error en " . $actualizar_whatsapp . mysqli_error($conexion);
  die(mysqli_errno($conexion)) . mysqli_error($conexion);
}



// Variables de Facebook

$acerca_url_redes_sociales_facebook = $_POST['acerca_url_redes_sociales_facebook'];
$acerca_url_redes_sociales_facebook = addslashes($acerca_url_redes_sociales_facebook);

if ($acerca_url_redes_sociales_facebook == '') {
  $estado_url_facebook = 'I';
}else{
  $estado_url_facebook = 'A';
}

// Actualizar Facebook

$actualizar_facebook = "UPDATE REDES_SOCIALES_CANACO SET URL = '$acerca_url_redes_sociales_facebook',
ESTADO_URL = '$estado_url_facebook' WHERE ID_REDES_SOCIALES_CANACO = 2 ";

// Actualizar Formulario de Facebook

if (mysqli_query($conexion,$actualizar_facebook)) {
  header("Location: ../acerca.php");
}else{
  echo "Error en " . $actualizar_facebook . mysqli_error($conexion);
  die(mysqli_errno($conexion)) . mysqli_error($conexion);
}



// Variables de Youtube

$acerca_url_redes_sociales_youtube = $_POST['acerca_url_redes_sociales_youtube'];
$acerca_url_redes_sociales_youtube = addslashes($acerca_url_redes_sociales_youtube);

if ($acerca_url_redes_sociales_youtube == '') {
  $estado_url_youtube = 'I';
}else{
  $estado_url_youtube = 'A';
}

// Actualizar Youtube

$actualizar_youtube = "UPDATE REDES_SOCIALES_CANACO SET URL = '$acerca_url_redes_sociales_youtube',
ESTADO_URL = '$estado_url_youtube' WHERE ID_REDES_SOCIALES_CANACO = 3 ";

// Actualizar Formulario de Youtube

if (mysqli_query($conexion,$actualizar_youtube)) {
  header("Location: ../acerca.php");
}else{
  echo "Error en " . $actualizar_youtube . mysqli_error($conexion);
  die(mysqli_errno($conexion)) . mysqli_error($conexion);
}



// Variables de Twitter

$acerca_url_redes_sociales_twitter = $_POST['acerca_url_redes_sociales_twitter'];
$acerca_url_redes_sociales_twitter = addslashes($acerca_url_redes_sociales_twitter);

if ($acerca_url_redes_sociales_twitter == '') {
  $estado_url_twitter = 'I';
}else{
  $estado_url_twitter = 'A';
}

// Actualizar Twitter

$actualizar_twitter = "UPDATE REDES_SOCIALES_CANACO SET URL = '$acerca_url_redes_sociales_twitter',
ESTADO_URL = '$estado_url_twitter' WHERE ID_REDES_SOCIALES_CANACO = 4 ";

// Actualizar Formulario de Twitter

if (mysqli_query($conexion,$actualizar_twitter)) {
  header("Location: ../acerca.php");
}else{
  echo "Error en " . $actualizar_twitter . mysqli_error($conexion);
  die(mysqli_errno($conexion)) . mysqli_error($conexion);
}



// Variables de Instagram

$acerca_url_redes_sociales_instagram = $_POST['acerca_url_redes_sociales_instagram'];
$acerca_url_redes_sociales_instagram = addslashes($acerca_url_redes_sociales_instagram);

if ($acerca_url_redes_sociales_instagram == '') {
  $estado_url_instagram = 'I';
}else{
  $estado_url_instagram = 'A';
}

// Actualizar Instagram

$actualizar_instagram = "UPDATE REDES_SOCIALES_CANACO SET URL = '$acerca_url_redes_sociales_instagram',
ESTADO_URL = '$estado_url_instagram' WHERE ID_REDES_SOCIALES_CANACO = 5 ";

// Actualizar Formulario de Instagram

if (mysqli_query($conexion,$actualizar_instagram)) {
  header("Location: ../acerca.php");
}else{
  echo "Error en " . $actualizar_instagram . mysqli_error($conexion);
  die(mysqli_errno($conexion)) . mysqli_error($conexion);
}



// Variables de Google

$acerca_url_redes_sociales_google = $_POST['acerca_url_redes_sociales_google'];
$acerca_url_redes_sociales_google = addslashes($acerca_url_redes_sociales_google);

if ($acerca_url_redes_sociales_google == '') {
  $estado_url_google = 'I';
}else{
  $estado_url_google = 'A';
}

// Actualizar Google

$actualizar_google = "UPDATE REDES_SOCIALES_CANACO SET URL = '$acerca_url_redes_sociales_google',
ESTADO_URL = '$estado_url_google' WHERE ID_REDES_SOCIALES_CANACO = 6 ";

// Actualizar Formulario de Google

if (mysqli_query($conexion,$actualizar_google)) {
  header("Location: ../acerca.php");
}else{
  echo "Error en " . $actualizar_google . mysqli_error($conexion);
  die(mysqli_errno($conexion)) . mysqli_error($conexion);
}



// Variables de LinkedIn

$acerca_url_redes_sociales_linkedin = $_POST['acerca_url_redes_sociales_linkedin'];
$acerca_url_redes_sociales_linkedin = addslashes($acerca_url_redes_sociales_linkedin);

if ($acerca_url_redes_sociales_linkedin == '') {
  $estado_url_linkedin = 'I';
}else{
  $estado_url_linkedin = 'A';
}

// Actualizar LinkedIn

$actualizar_linkedin = "UPDATE REDES_SOCIALES_CANACO SET URL = '$acerca_url_redes_sociales_linkedin',
ESTADO_URL = '$estado_url_linkedin' WHERE ID_REDES_SOCIALES_CANACO = 7 ";

// Actualizar Formulario de LinkedIn

if (mysqli_query($conexion,$actualizar_linkedin)) {
  header("Location: ../acerca.php");
}else{
  echo "Error en " . $actualizar_linkedin . mysqli_error($conexion);
  die(mysqli_errno($conexion)) . mysqli_error($conexion);
}

// Cerrar conexion

mysqli_close($conexion);

?>
