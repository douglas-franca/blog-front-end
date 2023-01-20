app.directive('loginForm', function() {
  return {
    restric: 'E',
    templateUrl: 'views/components/login/form.html',
    controller: function ($scope, LoginService, $location) {

      $scope.login = {
        name: null,
        email: null,
        password: null
      }
      $scope.currentUser = {};

      $scope.submitLogin = () => {
        LoginService.login($scope.login).then(function (response){
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
              $location.path("/posts");
          }
        });
      };
    }
  }
  
});