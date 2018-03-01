(()=>{
  'use strict'
  angular
  .module('labFuneraria')
  .service('servicioEntierros', servicioEntierros);

  servicioEntierros.$inject = ['$log','$http'];

  function servicioEntierros($log,$http){

  }
  
  // Funcion que almacena en el localStorage todos los usuarios
  function _agregarEntierro(pnuevoEntierro){
    todosEntierros = _getEntierros();
    todosEntierros.push(pnuevoEntierro);
    localStorage.setItem('lsEntierros', JSON.stringify(todosEntierros));
  }

  // Funcion que trae todos los usuarios del localStorage y a partir de esos datos vuelve a crear un arreglo con todos los objetos de tipo cliente
  function _getEntierros(){
    let listaEntierros = JSON.parse(localStorage.getItem("lsEntierros"));

    if(listaEntierros == null){
      todosEntierros = [];
    }else{
      listaEntierros.forEach(obj => {
        
        let objEntierros = new Entierro(nuevoEntierro.horaInicio,nuevoEntierro.horaFinal,nuevoEntierro.fecha,nuevoEntierro.lugar,nuevoEntierro.prioridad);

        todosEntierros.push(objEntierros)
      })
    }

    return todosEntierros
  }



})();