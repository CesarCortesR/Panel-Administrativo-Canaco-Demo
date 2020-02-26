<?php

session_start();

require ('cone.php');

$usuario = $_POST['usuario'];
$contrasena = $_POST['contrasena'];

$query = "SELECT Usuario, Contrasena FROM USUARIOS WHERE
Usuario = '$usuario' AND Contrasena = '$contrasena' ";

$resultado = $mysqli -> query($query);

while($row = $resultado->fetch_assoc()) {
  echo "existe";
  $_SESSION['usuario'] = $row['Usuario'];
}

?>
