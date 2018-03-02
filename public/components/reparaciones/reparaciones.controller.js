(() => {
  'use strict';
  angular
  .module('arquitectura')
  .controller('controladorReparaciones', controladorReparaciones);

  controladorReparaciones.$inject = ['$stateParams', '$state', 'servicioUsuarios']

  function controladorReparaciones($stateParams, $state, servicioUsuarios){
    let vm = this;

    // aqui validamos que el paramatero exista, en caso de que no exista nos redijirá al estado anterior
    if(!$stateParams.objDifuntoTemp){
      $state.go('difuntos');
    }

    let objSinFormatoDifunto = JSON.parse($stateParams.objDifuntoTemp);

    let objDifunto = new Difunto (objSinFormatoDifunto.modelo, objSinFormatoDifunto.matricula, objSinFormatoDifunto.marca);

    vm.infoDifunto = objDifunto.getInfoDifunto();

    listaReparaciones();

    vm.nuevaReparacion = {};

    vm.listaReparaciones = servicioUsuarios.getReparaciones(objDifunto);

    vm.registrarReparacion = (pnuevaReparacion) => {

      let objReparacion = new Reparaciones(pnuevaReparacion.costo, pnuevaReparacion.descripcion)

      servicioUsuarios.addReparaciones(objDifunto, objReparacion);

      listaReparaciones();

      swal("Registro exitoso", "Se ha registrado correctamente la reparación", "success", {
        button: "Aceptar",
      });

      vm.nuevaReparacion = null;
    }

    vm.volver = () => {
      $state.go('usuarios');
    }

    function listaReparaciones(){
      vm.listaReparaciones = servicioUsuarios.getReparaciones(objDifunto);
    }
  }
})();