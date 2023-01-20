app.factory('Interceptor', Interceptor);

Interceptor.$inject = ['$q'];

function Interceptor($q) {
  return {
    request: function(config) {
      let token = window.localStorage.getItem('token');
      if (token) {
      config.headers['Authorization'] = 'Bearer ' +token;
      }
      return config;
    },
    responseError: function(error) {
      // alert(error.data.error);
      return $q.reject(error);
    }
  };
};