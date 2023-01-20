app.directive('userList', function() {
  return {
    restric: 'E',
    templateUrl: 'views/components/user/list.html',
    controller: function($scope, UserService) {

      $scope.user = [];

      const initialize = () => {    
        UserService.list().then(function (response){
          if (response){
            $scope.user = response;
          }
        })
      };
    
      initialize();
    }
  }
});