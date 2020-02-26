$(document).on('submit','#formlg',function(e) {
	e.preventDefault();

	var nombre = $("#correo").val();
	var contra = $("#contrasenia").val();
	var completo = false;

	if (nombre == "" || nombre.lenght == 0 || /^\s+$/.test(nombre)) {
		$("#correo").css("border","1px solid red");
		completo = false;
	}else{
		$("#correo").css("border","1px solid #ccc");
		completo = true;
	}

	if (contra == "" || contra.lenght == 0 || /^\s+$/.test(contra)) {
		$("#contrasenia").css("border","1px solid red");
		completo = false;
	}else{
		$("#contrasenia").css("border","1px solid #ccc");
		completo = true;
	}

	if(completo)
		Login();
});

function Login(){
	$.ajax({
		type: 'POST',
		url: 'php/acceso_login.php',
		datatype: 'JSON',
		data: $('#formlg').serialize(),
		success: function(data){
			if(data == 's'){
				console.log(data);
				window.location = 'comercios_servicios.php';
			}else{
				$('#error').css('display','block');
				console.log(data);
			}
		},
		error: function(e,error){console.log(e);console.log(error);alert('Ha ocurrido un error.');}
	});
}
