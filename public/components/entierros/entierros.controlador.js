(() => {
  'use strict';
  angular
  .module('labFuneraria')
  .controller('controladorEntierros', controladorEntierros);

  controladorEntierros.$inject = ['servicioEntierros'];

  function controladorEntierros(servicioEntierros){
    let vm = this;

    vm.nuevoEntierro = {};

    // Funcion que es llamda desde el html para regustra un nuevo usuario
    vm.registrarEntierro = (pnuevoEntierro) => {

      // Tomamos el objeto sin formato y lo comvertimos en un objeto de tipo cliente
      let objNuevoEntierro = new Entierro(pnuevoEntierro.horaInicio,pnuevoEntierro.horaFinal,vm.nuevoEntierro.fecha,vm.nuevoEntierro.lugar,vm.nuevoEntierro.prioridad);

      console.log('objeto sin formato');
      console.log(pnuevoEntierro);

      console.log('---------')

      console.log('objeto con formato');
      console.log(objNuevoEntierro);
      console.log(objNuevoEntierro.obtenerHora());

      swal("Registro exitoso", "El usuario ha sido registrado correctamente", "success", {
        button: "Aceptar",
      });

      // Pasamos al servicio el nuevo obj de tipo cliente para ser almacenado en el localStorage
      servicioEntierros.agregarEntierro(pnuevoEntierro)

      // Retroalimentacion Visual para los usuarios: SweetAlert
      swal("Registro exitoso", "El usuario ha sido registrado correctamente", "success", {
        button: "Aceptar",
      });

      // Se limpia el formulario
      vm.nuevoEntierro = null;
    }

  }
})();