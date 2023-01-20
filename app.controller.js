app.controller('BlogController', ['$scope', '$location', function($scope, $location){
  $scope.login = {
    name: null,
    email: null,
    password: null,
  }
  
  $scope.currentUser = {};
  
  $scope.notLogged = () => {
    return !window.localStorage.getItem('token');
  };
  
  $scope.logged = () => {
    return window.localStorage.getItem('token');
  };
  
  const initialize = () => {
    let token = window.localStorage.getItem('token');
    window.localStorage.removeItem('permission');
    if (token) {
      $scope.currentUser = {
        name: window.localStorage.getItem('name'),
        email: window.localStorage.getItem('email'),
        id: window.localStorage.getItem('id')
      }
    } else {
      $location.path("/login");
    }
  }
  
  $scope.logoff = () => {
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('name');
    window.localStorage.removeItem('id');
    window.localStorage.removeItem('email');
    location.reload(true);
  }

  initialize();
}]);