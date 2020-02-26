<?php

session_start();

if(isset($_SESSION['usuario'])){
	header('Location: comercios_servicios.php');
}else{
  ?>
<!DOCTYPE html>
<html lang="es_ES">
<head>
  <meta http-equiv="X-UA-Compatible" content="IE=edge" charset="utf-8">
  <title>Administración</title>
  <link rel="icon" type="image/png" href="plantilla/img/ico.png" />
  <!-- Bootstrap 3.3.7 -->
  <link rel="stylesheet" href="plantilla/bower_components/bootstrap/dist/css/bootstrap.min.css">
  <!-- Font Awesome -->
  <link rel="stylesheet" href="plantilla/bower_components/font-awesome/css/font-awesome.min.css">
  <!-- Internet Explorer -->
  <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
  <!-- Google Font -->
  <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700" rel="stylesheet">
  <link rel="stylesheet" href="css/index.css">
</head>
<body>

  <div class="container">
  	<div class="row">
  		<div class="col-sm-2 col-md-3 col-lg-4"></div>
  			<div class="col-xs-12 col-sm-8 col-md-6 col-lg-4">
  				<form id="formlg" autocomplete="off" class="form-horizontal" method="POST">
  					<div class="circle-blue" align="center">
  						<div class="circle-white">
  							<img src="img/login.png" alt="" width="65px" height="65px">
  						</div>
  					</div>
  					<p class="titulo_administrativo" align="center">Iniciar sesion</p>
  					<div class="input-group">
  						<span class="input-group-btn">
  	    					<button class="btn btn-default" type="button" tabindex="-1"><i class="glyphicon glyphicon-user" id="desactiva"></i></button>
  	  					</span>
  						<input type="text" class="form-control" name="usuario" placeholder="Usuario" id="usuario">
  					</div><br>
  					<div class="input-group">
  						<span class="input-group-btn">
  							<button class="btn btn-default" id="block" tabindex="-1"><i class="glyphicon glyphicon-lock"></i></button>
  						</span>
  						<input type="password" class="form-control" name="contrasena" placeholder="Contraseña" id="contrasena">
  					</div><br>
  					<div class="btn-group btn-group-justified" role="group" aria-label="...">
  							<div class="btn-group" role="group">
  							<button id="enviar_formulario" name="acceso" class="btn btn-primary btn-group-justified">
  							<p class="change-text"><span class="glyphicon glyphicon-send"></span>&nbsp;&nbsp;Acceso</p>
  							</button>
  							</div>
  					</div><br>
  					<div align="center">
  						<p id="error" class="error">Usuario o Contraseña incorrectos</p>
  					</div>
  				</form><br><br>
  			</div>
  		<div class="col-sm-2 col-md-3 col-lg-4"></div>
  	</div>
  </div>

<!-- JQuery -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<!-- Bootstrap 3.3.7 -->
<script src="plantilla/bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
<script>
  $(document).ready(function(){

    $("#enviar_formulario").click(function(e) {
      e.preventDefault();

      var cierto = true;

      if($("#usuario").val() == ''){
        $("#usuario").css("borderColor", "#f44336");
        cierto = false;
      }else{
        $("#usuario").css("borderColor", "#d2d6de");
      }

      if($("#contrasena").val() == ''){
        $("#contrasena").css("borderColor", "#f44336");
        cierto = false;
      }else{
        $("#contrasena").css("borderColor", "#d2d6de");
      }

      if (cierto) {
    		cierto = false;

        $.ajax({
            type: "POST",
            url: "php/consulta_usuario.php",
            data: $("#formlg").serialize(),
            success: function(x) {
              if(x == 'existe'){
                window.location = 'acerca.php';
              }else{
                $('#error').css('display','block');
                console.log(x);
              }
            }
          })

    	}else{
    		return;
    	}

    })

 });

</script>
</body>
</html>
<?php
}
?>
