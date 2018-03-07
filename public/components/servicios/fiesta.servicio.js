(() => {
  'use strict';
  angular
  .module('labFuneraria')
  .service('servicioFiesta', servicioFiesta);

  servicioFiesta.$inject = ['$log', '$http'];

  function servicioFiesta($log, $http){
    let publicAPI = {
      addFiesta : _addFiesta,
      getFiestas : _getFiestas
    }
    return publicAPI;

    // Funcion que almacena en el localStorage todas las fiestas programadas
    function _addFiesta (pnuevaFiesta){
      let listaFiestas = _getFiestas();
      listaFiestas.push(pnuevaFiesta);
      localStorage.setItem('FiestasProgramadasLS', JSON.stringify(listaFiestas));
    };

    // Funcion que trae todas las fiestas programadas del localStorage y a partir de esos datos vuelve a crear un arreglo con todos los objetos de tipo fiesta
    function _getFiestas(){
      let listaFiestas = [];
      let listaFiestasLocal = JSON.parse(localStorage.getItem("FiestasProgramadasLS"));

      if(listaFiestasLocal == null){
        listaFiestas = [];
      }else{
        listaFiestasLocal.forEach(obj =>{
          let fecha = new Date(obj.fecha)
          let objFiestas = new Fiesta(fecha, obj.horas, obj.animador, obj.pago);

          obj.animadores.forEach(objanimador =>{
            let objAnimadorTemp = new Animador(objanimador.nombreAnimador,objanimador.costo);

            objFiestas.setAnimador(objAnimadorTemp);
          });

          listaFiestas.push(objFiestas);
        });
      }

      return listaFiestas;
    }
  }
})();
