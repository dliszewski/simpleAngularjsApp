/* option 1
 mainApp.controller('customerController', function($scope) {
 $scope.sortBy= 'name';
 $scope.reverse=false;
 $scope.custoemrsdata =  [
 {name:'Tom',city:'Warsaw',age:22},
 {name:'Poul',city:'NYE',age:12},
 {name:'Adam',city:'Cracow',age:16},
 {name:'Fran',city:'Paris',age:45},
 {name:'Zed',city:'Berlin',age:32}
 ];
 $scope.doSort= function(propName){
 $scope.sortBy= propName;
 $scope.reverse=!$scope.reverse;
 }

 });*/

/* option 2
 (function() {
 angular.module('mainApp')
 .controller('customerController', function($scope) {
 $scope.sortBy= 'name';
 $scope.reverse=false;
 $scope.custoemrsdata =  [
 {name:'Tom',city:'Warsaw',age:22},
 {name:'Poul',city:'NYE',age:12},
 {name:'Adam',city:'Cracow',age:16},
 {name:'Fran',city:'Paris',age:45},
 {name:'Zed',city:'Berlin',age:32}
 ];
 $scope.doSort= function(propName){
 $scope.sortBy= propName;
 $scope.reverse=!$scope.reverse;
 };
 });
 }());*/

(function () {
    var customerController = function ($scope, customersFactory,appSettings) {
        $scope.sortBy = 'name';
        $scope.reverse = false;
        $scope.customersdata = [];
        $scope.appSettings = appSettings;
        function init() {
            customersFactory.getCustomers()
                .success(function(customersdata){
                    $scope.customersdata = customersdata;
                })
                .error(function(data,status,headers,config){
                    //handle error
                });
        }
        init();

        $scope.doSort = function (propName) {
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;
        };
    };

    customerController.$inject = ['$scope', 'customersFactory','appSettings'];

    angular.module('mainApp')
        .controller('customerController', customerController);
}());