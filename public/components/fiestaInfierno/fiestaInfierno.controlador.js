(() => {
    'use strict';
    angular
    .module('labFuneraria')
    .controller('controladorFiesta', controladorFiesta);

     controladorFiesta.$inject = ['$stateParams', '$state','servicioFiesta'];

    function controladorFiesta($stateParams, $state,servicioFiesta){
      let vm = this;
      vm.nuevaFiesta = {};
      vm.listaFiestas=listarFiestas();
      listarFiestas();
  
      //  registrar una nueva fiesta desde el html
      vm.registrarFiesta = (pnuevaFiesta) => {
        console.log(pnuevaFiesta);
        let objNuevaFiesta = new Fiesta(pnuevaFiesta.fecha,pnuevaFiesta.horas,pnuevaFiesta.animador, pnuevaFiesta.pago );
  
        console.log('Objeto con la fiesta');
        console.log(objNuevaFiesta);
        // Pasamos al servicio el nuevo obj de tipo cliente para ser almacenado en el localStorage
        servicioFiesta.addFiesta(objNuevaFiesta);
  
        // Retroalimentacion Visual para los usuarios
        swal("Registro exitoso", "La fiesta ha sido registrada correctamente", "success", {
          button: "Aceptar",
        });
  
        // Se limpia el formulario
        vm.nuevoUsuario = null;
        listarFiestas();
      }
      function listarFiestas(){
        vm.listaFiestas= servicioFiesta.getFiestas();
      }
  
    }
  })();