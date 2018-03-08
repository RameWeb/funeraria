(() => {
  'use strict';
  angular
  .module('labFuneraria')
  .controller('controladorUsuarios', controladorUsuarios);

  controladorUsuarios.$inject = ['$stateParams', '$state', 'servicioUsuarios'];

  function controladorUsuarios($stateParams, $state, servicioUsuarios){
    let vm = this;

    vm.nuevoUsuario = {};
    vm.listaUsuarios = listarUsuarios();

    listarUsuarios();
    // Función que es llamda desde el html para registra un nuevo usuario
    vm.registrarUsuario = (pnuevoUsuario) => {

      console.log(pnuevoUsuario);

      // Tomamos el objeto sin formato y lo comvertimos en una instancia de la clase cliente
      let objNuevoUsuario = new Cliente(pnuevoUsuario.foto,pnuevoUsuario.cedula,pnuevoUsuario.nombre,pnuevoUsuario.apellido,pnuevoUsuario.fechanacimiento,pnuevoUsuario.sexo,pnuevoUsuario.ubicacion,pnuevoUsuario.provincia,pnuevoUsuario.canton,pnuevoUsuario.distrito,pnuevoUsuario.usuario,pnuevoUsuario.contrasenna);

     
      console.log('objeto con usuario');
      console.log(objNuevoUsuario);

      // Pasamos al servicio el nuevo obj de tipo cliente para ser almacenado en el localStorage
      servicioUsuarios.addUsuario(objNuevoUsuario);

      // Retroalimentación Visual para los usuarios
      swal("Registro exitoso", "El usuario ha sido registrado correctamente", "success", {
        button: "Aceptar",
      });

      // Se limpia el formulario
      vm.nuevoUsuario = null;
      listarUsuarios();
    }

    vm.registrarDifuntos = (pusuario) => {
      // console.log(pusuario);

      $state.go('difuntos', { objUsuarioTemp : JSON.stringify(pusuario)});
    }

    function listarUsuarios() {
      vm.listaUsuarios = servicioUsuarios.getUsuarios();
    }

    

  }
})();