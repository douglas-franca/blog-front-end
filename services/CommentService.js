app.service('CommentService', ['$http', function($http){
  const createComment = (paramsComment, postId) => $http.post('http://localhost:3000/posts/'+ postId +'/comments',{
    comment: {
      text: paramsComment.text
    }
  });

  const list = (id) => $http.get('http://localhost:3000/posts/'+id)
    .then(function (response){
      return response.data;
    });

  const getComment = (params) => $http.get('http://localhost:3000/posts/' + params.postId + '/comments/' + params.commentId)
  .then(function (response){
    return response.data;
  });

  const updateComment = (paramsComent, params) => $http.put('http://localhost:3000/posts/' + params.postId + '/comments/' + params.commentId, {
    comment: {
      text: paramsComent.text
    }
  })
  .then(function (response){
    return response.data;
  });

  const deleteComment = (params) => $http.delete('http://localhost:3000/posts/' + params.post_id + '/comments/' + params.id)
  .then(function (response){
    return response;
  });

  const listCommentsUser = () => $http.get('http://localhost:3000/user-comments')
  .then((response) => {
    return response.data
  });

  return {
    createComment: createComment,
    list: list,
    getComment: getComment,
    updateComment: updateComment,
    deleteComment: deleteComment,
    listCommentsUser,
  };
}]);