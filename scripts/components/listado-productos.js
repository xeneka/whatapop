/**
 * Created by Antonio on 13/6/16.
 */

angular
    .module("whatapop")
    .component("listadoProductos", {

        
        templateUrl:"views/listado-productos.html",



        controller:function(ProductService,CategoryService,ABMlocation, WebLocal,$location,UserService,$haversine,setting){

            var self = this;
            self.productoSeleccionado="";
            self.distanceseller=[];
            self.grupodistancias =setting.distancia;


            var totalProductos={};

            self.$onInit = function() {
                ProductService.getProducts().then(function(respuesta){

                    totalProductos = respuesta.data;
                    self.productos = totalProductos;


                });

                CategoryService.getCategories().then(function(respuesta){
                   self.categories = respuesta.data;
                   self.category="";

                    
                });

                self.favoritos=WebLocal.recover();



                ABMlocation.location().then(function(location){
                    UserService.getUsers().then(function(respuesta){
                       sellerlocation={};

                        respuesta.data.forEach(function(item){

                            sellerlocation.latitude=item.latitude;
                            sellerlocation.longitude=item.longitude;

                            locationSeller={};
                            locationSeller.idseller=item.id;
                            locationSeller.distance=Math.round($haversine.distance(sellerlocation, location)/1000);
                            self.distanceseller.push(locationSeller);
                        })

                    })


                });


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


            self.updateDistance = function(){

                self.sellerSelect = self.distanceseller.filter(function(item){


                    if (item.distance < self.distancias.id){

                        return true;
                    }
                    return false;
                });

                if (self.sellerSelect.length == 0){
                    alert("No hay ningún vendedor en su alcance");
                }else{

                    self.productos = totalProductos.filter(function (item) {
                        return checkSeller(self.sellerSelect,item.seller.id )

                    });

                    ;
                    alert("Si hay vendedor");
                }



            }


            self.selectFavoritos = function(){

                $location.path('/detalle-articulo/'+self.favorito.id)
                
            }

            checkSeller = function(sellers, item){

                for (var i=0; i<sellers.length;i++){

                    if (item == sellers[i].idseller){
                        return true;
                    }

                }
                return false;

            }


        }






    });
