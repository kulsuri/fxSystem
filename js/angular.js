var app = angular.module('myApp', []);

app.controller('AngularCtrl', function ($scope, $http) {
    $http.get("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.xchange%20where%20pair%20in%20(%22GBPGBP%22%2C%20%22GBPEUR%22%2C%20%22GBPCHF%22%2C%20%22GBPUSD%22%2C%20%22GBPJPY%22%2C%20%22GBPCAD%22%2C%20%20%22GBPNZD%22%2C%20%22GBPAUD%22%2C%20%22GBPZAR%22%2C%20%22GBPRUB%22%2C%20%22EURGBP%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=").success(function (data) {
        $scope.forexData = data.query.results.rate;
    });
});
