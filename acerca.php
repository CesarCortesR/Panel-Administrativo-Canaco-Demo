<?php

session_start();
if(!isset($_SESSION['usuario'])){
	header('Location: index.php');
}

?>
<!DOCTYPE html>
<html lang="es_ES">
<head>
  <meta http-equiv="X-UA-Compatible" content="IE=edge" charset="utf-8">
  <title>Administración</title>
  <link rel="icon" type="image/png" href="plantilla/img/ico.png" />
  <!-- Tell the browser to be responsive to screen width -->
  <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
  <!-- Bootstrap 3.3.7 -->
  <link rel="stylesheet" href="plantilla/bower_components/bootstrap/dist/css/bootstrap.min.css">
  <!-- Font Awesome -->
  <link rel="stylesheet" href="plantilla/bower_components/font-awesome/css/font-awesome.min.css">
  <!-- Ionicons -->
  <link rel="stylesheet" href="plantilla/bower_components/Ionicons/css/ionicons.min.css">
  <!-- Theme style -->
  <link rel="stylesheet" href="plantilla/dist/css/AdminLTE.min.css">
  <!-- AdminLTE Skins. Choose a skin from the css/skins
       folder instead of downloading all of them to reduce the load. -->
  <link rel="stylesheet" href="plantilla/dist/css/skins/_all-skins.min.css">
  <!-- Internet Explorer -->
  <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
  <!-- Google Font -->
  <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700" rel="stylesheet">
	<!-- Iconos Material Design -->
	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <!-- Mio -->
  <link rel="stylesheet" href="css/style2.css">
</head>
<body class="hold-transition skin-blue sidebar-mini">
<div class="wrapper">
  <header class="main-header">
    <a href="#" class="logo">
      <span class="logo-mini"><img src="plantilla/img/logo2.png" class="img-canaco img-responsive" alt=""></span>
      <span class="logo-lg"><img src="plantilla/img/logo1.png" class="img-canaco img-responsive" alt=""></span>
    </a>
    <nav class="navbar navbar-static-top">
      <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </a>
			<div class="navbar-custom-menu">
        <ul class="nav navbar-nav">
					<li class="dropdown user user-menu">
            <a href="php/log_out.php"
						style="display: flex; padding-top: 25px !important;
						padding-bottom: 21px !important;">
							<i class="material-icons">exit_to_app</i>
              <span class="hidden-xs" style="padding-top: 2px;
						  padding-left: 5px;">Cerrar Sesión</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>

  <!-- Left side column. contains the sidebar -->
  <aside class="main-sidebar">
    <section class="sidebar">
      <ul class="sidebar-menu" data-widget="tree">

        <li class="header">MENU DE NAVEGACION</li>

          <li class="treeview1">
            <a href="afiliacion.php" class="padding_top_bottom_p_v2">
              <div class="dividir_elementos_v2">
                <img src="plantilla/img/aside/afiliacion.png" alt="" width="22px" height="22px">
                <p class="margin_top_p_v2">Afiliación</p>
              </div>
              <span class="pull-right-container">
                <i class="fa fa-angle-left pull-left"></i>
              </span>
            </a>
          </li>

          <li class="treeview1 active">
            <a href="acerca.php" class="padding_top_bottom_p">
              <div class="dividir_elementos_v2">
                <img src="plantilla/img/aside/ayuda.png" alt="" width="22px" height="22px">
                <p class="margin_top_p">Acerca de Canaco</p>
              </div>
              <span class="pull-right-container">
                <i class="fa fa-angle-left pull-left"></i>
              </span>
            </a>
          </li>

      </ul>
    </section>
    <!-- /.sidebar -->
  </aside>

  <!-- =============================================== -->

  <div class="content-wrapper">
    <section class="content">
      <div class="box">
        <div class="box-body">
          <h3 class="eliminar_margin_top" style="font-weight: bold;">Acerca de Canaco</h3>

          <form id="formulario_acerca" enctype="multipart/form-data"
          action="php/acerca.php" method="POST" autocomplete="off">

            <?php
            include ('php/conexion.php');

            $consulta_acerca = "SELECT FOTO, DESCRIPCION, MISION, VISION, UBICACION, LATITUD, LONGITUD,
            CORREO_PRINCIPAL, CORREO_SECUNDARIO, TELEFONO_PRINCIPAL, TELEFONO_SECUNDARIO, HORARIO,
            FECHA_MODIFICACION FROM ACERCA_CANACO WHERE ID_ACERCA_CANACO = 1";

            $resultado = mysqli_query($conexion, $consulta_acerca);

            while ($columna = mysqli_fetch_array($resultado)) {

            ?>

            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <label for="modal_nombre_institucion">Foto de Encabezado</label>
                  <div class="input-group">
                    <input type="text" class="form-control" readonly name="nombre_foto_acerca"
                    id="nombre_foto_acerca" maxlength="250" value="<?php echo $columna['FOTO']; ?>">
                    <label class="input-group-btn">
                        <span class="btn btn-default">
                            Examinar<input type="file" id="acerca_imagen" name="acerca_imagen"
                            accept=".png, .jpg, .jpeg" style="display: none;"
                            value="<?php echo $columna['FOTO']; ?>">
                        </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <label for="qq">¿Qué es Canaco?</label>
                  <textarea class="form-control" id="acerca_que_es" cols="10" rows="9"
                  name="acerca_que_es" required maxlength="1000" ><?php echo $columna['DESCRIPCION']; ?></textarea>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <label for="acerca_mision">Mision</label>
                  <textarea class="form-control" name="acerca_mision" id="acerca_mision"
                  cols="2" rows="2" maxlength="250" required><?php echo $columna['MISION']; ?></textarea>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <label for="acerca_vision">Visión</label>
                  <textarea class="form-control" name="acerca_vision" id="acerca_vision"
                  cols="2" rows="2" maxlength="250"><?php echo $columna['VISION']; ?></textarea>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <label for="acerca_ubicacion">Ubicación</label>
                  <input type="text" class="form-control" name="acerca_ubicacion" id="acerca_ubicacion"
                  maxlength="250" required value="<?php echo $columna['UBICACION']; ?>">
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12">
                <h4 for="acerca_ubicacion">Coordenadas de Google Maps</h4>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label for="acerca_latitud">Latitud</label>
                  <input type="text" class="form-control" name="acerca_latitud"
                  id="acerca_latitud" maxlength="25" required onclick="soloLetras()"
                  value="<?php echo $columna['LATITUD']; ?>">
                </div>
              </div>

              <div class="col-md-6">
                <div class="form-group">
                  <label for="acerca_longitud">Logitud</label>
                  <input type="text" class="form-control" name="acerca_longitud"
                  id="acerca_longitud" maxlength="25" required onclick="soloLetras()"
                  value="<?php echo $columna['LONGITUD']; ?>">
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label for="acerca_correo_principal">Correo Principal</label>
                  <input type="text" class="form-control" name="acerca_correo_principal"
                  id="acerca_correo_principal" maxlength="45" required
                  value="<?php echo $columna['CORREO_PRINCIPAL']; ?>">
                </div>
              </div>

              <div class="col-md-6">
                <div class="form-group">
                  <label for="acerca_correo_secundario">Correo Secundario</label>
                  <input type="text" class="form-control" name="acerca_correo_secundario"
                  id="acerca_correo_secundario" maxlength="45" required
                  value="<?php echo $columna['CORREO_SECUNDARIO']; ?>">
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label for="acerca_telefono_principal">Telefono Principal</label>
                  <input type="text" class="form-control" name="acerca_telefono_principal"
                  id="acerca_telefono_principal" maxlength="45" required
                  value="<?php echo $columna['TELEFONO_PRINCIPAL']; ?>">
                </div>
              </div>

              <div class="col-md-6">
                <div class="form-group">
                  <label for="acerca_telefono_secundario">Telefono Secundario</label>
                  <input type="text" class="form-control" name="acerca_telefono_secundario"
                  id="acerca_telefono_secundario" maxlength="45" required
                  value="<?php echo $columna['TELEFONO_SECUNDARIO']; ?>">
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <label for="acerca_horario_servicio">Horario de Servicio</label>
                  <input type="text" class="form-control" name="acerca_horario" maxlength="100"
                  required id="acerca_horario" value="<?php echo $columna['HORARIO']; ?>">
                </div>
              </div>
            </div>

                <?php
              }
            ?>

            <div class="row">
              <div class="col-md-12">
                <label for="acerca_redes">Redes Sociales</label>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6">
                <?php

                $consulta_acerca_whatsapp = "SELECT ID_REDES_SOCIALES_CANACO, FOTO, RED_SOCIAL,
                URL FROM REDES_SOCIALES_CANACO WHERE ID_REDES_SOCIALES_CANACO = 1 ";

                $resultado_whatsapp = mysqli_query($conexion, $consulta_acerca_whatsapp);

                while ($columna = mysqli_fetch_array($resultado_whatsapp)) {

                ?>
                <div class="form-group">
                  <div class="dividir_elementos">
                    <img src="plantilla/img/acerca/whatsapp.png" alt="Imagen No Disponible" height="34px">
                      <input type="text" class="form-control" name="acerca_url_redes_sociales_whatsapp"
                      value="<?php echo $columna['URL']; ?>">
                  </div>
                </div>

                    <?php
                  }
                ?>
              </div>

              <div class="col-md-6">
                <?php

                $consulta_acerca_whatsapp = "SELECT ID_REDES_SOCIALES_CANACO, FOTO, RED_SOCIAL,
                URL FROM REDES_SOCIALES_CANACO WHERE ID_REDES_SOCIALES_CANACO = 2 ";

                $resultado_whatsapp = mysqli_query($conexion, $consulta_acerca_whatsapp);

                while ($columna = mysqli_fetch_array($resultado_whatsapp)) {

                ?>
                <div class="form-group">
                  <div class="dividir_elementos">
                    <img src="plantilla/img/acerca/facebook.png" alt="Imagen No Disponible" height="34px">
                      <input type="text" class="form-control" name="acerca_url_redes_sociales_facebook"
                      value="<?php echo $columna['URL']; ?>">
                  </div>
                </div>

                    <?php
                  }
                ?>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6">
                <?php

                $consulta_acerca_youtube = "SELECT ID_REDES_SOCIALES_CANACO, FOTO, RED_SOCIAL,
                URL FROM REDES_SOCIALES_CANACO WHERE ID_REDES_SOCIALES_CANACO = 3 ";

                $resultado_youtube = mysqli_query($conexion, $consulta_acerca_youtube);

                while ($columna = mysqli_fetch_array($resultado_youtube)) {

                ?>
                <div class="form-group">
                  <div class="dividir_elementos">
                    <img src="plantilla/img/acerca/youtube.png" alt="Imagen No Disponible" height="34px">
                      <input type="text" class="form-control" name="acerca_url_redes_sociales_youtube"
                      value="<?php echo $columna['URL']; ?>">
                  </div>
                </div>

                    <?php
                  }
                ?>
              </div>

              <div class="col-md-6">
                <?php

                $consulta_acerca_twitter = "SELECT ID_REDES_SOCIALES_CANACO, FOTO, RED_SOCIAL,
                URL FROM REDES_SOCIALES_CANACO WHERE ID_REDES_SOCIALES_CANACO = 4 ";

                $resultado_twitter = mysqli_query($conexion, $consulta_acerca_twitter);

                while ($columna = mysqli_fetch_array($resultado_twitter)) {

                ?>
                <div class="form-group">
                  <div class="dividir_elementos">
                    <img src="plantilla/img/acerca/twitter.png" alt="Imagen No Disponible" height="34px">
                      <input type="text" class="form-control" name="acerca_url_redes_sociales_twitter"
                      value="<?php echo $columna['URL']; ?>">
                  </div>
                </div>

                    <?php
                  }
                ?>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6">
                <?php

                $consulta_acerca_instagram = "SELECT ID_REDES_SOCIALES_CANACO, FOTO, RED_SOCIAL,
                URL FROM REDES_SOCIALES_CANACO WHERE ID_REDES_SOCIALES_CANACO = 5 ";

                $resultado_instagram = mysqli_query($conexion, $consulta_acerca_instagram);

                while ($columna = mysqli_fetch_array($resultado_instagram)) {

                ?>
                <div class="form-group">
                  <div class="dividir_elementos">
                    <img src="plantilla/img/acerca/instagram.png" alt="Imagen No Disponible" height="34px">
                      <input type="text" class="form-control" name="acerca_url_redes_sociales_instagram"
                      value="<?php echo $columna['URL']; ?>">
                  </div>
                </div>

                    <?php
                  }
                ?>
              </div>

              <div class="col-md-6">
                <?php

                $consulta_acerca_google = "SELECT ID_REDES_SOCIALES_CANACO, FOTO, RED_SOCIAL,
                URL FROM REDES_SOCIALES_CANACO WHERE ID_REDES_SOCIALES_CANACO = 6 ";

                $resultado_google = mysqli_query($conexion, $consulta_acerca_google);

                while ($columna = mysqli_fetch_array($resultado_google)) {

                ?>
                <div class="form-group">
                  <div class="dividir_elementos">
                    <img src="plantilla/img/acerca/google.png" alt="Imagen No Disponible" height="34px">
                      <input type="text" class="form-control" name="acerca_url_redes_sociales_google"
                      value="<?php echo $columna['URL']; ?>">
                  </div>
                </div>

                    <?php
                  }
                ?>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6">
                <?php

                $consulta_acerca_linkedin = "SELECT ID_REDES_SOCIALES_CANACO, FOTO, RED_SOCIAL,
                URL FROM REDES_SOCIALES_CANACO WHERE ID_REDES_SOCIALES_CANACO = 7 ";

                $resultado_linkedin = mysqli_query($conexion, $consulta_acerca_linkedin);

                while ($columna = mysqli_fetch_array($resultado_linkedin)) {

                ?>
                <div class="form-group">
                  <div class="dividir_elementos">
                    <img src="plantilla/img/acerca/linkedin.png" alt="Imagen No Disponible" height="34px">
                      <input type="text" class="form-control" name="acerca_url_redes_sociales_linkedin"
                      value="<?php echo $columna['URL']; ?>">
                  </div>
                </div>

                    <?php
                  }
                ?>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12">
                <div class="dividir_elementos mover_abajo">
                  <div class="dividir_elementos">
                    <p>Última fecha de modificación: &nbsp;</p>
                    <?php

                    $consulta_acerca_fecha = "SELECT FECHA_MODIFICACION
                    FROM ACERCA_CANACO WHERE ID_ACERCA_CANACO = 1";

                    $resultado = mysqli_query($conexion, $consulta_acerca_fecha);

                    while ($columna = mysqli_fetch_array($resultado)) {

                    ?>
                    <p class="fecha_modificacion"><?php echo $columna['FECHA_MODIFICACION']; ?></p>

                        <?php
                      }
                   ?>
                  </div>
                  <button type="button" class="btn btn-primary"
                  onclick="validar_acerca()">Actualizar Cambios</button>
                </div>
              </div>
            </div>

          </form>

        </div>
      </div>
    </section>
  </div>
</div>
<!-- ./wrapper -->

<!---------- MODAL ACTUALIZAR ACERCA ---------->
<div class="modal fade actualizar" id="actualizar_acerca">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span></button>
        <h3 class="modal-title">Actualizar Datos</h3>
      </div>
      <div class="modal-body">
        <p>La información proporcionada sera actualizada ¿Esta seguro que desea continuar?</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default btn_fondo_gris" data-dismiss="modal">Cancelar</button>
        <input type="submit" class="btn btn-primary" name="Aceptar" value="Aceptar"
        onclick="confirmar_formulario_acerca()">
      </div>
    </div>
  </div>
</div>

<!-- JQuery -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<!-- jQuery 3 -->
<script src="plantilla/bower_components/jquery/dist/jquery.min.js"></script>
<!-- Bootstrap 3.3.7 -->
<script src="plantilla/bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
<!-- SlimScroll -->
<script src="plantilla/bower_components/jquery-slimscroll/jquery.slimscroll.min.js"></script>
<!-- FastClick -->
<script src="plantilla/bower_components/fastclick/lib/fastclick.js"></script>
<!-- AdminLTE App -->
<script src="plantilla/dist/js/adminlte.min.js"></script>
<!-- AdminLTE for demo purposes -->
<script src="plantilla/dist/js/demo.js"></script>
<script>
  $(document).ready(function () {
    $('.sidebar-menu').tree()
  })
</script>
<script>
  $(function() {

// We can attach the `fileselect` event to all file inputs on the page
$(document).on('change', ':file', function() {
  var input = $(this),
      numFiles = input.get(0).files ? input.get(0).files.length : 1,
      label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
  input.trigger('fileselect', [numFiles, label]);
});

// We can watch for our custom `fileselect` event like this
$(document).ready( function() {
    $(':file').on('fileselect', function(event, numFiles, label) {

        var input = $(this).parents('.input-group').find(':text'),
            log = numFiles > 1 ? numFiles + ' files selected' : label;

        if( input.length ) {
            input.val(log);
        } else {
            if( log ) alert(log);
        }

    });
});

});
</script>
<script src="js/funciones.js"></script>
</body>
</html>
