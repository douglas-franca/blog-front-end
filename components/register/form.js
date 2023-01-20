app.directive('registerForm', function() {
  return {
    restric: 'E',
    templateUrl: 'views/components/register/form.html',
    controller: function ($scope, RegisterService, $location) {

      $scope.login = {
        name: null,
        email: null,
        password: null
      }
      $scope.currentUser = {};
    
      $scope.submitRegister = () =>{
        RegisterService.createUser($scope.login).then(function(response){
            if(response.error){
              $scope.message = response.error;
            } else {
              window.localStorage.setItem('token', response.token);
              window.localStorage.setItem('name', response.name);
              window.localStorage.setItem('id', response.id);
              window.localStorage.setItem('email', response.email);
              $scope.currentUser = {
                name: response.name,
                email: response.email,
                id: response.id
              }
              alert("Sucessuful");
              $location.path("/posts");
            }
        });
      };
    }
  }
});