(() => {
    'use strict';
    angular
    .module('labFuneraria')
    .controller('controladorAnimadores', controladorAnimadores);

    controladorAnimadores.$inject = ['$stateParams', '$state', 'servicioAnimador'];

    function controladorAnimadores($stateParams, $state, servicioAnimador){
      let vm = this;
      vm.nuevoAnimador = {};
      vm.listaAnimadores=listarAnimadores();
      listarAnimadores();
  
      //  registrar una nueva fiesta desde el html
      vm.registrarAnimador = (pnuevoAnimador) => {
        console.log(pnuevoAnimador);
        let objNuevoAnimador = new Animador(pnuevoAnimador.nombreAnimador,pnuevoAnimador.costo );
  
        console.log('Objeto con el animador');
        console.log(objNuevoAnimador);
        // Pasamos al servicio el nuevo obj de tipo cliente para ser almacenado en el localStorage
        servicioAnimador.addAnimador(objNuevoAnimador);
  
        // Retroalimentacion Visual para los usuarios
        swal("Registro exitoso", "el animador ha sido registrado correctamente", "success", {
          button: "Aceptar",
        });
  
        // Se limpia el formulario
        vm.nuevoAnimador = null;
        listarAnimadores();
      }
      function listarAnimadores(){
        vm.listaAnimadores= servicioAnimador.getAnimadores();
      }
  
    }
  })();