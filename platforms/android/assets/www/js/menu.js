$(document).ready(function() {

	iniciarSistema();

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

	$('#cobrar,#cobrar_menu,#cobrar_movil').click(function() {

		$.ajax({
			url: "https://pagalofacil.com/services/ServicioCobro.php",
			type: "POST",
			data: {accion: "checkStatus",usuario:sessionStorage.getItem("id_cliente") },
			dataType: 'json',
			success: function(data){
				//console.log(data);
				
				if(!data.success)
				{
					Materialize.toast(data.message, 4000);
					
				}
				else
				{
					window.location.href="form-cobro.html";
				}
				
			}
		});


	});

});

function iniciarSistema(){

	var valid=sessionStorage.getItem("d_s");

	if(valid == "true"){

		console.log("sesion iniciada: "+valid);

		$("#banner-oper").show();
		$("#banner-cobro").show();
		$("#banner-registro").hide();
		$("#banner-reclamo").hide();
		$(".link-registro").hide();
		$(".link-login").hide();

		$(".link-cobro").show();
		$(".link-operaciones").show();
		$(".link-reclamo").show();
		$(".link-perfil").show();
		$(".link-logout").show();
		$('#selectTDC').show();

	}

	else{

		console.log("NO login");

		$("#banner-oper").hide();
		$("#banner-cobro").hide();
		$("#banner-registro").show();
		$("#banner-reclamo").show();
		$(".link-registro").show();
		$(".link-login").show();

		$(".link-cobro").hide();
		$(".link-operaciones").hide();
		$(".link-reclamo").hide();
		$(".link-perfil").hide();
		$(".link-logout").hide();
		$('#selectTDC').hide();
	}

}