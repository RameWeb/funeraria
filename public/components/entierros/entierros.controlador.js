(() => {
  'use strict';
  angular
  .module('labFuneraria')
  .controller('controladorEntierros', controladorEntierros);

  controladorEntierros.$inject = ['servicioEntierros'];

  function controladorEntierros(servicioEntierros){
    let vm = this;

    vm.nuevoEntierro = {};

    // vm.listarPrioridades = function(pprioridad){
    //   vm.listaPrioridades.push(pprioridad);
    //   console.log(vm.listaPrioridades);
    //   return vm.listaPrioridades;
    // 
    
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
    
    
    // Funcion que es llamda desde el html para regustra un nuevo usuario
    vm.registrarEntierro = (pnuevoEntierro) => {
      vm.nuevoEntierro.prioridad = vm.listarPrioridades(vm.nuevoEntierro.p1,vm.nuevoEntierro.p2,vm.nuevoEntierro.p3,vm.nuevoEntierro.p4);

      // Tomamos el objeto sin formato y lo comvertimos en un objeto de tipo cliente
      let objNuevoEntierro = new Entierro(vm.nuevoEntierro.horaInicio,vm.nuevoEntierro.horaFinal,vm.nuevoEntierro.fecha,vm.nuevoEntierro.lugar, vm.nuevoEntierro.prioridad);
      // console.log(objNuevoEntierro);
      // localStorage.setItem('nuevoEntierro', JSON.stringify(objNuevoEntierro));
      // console.log(objNuevoEntierro.obtenerHora()); //metodo de horas y minutos

      // Retroalimentacion Visual para los usuarios: SweetAlert
      swal("Registro exitoso", "El entierro se ha sido registrado correctamente", "success", {
        button: "Aceptar",
      });

      // Pasamos al servicio el nuevo obj de tipo cliente para ser almacenado en el localStorage
      // servicioEntierros.agregarEntierro(pnuevoEntierro)

      // Se limpia el formulario
      vm.nuevoEntierro = null;
    }

  }
})();