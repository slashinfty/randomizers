var randoApp = angular.module('randoApp', []);
randoApp.controller('RandoCtrl', function ($scope, $http) {
    $http.get('https://api.myjson.com/bins/s3pho').success(function(data) {//randomizers.json
        $scope.randomizers = data;
    });
    $scope.sortField = 'name';
    $scope.reverse = false;
});