app.directive('commentForm', function () {
  return {
    restrict: 'E',
    scope: {
      postId: '=',
      commentId: '=?',
      callback: '&?',
    },
    templateUrl: 'views/components/comments/form.html',
    controller: function ($scope, CommentService, $routeParams, $location) {
      $createComment = {
        postId: $scope.postId,
        text: null
      };
      $scope.submitComment = () => {
        if ($routeParams.postId) {
          $scope.updateComment();
        } else {
          $scope.createNewComment();
        }
      };

      $scope.createNewComment = () => {
        CommentService.createComment($scope.createComment, $scope.postId)
        .then((response) => {
            alert("Created Comment");
            if ($scope.callback) {
              $scope.callback();
            }
        }).catch(function (error) {
          alert(error.data.text);
        })
      };

      $scope.updateComment = () => {
        CommentService.updateComment($scope.createComment, $routeParams)
        .then((response) => {
            alert("Update Comment");
            if ($scope.callback) {
              $scope.callback();
            }
            $location.path('/posts/' + $routeParams.postId);
        }).catch((error) => {
          alert(error.data.text);
        })
      };

      const initialize = () => {
        $createComment = {
          postId: $scope.postId,
          text: null
        };
        if ($routeParams.commentId) {
          CommentService.getComment($routeParams)
          .then((response) => {
            $scope.createComment = response;
        }).catch((error) => {
          alert(error.data.text);
        })
        }
      };

      initialize();
    }
  }
});