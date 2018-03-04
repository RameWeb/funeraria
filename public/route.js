(() => {
  'use strict';
  angular
    .module('appRoutes', ['ui.router', 'oc.lazyLoad', 'uiRouterTitle'])
    .config(routing);
  routing.$inject = ['$stateProvider', '$urlRouterProvider'];

  function routing($stateProvider, $urlRouterProvider, $oclazyLoad) {

    $stateProvider
      .state('landingPage', {
        url: '/',
        templateUrl: './components/landingPage/landingPage.view.html',
        data:{
          pageTitle: 'Inicio | Funeraria el vals de los muertos'
        }
      })

      .state('usuarios', {
        url: '/users',
        templateUrl: './components/usuarios/usuarios.view.html',
        data:{
          pageTitle: 'Registro usuarios | Ejemplo Arquitectura'
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/usuarios/usuarios.controller.js')
          }]
        },
        controller: 'controladorUsuarios',
        controllerAs: 'vm'
      })

      .state('difuntos', {
        url: '/difuntos',
        templateUrl: './components/difuntos/difuntos.vista.html',
        data:{
          pageTitle: 'Mantenimiento de Difuntos | Funeraria'
        },
        params: {
          objUsuarioTemp: ''
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/difuntos/difuntos.controlador.js')
          }]
        },
        css: './components/difuntos/difuntos.estilos.css',
        controller: 'controladorDifuntos',
        controllerAs: 'vm'
      })

      

    $urlRouterProvider.otherwise('/users');
  };
})();