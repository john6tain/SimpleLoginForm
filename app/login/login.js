'use strict';

angular.module('myApp.login', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/login', {
      templateUrl: 'login/login.html',
      controller: 'LoginCtrl'
    });
  }])

  .controller('LoginCtrl', ['$scope', '$window', '$rootScope', '$location', 'toastr', function ($scope, $window, $rootScope, $location, toastr) {
    $scope.Login = function (user) {
      var users = JSON.parse($window.localStorage.getItem('users')) || [];
      for (var u of users) {
        if ((u.email === user.username || u.nickname === user.username) && u.password === user.password) {
          $window.localStorage.setItem('access_token', btoa(user.username));
          $rootScope.isLogged = true;
          toastr.success('You have successfully logged in', 'Logged In');
          document.querySelector('.navbar-brand').href = "#!/profile";
          $location.path('/profile');
        }
      }
      if (!$rootScope.isLogged) {
        toastr.error('Wrong username or password', 'Logging In');
      }
    }
  }]);