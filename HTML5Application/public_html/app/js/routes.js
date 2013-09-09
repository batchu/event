event.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/events/list', {templateUrl: 'partials/events/list.html'});
//    $routeProvider.when('/bills/add', {templateUrl: 'partials/bills/add.html', controller: 'BillAddCtrl'});
    $routeProvider.otherwise({redirectTo: '/events/list'});
  }]);
   
  event
  .config(function($httpProvider){
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
});
