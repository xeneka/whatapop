/**
 * Created by Antonio on 11/6/16.
 */
angular
    .module("whatapop")
    .service("ServiceWhatapop" ,['$http','$filter', function($http,$filter){

        // Cojo todos lo productos
        this.getProducts = function() {
               return $http.get("http://localhost:8000/api/products");
           };

        
        // Cojo un solo producto
        this.getProduct = function(productId) {
            return this.getProducts().then(function(response) {
                return $filter("filter")(response.data, {"id": productId})[0];
            });
        };

        // Montamos la ruta absoluta a la imagen indicada.
        this.obtenerRutaImagenAbsoluta = function(rutaRelativa) {

            return rutaRelativa
                ? ("http://localhost:8000/" + rutaRelativa)
                : undefined;
        };


    }]);