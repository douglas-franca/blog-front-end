app.directive('postsList', function () {
  return {
    restrict: 'E',
    templateUrl: 'views/components/posts/list.html',
    controller: function ($scope, PostService) {

      $scope.deletePost = (post) =>{
        let confirmation = confirm("Deseja realmente excluir?");
        if(confirmation) {
          PostService.deletePost(post).then((result) => {
            location.reload(true);
          }).catch((error) => {
            debugger
            alert(error.data.error);
          });
        }
      }

      const initialize = () => {
        $scope.currentUserId = window.localStorage.getItem('id');
        $scope.loading = true;
        $scope.posts = [];

        PostService.listPostsUser().then((result) => {
          if (result) {
            $scope.posts = result;
            $scope.loading = false;
          }
        });
      };

      initialize();
    }
  }
});