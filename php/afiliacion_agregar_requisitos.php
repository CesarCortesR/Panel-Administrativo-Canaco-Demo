<?php

// Acentos y simbolos

header('Content-Type: text/html; charset=utf-8');

// Conexion

include ('conexion.php');

// Variables del Formulario Requisitos

$afiliacion_requisito = $_POST['afiliacion_requisito'];
$afiliacion_requisito = addslashes($afiliacion_requisito);

// Insert a la Tabla Requisitos

$agregar_requisito = "INSERT INTO AFILIACION_REQUISITOS (NOMBRE)
VALUES ('$afiliacion_requisito')";

// Ejecutar Insert del Formulario Requisitos

if (mysqli_query($conexion,$agregar_requisito)) {
  header("Location: ../afiliacion.php");
}else{
  echo "Error en " . $agregar_requisito . mysqli_error($conexion);
  die(mysqli_errno($conexion)) . mysqli_error($conexion);
}

// Cerrar conexion

mysqli_close($conexion);

?>
