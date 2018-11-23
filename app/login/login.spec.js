describe('LoginCtrl', function () {
    beforeEach(module('myApp'));

    var $controller, $rootScope, $window;

    beforeEach(inject(function (_$controller_, _$rootScope_, _$window_) {
        $controller = _$controller_;
        $rootScope = _$rootScope_;
        $window = _$window_;
    }));
    it('Should login successfully username and password shoud exist ', function () {
        var $scope = $rootScope.$new();
        var controller = $controller('LoginCtrl', { $scope: $scope });
        $scope.user = { username: 'nickname', password: 'password' }
        $scope.Login($scope.user);
        expect($rootScope.isLogged).toEqual(true);
    });
});