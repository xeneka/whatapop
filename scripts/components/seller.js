/**
 * Created by Antonio on 15/6/16.
 */
angular
    .module("whatapop")
    .component("seller", {
        bindings:{
            idseller:"<"
        },
        templateUrl:"views/seller.html",

        controller: function(UserService){
            var self=this;
            

            self.$onChanges = function(changes) {


                if(changes.idseller && changes.idseller.currentValue && changes.idseller.currentValue !== changes.idseller.previousValue){


                    var datos=UserService.getUser(self.idseller).then(function(respuesta){

                        self.seller=respuesta;
                        self.imagen = UserService.obtenerRutaImagenAbsoluta(self.seller.avatar);
                        self.nick = self.seller.nick;

                    });


                }


            };


        }



    });