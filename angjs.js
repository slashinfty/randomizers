var randoApp = angular.module('randoApp', []);
randoApp.controller('RandoCtrl', function ($scope, $http) {
    $http.get('https://api.myjson.com/bins/15epbg').success(function(data) {
        $scope.randomizers = data;
    });
    $scope.sortField = 'name';
    $scope.showPopover = false;
});
randoApp.directive("notePopover", function() {
    return {
        restrict: 'A',
        template: '<a href={{randomizer.url}} ng-mouseover="showPopover=true;" ng-mouseleave="showPopover=false;">{{randomizer.name}}<div class="popover" ng-show="showPopover">{{randomizer.note}}</div></a>'
    }
});