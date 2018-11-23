describe('RegisterCtrl', function () {
    beforeEach(module('myApp'));

    var $controller, $rootScope, $window;

    beforeEach(inject(function (_$controller_, _$rootScope_, _$window_) {
        $controller = _$controller_;
        $rootScope = _$rootScope_;
        $window = _$window_;
    }));
    it('Should register and login successfully', function () {
        var a = document.createElement('a');
        a.className = 'navbar-brand';
        document.body.append(a);
        $window.localStorage.clear();
        var $scope = $rootScope.$new();
        var controller = $controller('RegisterCtrl', { $scope: $scope });
        $scope.user = { nickname: "nickname", confirmPassword: "password", password: "password", email: "email@email.email", phone: "123", country: "Bulgaria" };
        $scope.Register($scope.user);
        expect($window.localStorage.getItem('users')).toEqual(JSON.stringify([$scope.user]));

    });
});