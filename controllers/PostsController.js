app.controller('PostsController', PostsController);

PostsController.$inject = [
  '$scope',
  '$routeParams',
  '$location',
  '$window',
  'PostService',
  'type',
];

function PostsController($scope, $routeParams, $location, $window, PostService, type, ){

  $scope.currentUserId = null;

  $scope.save = () => {
    if(type == 'update'){
      $scope.update()
    } else {
      $scope.create()
    }
  };

  $scope.update = () => {
    PostService.update($scope.post).then(function (response){
      $scope.post = response;
      alert("Sucessuful");
      $location.path('/posts/' +$scope.post.id);
    }).catch(function(error){
      if(error.data.title){
        alert("Title :" +error.data.title)
      }
      if(error.data.description){
        alert("Description :" +error.data.description)
      }
      if(error.status == '401'){
        alert(error.data.error)
      }
      
    })
  }

  $scope.create = () => {
    PostService.create($scope.post).then(function (response){
      $scope.post = response;
      alert("Sucessuful");
      $location.path('/posts/' +$scope.post.id);
    }).catch(function(error){
      if(error.data.title){
        alert("Title :" +error.data.title)
      }
      if(error.data.description){
        alert("Description :" +error.data.description)
      }
      if(error.status == '401'){
        alert(error.data.error)
      }
    })
  };

  $scope.callbackAfterSaveComment = () => {
    $window.location.reload();
  };
  
  const initialize = () => {
    $scope.currentUserId = window.localStorage.getItem('id');
    $scope.formType = '';
    
    if(type == 'show' || type == 'update') {
      $scope.data = new Date;
      // debugger
      $scope.post = {};
      $scope.formType = 'Edit'
      PostService.get($routeParams.id).then(function (response) {
        if (response) {
          $scope.post = response;
        }
      });
    } else {
      $scope.posts = [];
      $scope.formType = 'Create'
      PostService.list.then(function (response) {
        if (response && response.length > 0) {
          $scope.posts = response;
        }
      });
    }
    
  };

  initialize();

}