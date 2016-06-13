/**
 * Created by Antonio on 11/6/16.
 */
angular
    .module("whatapop")
    .component("raiz", {

        templateUrl:"views/raiz.html",




            $routeConfig:[{
                name:"DetalleArticulo",
                path:"/detalle-articulo.html",
                component:"detalleArticulo",

            },
                {
                 name:"ListadoProductos",
                 path:"/listado-productos.html",
                 component:"listadoProductos",
                  useAsDefault: true

                }


            ]
        
        
        
    }
    
    
    );