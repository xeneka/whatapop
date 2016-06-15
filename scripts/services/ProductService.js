/**
 * Created by Antonio on 11/6/16.
 */
angular
    .module("whatapop")
    .service("ProductService" ,['$http','$filter', function($http,$filter){

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

        // Cojo los productos de una categoria
        this.getProductsbyCategory = function(categorieId) {
            return this.getProducts().then(function(response) {
                console.log(response.data.category);
                return $filter("filter")(response.data.category, {"id":1})[0];
            });
        };

        // Montamos la ruta absoluta a la imagen indicada.
        this.obtenerRutaImagenAbsoluta = function(rutaRelativa) {

            return rutaRelativa
                ? ("http://localhost:8000/" + rutaRelativa)
                : undefined;
        };


    }]);