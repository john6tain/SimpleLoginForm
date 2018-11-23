angular.module('myApp.profile', ['toastr'])
    .config(['$routeProvider', function ($routeProvider) {
        var routeCheks = {
            onlyLogged: ['$q', '$window', '$location', function ($q, $window) {
                if ($window.localStorage.getItem('access_token')) {
                    return $q.when(true);
                }
                return $q.reject('You are not logged in');
            }]
        };
        $routeProvider.when('/profile', {
            templateUrl: 'profile/profile.html',
            controller: 'ProfileCtrl',
            resolve: routeCheks.onlyLogged
        });
    }])
    .controller('ProfileCtrl', ['$scope', 'toastr', '$window', function ($scope, toastr, $window) {

        var username = atob($window.localStorage.getItem('access_token'))
        var loggedUser = JSON.parse($window.localStorage.getItem('users'))
            .filter(user => user.nickname === username || user.email === username)[0];

        for (var user in loggedUser) {
            $scope[user] = loggedUser[user];
        }

        $scope.Clear = function (data) {
            $scope[data] = "";
        }

        $scope.Change = function (data, type) {
            var users = JSON.parse($window.localStorage.getItem('users'));

            if (type && type === 'nickname') {
                for (var user of users) {
                    if (user.nickname === data) {
                        toastr.error('User with this this nickname already exists', 'Rename');
                        return;
                    }
                }

            }
            loggedUser[type] = data;
            for (var index in users) {
                if (users[index].email === loggedUser.email) {
                    users[index] = loggedUser;
                }
            }
            if (type === 'password') {
                data = '*'.repeat(data.length);
            }

            toastr.success(`You have successfuly changed ${type} to ${data}`, 'Changed');
            $window.localStorage.setItem('users', JSON.stringify(users));
            $window.localStorage.setItem('access_token', btoa(loggedUser.email));
        }
    }]);