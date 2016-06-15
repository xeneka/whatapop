/**
 * Created by Antonio on 12/6/16.
 */
angular
    .module("whatapop")
    .component("detalleArticulo", {


        
        templateUrl:"views/detalle-articulo.html",

        controller: function(ProductService,$sce){
            var self=this;

            
            self.$routerOnActivate = function(next) {
                var id = next.params.id;
                var datos=ProductService.getProduct(id).then(function(respuesta){
                    
                    self.producto=respuesta;
                    self.imagen = ProductService.obtenerRutaImagenAbsoluta(self.producto.photos[0]);
                    self.descripcion =$sce.trustAsHtml(self.producto.description);
                    console.log(self.producto);
                    
                    
                });

               
                
            };

    }


            





});

