
(function () {
    "use strict";
    angular.module('productManagement').controller("PriceAnalyticsCtrl", doit)
    function doit(getproductsService, getproducts, $scope) {
        $scope.products = getproducts
        console.log($scope.products)
        $scope.title = "Price Analystics";
        var chartDataAmount=[];
        for (var i = 0; i < $scope.products.length; i++) {
            chartDataAmount.push(
                {
                    x: $scope.products[i].productName,
                    y: [$scope.products[i].price,$scope.products[i].margin,$scope.products[i].cost]
                }
            )
        }
        $scope.dataAmount={
            series:["Price","Margin","Cost"],
            data:chartDataAmount
        }
        $scope.configAmount={
title:"Top Products",
tooltips:false,
mouseover:function () {},
mouseout:function (){},
click :function (){},
legend:{
    display:true,
    position:'right'
}


        }

    }
}())
