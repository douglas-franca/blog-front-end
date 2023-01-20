app.directive('likeIcon', function () {
  return {
    restric: 'E',
    scope: {
      postComment: '=',
    },
    templateUrl: 'views/components/likes/icon.html',
    controller: function ($scope, LikeService) {
      $scope.postLiked = (likeOrLiked, postComment) => {
        if (postComment.id) {
          if (likeOrLiked) {
            $scope.dislikeComment(postComment);
          } else {
            $scope.likeComment(postComment);
          }
        } else {
          if (likeOrLiked) {
            $scope.dislike(postComment);
          } else {
            $scope.like(postComment);
          }
        }
      };

      $scope.like = (post) => {
        $scope.currentPost = post;
        LikeService.like(post).then((response) => {
          $scope.countLikes += 1;
          $scope.liked = true;
        })
      }

      $scope.dislike = (post) => {
        $scope.currentPost = post;
        LikeService.dislike(post).then((response) => {
          $scope.countLikes -= 1;
          $scope.liked = false;
        })
      }

      $scope.likeComment = (post) => {
        $scope.currentPost = post;
        LikeService.likeComment(post).then(function (response){
            $scope.countLikes += 1;
            $scope.liked = true;
        })
      }
    
      $scope.dislikeComment = (post) => {
        $scope.currentPost = post;
        LikeService.dislikeComment(post).then(function (response){
            $scope.countLikes -= 1;
            $scope.liked = false;
          })
      }

      const initialize = () => {
        $scope.liked = false;
        $scope.countLikes = null;
        $scope.likes = [];
        if ($scope.postComment.id) {
          LikeService.listLikesComments($scope.postComment).then(function (response){
            $scope.likes = response;
            $scope.countLikes = $scope.likes.length;
            $scope.likes.forEach(function (value) {
              if(value.liked){
                $scope.liked = true;
              }
            });
          });
        } else {
          LikeService.list($scope.postComment).then(function (response){
            $scope.likes = response;
            $scope.countLikes = $scope.likes.length;
            $scope.likes.forEach(function (value) {
              if(value.liked){
                $scope.liked = true;
              }
            });
          });
        }
      };

      initialize();
    }
  }
});