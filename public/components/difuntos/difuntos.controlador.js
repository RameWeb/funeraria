(() => {
  'use strict';
  angular
  .module('lab-funeraria')
  .controller('controladorDifuntos', controladorDifuntos);

  controladorDifuntos.$inject = ['$stateParams', '$state', 'servicioUsuarios']

  function controladorDifuntos($stateParams, $state, servicioUsuarios){
    let vm = this;

    // aqui validamos que el paramatero exista, en caso de que no exista nos redijirá al estado anterior
    if(!$stateParams.objUsuarioTemp){
      $state.go('usuarios');
    }

    let objSinFormatoUsuario = JSON.parse($stateParams.objUsuarioTemp);

    let objUsuario = new Cliente(objSinFormatoUsuario.cedula, objSinFormatoUsuario.nombre1, objSinFormatoUsuario.apellido1, objSinFormatoUsuario.edad);

    vm.nuevoDifuntos = {};

    vm.usuarioActivo = objUsuario.getNombre();

    listarDifuntos();

    vm.listaDifuntos = servicioUsuarios.getDifuntos(objUsuario);

    vm.registrarDifuntos = (pnuevodifuntos) => {

      let objDifuntosNuevo = new Difuntos(pnuevodifuntos.apodo, pnuevodifuntos.edad, pnuevodifuntos.sexo, pnuevodifuntos.tamanno);

      servicioUsuarios.addDifuntos(objDifuntosNuevo, objUsuario);

      swal("Registro exitoso", "Se ha registrado correctamente el difunto", "success", {
        button: "Aceptar",
      });

      listarDifuntos();

      vm.nuevoDifuntos = null;
    };

    

    vm.volver = () => {
      $state.go('usuarios');
    }

    function listarDifuntos() {
      vm.listaDifuntos = servicioUsuarios.getDifuntos(objUsuario);
    }

    
  }
})();