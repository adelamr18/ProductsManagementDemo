angular.module('common.services').factory("getproductsService", function ($http) {
    return {
        getRequest: function () {
            return $http({
                method: 'get',
                url: 'http://localhost:3000/api/products'
            });
        },
            getRequest2 : function(id){
                return  $http({
                         method: 'get', 
                         url: "http://localhost:3000/api/adool/loool/"+id
                  });

     }


    }
})


