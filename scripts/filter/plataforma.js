/**
 * Created by Antonio on 15/6/16.
 */
angular
    .module("whatapop")
    .filter("plataforma", [function(){

        return function(texto){

            var pos1 = texto.indexOf('[');
            var pos2 = texto.indexOf(']');

            console.log(texto,pos1,pos2);

            return texto.substr(pos1+1,pos2-pos1-1);
        }



    }]);