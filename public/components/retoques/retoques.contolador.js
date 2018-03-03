
(() => {
  'use strict';
  angular
  .module('labFuneraria')
  .controller('controladorRetoques', controladorRetoques);

  function controladorRetoques(){
    let vm = this;
    
    // let listaUsuarios = [{nombre: 'Camila', apodo:'Cami', retoques:[]}];

    let listaRetoques = [];

    vm.btnAgregarMaquillaje = true;
    vm.btnAgregarPeluqueria = true;
    vm.btnAgregarCostura = true;

    vm.add = function (parametro1, parametro2){

      if(parametro1 == 'Maquillaje'){
        vm.btnAgregarMaquillaje = false;
      }

      if(parametro1 == 'Peluquería'){
        vm.btnAgregarPeluqueria = false;
      }

      if(parametro1 == 'Costura'){
        vm.btnAgregarCostura = false;
      }

      let retoques = {
        descripcion : parametro1,
        costo : parametro2
      }
     listaRetoques.push(retoques);
     console.log(listaRetoques);
    }   

    vm.remove = function (parametro1){

      if(parametro1 == 'Maquillaje'){
      vm.btnAgregarMaquillaje = true;
      }

      if(parametro1 == 'Peluquería'){
        vm.btnAgregarPeluqueria = true;
      }

      if(parametro1 == 'Costura'){
        vm.btnAgregarCostura = true;
      }


      for(let i=0; i<listaRetoques.length; i++ ){
        if(parametro1 == listaRetoques[i].descripcion){
          listaRetoques.splice(i,1);
        }
      };
      console.log(listaRetoques);
    }
  }
})();
