$(document).ready(function() {

	$('select').material_select();

	//iniciarSistema();


	$('.link-logout').on('click', function(e) {
		//alert("cerranbdo sesion");
		console.log("cerrar sesion ");
		sessionStorage.clear();
		$.ajax({
			url: "https://pagalofacil.com/services/ServicioUsuario.php",
			type: "POST",
			data: {accion: "cerrarSesion"},
			dataType: 'json',
			success: function(data){
				//console.log(data);
				//e.preventDefault();
				if(data.success)
				{
					if(data.flag){
						window.location="index.html";
						sessionStorage.clear();
						Materialize.toast("Sesion cerrada", 4000);
					}

				}
				else
				{
					Materialize.toast("No se pudo cerrar sesion, error", 4000);

					// e.preventDefault();
				}
			}
		});
	});

});


function iniciarSistema(){
	//sessionStorage.setItem("d_s", true);
	//iniciarventana();
	var valid=sessionStorage.getItem("d_s");

	/*if(valid  == "true"){
		console.log("sesion iniciada");

		//link-login
		$("#banner-oper").show();
		$("#banner-cobro").show();
		$("#banner-registro").hide();
		$("#banner-reclamo").hide();
		$(".link-registro").hide();
		$(".link-login").hide();
		//$(".link-tarjetas").show();
		$(".link-reclamo").show();
		$(".link-perfil").show();
		$(".link-logout").show();
		$('#selectTDC').show();
		$('#acordeon').css('display', '');
		$('#seccion-img-user').css('display', 'none');
		$('#tipo').css('display', '');

	}
	else{
		console.log("NO login");
		$("#banner-oper").hide();
		$("#banner-cobro").hide();
		$("#banner-registro").show();
		$("#banner-reclamo").show();
		$(".link-registro").show();
		$(".link-login").show();
		//$(".link-tarjetas").hide();
		$(".link-reclamo").hide();
		$(".link-perfil").hide();
		$(".link-logout").hide();
		$('#selectTDC').hide();
		$('#acordeon').css('display', 'none');
		$('#seccion-img-user').css('display', '');
		$('#tipo').css('display', 'none');
	}*/

}

/*function iniciarventana(){
	$("#panel-search").show();
	$("#panel-detalle").hide();
	$("#panel-colectivo").hide();
	$("#panel-tdc").hide();
	$("#seccion-img-user").show();
	$("#listado-user").hide();
	$("#listado-user-colectivo").hide();
}*/
