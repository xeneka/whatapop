/**
 * Created by Antonio on 16/6/16.
 */
angular
    .module("whatapop")
    .service("WebLocal", function(){

        this.save = function(dato){

            var newdata=this.recover();
            console.log(newdata);
            newdata.push(dato);
            localStorage.setItem('whatapop', JSON.stringify(newdata));
            this.listRecover();

        }
        
        this.recover = function(){

            var datos = localStorage.getItem('whatapop');

            if (datos === null){
                return []

            }

            return JSON.parse(datos);

            
        }

        this.clearStorage = function(){
            localStorage.clear();
        }

        this.listRecover = function(){

            var datos = this.recover();
            var lista=[]
            for (var i in datos){
                console.log(datos[i]);
            }


        }



    })