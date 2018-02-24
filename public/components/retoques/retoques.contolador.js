(() => {
    'use strict';
    angular
    .module('labFuneraria')
    .controller('controladorRetoques', controladorRetoques);
  
    controladorRetoques.$inject = ['servicioRetoques'];
  
    function controladorRetoques(servicioRetoques){
      let vm = this;
  
      vm.nuevoRetoque = {};
  
      // Funcion que es llamda desde el html para regustra un nuevo usuario
      vm.registrarRetoque = (pnuevoRetoque) => {
  
        // Tomamos el objeto sin formato y lo comvertimos en un objeto de tipo cliente
        let objNuevoRetoque = new Cliente(pnuevoRetoque.tipo, pnuevoRetoque.costo);
  
        console.log('objeto sin formato');
        console.log(pnuevoRetoque);
  
        console.log('---------')
  
        console.log('objeto con formato');
        console.log(objNuevoRetoque);
  
        // Pasamos al servicio el nuevo obj de tipo cliente para ser almacenado en el localStorage
        servicioRetoques.addRetoque(pnuevoRetoque)
  
        // // Retroalimentacion Visual para los usuarios
        // swal("Registro exitoso", "El usuario ha sido registrado correctamente", "success", {
        //   button: "Aceptar",
        // });
  
        // Se limpia el formulario
        vm.nuevoUsuario = null;
      }
  
    }
  })();