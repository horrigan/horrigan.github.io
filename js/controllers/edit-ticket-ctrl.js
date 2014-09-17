app.controller('EditTicketCtrl', function ($scope, $stateParams, $http, Ticket) {
        var myId = parseInt($stateParams.id);
        //Ticket.get({id:"5419320ee4b075452ab4ef40"}).$promise.
        Ticket.query({q:{id:myId}}).$promise.
            then(function(result){
                $scope.edit_bug = result[0];

                 $scope.edit = function(edit_bug){
                    delete edit_bug._id ;
                    Ticket.update({_id:edit_bug._id.$oid},edit_bug)
                };

                $scope.remove = function(edit_bug){
                    Ticket.delete({id:edit_bug._id.$oid})
                };

            });
            this.comments = {};
            $scope.addReview = function (ticket) {
            var commentData = {
                comment_author: $scope.ticket.comment_author || '',
                comment: $scope.ticket.comment || '',
                comment_time: $scope.updateDate || ''
            };
            $scope.edit_bug.comments.push(commentData);
            this.ticket = {};

            var sendedData = {
                author: commentData.comment_author,
                comment: commentData.comment_body,
                date: commentData.comment_time
            };
}
}
);



