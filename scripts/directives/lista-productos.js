/**
 * Created by Antonio on 12/6/16.
 */

angular
    .module("whatapop")
    .directive("listaProductos" , [function(){
      
        return {
            
            restrict: 'AE',
            scope:{
                producto:'='
            },
            templateUrl:"views/lista-productos.html",

            link: function(scope){

                console.log(scope);
                scope.productoSeleccionado = scope.producto;


            }
        }
        
        
    }]);