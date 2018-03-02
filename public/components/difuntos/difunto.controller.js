(() => {
  'use strict';
  angular
  .module('arquitectura')
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

      let objDifuntoNuevo = new Difunto(pnuevodifunto.modelo, pnuevodifunto.matricula, pnuevodifunto.marca);

      servicioUsuarios.addDifunto(objDifuntoNuevo, objUsuario);

      swal("Registro exitoso", "Se ha registrado correctamente el difunto", "success", {
        button: "Aceptar",
      });

      listarDifuntos();

      vm.nuevoDifunto = null;
    };

    vm.registrarArreglo = (pDifunto) => {
      console.log(pDifunto);

      $state.go('reparaciones', {objDifuntoTemp: JSON.stringify(pDifunto)})
    }

    vm.volver = () => {
      $state.go('usuarios');
    }

    function listarDifuntos() {
      vm.listaDifuntos = servicioUsuarios.getDifuntos(objUsuario);
    }

  }
})();