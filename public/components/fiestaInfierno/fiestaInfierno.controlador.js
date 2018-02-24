(() => {
    'use strict';
    angular
    .module('labFuneraria')
    .controller('controladorFiesta', controladorFiesta);

    // controladorFiesta.$inject = ['servicioFiesta'];

    function controladorFiesta(){
      let vm = this;
      vm.nuevaFiesta = {};
  
      //  registrar una nueva fiesta desde el html
      vm.registrarFiesta = (pnuevaFiesta) => {

        let objNuevaFiesta = new Fiesta(pnuevaFiesta.fecha,pnuevaFiesta.horas,pnuevaFiesta.animador, pnuevaFiesta.pago );
  
        console.log(pnuevaFiesta);
        console.log(objNuevaFiesta);
        // Pasamos al servicio el nuevo obj de tipo cliente para ser almacenado en el localStorage
        servicioFiesta.addFiesta(pnuevaFiesta)
  
        // Retroalimentacion Visual para los usuarios
        swal("Registro exitoso", "El usuario ha sido registrado correctamente", "success", {
          button: "Aceptar",
        });
  
        // Se limpia el formulario
        vm.nuevoUsuario = null;
      }
  
    }
  })();