
(function () {
    "use strict"
    var app = angular.module("productManagement", ["common.services", "ui.router", 'ngMaterial', 'ngMessages', "ui.mask", "ui.bootstrap", "angularCharts"]);
    app.config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
        function ($urlRouterProvider, $stateProvider, $locationProvider, getproductsService, $stateParams) {
            $urlRouterProvider.otherwise('/')
            $stateProvider
                .state('super', {
                    abstract: true,
                    controller: 'superController'
                })
                .state('super.home',
                    {
                        url: '/',
                        templateUrl: 'app/WelcomeView.html',
                    }
                )

                .state('super.productList',
                    {
                        url: '/products',
                        templateUrl: 'app/products/productListView.html',
                        controller: "ProductListCtrl as vm"
                    }
                )
                .state('super.productEdit',
                    {
                        abstract: true,
                        url: '/products/edit/:productId',
                        templateUrl: 'app/products/productEditView.html',
                        controller: "ProductEditCtrl as vm"
                    }
                )
                .state('super.productEdit.info', {
                    url: "/info",
                    templateUrl: "app/products/productEditInfoView.html"
                })
                .state('super.productEdit.price', {
                    url: "/info",
                    templateUrl: "app/products/productEditPriceView.html"
                })
                .state('super.productEdit.tags', {
                    url: "/info",
                    templateUrl: "app/products/productEditTagsView.html"

                })

                .state('super.productDetail',
                    {
                        url: '/products/:productId',
                        templateUrl: 'app/products/productDetailView.html',
                        controller: "ProductDetailCtrl as vm",
                        resolve: {
                            productbyId: function (getproductsService, $stateParams) {
                                return getproductsService.getRequest2($stateParams.productId).then(function (res) {
                                    return res.data;
                                }, function errorcallback(response) {
                                    console.log("Unable to get", Request)
                                })
                            }
                        }
                    }
                )
                .state('super.priceAnalytics',
                    {
                        url: '/priceAnalytics',
                        templateUrl: 'app/prices/priceAnalytics.html',
                        controller: "PriceAnalyticsCtrl",
                        resolve: {
                            getproducts: function (getproductsService) {
                                return getproductsService.getRequest().then(function (res) {
                                    return res.data;
                                }, function errorcallback(response) {
                                    console.log("Unable to get", Request)
                                })
                            }

                        }


                    }

                )
            // vm.product = res.data;
            // vm.title = "Product Detail" + vm.product.productName;
            // if (vm.product.tags) {
            //     vm.product.taglist = vm.product.tags.toString();
            // }

            //  $locationProvider.html5Mode({
            //      enabled: true,
            //      requireBase: false
            //  });

        }]);

    app.controller('superController', function ($scope, $rootScope) {
        $rootScope.viewMenu = function (flag) {
            $rootScope.viewMenuFlag = !flag;
        }
    })



}())

