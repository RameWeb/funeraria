(() => {
  'use strict';
  angular
    .module('appRoutes', ['ui.router', 'oc.lazyLoad', 'uiRouterTitle'])
    .config(routing);
  routing.$inject = ['$stateProvider', '$urlRouterProvider'];

  function routing($stateProvider, $urlRouterProvider, $oclazyLoad) {

    $stateProvider

    .state('landing-page', {
      url: '/',
      templateUrl: './components/landing-page/landing-page.view.html',
      data:{
        pageTitle: 'Inicio | Funeraria el vals de los muertos'
      }
    })

    .state('inicio', {
      url: '/inicio',
      templateUrl: './components/inicio/inicio.view.html',
      data:{
        pageTitle: 'Inicio SesiÃ³n | Funeraria'
      },
      params: {
        objUsuarioTemp: ''
      },
      resolve: {
        load: ['$ocLazyLoad', ($ocLazyLoad) => {
          return $ocLazyLoad.load('./components/inicio/inicio.controller.js')
        }]
      },
      controller: 'controladorInicio',
      controllerAs: 'vm'
    })

    .state('usuarios', {
      url: '/usuarios',
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
      templateUrl: './components/difuntos/difunto.view.html',
      data:{
        pageTitle: 'Mantenimiento de Difuntos | Funeraria'
      },
      params: {
        objUsuarioTemp: ''
      },
      resolve: {
        load: ['$ocLazyLoad', ($ocLazyLoad) => {
          return $ocLazyLoad.load('./components/difuntos/difunto.controller.js')
        }]
      },
      css: './components/difuntos/difuntos.estilos.css',
      controller: 'controladorDifunto',
      controllerAs: 'vm'
    }) 

    .state('registroFiesta', {
      url: '/registrarUnaFiesta',
      templateUrl: './components/fiestaInfierno/fiestaInfierno.vista.html',
      resolve:{
        load: ['$ocLazyLoad', ($ocLazyLoad) => {
          return $ocLazyLoad.load('./components/fiestaInfierno/fiestaInfierno.controlador.js')
        }]
      },
      controller:'controladorFiesta',
      controllerAs:'vm'
    })

    .state('registroAnimador', {
      url: '/registrarUnAnimador',
      templateUrl: './components/Animadores/animadores.vista.html',
      resolve:{
        load: ['$ocLazyLoad', ($ocLazyLoad) => {
          return $ocLazyLoad.load('./components/Animadores/animadores.controlador.js')
        }]
      },
      controller:'controladorAnimadores',
      controllerAs:'vm'
    })

    .state('retoques', {
      // Se le crea un url (por el cual se va a accesar a el medio de la ruta en el navegador)
      url: '/retoques',
      // Se convoca al html
      templateUrl: './components/retoques/retoques.vista.html',
      // se convoca el css
      css: './components/retoques/retoques.estilo.css',
      resolve: {
        load: ['$ocLazyLoad', ($ocLazyLoad) => {
          return $ocLazyLoad.load('./components/retoques/retoques.contolador.js')
        }]
      },
      controller: 'controladorRetoques',
      controllerAs: 'vm'
    })

    .state('entierros', {
      // Se le crea un url (por el cual se va a accesar a el medio de la ruta en el navegador)
      url: '/entierros',
      // Se convoca al html
      templateUrl: './components/entierros/entierros.vista.html',
      // se convoca el css
      css: './components/entierros/entierros.estilo.css',
      resolve: {
        load: ['$ocLazyLoad', ($ocLazyLoad) => {
          return $ocLazyLoad.load('./components/entierros/entierros.controlador.js')
        }]
      },
      controller: 'controladorEntierros',
      controllerAs: 'vm'
    })

    $urlRouterProvider.otherwise('/');
  }
})();