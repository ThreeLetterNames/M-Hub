
console.log("app");

var myApp = angular.module('myApp', [ 'ngRoute', 'ui.bootstrap' ]) //

console.log("routing setup");

//myApp.config([$routeProvider, $locationProvider, function($routeProvider, $locationProvider) {
//        $routeProvider.when("/home", {templateUrl: "partials/home.html", controller: "homeController"})
//        $routeProvider.otherwise({redirectTo: "/home"});
        
//        $locationProvider.html5Mode({enabled: true, requireBase: false});
//    }]);

myApp.config(function($routeProvider, $locationProvider) {
        console.log("routing config");
        $routeProvider.when("/home", {templateUrl: "partials/home.html", controller: "homeController"})
        $routeProvider.when("/thanks", {templateUrl: "partials/thanks.html", controller: "thanksController"})
        $routeProvider.when("/request", {templateUrl: "partials/request.html", controller: "requestController"})
        $routeProvider.when("/whitegoods", {templateUrl: "partials/whitegoods.html", controller: "whitegoodsController"})
        $routeProvider.when("/fridge", {templateUrl: "partials/fridge.html", controller: "fridgeController"})
        $routeProvider.when("/about", {templateUrl: "partials/about.html", controller: "aboutController"})
        $routeProvider.when("/library", {templateUrl: "partials/library.html", controller: "libraryController"})
        $routeProvider.otherwise({redirectTo: "/home"});
        
        $locationProvider.html5Mode({enabled: true, requireBase: false});
    });



