'use strict';

angular.module('myApp.logout', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/logout', {
            template: '<div></div>',
            controller: 'LogoutCtrl'
        });
    }])

    .controller('LogoutCtrl', ['toastr', '$location', '$rootScope',
        function (toastr, $location, $rootScope) {
            toastr.success('You have successfully logged out', 'Log Out');
            localStorage.removeItem('access_token');
            document.querySelector('.navbar-brand').href = "#!/";
            $rootScope.isLogged = false;
            $location.path('/');
        }
    ]);