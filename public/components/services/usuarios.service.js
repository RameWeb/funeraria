(() => {
  'use strict';
  angular
<<<<<<< HEAD
  .module('arquitectura')
=======
  .module('labFuneraria')
>>>>>>> Dev
  .service('servicioUsuarios', servicioUsuarios);

  servicioUsuarios.$inject = ['$log','$http'];

  function servicioUsuarios($log, $http){

    let publicAPI = {
      addUsuario : _addUsuario,
      getUsuarios : _getUsuarios,
<<<<<<< HEAD
      addDifunto : _addDifunto,
      getDifuntos : _getDifuntos,
      addReparaciones : _addReparaciones,
      getReparaciones : _getReparaciones
=======
      addDifuntos : _addDifuntos,
      getDifuntos : _getDifuntos,
      
>>>>>>> Dev
    }
    return publicAPI;

    // Funcion que almacena en el localStorage todos los usuarios
    function _addUsuario(pnuevoUsuario){
      let listaUsuarios = _getUsuarios();
      listaUsuarios.push(pnuevoUsuario);
      localStorage.setItem('usuariosLS', JSON.stringify(listaUsuarios));
    }

    // Funcion que trae todos los usuarios del localStorage y a partir de esos datos vuelve a crear un arreglo con todos los objetos de tipo usuario
    function _getUsuarios(){
      let listaUsuarios = [];
      let listaUsuariosLocal = JSON.parse(localStorage.getItem("usuariosLS"));

      if(listaUsuariosLocal == null){
        listaUsuarios = [];
      }else{
        listaUsuariosLocal.forEach(obj => {
          
<<<<<<< HEAD
          let objUsuarios = new Cliente(obj.foto,obj.cedula,obj.nombre,obj.apellido,obj.fechanacimiento,obj.sexo,obj.ubicacion,obj.provincia,obj.canton,obj.distrito,obj.usuario,obj.contrasenna);

          obj.difuntos.forEach(objDifunto => {
            let objTempDifunto = new Difunto(objDifunto.apodo, objDifunto.edad, objDifunto.sexo, objDifunto.tamanno, objDifunto.idlapida);

            objUsuarios.agregarDifunto(objTempDifunto);

            objDifunto.reparaciones.forEach(objReparciones => {
              let objTempReparaciones = new Reparaciones(objReparciones.costo, objReparciones.descripcion);

              objTempDifunto.agregarReparaciones(objTempReparaciones);
            })
=======
          let objUsuarios = new Cliente(obj.foto, obj.cedula, obj.nombre, obj.apellido, obj.fechanacimiento,obj.sexo, obj.ubicacion, obj.provincia, obj.canton, obj.distrito, obj.usuario, obj.contrasenna);

          obj.difuntos.forEach(objDifuntos => {
            let objTempDifuntos = new Difuntos(objDifuntos.apodo, objDifuntos.edad, objDifuntos.sexo, objDifuntos.tamanno, objDifuntos.idlapida);

            objUsuarios.agregarDifuntos(objTempDifuntos);

            
>>>>>>> Dev
          })

          listaUsuarios.push(objUsuarios);
        })
      }

      return listaUsuarios;
    }

<<<<<<< HEAD
    function _addDifunto(pdifunto, pusuario){
      let listaUsuarios = _getUsuarios();

      for(let i = 0; i < listaUsuarios.length; i++){
        if (pusuario.getCedula() == listaUsuarios[i].getCedula()){
          listaUsuarios[i].agregarDifunto(pdifunto);
=======
    function _addDifuntos(pdifuntos, pusuario){
      let listaUsuarios = _getUsuarios();

      for(let i = 0; i < listaUsuarios.length; i++){
        if (pusuario.getcedula() == listaUsuarios[i].getcedula()){
          listaUsuarios[i].agregarDifuntos(pdifuntos);
>>>>>>> Dev
        }
      }

      actualizarLocal(listaUsuarios);
    };

    function _getDifuntos(objUsuario){
      let listaUsuarios = _getUsuarios();
      let difuntosUsuario = [];

      for(let i = 0; i < listaUsuarios.length; i++){
<<<<<<< HEAD
        if (objUsuario.getCedula() == listaUsuarios[i].getCedula()){
=======
        if (objUsuario.getcedula() == listaUsuarios[i].getcedula()){
>>>>>>> Dev
          difuntosUsuario = listaUsuarios[i].getDifuntos();
        }
      }

      return difuntosUsuario;
    }

<<<<<<< HEAD
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
=======

    

    
>>>>>>> Dev

    function actualizarLocal(plistaActualizada){
      localStorage.setItem('usuariosLS', JSON.stringify(plistaActualizada));
    }

  }
})();