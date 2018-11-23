describe('ProfileCtrl', function () {
    beforeEach(module('myApp'));

    var $controller, $rootScope, $window;

    beforeEach(inject(function (_$controller_, _$rootScope_, _$window_) {
        $controller = _$controller_;
        $rootScope = _$rootScope_;
        $window = _$window_;
    }));

    it('Should successfully change users nickname', function () {
        var $scope = $rootScope.$new();
        var controller = $controller('ProfileCtrl', { $scope: $scope });
        $scope.Change('newNickname','nickname');
        var nickname = JSON.parse($window.localStorage.getItem('users'))[0].nickname;
        expect(nickname).toEqual('newNickname');
    });

    it('Should successfully change users password', function () {
        var $scope = $rootScope.$new();
        var controller = $controller('ProfileCtrl', { $scope: $scope });
        $scope.Change('newPassword','password');
        var password = JSON.parse($window.localStorage.getItem('users'))[0].password;
        expect(password).toEqual('newPassword');
    });

    it('Should successfully change users phone', function () {
        var $scope = $rootScope.$new();
        var controller = $controller('ProfileCtrl', { $scope: $scope });
        $scope.Change('456','phone');
        var phone = JSON.parse($window.localStorage.getItem('users'))[0].phone;
        expect(phone).toEqual('456');
    });
    
    it('Should successfully change users country', function () {
        var $scope = $rootScope.$new();
        var controller = $controller('ProfileCtrl', { $scope: $scope });
        $scope.Change('Vietnam','country');
        var country = JSON.parse($window.localStorage.getItem('users'))[0].country;
        expect(country).toEqual('Vietnam');
    });
});