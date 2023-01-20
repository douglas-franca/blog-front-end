app.service('UserService', ['$http', function($http){
  const list = () => $http.get('http://localhost:3000/user')
    .then(function (response){
      return response.data
    });

  const updateName = (user) => $http.put('http://localhost:3000/user', {
    user: {
      name: user.name
    }
  }).then(function (response) {
    return response.data
  })

  const updateEmail = (user) => $http.put('http://localhost:3000/user', {
    user: {
      email: user.email
    }
  }).then(function (response) {
    return response.data
  })

  const updatePassword = (user) => $http.put('http://localhost:3000/user', {
    user: {
      password: user.password
    }
  }).then(function (response) {
    return response.data
  })


  let loginEditProfie = (user) => $http.post("http://localhost:3000/login", {
      email: user.email,
      password: user.password
  }).then(function(response){
      return response.data;
  });
    return {
      list: list,
      updateName: updateName,
      updateEmail: updateEmail,
      updatePassword: updatePassword,
      loginEditProfie: loginEditProfie
    }
}]);