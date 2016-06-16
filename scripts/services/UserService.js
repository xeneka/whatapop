/**
 * Created by Antonio on 15/6/16.
 */
angular
    .module("whatapop")
    .service("UserService" ,['$http','$filter','setting', function($http,$filter,setting){

        // Cojo todos lo productos
        this.getUsers = function() {
            return $http.get(setting.urlServidor+"/api/users");
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
                ? (setting.urlServidor+"/" + rutaRelativa)
                : undefined;
        };


    }]);