/**
 * Created by Antonio on 11/6/16.
 */
angular
    .module("whatapop")
    .component("raiz", {

        templateUrl:"views/raiz.html",

            controller:function(ServiceWhatapop){

                var self = this;
                self.productoSeleccionado="";

                var totalProductos={};

                self.$onInit = function() {
                    ServiceWhatapop.getProducts().then(function(respuesta){
                        //console.log(respuesta);
                        totalProductos = respuesta.data;
                        self.productos = totalProductos;

                    })


                };

                self.updateFilter = function(){

                    if (self.productoSeleccionado.length==0){

                        self.productos =totalProductos;

                    }else {

                        self.productos = totalProductos.filter(function (item) {

                            if (item.name.indexOf(self.productoSeleccionado) >= 0) {
                                return true;
                            }
                            return false;

                        });

                    }
                }

            },


            $routeConfig:[{
                name:"DetalleArticulo",
                path:"/detalle-articulo.html",
                component:"detalleArticulo"
            }


            ]
        
        
        
    }
    
    
    );