(() => {
  'use strict';
  angular
  .module('labFuneraria')
  .controller('controladorEntierros', controladorEntierros);

  controladorEntierros.$inject = ['$stateParams', '$state', 'servicioUsuarios']

  function controladorEntierros($stateParams, $state, servicioUsuarios){
    let vm = this;

    // aqui validamos que el paramatero exista, en caso de que no exista nos redijirÃ¡ al estado anterior
    if(!$stateParams.objDifuntoTemp){
      $state.go('difuntos');
    }

    let objSinFormatoDifunto = JSON.parse($stateParams.objDifuntoTemp);

    let objDifunto = new Difunto (objSinFormatoDifunto.idlapida,objSinFormatoDifunto.apodo,objSinFormatoDifunto.sexo,objSinFormatoDifunto.tamanno);

    vm.infoDifunto = objDifunto.getInfoDifunto();

    listaEntierros();

    vm.nuevoEntierro = {};

    vm.listaEntierros = servicioUsuarios.getEntierros(objDifunto);

    vm.registrarEntierro = (pnuevoEntierro) => {

      let objEntierro = new Entierros(vm.nuevoEntierro.horaInicio,vm.nuevoEntierro.horaFinal,vm.nuevoEntierro.fecha,vm.nuevoEntierro.lugar, vm.nuevoEntierro.prioridad)

      servicioUsuarios.addEntierros(objDifunto, objEntierro);

      listaEntierros();

      swal("Registro exitoso", "Se ha registrado correctamente el entierro", "success", {
        button: "Aceptar",
      });

      vm.nuevoEntierro = null;
    }

    vm.volver = () => {
      $state.go('usuarios');
    }

    function listaEntierros(){
      vm.listaEntierros = servicioUsuarios.getEntierros(objDifunto);
    }

    vm.listarPrioridades = function (p1,p2,p3,p4){
      let listaPrioridades = [];
      if(p1 == true){
        listaPrioridades.push('Baja');
      }
      if(p2 == true){
        listaPrioridades.push('Normal');
      }
      if(p3 == true){
        listaPrioridades.push('Urgente');
      }
      if(p4 == true){
        listaPrioridades.push('Inmediata');
      }
      return listaPrioridades;
    }
  }
})();