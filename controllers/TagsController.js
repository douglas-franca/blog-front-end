app.controller('TagsController', TagsController);

TagsController.$inject = [
  '$scope', 
  'TagService',
  'type',
  '$routeParams',
  '$location'
];


function TagsController($scope, TagService, type, $routeParams, $location){

  $scope.save = () =>{
    if(type == 'update'){
      $scope.update();
    } else{
      $scope.create();
    }
  };

  $scope.create = () =>{
    TagService.create($scope.tag).then(function (response){
      $scope.tag = response;
      alert("Sucessuful");
      $location.path("/tags");
    }).catch(function(error){
      if(error.data.name){
        alert(error.data.name)
      }
      if(error.status == '401'){
        alert(error.data.error)
      }
    })
  };

  $scope.update = () =>{
    TagService.update($scope.tag).then(function (response){
      $scope.tag = response;
      alert('Sucessuful');
      $location.path("/tags");
    }).catch(function(error){
      if(error.data.name){
        alert(error.data.name)
      }
      if(error.status == '401'){
        alert(error.data.error)
      }
    })
  };

  $scope.deleteTag = (tagId) =>{
    let result = confirm("Deseja exlcuir essa TAG?");
    if(result) {
      TagService.deleteTag(tagId).then(function (response) {
        $scope.tag = response;
        alert('Sucessuful');
        location.reload(true);
      }).catch(function(error){
        if(error.data.name){
          alert(error.data.name)
        }
        if(error.status == '401'){
          alert(error.data.error)
        }
      })
    }
  };


  const initialize = () => {

    if(type == 'update'){
      $scope.tag = [];
      $scope.formType = 'Edit'
      TagService.get($routeParams.id).then(function(response){
        if(response){
          $scope.tag = response;
        }
      })
    } else {
      $scope.tags = [];
      $scope.formType = 'Create'
      TagService.list().then(function (response){
        if (response && response.length > 0){
          $scope.tags = response;
        }
      })
    }
  };

  initialize();

}