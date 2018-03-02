(() => {
  'use strict';
  angular
  .module('arquitectura')
  .service('servicioUsuarios', servicioUsuarios);

  servicioUsuarios.$inject = ['$log','$http'];

  function servicioUsuarios($log, $http){

    let publicAPI = {
      addUsuario : _addUsuario,
      getUsuarios : _getUsuarios,
      addDifuntos : _addDifuntos,
      getDifuntos : _getDifuntos,
      addReparaciones : _addReparaciones,
      getReparaciones : _getReparaciones
    }
    return publicAPI;

    // Funcion que almacena en el localStorage todos los usuarios
    function _addUsuario(pnuevoUsuario){
      let listaUsuarios = _getUsuarios();
      listaUsuarios.push(pnuevoUsuario);
      localStorage.setItem('usuariosLS', JSON.stringify(listaUsuarios));
    }

    // Funcion que trae todos los usuarios del localStorage y a partir de esos datos vuelve a crear un arreglo con todos los objetos de tipo usuario
    function _addDifuntos(pdifuntos, pusuario){
      let listaUsuarios = _getUsuarios();

      for(let i = 0; i < listaUsuarios.length; i++){
        if (pusuario.getcedula() == listaUsuarios[i].getcedula()){
          listaUsuarios[i].agregarDifuntos(pdifuntos);
        }
      }

      actualizarLocal(listaUsuarios);
    };

    function _getDifuntos(objUsuario){
      let listaUsuarios = _getUsuarios();
      let difuntosUsuario = [];

      for(let i = 0; i < listaUsuarios.length; i++){
        if (objUsuario.getcedula() == listaUsuarios[i].getcedula()){
          difuntosUsuario = listaUsuarios[i].getDifuntos();
        }
      }

      return difuntosUsuario;
    }
    // Funcion que registra las reparaciones dentro de los difuntos
    function _addReparaciones(pdifunto, preparacion){
      let listaUsuarios = _getUsuarios();
      let listaDifuntos = [];

      // Ciclo que recorre todos los usuarios
      for(let i = 0; i < listaUsuarios.length; i++){
        
        // Ciclo que recorre todos los difuntos por usuario
        for(let j=0 ;j < listaUsuarios[i].getDifuntos().length; j++){

          // Si la matricula del difunto coincide
          if(listaUsuarios[i].getDifuntos()[j].getmatricula() == pdifunto.getmatricula()){

            // Le registra la reparación
            listaUsuarios[i].getDifuntos()[j].agregarReparaciones(preparacion);
          }
        }
      }
      actualizarLocal(listaUsuarios);
    }

    // Funcion que obtiene todas las reparaciones de los difuntos
    function _getReparaciones(objDifunto){
      let listaUsuarios = _getUsuarios();
      let reparacionesDifuntos = [];

      for(let i = 0; i < listaUsuarios.length; i++){
        for(let j=0 ;j < listaUsuarios[i].getDifuntos().length; j++){

          if (objDifunto.getmatricula() == listaUsuarios[i].getDifuntos()[j].getmatricula()){
            reparacionesDifuntos = listaUsuarios[i].getDifuntos()[j].getReparaciones();
          }
        }
      }
      return reparacionesDifuntos;
    }

    function actualizarLocal(plistaActualizada){
      localStorage.setItem('usuariosLS', JSON.stringify(plistaActualizada));
    }

  }
})();