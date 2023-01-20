app.service('PostService', ['$http', function($http){
  const list = $http.get('http://localhost:3000/posts')
    .then(function (response){
      return response.data
  });

  const get = (id) => $http.get('http://localhost:3000/posts/'+id)
    .then(function (response){
      return response.data;
  });

  const create = (post) => $http.post('http://localhost:3000/posts', {
    post: {
      title: post.title,
      description: post.description
    }
  }).then(function (response){
      return response.data;
  });
  
  const update = (post) => $http.put('http://localhost:3000/posts/' +post.id, {
    post: {
      title: post.title,
      description: post.description
    }
  }).then(function (response){
      return response.data;
  });

  const deletePost = (post) => $http.delete('http://localhost:3000/posts/' +post.id)
    .then((response) => {
      return response.data
    });

  const listPostsUser = () => $http.get('http://localhost:3000/user-posts')
    .then((response) => {
      return response.data
    });

  return {
    list: list,
    get: get,
    create: create,
    update: update,
    listPostsUser,
    deletePost,
  };
}]);