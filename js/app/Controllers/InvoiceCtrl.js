(function () {
    angular.module('InvoiceApp').controller('InvoiceCtrl', function ($timeout, $rootScope, $scope, $controller, events) {
        angular.extend(this, $controller('BaseCtrl', {$scope: $scope}));
        $scope.upload = function (files) {
            $scope.reset();
            $scope.appData.extractionInProgress = true;
            $rootScope.$broadcast(events.message._SEND_TO_PROCESS_, [files]);
        };
    });
})();