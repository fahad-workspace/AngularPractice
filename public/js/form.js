app = angular.module('app', []);

app.controller('formCtrl', function($scope) {
    $scope.user = {};
    $scope.master = {};
    $scope.resetFn = function() {
        $scope.user = angular.copy($scope.master);
    };
    $scope.submitFn = function () {
        $scope.master = angular.copy($scope.user);
    };
});