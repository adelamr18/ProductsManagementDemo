
(function () {
    "use strict";
    
    //injecting the factory service here badal lama akoon mest5dem service 
    angular.module('productManagement').controller("ProductDetailCtrl", doit)
    function doit($stateParams, getproductsService, productbyId) {

        var vm = this;
        vm.product = productbyId;
        vm.title = "Product Detail : " + vm.product.productName; 

        if (vm.product.tags) {
            vm.product.taglist = vm.product.tags.toString();
        }
        
    }
}())
