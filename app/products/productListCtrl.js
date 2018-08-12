
(function () {
    "use strict";
    //injecting the factory service here badal lama akoon mest5dem service 
    angular.module('productManagement').controller("ProductListCtrl", ["getproductsService","$scope", ProductListCtrl])
    function ProductListCtrl(getproductsService,$scope) {
        var vm = this;
        getproductsService.getRequest().then(function (res) {
              vm.products=res.data;
            }, function errorcallback(response) {
              console.log("Unable to get", Request)
            })
        vm.showImage = false;
        vm.toggleImage = function () {
            vm.showImage = !vm.showImage;
        }
    }
}())
