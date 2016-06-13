/**
 * Created by Antonio on 12/6/16.
 */
angular
    .module("whatapop")
    .component("detalleArticulo", {
        
        templateUrl:"views/detalle-articulo.html",

        controller: function(){
            var self=this;

            self.$routerOnActivate = function(next) {
                var id = next.params.id;
                alert(id);
            };

    }


            





});

