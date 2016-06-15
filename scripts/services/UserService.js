/**
 * Created by Antonio on 15/6/16.
 */
angular
    .module("whatapop")
    .service("UserService" ,['$http','$filter', function($http,$filter){

        // Cojo todos lo productos
        this.getUsers = function() {
            return $http.get("http://localhost:8000/api/users");
        };


        // Cojo un solo producto
        this.getUser = function(seller) {
            return this.getUsers().then(function(response) {
                return $filter("filter")(response.data, {"id": seller})[0];
            });
        };



        // Montamos la ruta absoluta a la imagen indicada.
        this.obtenerRutaImagenAbsoluta = function(rutaRelativa) {

            return rutaRelativa
                ? ("http://localhost:8000/" + rutaRelativa)
                : undefined;
        };


    }]);