/**
 * Created by Antonio on 16/6/16.
 */
angular
    .module("whatapop")
    .service("location" , [function(){

        this.location = function(){

            var userLocation ={};
            userLocation.latitude=0;
            userLocation.longitude=0;
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    // Una vez obtiene la posición
                    function(data) {
                        userLocation.latitude=data.coords.latitude;
                        userLocation.longitude=data.coords.longitude;
                    },
                    // El usuario no autorizó la acción
                    function() {
                        console.log("Sin datos");
                    } );
            }

            return userLocation;
        }

        this.distance = function(location){

            return $haversine.distance(this.location(), location);

        }


    }])