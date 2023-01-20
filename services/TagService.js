app.service('TagService', ['$http', function($http){
  const list = () => $http.get('http://localhost:3000/tags')
    .then(function (response){
      return response.data
    });

    const get = (id) => $http.get('http://localhost:3000/tags/'+id)
    .then(function (response){
      return response.data;
    });

    const deleteTag = (id) => $http.delete('http://localhost:3000/tags/'+id)
    .then(function (response){
      return response.data;
    });

  const create = (tag) => $http.post('http://localhost:3000/tags', {
    tag: {
      name: tag.name
    }
  }).then(function (response){
    return response.data;
  });

  const update = (tag) => $http.put('http://localhost:3000/tags/' +tag.id, {
    tag: {
      name: tag.name
    }
  }).then(function (response){
    return response.data;
  });

  const listTagsPosts = (postId) => $http.get('http://localhost:3000/posts/' + postId + '/tags')
    .then(function (response){
      return response.data;
    })

  const createTagPost = (tagId, postId) => $http.post('http://localhost:3000/posts/' + postId + '/tag', {
    post: {
      tag_id: tagId
    }
  }).then(function (response){
      return response.data;
  })

  const removeTag = (tagId, postId) => $http.delete('http://localhost:3000/posts/' + postId + '/tag/' + tagId,)
  .then(function (response){
      return response.data;
  })

  return {
    list: list,
    create: create,
    update: update,
    get: get,
    listTagsPosts: listTagsPosts,
    createTagPost: createTagPost,
    removeTag: removeTag,
    deleteTag: deleteTag
  }

}]);