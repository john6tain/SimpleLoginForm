'use strict';

angular.module('myApp.register', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/register', {
      templateUrl: 'register/register.html',
      controller: 'RegisterCtrl'
    });
  }])

  .controller('RegisterCtrl', ['$scope', '$window', '$rootScope', '$location', 'toastr', function ($scope, $window, $rootScope, $location, toastr) {
    $scope.Register = function (user) {
      var users = JSON.parse($window.localStorage.getItem('users')) || [];
    
      if (user.password !== user.confirmPassword) {
        toastr.error('Passwords do not match', 'Register');
        return;
      } else {
        for (var u of users) {
          if (u.nickname === user.nickname) {
            toastr.error('User with this this nickname already exists', 'Register');
            return;
          } else if (u.email === user.email) {
            toastr.error('User with this this email already exist', 'Register');
            return;
          }
        }
      }
      
      delete user.confirmPassword;
      users.push(user);
      $window.localStorage.setItem('users', JSON.stringify(users));
      toastr.success('You have successfully Register ' + user.nickname, 'Register');
      $window.localStorage.setItem('access_token', btoa(user.nickname));
      $rootScope.isLogged = true;
      document.querySelector('.navbar-brand').href = "#!/profile";
      $location.path('/profile');

    }
  }]);