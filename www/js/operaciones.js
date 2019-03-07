    $(function() {
        /*Preloader*/
        $(window).load(function() {
            setTimeout(function() {
              $('body').addClass('loaded');      
            }, 200);
        });
    });
    
  $(document).ready(function(){

        $('#table_transac').DataTable({

            "ajax": {
                "url":'https://www.pagalofacil.com/services/ServicioUsuario.php',
                "type":"POST",
                "data":{'accion':'listarTransacciones'}
            },
            dom: 'Bfrtip',
            buttons: [
            //    'excel', 'pdf'
            ],

            "language":{

                        "emptyTable":     "No Existen datos para mostrar",
                        "info":           "Mostrando _START_ de _END_ de un total de _TOTAL_ ",
                        "infoEmpty":      "Showing 0 to 0 of 0 entries",
                        "infoFiltered":   "(filtered from _MAX_ total entries)",
                        "infoPostFix":    "",
                        "thousands":      ",",
                        "lengthMenu":     "Mostrar _MENU_ ",
                        "loadingRecords": "cargando...",
                        "processing":     "Procesando...",
                        "search":         "Buscar:",
                        "zeroRecords":    "Sin resultados",
                        "paginate": {
                            "first":      "Primero",
                            "last":       "Ultimo",
                            "next":       "Siguiente",
                            "previous":   "Anterior"
                        },
                        "aria": {
                            "sortAscending":  ": activate to sort column ascending",
                            "sortDescending": ": activate to sort column descending"
                        }
                    },
            "fnRowCallback": function( nRow, aData, iDisplayIndex, iDisplayIndexFull ) {
                var id=null;
                if(aData.success===false){
                    Materialize.toast(json.message, 5000);
                    return;
                }

                //$(nRow).find('td:first').addClass('hide');


            },
            "fnDrawCallback": function () {
                $('.tooltipped').tooltip({delay: 50});
            }
        });
    });
