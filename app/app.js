'use strict';

angular.module('myApp', [
  'ngRoute',
  'toastr',
  'myApp.login',
  'myApp.register',
  'myApp.logout',
  'myApp.profile'
]).
  config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({ redirectTo: '/login' });
  }])
  .run(['$rootScope', '$location', '$window', 'toastr', function ($rootScope, $location, $window, toastr) {
    var brand = document.querySelector('.navbar-brand');
    
    if ($window.localStorage.getItem('access_token')) {
      $rootScope.isLogged = true;

      if (brand) { //Becouse of the unit tests
        brand.href = "#!/profile";
      }
    }
    else {
      $rootScope.isLogged = false;
      
      if (brand) { //Becouse of the unit tests
        brand.href = "#!/";
      }
    }
    $rootScope.$on('$routeChangeError', function (ev, current, previous, rejection) {
      toastr.error('Please login first', rejection);
      $location.path('/');
    });
  }])