angular.module('myApp', ['ui.router', 'xeditable'])
    .config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/login');
        $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
            .state('login', {
                url: '/login',
                templateUrl: 'views/template.html',
                controller: 'login'
            })
            .state('home', {
                url: '/home',
                templateUrl: 'views/home.html',
                controller: 'home'
            })
            .state('router', {
                url: '/router',
                templateUrl: 'views/router.html',
                controller: 'router'
            });

    })
    .controller('login', function($scope, $state, $http) {
       
    })
    .controller('home', function($scope, $state, $http, $timeout) {

    })
    .controller('router', function($scope, $state, $http) {

    })
    .directive('scrollPosition', function($window) {
        return {
            scope: {
                scroll: '=scrollPosition'
            },
            link: function(scope, element, attrs) {
                var windowEl = angular.element($window);
                var handler = function() {
                    scope.scroll = windowEl.scrollTop();
                }
                windowEl.on('scroll', scope.$apply.bind(scope, handler));
                handler();
            }
        };
    })
    .run(['$state', function($state) {
        $state.transitionTo('home');
    }])
    .run(function(editableOptions) {
        editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
    });;