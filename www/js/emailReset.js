var preloader = $('.preloader-wrapper');

$('#btnSubmit').on('click', function(e) {

  //e.preventDefault();
  var email = $("#email").val();
  var datosIncompletos = false;

  //e.preventDefault();

  if(email == "" )
  {
    datosIncompletos = true;
    Materialize.toast('Debe ingresar un email', 4000);   
  }

  $(".invalid").each(function()
  { 
    datosIncompletos = true;
    Materialize.toast('Debe corregir los errores del formulario', 4000);
  })

  if(preloader.hasClass('active')){
      Materialize.toast("Procesando, por favor espere..", 5000);
      return;
  }

  if(datosIncompletos)
  {
    e.preventDefault();
  }
  else
  { 
    console.log(email); 
    preloader.addClass('active');
    $('#btnSubmit').addClass('disabled');

    setTimeout(function () {
      $.ajax({   
        url: "https://pagalofacil.com/services/emailReset.php",
          withCredentials: true,
        type: "POST",
        data: {accion: "emailReset", email: email},
        dataType: 'json'
        
      }).done(function (data) { 
           console.log(data); 
           e.preventDefault();
          if(data.success)
          {
            preloader.removeClass('active');
            Materialize.toast("se envio un email a su correo con el link para el reinicio de contraseña", 6000);
            //window.location.href="https://pagalofacil.com/login.html";
          }
          else
          {
            Materialize.toast(data.message, 4000);   
            e.preventDefault();
            preloader.removeClass('active');
            $('#btnSubmit').removeClass('disabled');
          } 

      }).fail(function () {
          setTimeout(function () {
              $('#btnSubmit').removeClass('disabled');
              preloader.removeClass('active');
              Materialize.toast('Network error..', 5000);
          },500);
      });
    },500);
  }

}); 
 
