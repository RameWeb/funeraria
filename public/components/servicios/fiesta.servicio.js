(() => {
    'use strict';
    angular
    .module('labFuneraria')
    .service('servicioFiesta', servicioFiesta);
  
    servicioFiesta.$inject = ['$log','$http'];
  
    function servicioFiesta($log, $http){
  
      let allFiestasProgramadas =[];
  
      let publicAPI = {
        addFiesta : _addFiesta,
        getFiestas : _getFiestas
      }
      return publicAPI;
  
      // Funcion que almacena en el localStorage todas las fiestas programadas
      function _addFiesta(pnuevaFiesta){
        allFiestasProgramadas = _getFiestas();
        allFiestasProgramadas.push(pnuevaFiestaProgramada);
        localStorage.setItem('lsFiestasProgramadas', JSON.stringify(allFiestasProgramadas));
      }
  
      // Funcion que trae todas las fiestas programadas del localStorage y a partir de esos datos vuelve a crear un arreglo con todos los objetos de tipo fiesta
      function _getFiestas(){
        let listaFiestas = JSON.parse(localStorage.getItem("lsFiestasProgramadas"));
  
        if(listaFiestas == null){
          allFiestasProgramadas = [];
        }else{
          listaFiestas.forEach(obj => {
            
            let objFiesta = new Fiesta(obj.fecha, obj.horas, obj.animador);
  
            allFiestasProgramadas.push(objFiesta)
          })
        }
  
        return allFiestasProgramadas
      }
    }
  })();