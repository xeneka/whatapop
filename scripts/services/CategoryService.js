/**
 * Created by Antonio on 15/6/16.
 */
angular
    .module("whatapop")
    .service("CategoryService",['$http', function($http){

        this.getCategories = function(){
            return $http.get("http://localhost:8000/api/categories");
        }

    }]);