app.directive('commentList', () => {
  return {
    restrict: 'E',
    scope: {
      postId: '=?',
      userComment: '=?',
    },
    templateUrl: 'views/components/comments/list.html',
    controller: ($scope, CommentService) => {

      $scope.deleteComment = (comment) => {
        let confirmation = confirm("Deseja realmente excluir?");
        if (confirmation) {
          CommentService.deleteComment(comment).then((result) => {
              location.reload(true);
          }).catch((error) => {
            alert(error.data.error);
          });
        }
      };

      const initialize = () => {
        $scope.currentUserId = window.localStorage.getItem('id');
        $scope.loading = true;
        $scope.comments = [];
        if ($scope.userComment) {
          CommentService.listCommentsUser().then((result) => {
            if (result) {
              $scope.comments = result;
              $scope.loading = false;
            }
          });
        } else {
          CommentService.list($scope.postId).then((result) => {
            if (result) {
              $scope.comments = result.comments;
              $scope.loading = false;
            }
          });
        }
      };

      initialize();
    }
  }
});