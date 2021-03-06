(() => {
  'use strict';
  angular
  .module('labFuneraria')
  .controller('controladorDifunto', controladorDifunto);

  controladorDifunto.$inject = ['$stateParams', '$state', 'servicioUsuarios']

  function controladorDifunto($stateParams, $state, servicioUsuarios){
    let vm = this;

    // aqui validamos que el paramatero exista, en caso de que no exista nos redijirá al estado anterior
    if(!$stateParams.objUsuarioTemp){
      $state.go('usuarios');
    }



    let objSinFormatoUsuario = JSON.parse($stateParams.objUsuarioTemp);

    let objUsuario = new Cliente(objSinFormatoUsuario.foto,objSinFormatoUsuario.cedula,objSinFormatoUsuario.nombre,objSinFormatoUsuario.apellido,objSinFormatoUsuario.fechanacimiento,objSinFormatoUsuario.sexo,objSinFormatoUsuario.ubicacion,objSinFormatoUsuario.provincia,objSinFormatoUsuario.canton,objSinFormatoUsuario.distrito,objSinFormatoUsuario.usuario,objSinFormatoUsuario.contrasenna);

    vm.nuevoDifunto = {};

    vm.usuarioActivo = objUsuario.getNombre();

    listarDifuntos();

    vm.listaDifuntos = servicioUsuarios.getDifuntos(objUsuario);

    vm.registrarDifunto = (pnuevodifunto) => {

      let objDifuntoNuevo = new Difunto(pnuevodifunto.idlapida,pnuevodifunto.apodo, pnuevodifunto.edad, pnuevodifunto.sexo, pnuevodifunto.tamanno);

      servicioUsuarios.addDifunto(objDifuntoNuevo, objUsuario);

      swal("Registro exitoso", "Se ha registrado correctamente el difunto", "success", {
        button: "Aceptar",
      });

      listarDifuntos();

      vm.nuevoDifunto = null;
    };

    vm.registrarEntierro = (pDifunto) => {
      console.log(pDifunto);

      $state.go('entierros', {objDifuntoTemp: JSON.stringify(pDifunto)})
    }

    vm.registrarRetoque = (pDifunto) => {
      console.log(pDifunto);

      $state.go('retoques', {objDifuntoTemp: JSON.stringify(pDifunto)})
    }

    vm.registrarFiestaInfierno = (pDifunto) => {
      console.log(pDifunto);

      $state.go('registroFiesta', {objDifuntoTemp: JSON.stringify(pDifunto)})
    }

    vm.volver = () => {
      $state.go('usuarios');
    }

    function listarDifuntos() {
      vm.listaDifuntos = servicioUsuarios.getDifuntos(objUsuario);
    }

  }
})();