app.controller('CommentsController', CommentsController);

CommentsController.$inject = [
  '$scope',
  'CommentService',
];

function CommentsController($scope, CommentService){
  $scope.newComment = null;

  $scope.createComment = {
    text: null,
    postId: null,
  }

  $scope.submitComent = (params) =>{
    $scope.createComment.postId = params;
    $scope.createComment.postId = newComment;

    CommentService.createComment($scope.createComment).then(function(response){
      if (response.error) {
        alert(response.error);
      } else {
        alert("Created Comment");
      }
    })
  };

}