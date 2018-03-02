
(() => {
  'use strict';
  angular
  .module('labFuneraria')
  .controller('controladorRetoques', controladorRetoques);

  function controladorRetoques(){
    let vm = this;
    
    // let listaUsuarios = [{nombre: 'Camila', apodo:'Cami', retoques:[]}];

    let listaRetoques = [];

    vm.add = function (parametro1, parametro2){
      let retoques = {
        descripcion : parametro1,
        costo : parametro2
      }
     listaRetoques.push(retoques);
     console.log(listaRetoques);
    }   

    vm.remove = function (parametro1, parametro2){
      let retoques = {
        descripcion : parametro1,
        costo : parametro2
      }
      listaRetoques.splice(parametro1,parametro2);
      console.log(listaRetoques);
    }
  }
})();
