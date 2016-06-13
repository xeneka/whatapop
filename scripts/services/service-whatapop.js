/**
 * Created by Antonio on 11/6/16.
 */
angular
    .module("whatapop")
    .service("ServiceWhatapop" ,['$http', function($http){

        this.getProducts = function() {
               return $http.get("http://localhost:8000/api/products");
           };


    }]);