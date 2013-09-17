event.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/schema/list', {templateUrl: 'partials/schema/list.html',controller:"eventCtrl"});
    $routeProvider.when('/schema/add', {templateUrl: 'partials/schema/add.html',controller:"eventCtrl"});
    $routeProvider.when('/events/list', {templateUrl: 'partials/events/list.html',controller:"eventCtrl"});
    $routeProvider.when('/events/add', {templateUrl: 'partials/events/add.html',controller:"eventCtrl"});
    $routeProvider.when('/submissions/list', {templateUrl: 'partials/submissions/list.html',controller:"eventCtrl"});
    $routeProvider.when('/submissions/add', {templateUrl: 'partials/submissions/add.html',controller:"eventCtrl"});
//    $routeProvider.when('/bills/add', {templateUrl: 'partials/bills/add.html', controller: 'BillAddCtrl'});
    $routeProvider.otherwise({redirectTo: '/schema/list'});
  }]);
   
  event
  .config(function($httpProvider){
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
});
