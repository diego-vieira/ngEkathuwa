'use strict';

angular.module('bsmodalApp', ['ngRoute','ngBsmodal'])
    .config(function ($routeProvider) {
    $routeProvider
        .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
    })
        .otherwise({
        redirectTo: '/'
    });
});
