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
      addDifunto : _addDifunto,
      getDifuntos : _getDifuntos,
      addEntierros : _addEntierros,
      getEntierros : _getEntierros
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
          
          let objUsuarios = new Cliente(obj.foto,obj.cedula,obj.nombre,obj.apellido,obj.fechanacimiento,obj.sexo,obj.ubicacion,obj.provincia,obj.canton,obj.distrito,obj.usuario,obj.contrasenna);

          obj.difuntos.forEach(objDifunto => {
            let objTempDifunto = new Difunto(objDifunto.idlapida,objDifunto.apodo, objDifunto.edad, objDifunto.sexo, objDifunto.tamanno);

            objUsuarios.agregarDifunto(objTempDifunto);

            objDifunto.entierros.forEach(objReparciones => {
              let objTempEntierros = new Entierros(objReparciones.costo, objReparciones.descripcion);

              objTempDifunto.agregarEntierros(objTempEntierros);
            })
          })

          listaUsuarios.push(objUsuarios);
        })
      }

      return listaUsuarios;
    }

    function _addDifunto(pdifunto, pusuario){
      let listaUsuarios = _getUsuarios();

      for(let i = 0; i < listaUsuarios.length; i++){
        if (pusuario.getCedula() == listaUsuarios[i].getCedula()){
          listaUsuarios[i].agregarDifunto(pdifunto);
        }
      }

      actualizarLocal(listaUsuarios);
    };

    function _getDifuntos(objUsuario){
      let listaUsuarios = _getUsuarios();
      let difuntosUsuario = [];

      for(let i = 0; i < listaUsuarios.length; i++){
        if (objUsuario.getCedula() == listaUsuarios[i].getCedula()){
          difuntosUsuario = listaUsuarios[i].getDifuntos();
        }
      }

      return difuntosUsuario;
    }

    // Funcion que registra los entierros dentro de los difuntos
    function _addEntierros(pdifunto, preparacion){
      let listaUsuarios = _getUsuarios();
      let listaDifuntos = [];

      // Ciclo que recorre todos los usuarios
      for(let i = 0; i < listaUsuarios.length; i++){
        
        // Ciclo que recorre todos los difuntos por usuario
        for(let j=0 ;j < listaUsuarios[i].getDifuntos().length; j++){

          // Si el idlapida del difunto coincide
          if(listaUsuarios[i].getDifuntos()[j].getidlapida() == pdifunto.getidlapida()){

            // Le registra la reparación
            listaUsuarios[i].getDifuntos()[j].agregarEntierros(preparacion);
          }
        }
      }
      actualizarLocal(listaUsuarios);
    }

    // Funcion que obtiene todas los entierros de los difuntos
    function _getEntierros(objDifunto){
      let listaUsuarios = _getUsuarios();
      let entierrosDifuntos = [];

      for(let i = 0; i < listaUsuarios.length; i++){
        for(let j=0 ;j < listaUsuarios[i].getDifuntos().length; j++){

          if (objDifunto.getidlapida() == listaUsuarios[i].getDifuntos()[j].getidlapida()){
            entierrosDifuntos = listaUsuarios[i].getDifuntos()[j].getEntierros();
          }
        }
      }
      return entierrosDifuntos;
    }

    function actualizarLocal(plistaActualizada){
      localStorage.setItem('usuariosLS', JSON.stringify(plistaActualizada));
    }

  }
})();