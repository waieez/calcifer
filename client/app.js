(function () {
'use strict';
angular.module('app', [
  'ngRoute'
  ])
.config(Config);

Config.injector = ['$routeProvider'];
function Config ($routeProvider) {
  //TODO: Implement Routes
}

})();
