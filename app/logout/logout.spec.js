describe('LogoutCtrl', function () {
    beforeEach(module('myApp'));

    var $controller, $rootScope, $window;

    beforeEach(inject(function (_$controller_, _$rootScope_, _$window_) {
        $controller = _$controller_;
        $rootScope = _$rootScope_;
        $window = _$window_;
    }));
    it('Should successfully loggout ', function () {
        $window.localStorage.setItem('access_token', 'access_token');
        var $scope = $rootScope.$new();
        var controller = $controller('LogoutCtrl', { $scope: $scope });
        expect($window.localStorage.getItem('access_token')).toEqual(null);

    });
});