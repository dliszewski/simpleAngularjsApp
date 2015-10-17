(function () {
    var allBooksController = function ($scope, customersFactory,appSettings) {
        $scope.sortBy = 'name';
        $scope.reverse = false;
        $scope.customersdata = [];
        $scope.allBbooks = [];
        $scope.booksTotal = 0.0;
        $scope.appSettings = appSettings;
        function init() {
            customersFactory.getCustomers()
                .success(function(customersdata){
                    $scope.customersdata = customersdata;
                    getBooksTotalPrice();
                })
                .error(function(data,status,headers,config){
                    //handle error
                });
        }

        init();

        function getBooksTotalPrice(){
        var total=0;
            for (var i = 0, len = $scope.customersdata.length; i < len; i++) {
                   for(var j= 0,len2 =$scope.customersdata[i].books.length; j < len2; j++){
                    total+=$scope.customersdata[i].books[j].price;
                       $scope.allBbooks.push($scope.customersdata[i].books[j]);
                }
                $scope.booksTotal= total;
                }
        }

        $scope.doSort = function (propName) {
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;
        };
    };

    allBooksController.$inject = ['$scope', 'customersFactory','appSettings'];

    angular.module('mainApp')
        .controller('allBooksController', allBooksController);
}());