var randoApp = angular.module('randoApp', []);
randoApp.controller('RandoCtrl', function ($scope, $http) {
    $http.get('randomizers.json').success(function(data) {
        $scope.randomizers = data;
    });
    $scope.sortField = 'name';
});