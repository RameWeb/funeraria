(() => {
  'use strict';
  angular
  .module('labFuneraria')
  .service('servicioUsuarios', servicioUsuarios);

  servicioUsuarios.$inject = ['$log','$http'];

  function servicioUsuarios($log, $http){

    let publicAPI = {
      addUsuario : _addUsuario,
      getUsuarios : _getUsuarios,
      addDifuntos : _addDifuntos,
      getDifuntos : _getDifuntos,
      
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
          
          let objUsuarios = new Cliente(obj.foto, obj.cedula, obj.nombre, obj.apellido, obj.fechanacimiento,obj.sexo, obj.ubicacion, obj.provincia, obj.canton, obj.distrito, obj.usuario, obj.contrasenna);

          obj.difuntos.forEach(objDifuntos => {
            let objTempDifuntos = new Difuntos(objDifuntos.apodo, objDifuntos.edad, objDifuntos.sexo, objDifuntos.tamanno, objDifuntos.idlapida);

            objUsuarios.agregarDifuntos(objTempDifuntos);

            
          })

          listaUsuarios.push(objUsuarios);
        })
      }

      return listaUsuarios;
    }

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


    

    

    function actualizarLocal(plistaActualizada){
      localStorage.setItem('usuariosLS', JSON.stringify(plistaActualizada));
    }

  }
})();