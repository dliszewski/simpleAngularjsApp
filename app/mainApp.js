// option 1
//var mainApp = angular.module("mainApp", []);

//option 2
(function(){
    var mainApp = angular.module('mainApp', ['ngRoute','ngAnimate']);
    
    mainApp.config(function($routeProvider){
       $routeProvider
       .when('/',{
           controller:'customerController',
           templateUrl:'app/views/customers.html'
       })
       .when('/books/:bookId',{
           controller:'bookController',
           templateUrl:'app/views/books.html'
       })
       .when('/books',{
            controller:'allBooksController',
            templateUrl:'app/views/allbooks.html'
       })
       .otherwise({redirectTo: '/'});
    });
}());