/**
 * Created by Antonio on 11/6/16.
 */
angular
    .module("whatapop")
    .service("ProductService" ,['$http','$filter','setting', function($http,$filter,setting){

        // Cojo todos lo productos
        this.getProducts = function() {
               return $http.get(setting.urlServidor+"/api/products");
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
                ? (setting.urlServidor+"/" + rutaRelativa)
                : undefined;
        };


    }]);