app.service('LikeService', ['$http', function($http){

  const like = (post) => $http.post('http://localhost:3000/posts/'+post+'/like')
    .then(function (response){
      return response.data;
    });

  const dislike = (post) => $http.delete('http://localhost:3000/posts/'+post+'/like')
    .then(function (response){
      return response.data;
    });

  const list = (post) => $http.get('http://localhost:3000/posts/'+post+'/like')
    .then(function (response){
      return response.data;
    });
  
  const listLikesComments = (comment) => $http.get('http://localhost:3000/posts/'+comment.post_id+'/comment/' +comment.id+ '/like')
    .then(function (response){
      return response.data;
    });

  const likeComment = (comment) => $http.post('http://localhost:3000/posts/'+comment.post_id+'/comment/' +comment.id+ '/like')
    .then(function (response){
      return response.data;
    });

  const dislikeComment = (comment) => $http.delete('http://localhost:3000/posts/'+comment.post_id+'/comment/' +comment.id+ '/like')
    .then(function (response){
      return response.data;
    });

  

  return {
    like: like,
    dislike: dislike,
    list: list,
    listLikesComments: listLikesComments,
    likeComment: likeComment,
    dislikeComment: dislikeComment
  };
}]);