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

// Variables del formulario Afiliacion

$afiliacion_titulo = $_POST['afiliacion_titulo'];
$afiliacion_titulo = addslashes($afiliacion_titulo);
$afiliacion_descripcion = $_POST['afiliacion_descripcion'];
$afiliacion_descripcion = addslashes($afiliacion_descripcion);
$afiliacion_web = $_POST['afiliacion_web'];
$afiliacion_web = addslashes($afiliacion_web);
$afiliacion_fecha = $fecha;

// Update del Formulario Afiliacion

$actualizar_afiliacion = "UPDATE AFILIACION SET TITULO = '$afiliacion_titulo',
DESCRIPCION = '$afiliacion_descripcion', PAGINA_WEB = '$afiliacion_web',
FECHA_MODIFICACION = '$afiliacion_fecha' WHERE ID_AFILIACION = 1 ";

// Ejecutar Update del Formulario Afiliacion

if (mysqli_query($conexion,$actualizar_afiliacion)) {
  header("Location: ../afiliacion.php");
}else{
  echo "Error en " . $actualizar_afiliacion . mysqli_error($conexion);
  die(mysqli_errno($conexion)) . mysqli_error($conexion);
}

// Cerrar conexion

mysqli_close($conexion);

?>
