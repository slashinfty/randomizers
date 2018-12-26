var randoApp = angular.module('randoApp', []);
randoApp.controller('RandoCtrl', function ($scope, $http) {
    $http.get('randomizers.json').success(function(data) {
        $scope.randomizers = data;
    });
    $scope.sortField = 'name';
    $scope.lastSorted = 'name';
    $scope.reverse = false;
    $scope.checkSort = function(header) {
        $scope.sortField = header;
        if ($scope.sortField === $scope.lastSorted) {
            $scope.reverse = !$scope.reverse;
        } else {
            $scope.reverse = false;
        }
        $scope.lastSorted = $scope.sortField;
    }
});