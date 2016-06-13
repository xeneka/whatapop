/**
 * Created by Antonio on 13/6/16.
 */

angular
    .module("whatapop")
    .component("listadoProductos", {

        templateUrl:"views/listado-productos.html",



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

        }






    });
