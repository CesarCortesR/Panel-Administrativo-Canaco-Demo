<?php

// Acentos y simbolos

header('Content-Type: text/html; charset=utf-8');

// Conexion

include ('conexion.php');

// ID Beneficio

$beneficio_eliminar = $_POST['id_beneficio'];

// Eliminar Beneficio de la Tabla

$eliminar_beneficio = "DELETE FROM AFILIACION_BENEFICIOS
WHERE ID_AFILIACION_BENEFICIOS = '$beneficio_eliminar' ";

// Ejecutar Delete de la Tabla Beneficios

if (mysqli_query($conexion,$eliminar_beneficio)) {
  header("Location: ../afiliacion.php");
}else{
  echo "Error en " . $eliminar_beneficio . mysqli_error($conexion);
  die(mysqli_errno($conexion)) . mysqli_error($conexion);
}

// Cerrar conexion

mysqli_close($conexion);

?>
