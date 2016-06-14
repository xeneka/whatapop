/**
 * Created by Antonio on 12/6/16.
 */
angular
    .module("whatapop")
    .component("detalleArticulo", {
        
        templateUrl:"views/detalle-articulo.html",

        controller: function(ServiceWhatapop,$sce){
            var self=this;

            
            self.$routerOnActivate = function(next) {
                var id = next.params.id;
                var datos=ServiceWhatapop.getProduct(id).then(function(respuesta){
                    console.log(respuesta);
                    self.producto=respuesta;
                    self.imagen = ServiceWhatapop.obtenerRutaImagenAbsoluta(self.producto.photos[0]);
                    self.descripcion =$sce.trustAsHtml(self.producto.description);
                    console.log(self.descripcion);
                    console.log(self.producto.description);
                });

               
                
            };

    }


            





});

