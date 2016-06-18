/**
 * Created by Antonio on 16/6/16.
 */
angular
    .module("whatapop")
    .service("ABMlocation" , [function(){

        this.location = function(){

            return new Promise(function(resolve, reject){
                var userLocation ={};
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(
                        // Una vez obtiene la posición

                        function(data) {
                            userLocation.latitude=data.coords.latitude;
                            userLocation.longitude=data.coords.longitude;
                            resolve(userLocation);

                        },
                        // El usuario no autorizó la acción
                        function() {
                           
                            userLocation.latitude=0;
                            userLocation.longitude=0;
                            reject(userLocation);
                        } );
                } else{

                    userLocation.latitude=0;
                    userLocation.longitude=0;
                    reject(userLocation);
                }


            })



            return userLocation;
        }

        this.distance = function(location){

            return $haversine.distance(this.location(), location);

        }


    }])