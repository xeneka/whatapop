/**
 * Created by Antonio on 15/6/16.
 */
angular
    .module("whatapop")
    .service("CategoryService",['$http','setting', function($http, setting){

        this.getCategories = function(){
            return $http.get(setting.urlServidor+"/api/categories");
        }

    }]);