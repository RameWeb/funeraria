(() => {
  'use strict';
  angular
    .module('appRoutes', ['ui.router', 'oc.lazyLoad', 'uiRouterTitle'])
    .config(routing);
  routing.$inject = ['$stateProvider', '$urlRouterProvider'];

  function routing($stateProvider, $urlRouterProvider, $oclazyLoad) {

    $stateProvider
<<<<<<< HEAD
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
=======

    // se configran todos los estados (vistas) por medio del atrubuto .state que es una funcion dentro del stateProvider
    .state('landing', {
      // Se le crea un url (por el cual se va a accesar a el medio de la ruta en el navegador)
      url: '/',
      // Se convoca al html
      templateUrl: './components/landing-page/landing-page.view.html',
      // se convoca el css
      css: './components/landing-page/landong-page.style.css'
    })

<<<<<<< HEAD
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
=======
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

    

>>>>>>> origin/Jason

    $urlRouterProvider.otherwise('/');
  }

>>>>>>> origin/Camila
})();