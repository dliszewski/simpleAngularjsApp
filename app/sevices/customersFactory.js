(function () {
    var customersFactory = function ($http) {
        var customersdata =[];

        var factory = {};

        factory.getCustomers = function () {
            return $http.get('/customers');
        };

        factory.getCustomers2 = function (bookId) {
            return $http.get('/customers/'+bookId);
        }

        return factory;
    };

    customersFactory.$inject=['$http'];

    angular.module('mainApp').factory('customersFactory', customersFactory);


}());