app.directive('tagIcon', function () {
  return {
    restric: 'E',
    scope: {
      postComment: '=',
    },
    templateUrl: 'views/components/tags/icon.html',
    controller: function ($scope, TagService) {


      $scope.listTags = () => {
        $scope.tags = [];
        initialize(); 
        TagService.list().then(function (tags){
          if (tags && tags.length > 0) {
            $scope.tags = tags.filter((t) => !$scope.tagsPost.map((tp) => tp.id).includes(t.id));
          }
        })
      };

      $scope.removeTag = (tagId, postId) => {
        let result = confirm("Hermano! deseja realmente remover essa TAG?")
        if(result) {
          TagService.removeTag(tagId, postId).then(function (response) {
            $scope.tagsPost = response;
            alert("successfull removed tag")
          }).catch(function(error){
            alert(error.data.error);
          });
        }
      }

      $scope.createTagPost = (tagId, postId) => {
        TagService.createTagPost(tagId, postId).then(function (response) {
          $scope.tagsPost = response;
          $scope.listTags();
        }).catch(function(error){
          alert(error.data.error);
        })
      };

      const initialize = () => {
        $scope.countTags = null;
        TagService.listTagsPosts($scope.postComment).then(function (response){
          $scope.tagsPost = response;
          $scope.countTags = $scope.tagsPost.length;
        })
      };

      initialize();
    }
  }
});