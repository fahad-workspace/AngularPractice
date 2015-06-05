var app = angular.module('app', []);

app.controller('appCtrl', function ($scope) {
    $scope.firstName = '';
    $scope.lastName = '';
    $scope.salary = '';
    $scope.date = new Date();
    $scope.names = [
        {first: "Fahad", last: "Sarwar", salary: 35000},
        {first: "Ayan", last: "Saha", salary: 15000}
    ];
    $scope.addName = function () {
        $scope.names.push(
            {first: $scope.firstName, last: $scope.lastName, salary: $scope.salary}
        );
        $scope.firstName = '';
        $scope.lastName = '';
        $scope.salary = '';
    };
    $scope.destoryName = function (name) {
        var index = $scope.names.indexOf(name);
        $scope.names.splice(index, 1);
    };
    $scope.customFilter  = function(actual, expected) {
        if (actual > expected)
            return true;
        return false;

    };
});

app.controller('appCtrlCopy', function ($scope) {
    $scope.firstName = '';
    $scope.lastName = '';
    $scope.salary = '';
    //$scope.names = [
    //    {first: "Fahad", last: "Sarwar"},
    //    {first: "Ayan", last: "Saha"}
    //];
    $scope.addName = function () {
        $scope.names.push(
            {first: $scope.firstName, last: $scope.lastName, salary: $scope.salary}
        );
        $scope.firstName = '';
        $scope.lastName = '';
        $scope.salary = '';
    };
    $scope.destoryName = function (name) {
        var index = $scope.names.indexOf(name);
        $scope.names.splice(index, 1);
    };
});

app.filter('advCustomFilter', function() {
    return function(input, flag) {
        if (flag) {
            input = input.toUpperCase();
        }
        return input;
    };
});