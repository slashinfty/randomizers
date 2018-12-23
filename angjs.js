var randoApp = angular.module('randoApp', []);
randoApp.controller('RandoCtrl', function ($scope, $http) {
    $http({
        method: 'GET',
        url: 'randomizers.json'
    }).then(function(data) {
        $scope.randomizers = data;
    },function(error) {
        console.log(error);
    });
});