<?php

// Acentos y simbolos

header('Content-Type: text/html; charset=utf-8');

// Conexion

include ('conexion.php');

// ID Requisito

$requisito_eliminar = $_POST['id_requisito'];

// Eliminar Requisito de la Tabla

$eliminar_requisito = "DELETE FROM AFILIACION_REQUISITOS
WHERE ID_AFILIACION_REQUISITOS = '$requisito_eliminar' ";

// Ejecutar Delete de la Tabla Requisitos

if (mysqli_query($conexion,$eliminar_requisito)) {
  header("Location: ../afiliacion.php");
}else{
  echo "Error en " . $eliminar_requisito . mysqli_error($conexion);
  die(mysqli_errno($conexion)) . mysqli_error($conexion);
}

// Cerrar conexion

mysqli_close($conexion);

?>
