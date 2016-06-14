/**
 * Created by Antonio on 11/6/16.
 */
angular
    .module("whatapop")
    .component("raiz", {

        templateUrl:"views/raiz.html",

        $routeConfig:[{
                name:"DetalleArticulo",
                path:"/detalle-articulo/:id",
                component:"detalleArticulo",

            },
                {
                 name:"ListadoProductos",
                 path:"/listado-productos",
                 component:"listadoProductos",
                  useAsDefault: true

                }


            ],


        controller:function(){
            var self=this;

           
            
        }
        
        
    }
    
    
    );