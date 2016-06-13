/**
 * Created by Antonio on 11/6/16.
 */
// Setter de la aplicacion

angular.module('whatapop', ["ngComponentRouter"]);

// configuramos el proveedor '$locationProvider'. Establecemos el modo de navegacion html para que funcione el single page apllicacion

angular.module("whatapop").config(function($locationProvider){

    $locationProvider.html5Mode(true);
});

angular
    .module("whatapop")
    .value("$routerRootComponent", "raiz");
