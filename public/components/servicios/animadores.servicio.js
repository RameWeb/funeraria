(() => {
    'use strict';
    angular
    .module('labFuneraria')
    .service('servicioAnimador', servicioAnimador);
  
    servicioAnimador.$inject = ['$log','$http'];
  
    function servicioAnimador($log, $http){
  
      let publicAPI = {
        addAnimador : _addAnimador,
        getAnimadores : _getAnimadores
      }
      return publicAPI;
  
      // Funcion que almacena en el localStorage todas las fiestas programadas
      function _addAnimador(pnuevoAnimador){
        let listaAnimadores = _getAnimadores();
        listaAnimadores.push(pnuevoAnimador);
        localStorage.setItem('AnimadoresLS', JSON.stringify(listaAnimadores));
      }
  
      // Funcion que trae todas las fiestas programadas del localStorage y a partir de esos datos vuelve a crear un arreglo con todos los objetos de tipo fiesta
      function _getAnimadores(){
        let listaAnimadores = [];
        let listaAnimadoresLocal = JSON.parse(localStorage.getItem("AnimadoresLS"));
  
        if(listaAnimadoresLocal == null){
          listaAnimadores = [];
        }else{
          listaAnimadoresLocal.forEach(obj => {
            
            let objAnimadores = new Animador(obj.nombreAnimador, obj.costo);
            
  
            listaAnimadores.push(objAnimadores)
          })
        }
  
        return listaAnimadores;
      }


    }
  })();