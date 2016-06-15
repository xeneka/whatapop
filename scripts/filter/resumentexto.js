/**
 * Created by Antonio on 15/6/16.
 */

angular
    .module("whatapop")
    .filter("resumen", ['$sce',function($sce){

        return function(texto){

            var resumen = texto.substr(0,100);
            var pos=resumen.lastIndexOf(" ");

            return resumen.substr(0, pos)+'...';

        }

    }]);