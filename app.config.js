app.config(function ($routeProvider) {
  $routeProvider
    .when('/posts', {
      templateUrl: 'views/posts/index.html',
      controller: 'PostsController',
      resolve: {
        type: () => {
          return 'index'
        }
      }
    })
    .when('/login', {
      template: '<login-form ng-if="notLogged()"></login-form>'
    })
    .when('/register', {
      template: '<register-form ng-if="notLogged()"></register-form>'
    })
    .when('/user', {
      template: '<user-list></user-list>'
    })
    .when('/edit-profile', {
      template: '<profile-form></profile-form>'
    })
    .when('/posts/:postId/comment/:commentId', {
      template: '<comment-form post-id="post.id"></comment-form>',
      resolve: {
        type: () => {
          return 'edit'
        }
      }
    })
  .when('/posts/create', {
    templateUrl: 'views/posts/form.html',
    controller: 'PostsController',
    resolve: {
      type: () => {
        return 'create'
      }
    }
  })
  .when('/tags/create', {
    templateUrl: 'views/tags/form.html',
    controller: 'TagsController',
    resolve: {
      type: () => {
        return 'create'
      }
    }
  })
  .when('/tags/:id', {
    templateUrl: 'views/tags/form.html',
    controller: 'TagsController',
    resolve: {
      type: () => {
        return 'update'
      }
    }
  })
  .when('/posts/:id', {
    templateUrl: 'views/posts/show.html',
    controller: 'PostsController',
    resolve: {
      type: () => {
        return 'show'
      }
    }
  })
  .when('/posts/:id/edit', {
    templateUrl: 'views/posts/form.html',
    controller: 'PostsController',
    resolve: {
      type: () => {
        return 'update'
      }
    }
  })
  .when('/tags', {
    templateUrl: 'views/tags/tags.html',
    controller: 'TagsController',
    resolve: {
      type: () => {
        return 'index'
      }
    }
  })
});

app.config(['$httpProvider', Interceptor]);

function Interceptor($httpProvider) {
  $httpProvider.interceptors.push('Interceptor');
}