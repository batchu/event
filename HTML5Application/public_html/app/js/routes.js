event.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/schema/list', {templateUrl: 'partials/schema/list.html',controller:"eventCtrl"});
    $routeProvider.when('/schema/add', {templateUrl: 'partials/schema/add.html'});
    $routeProvider.when('/events/list', {templateUrl: 'partials/events/list.html'});
    $routeProvider.when('/events/add', {templateUrl: 'partials/events/add.html'});
    $routeProvider.when('/submissions/list', {templateUrl: 'partials/submissions/list.html'});
    $routeProvider.when('/submissions/add', {templateUrl: 'partials/submissions/add.html'});
//    $routeProvider.when('/bills/add', {templateUrl: 'partials/bills/add.html', controller: 'BillAddCtrl'});
    $routeProvider.otherwise({redirectTo: '/schema/list'});
  }]);
   
  event
  .config(function($httpProvider){
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
});
