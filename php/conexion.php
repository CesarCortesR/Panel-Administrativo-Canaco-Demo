<?php

include ('global.php');

$conexion = mysqli_connect(DB_SERVER,DB_USER,DB_PASSWORD) or die(mysqli_error($conexion));

mysqli_select_db($conexion,DB_BASE) or die(mysqli_error($conexion));

mysqli_set_charset($conexion, "UTF8");

if (!$conexion) {
	echo "Problema con la conexion a la base, no esta al puro pedo" . mysqli_error($conexion);
}

?>
