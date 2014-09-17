app.controller('BoardCtrl', function ($scope, $http, $filter, Ticket) {
        var bugsBoard = Ticket.query();
        bugsBoard.$promise.then(
            function (result) {
                $scope.bugs = result;
            }
        );
        $scope.dropSuccessHandler = function ($event, index, array) {
            array.splice(index, 1);
        };
        $scope.onDrop = function ($event, $data, array) {
            bugsArray.push($event);

        };
    }
);





