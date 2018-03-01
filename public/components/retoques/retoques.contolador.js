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

    let add = function(pTipoRetoque, pCosto){
        listaRetoques.retoques.push(pTipoRetoque, pCosto);
        console.log(listaRetoques);
      }   

    let remove = function(pTipoRetoque, pCosto){
        listaRetoques.retoques.pop(parametro);
        console.log(listaRetoques);
      }


  }
})();