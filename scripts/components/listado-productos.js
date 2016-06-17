/**
 * Created by Antonio on 13/6/16.
 */

angular
    .module("whatapop")
    .component("listadoProductos", {

        
        templateUrl:"views/listado-productos.html",



        controller:function(ProductService,CategoryService,location, WebLocal,$location){

            var self = this;
            self.productoSeleccionado="";

            var totalProductos={};

            self.$onInit = function() {
                ProductService.getProducts().then(function(respuesta){
                    //console.log(respuesta);
                    totalProductos = respuesta.data;
                    self.productos = totalProductos;
                    console.log(self.productos);

                });

                CategoryService.getCategories().then(function(respuesta){
                   self.categories = respuesta.data;
                   self.category="";

                    
                });

                self.favoritos=WebLocal.recover();




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

            self.updateCategories = function(){

                self.productos = totalProductos.filter(function (item) {

                    if (item.category.id == self.category.id) {

                        return true;
                    }
                    return false;

                });



            }


            self.selectFavoritos = function(){

                $location.path('/detalle-articulo/'+self.favorito.id)
                
            }


        }






    });
