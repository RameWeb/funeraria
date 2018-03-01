(() =>{

  'use strict';
  angular
  .module('labFuneraria')
  .controller('controladorRetoques', controladorRetoques);

  // controladorRetoques.$inject = ['servicioDifuntos']

  function controladorRetoques(){
    let vm = this;

    let listaUsuarios = [{nombre: 'Camila', apodo:'Cami', retoques:[]}];

    let listaRetoques = [];

    vm.add = function(parametro){
        listaRetoques.retoques.push(parametro);
        console.log(listaRetoques);
      }   

    vm.remove = function(parametro){
      let tipo = parametro;
      if (tipo == 'Maquillaje' || tipo == 'Peluqueria' || tipo == 'Costura') {
        listaRetoques.retoques.pop();
      }
      console.log(listaRetoques);
    }

  }
})();