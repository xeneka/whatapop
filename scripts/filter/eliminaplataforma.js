/**
 * Created by Antonio on 15/6/16.
 */
angular
    .module("whatapop")
    .filter("eliminaplataforma", [function(){

        return function(texto){
            
            var pos1 = texto.indexOf('[');
            return texto.substr(0,pos1);
        }

    }]);