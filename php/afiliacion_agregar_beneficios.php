<?php

// Acentos y simbolos

header('Content-Type: text/html; charset=utf-8');

// Conexion

include ('conexion.php');

// Variables del formulario Beneficios

$afiliacion_beneficio = $_POST['afiliacion_beneficio'];
$afiliacion_beneficio = addslashes($afiliacion_beneficio);

// Insert a la Tabla Beneficios

$agregar_beneficio = "INSERT INTO AFILIACION_BENEFICIOS (NOMBRE)
VALUES ('$afiliacion_beneficio')";

// Ejecutar Insert del Formulario Beneficios

if (mysqli_query($conexion,$agregar_beneficio)) {
  header("Location: ../afiliacion.php");
}else{
  echo "Error en " . $agregar_beneficio . mysqli_error($conexion);
  die(mysqli_errno($conexion)) . mysqli_error($conexion);
}

// Cerrar conexion

mysqli_close($conexion);

?>
