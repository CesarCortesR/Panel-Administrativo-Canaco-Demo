<?php

session_start();
if(!isset($_SESSION['usuario'])){
	header('Location: index.php');
}

?>
<!DOCTYPE html>
<html>
<html lang="es_ES">
  <meta http-equiv="X-UA-Compatible" content="IE=edge" charset="utf-8">
  <title>Administración</title>
  <link rel="icon" type="image/png" href="plantilla/img/ico.png" />
  <!-- Tell the browser to be responsive to screen width -->
  <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
  <!-- Bootstrap 3.3.7 -->
  <link rel="stylesheet" href="plantilla/bower_components/bootstrap/dist/css/bootstrap.min.css">
  <!-- Font Awesome -->
  <link rel="stylesheet" href="plantilla/bower_components/font-awesome/css/font-awesome.min.css">
  <!-- DataTables -->
  <link rel="stylesheet" href="plantilla/bower_components/datatables.net-bs/css/dataTables.bootstrap.min.css">
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
      <span class="logo-mini"><img src="plantilla/img/logo1.png" class="img-canaco img-responsive" alt=""></span>
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

  <!-- =============================================== -->

  <!-- Left side column. contains the sidebar -->
  <aside class="main-sidebar">
    <section class="sidebar">
      <ul class="sidebar-menu" data-widget="tree">

        <li class="header">MENU DE NAVEGACION</li>

          <li class="treeview1 active">
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

          <li class="treeview1">
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
          <h3 class="eliminar_margin_top" style="font-weight: bold;">Afiliación</h3>

          <form id="formulario_afiliacion" action="php/afiliacion.php" method="POST" autocomplete="off">

            <?php

            include ('php/conexion.php');

            $consulta_afiliacion = "SELECT ID_AFILIACION, TITULO, DESCRIPCION, PAGINA_WEB,
            FECHA_MODIFICACION FROM AFILIACION WHERE ID_AFILIACION = 1 ";

            $resultado = mysqli_query($conexion, $consulta_afiliacion);

            while ($columna = mysqli_fetch_array($resultado)) {

            ?>

            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <label for="afiliacion_titulo">Titulo</label>
                  <input type="text" class="form-control" id="afiliacion_titulo" name="afiliacion_titulo"
                  value="<?php echo $columna['TITULO'] ?>">
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <label for="afiliacion_descripcion">Descripción</label>
                  <textarea class="form-control" name="afiliacion_descripcion" id="afiliacion_descripcion"
                  rows="7" cols="5" maxlength="500"><?php echo $columna['DESCRIPCION']; ?></textarea>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <label for="afiliacion_web">Sitio Web</label>
                  <input type="text" class="form-control" id="afiliacion_web" name="afiliacion_web"
                  value="<?php echo $columna['PAGINA_WEB'] ?>">
                </div>
              </div>
            </div>

                <?php
              }
            ?>
          </form>

          <div class="row">
            <div class="col-md-6">
              <form id="formulario_beneficios" action="php/afiliacion_agregar_beneficios.php" method="POST"
              autocomplete="off">
                <label for="afiliacion_beneficio">Beneficio</label>
                <div class="form-group dividir_elementos">
                  <input type="text" class="form-control" name="afiliacion_beneficio"
                  id="afiliacion_beneficio">
                  <button type="button" class="btn btn-default" onclick="agregar_beneficio()">
                    Agregar Beneficio</button>
                </div>
              </form>
            </div>

            <div class="col-md-6">
              <table id="example1" class="table table-hover">
                <thead class="tabla_publicaciones">
                  <tr>
                    <th>Lista de Beneficios</th>
                    <th>Opciones</th>
                  </tr>
                </thead>
                <tbody>
                  <?php

                  $consulta_beneficios = "SELECT ID_AFILIACION_BENEFICIOS, NOMBRE
                  FROM AFILIACION_BENEFICIOS";

                  $resultado = mysqli_query($conexion, $consulta_beneficios);

                  while ($columna = mysqli_fetch_array($resultado)) {

                   ?>

                   <tr>
                     <td>
                       <p><?php echo $columna['NOMBRE']; ?></p>
                     </td>
                     <td style="width: 100px !important;">
                       <div class="opciones">
                         <a href="javascript:enviar_id_beneficio('<?php echo $columna['ID_AFILIACION_BENEFICIOS']; ?>')"
                          ><i class="material-icons" data-toggle="modal" data-target="#eliminar_beneficio"
                          >delete</i></a>
                       </div>
                     </td>
                   </tr>

                      <?php
                    }
                  ?>

                </tbody>
              </table>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6">
              <form id="formulario_requisitos" action="php/afiliacion_agregar_requisitos.php" method="POST"
              autocomplete="off">
                <label for="afiliacion_requisito">Requisito</label>
                <div class="form-group dividir_elementos">
                  <input type="text" class="form-control" name="afiliacion_requisito"
                  id="afiliacion_requisito">
                  <button type="button" class="btn btn-default" onclick="agregar_requisito()">
                    Agregar Requisito</button>
                </div>
              </form>
            </div>

            <div class="col-md-6">
              <table id="example1" class="table table-hover">
                <thead>
                  <tr>
                    <th>Lista de Requisitos</th>
                    <th>Opciones</th>
                  </tr>
                </thead>
                <tbody>
                  <?php

                  $consulta_requisitos = "SELECT ID_AFILIACION_REQUISITOS, NOMBRE
                  FROM AFILIACION_REQUISITOS";

                  $resultado = mysqli_query($conexion, $consulta_requisitos);

                  while ($columna = mysqli_fetch_array($resultado)) {

                  ?>

                  <tr>
                    <td>
                     <p><?php echo $columna['NOMBRE']; ?></p>
                    </td>
                    <td style="width: 100px !important;">
                     <div class="opciones">
                        <a href="javascript:enviar_id_requisito('<?php echo $columna['ID_AFILIACION_REQUISITOS']; ?>')"
                        ><i class="material-icons" data-toggle="modal" data-target="#eliminar_requisito"
                        >delete</i></a>
                     </div>
                    </td>
                  </tr>

                      <?php
                    }
                  ?>
                </tbody>
              </table>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <div class="dividir_elementos">
                <div class="dividir_elementos">
                  <p>Última fecha de modificación: &nbsp;</p>
                  <?php

                  $consulta_afiliacion_fecha = "SELECT FECHA_MODIFICACION FROM AFILIACION";

                  $resultado = mysqli_query($conexion, $consulta_afiliacion_fecha);

                  while ($columna = mysqli_fetch_array($resultado)) {

                  ?>
                  <p class="fecha_modificacion"><?php echo $columna['FECHA_MODIFICACION']; ?></p>

                        <?php
                      }
                   ?>
                </div>
                <button type="button" class="btn btn-primary"
                onclick="validar_afiliacion()">Actualizar Cambios</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  </div>
</div>
<!-- ./wrapper -->

<!---------- MODAL ELIMINAR BENEFICIO ---------->
<div class="modal fade eliminar" id="eliminar_beneficio">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span></button>
        <h3 class="modal-title">Eliminar Beneficio</h3>
      </div>
      <div class="modal-body">
        <p>El Beneficio sera borrado definitivamente ¿Esta seguro que desea borrarlo?</p>
        <form id="formulario_eliminar_beneficio" action="php/afiliacion_borrar_beneficio.php" method="POST">
          <input type="hidden" id="id_beneficio" name="id_beneficio">
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default btn_fondo_gris"
        data-dismiss="modal">Cancelar</button>
        <button type="button" class="btn btn-primary"
        onclick="confirmar_borrar_beneficio()">Aceptar</button>
      </div>
    </div>
  </div>
</div>

<!---------- MODAL ELIMINAR REQUISITO ---------->
<div class="modal fade eliminar" id="eliminar_requisito">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span></button>
        <h3 class="modal-title">Eliminar Requisito</h3>
      </div>
      <div class="modal-body">
        <p>El Requisito sera borrado definitivamente ¿Esta seguro que desea borrarlo?</p>
        <form id="formulario_eliminar_requisito" action="php/afiliacion_borrar_requisito.php"
        method="POST">
          <input type="hidden" id="id_requisito" name="id_requisito">
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default btn_fondo_gris"
        data-dismiss="modal">Cancelar</button>
        <button type="button" class="btn btn-primary"
        onclick="confirmar_borrar_requisito()">Aceptar</button>
      </div>
    </div>
  </div>
</div>

<!---------- MODAL ACTUALIZAR INFORMACION DE AFILIACION ---------->
<div class="modal fade actualizar" id="actualizar_afiliacion">
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
        <button type="button" class="btn btn-default btn_fondo_gris"
        data-dismiss="modal">Cancelar</button>
        <button type="button" class="btn btn-primary"
        onclick="confirmar_formulario_afiliacion()">Aceptar</button>
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
<!-- DataTables -->
<script src="plantilla/bower_components/datatables.net/js/jquery.dataTables.min.js"></script>
<script src="plantilla/bower_components/datatables.net-bs/js/dataTables.bootstrap.min.js"></script>
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
<script src="js/funciones.js"></script>
</body>
</html>
