//notesview.js

(function (angular) {

    var theModule = angular.module("indexView", []);
    theModule.controller("indexViewController", ["$scope",
        function ($scope) {
            $scope.greetings = "Hello, Angular!";

        }
    ]);


})(window.angular);