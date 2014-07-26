(function () {
    'use strict';

    var app = angular.module('app');

    // Collect the routes
    app.constant('routes', getRoutes());
    
    // Configure the routes and route resolvers
    app.config(['$routeProvider', 'routes', routeConfigurator]);
    function routeConfigurator($routeProvider, routes) {

        routes.forEach(function (r) {
            $routeProvider.when(r.url, r.config);
        });
        $routeProvider.otherwise({ redirectTo: '/' });
    }

    // Define the routes 
    function getRoutes() {
        return [
            {
                url: '/',
                config: {
                    templateUrl: 'app/site/dashboard.html',
                    title: 'Home | [some more details]',
                }
            }, {
                url: '/team',
                config: {
                    title: 'team',
                    templateUrl: 'app/site/team.html',
                }

            }, {
                url: '/about',
                config: {
                    title: 'about',
                    templateUrl: 'app/site/about.html',
                }

            }, {
                url: '/customers',
                config: {
                    title: 'customers',
                    templateUrl: 'app/site/customers.html',
                }

            }
        ];
    }
})();