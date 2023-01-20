app.directive('profileForm', function() {
  return {
    restric: 'E',
    templateUrl: 'views/components/profile/form.html',
    controller: function($scope, UserService) {

      $scope.user = [];

      $scope.menssageN = null;
      $scope.menssageE = null;
      $scope.menssageP = null;

      $scope.notPermissionProfile = () =>{
        return !window.localStorage.getItem('permission');
      };

      $scope.permissionProfile = () =>{
        return window.localStorage.getItem('permission');
      };

      $scope.submitName = () => {
        UserService.updateName($scope.user).then(function (response) {
          if (response) {
            $scope.user = response;
            $scope.menssageN = 'Sussessuful update name';
          }
        })
      };

      $scope.submitEmail = () => {
        UserService.updateEmail($scope.user).then(function (response) {
          if (response) {
            $scope.user = response;
            $scope.menssageE = 'Sussessuful update email';
          }
        })
      };

      $scope.submitPassword = () => {
        let confirmation = confirm("Deseja realmente alterar sua senha?");
        if (confirmation) {
          UserService.updatePassword($scope.user).then(function (response) {
            if (response) {
              $scope.user = response;
              $scope.menssageP = 'Sussessuful update password';
            }
          })
        }
      };

      $scope.loginEditProfie = () => {
        UserService.loginEditProfie($scope.user).then(function (response) {
          if (response) {
            // $scope.user = response;
            window.localStorage.setItem('permission', true);
          }
        })
      }

      const initialize = () => {    
        UserService.list().then(function (response){
          if (response){
            $scope.user = response;
          }
        })
      };
    
      initialize()
    }
  }
});