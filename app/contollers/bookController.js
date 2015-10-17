(function () {
    var bookController = function ($scope, $routeParams, customersFactory) {
        var bookId = $routeParams.bookId;
        $scope.books = null;
        $scope.customersdata = null;
        function init() {
           customersFactory.getCustomers2(bookId)
                .success(function(customersdata){
                    $scope.customersdata = customersdata;
                })
                .error(function(data,status,headers,config){
                    //handle error
                });
        }

        init();
    };

//    customerController.$inject =['$scope'];

    angular.module('mainApp')
        .controller('bookController', ['$scope', '$routeParams', 'customersFactory', bookController]);
}());