app.service('RegisterService', ['$http', function ($http){
  let createUser = (params) => $http.post("http://localhost:3000/user", {
      user: {
        name: params.name,
        email: params.email,
        password: params.password
      }
  }).then(function(response){
      return response.data;
  });
  return {
    createUser: createUser
  }
}]);