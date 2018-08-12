
(function () {
    "use strict";
    //injecting the factory service here badal lama akoon mest5dem service 
    angular.module('productManagement').controller("ProductEditCtrl", function (getproductsService, $stateParams,$state) {
        var vm = this;
        getproductsService.getRequest2($stateParams.productId).then(function (res) {
            vm.product = res.data;
        }, function errorcallback(response) {
            console.log("Unable to get", Request)
        })
        vm.addTags = function (tags) {
            if (tags) {
                var array = tags.split(',');
                console.log(array)
                console.log(vm.product,"dddddd")
                vm.product.tags = vm.product.tags ? vm.product.tags.concat(array) : array;
                vm.newTags = "";
            }
            else {
                alert("Please enter search tag seperated by a comma")
            }
        }
        vm.submit=function(){
            toastr.success("Save Successful")
        }

        vm.removeTag=function(idx){
            vm.product.tags.splice(idx,1)
            console.log(vm.product.tags)
        }
        vm.open = function ($event) {
            $event.preventDefault();
            $event.stopPropagation();
            console.log($event)
            vm.opened = !vm.opened
        }
      
        vm.cancel = function () {
            $state.go('productList')
        }






    })
    // function productEdit($stateParams, getproductsService) {
    //     var vm = this;
    //     getproductsService.getRequest2($stateParams.productId).then(function (res) {
    //         console.log(res.data)
    //         vm.product = res.data;
    //     }, function errorcallback(response) {
    //         console.log("Unable to get", Request)
    //     })
    // }
}())
