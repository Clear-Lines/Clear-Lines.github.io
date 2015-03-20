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
                    title: 'Home | Data Science & Software Architecture Solutions',
                    templateUrl: 'app/site/dashboard.html',
                }
            }, {
                url: '/team',
                config: {
                    title: 'Team | Data Science & Software Architecture Solutions',
                    templateUrl: 'app/site/team.html',
                }

            }, {
                url: '/blog',
                config: {
                    title: 'about',
                    templateUrl: 'app/site/about.html',
                }
            }

            }
        ];
    }
})();
